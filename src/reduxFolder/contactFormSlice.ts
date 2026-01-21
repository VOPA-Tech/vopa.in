import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/contact-form';

// --- Async Thunks ---

// Submit new contact form entry
export const submitContactAsync = createAsyncThunk('contactForm/submitContact', async (payload) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

// Fetch all contact submissions (admin)
export const fetchContacts = createAsyncThunk('contactForm/fetchContacts', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

export const updateContact = createAsyncThunk(
    'contactForm/updateContact',
    async ({ id, data }: { id: string; data: any }, { rejectWithValue }) => {
        try {
            const res = await axios.patch(`${BASE_URL}/${id}`, data);
            return res.data.contact;
        } catch (err: any) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

// Delete contact
export const deleteContact = createAsyncThunk('contactForm/deleteContact', async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- State Type ---
const initialState = {
    contacts: [],
    loading: false,
    success: false,
    error: null,

    // 📌 NEW EXTRA COUNTERS
    totalCount: 0,
    unrespondedCount: 0,
};

// --- Slice ---
const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Submit contact form
        builder
            .addCase(submitContactAsync.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(submitContactAsync.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(submitContactAsync.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message || 'Failed to submit contact form';
            });

        // Fetch all contacts
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.contacts = action.payload;

                // ⭐ UPDATE COUNTS
                state.totalCount = action.payload.length;
                state.unrespondedCount = action.payload.filter((c) => !c.isResponded).length;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch contacts';
            });

        // ⭐ FIXED UPDATE CONTACT
        builder
            .addCase(updateContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.loading = false;

                const updated = action.payload;

                // Replace the matching contact immediately
                state.contacts = state.contacts.map((c) => (c._id === updated._id ? updated : c));

                // Update counters
                state.totalCount = state.contacts.length;
                state.unrespondedCount = state.contacts.filter((c) => !c.isResponded).length;
            })
            .addCase(updateContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to update contact';
            });

        // Delete contact
        builder
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.contacts = state.contacts.filter((c) => c._id !== action.payload);

                // Update counts
                state.totalCount = state.contacts.length;
                state.unrespondedCount = state.contacts.filter((c) => !c.isResponded).length;
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to delete contact';
            });
    },
});

export default contactFormSlice.reducer;
