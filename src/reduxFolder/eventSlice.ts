import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/events'; // Updated URL

// --- Async Thunks ---
export const fetchEvents = createAsyncThunk('event/fetchEvents', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

export const getEventById = createAsyncThunk('event/getEventById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addEvent = createAsyncThunk('event/addEvent', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

export const updateEvent = createAsyncThunk('event/updateEvent', async ({ id, data }: { id: string; data: any }) => {
    const res = await axios.put(`${BASE_URL}/${id}`, data);
    return res.data;
});

export const deleteEvent = createAsyncThunk('event/deleteEvent', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- Slice ---
const eventSlice = createSlice({
    name: 'event',
    initialState: {
        events: [] as any[],
        event: null as any,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.events = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch events';
            })

            .addCase(getEventById.fulfilled, (state, action) => {
                state.event = action.payload;
            })

            .addCase(addEvent.fulfilled, (state, action) => {
                state.events.push(action.payload);
            })

            .addCase(updateEvent.fulfilled, (state, action) => {
                state.events = state.events.map((e: any) => (e._id === action.payload._id ? action.payload : e));
            })

            .addCase(deleteEvent.fulfilled, (state, action) => {
                state.events = state.events.filter((e: any) => e._id !== action.payload);
            });
    },
});

export default eventSlice.reducer;
