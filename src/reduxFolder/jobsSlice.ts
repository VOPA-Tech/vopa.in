import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/jobs';

// --- Async Thunks ---
export const fetchJobs = createAsyncThunk('job/fetchJobs', async () => {
    const res = await axios.get(BASE_URL);

    return res.data;
});

export const getJobById = createAsyncThunk('job/getJobById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addJob = createAsyncThunk('job/addJob', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

export const updateJob = createAsyncThunk('job/updateJob', async ({ id, data }: { id: string; data: any }) => {
    const res = await axios.put(`${BASE_URL}/${id}`, data);
    return res.data;
});

export const deleteJob = createAsyncThunk('job/deleteJob', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- Slice ---
const jobsSlice = createSlice({
    name: 'job',
    initialState: {
        jobs: [] as any[],
        job: null as any,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            })

            .addCase(getJobById.fulfilled, (state, action) => {
                state.job = action.payload;
            })

            .addCase(addJob.fulfilled, (state, action) => {
                state.jobs.push(action.payload);
            })

            .addCase(updateJob.fulfilled, (state, action) => {
                state.jobs = state.jobs.map((j: any) => (j._id === action.payload._id ? action.payload : j));
            })

            .addCase(deleteJob.fulfilled, (state, action) => {
                state.jobs = state.jobs.filter((j: any) => j._id !== action.payload);
            });
    },
});

export default jobsSlice.reducer;
