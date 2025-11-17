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

// Fetch all volunteer submissions (admin)
export const fetchVolunteers = createAsyncThunk('volunteerForm/fetchVolunteers', async () => {
    const res = await axios.get(BASE_URL);
    return res.data; // array of volunteer entries
});

// Delete a volunteer submission (admin)
export const deleteVolunteer = createAsyncThunk('volunteerForm/deleteVolunteer', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id; // return deleted volunteer ID
});

// --- State Type ---
type VolunteerFormState = {
    volunteers: any[];
    loading: boolean;
    success: boolean;
    error: string | null;
};

// --- Initial State ---
const initialState: VolunteerFormState = {
    volunteers: [],
    loading: false,
    success: false,
    error: null,
};

// --- Slice ---
const volunteerFormSlice = createSlice({
    name: 'volunteerForm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Submit volunteer form
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

        // Fetch all volunteers
        builder
            .addCase(fetchVolunteers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVolunteers.fulfilled, (state, action) => {
                state.loading = false;
                state.volunteers = action.payload;
            })
            .addCase(fetchVolunteers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch volunteer data';
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
            })
            .addCase(deleteVolunteer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to delete volunteer';
            });
    },
});

export default volunteerFormSlice.reducer;
