import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/volunteer-form';

// --- Async Thunks ---

export const submitVolunteerAsync = createAsyncThunk(
    'volunteerForm/submitVolunteer',
    async (
        payload: {
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            city: string;
            message: string;
            timestamp: string;
        },
        { rejectWithValue }
    ) => {
        try {
            const res = await axios.post(BASE_URL, payload);
            return res.data;
        } catch (err: any) {
            console.error('❌ Volunteer form submission failed:', err.response?.data || err.message);
            return rejectWithValue(err.response?.data || { message: err.message });
        }
    }
);

// Fetch all volunteers
export const fetchVolunteers = createAsyncThunk('volunteerForm/fetchVolunteers', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

// ⭐ UPDATE volunteer (mark as responded)
export const updateVolunteer = createAsyncThunk(
    'volunteerForm/updateVolunteer',
    async ({ id, data }: { id: string; data: any }, { rejectWithValue }) => {
        try {
            const res = await axios.put(`${BASE_URL}/${id}`, data);
            return res.data.contact; // backend returns { contact: updatedVolunteer }
        } catch (err: any) {
            console.error('❌ Update volunteer failed:', err.response?.data || err.message);
            return rejectWithValue(err.response?.data || { message: err.message });
        }
    }
);

// Delete volunteer
export const deleteVolunteer = createAsyncThunk('volunteerForm/deleteVolunteer', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- State Type ---
type VolunteerFormState = {
    volunteers: any[];
    loading: boolean;
    success: boolean;
    error: string | null;

    totalCount: number;
    unrespondedCount: number;
};

// --- Initial State ---
const initialState: VolunteerFormState = {
    volunteers: [],
    loading: false,
    success: false,
    error: null,

    totalCount: 0,
    unrespondedCount: 0,
};

// Helper to calculate counts
const recalcCounts = (state: VolunteerFormState) => {
    state.totalCount = state.volunteers.length;
    state.unrespondedCount = state.volunteers.filter((v) => !v.isResponded).length;
};

// --- Slice ---
const volunteerFormSlice = createSlice({
    name: 'volunteerForm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Submit form
        builder
            .addCase(submitVolunteerAsync.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(submitVolunteerAsync.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(submitVolunteerAsync.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.error.message || 'Failed to submit volunteer form';
            });

        // Fetch volunteers
        builder
            .addCase(fetchVolunteers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVolunteers.fulfilled, (state, action) => {
                state.loading = false;
                state.volunteers = action.payload;

                recalcCounts(state);
            })
            .addCase(fetchVolunteers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch volunteer data';
            });

        // ⭐ UPDATE volunteer response
        builder
            .addCase(updateVolunteer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateVolunteer.fulfilled, (state, action) => {
                state.loading = false;

                // Replace updated volunteer
                state.volunteers = state.volunteers.map((v) => (v._id === action.payload._id ? action.payload : v));

                recalcCounts(state);
            })
            .addCase(updateVolunteer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to update volunteer';
            });

        // Delete volunteer
        builder
            .addCase(deleteVolunteer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteVolunteer.fulfilled, (state, action) => {
                state.loading = false;

                state.volunteers = state.volunteers.filter((v) => v._id !== action.payload);

                recalcCounts(state);
            })
            .addCase(deleteVolunteer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to delete volunteer';
            });
    },
});

export default volunteerFormSlice.reducer;
