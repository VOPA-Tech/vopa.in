import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/media-cutouts'; // Updated URL for Media Cutouts

// --- Thunks ---
export const fetchMediaCutouts = createAsyncThunk('mediaCutouts/fetchAll', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

export const getMediaCutoutById = createAsyncThunk('mediaCutouts/getById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addMediaCutout = createAsyncThunk('mediaCutouts/add', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

export const updateMediaCutout = createAsyncThunk(
    'mediaCutouts/update',
    async ({ id, data }: { id: string; data: any }) => {
        const res = await axios.put(`${BASE_URL}/${id}`, data);
        return res.data;
    }
);

export const deleteMediaCutout = createAsyncThunk('mediaCutouts/delete', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- Slice ---
const mediaCutoutsSlice = createSlice({
    name: 'mediaCutouts',
    initialState: {
        mediaCutouts: [],
        mediaCutout: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // FETCH ALL
            .addCase(fetchMediaCutouts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMediaCutouts.fulfilled, (state, action) => {
                state.loading = false;
                state.mediaCutouts = action.payload;
            })
            .addCase(fetchMediaCutouts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            })

            // GET ONE
            .addCase(getMediaCutoutById.fulfilled, (state, action) => {
                state.mediaCutout = action.payload;
            })

            // CREATE
            .addCase(addMediaCutout.fulfilled, (state, action) => {
                state.mediaCutouts.push(action.payload);
            })

            // UPDATE
            .addCase(updateMediaCutout.fulfilled, (state, action) => {
                state.mediaCutouts = state.mediaCutouts.map((m: any) =>
                    m._id === action.payload._id ? action.payload : m
                );
            })

            // DELETE
            .addCase(deleteMediaCutout.fulfilled, (state, action) => {
                state.mediaCutouts = state.mediaCutouts.filter((m: any) => m._id !== action.payload);
            });
    },
});

export default mediaCutoutsSlice.reducer;
