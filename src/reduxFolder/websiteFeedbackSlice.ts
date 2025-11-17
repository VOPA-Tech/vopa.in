// src/store/slices/websiteFeedbackSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/website-feedbacks';

// --- Async Thunks ---

// Submit feedback (existing)
export const submitFeedbackAsync = createAsyncThunk(
    'websiteFeedback/submitFeedback',
    async (payload: {
        ratings: Record<string, number>;
        comments: string;
        name?: string;
        email?: string;
        timestamp: string;
    }) => {
        const res = await axios.post(BASE_URL, payload);
        return res.data;
    }
);

// Fetch all feedbacks
export const fetchFeedbacks = createAsyncThunk('websiteFeedback/fetchFeedbacks', async () => {
    const res = await axios.get(BASE_URL);
    return res.data; // array of feedback objects
});

// Delete a feedback
export const deleteFeedback = createAsyncThunk('websiteFeedback/deleteFeedback', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id; // return deleted feedback id
});

type WebsiteFeedbackState = {
    isFeedbackModalOpen: boolean;
    feedbackSubmitted: boolean;
    feedbacks: any[];
    loading: boolean;
    error: string | null;
};

const initialState: WebsiteFeedbackState = {
    isFeedbackModalOpen: false,
    feedbackSubmitted: localStorage.getItem('feedbackSubmitted') === 'true',
    feedbacks: [],
    loading: false,
    error: null,
};

const websiteFeedbackSlice = createSlice({
    name: 'websiteFeedback',
    initialState,
    reducers: {
        setIsFeedbackModalOpen(state, action) {
            state.isFeedbackModalOpen = action.payload;
        },
        setFeedbackSubmitted(state, action) {
            state.feedbackSubmitted = action.payload;
            if (action.payload) {
                localStorage.setItem('feedbackSubmitted', 'true');
            }
        },
    },
    extraReducers: (builder) => {
        // Submit feedback
        builder
            .addCase(submitFeedbackAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitFeedbackAsync.fulfilled, (state) => {
                state.loading = false;
                state.feedbackSubmitted = true;
                localStorage.setItem('feedbackSubmitted', 'true');
            })
            .addCase(submitFeedbackAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to submit feedback';
            });

        // Fetch all feedbacks
        builder
            .addCase(fetchFeedbacks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFeedbacks.fulfilled, (state, action) => {
                state.loading = false;

                state.feedbacks = action.payload;
            })
            .addCase(fetchFeedbacks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch feedbacks';
            });

        // Delete feedback
        builder
            .addCase(deleteFeedback.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteFeedback.fulfilled, (state, action) => {
                state.loading = false;
                state.feedbacks = state.feedbacks.filter((f) => f._id !== action.payload);
            })
            .addCase(deleteFeedback.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to delete feedback';
            });
    },
});

export const { setIsFeedbackModalOpen, setFeedbackSubmitted } = websiteFeedbackSlice.actions;
export default websiteFeedbackSlice.reducer;
