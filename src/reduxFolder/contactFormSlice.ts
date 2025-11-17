import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/contact-form';

// --- Async Thunks ---

// Submit new contact form entry
export const submitContactAsync = createAsyncThunk(
    'contactForm/submitContact',
    async (payload: { firstName: string; lastName: string; email: string; message: string; timestamp: string }) => {
        const res = await axios.post(BASE_URL, payload);
        return res.data;
    }
);

// Fetch all contact submissions (admin)
export const fetchContacts = createAsyncThunk('contactForm/fetchContacts', async () => {
    const res = await axios.get(BASE_URL);
    return res.data; // array of contact form entries
});

// Delete a contact submission (admin)
export const deleteContact = createAsyncThunk('contactForm/deleteContact', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id; // return deleted contact ID
});

// --- State Type ---
type ContactFormState = {
    contacts: any[];
    loading: boolean;
    success: boolean;
    error: string | null;
};

// --- Initial State ---
const initialState: ContactFormState = {
    contacts: [],
    loading: false,
    success: false,
    error: null,
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
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch contacts';
            });

        // Delete a contact
        builder
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.contacts = state.contacts.filter((c) => c._id !== action.payload);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to delete contact';
            });
    },
});

export default contactFormSlice.reducer;
