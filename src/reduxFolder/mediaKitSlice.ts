import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/media-kit'; // Updated URL for Media Kit

// --- Thunks ---
export const fetchMediaKitItems = createAsyncThunk('mediaKit/fetchAll', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

export const getMediaKitItemById = createAsyncThunk('mediaKit/getById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addMediaKitItem = createAsyncThunk('mediaKit/add', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

export const updateMediaKitItem = createAsyncThunk(
    'mediaKit/update',
    async ({ id, data }: { id: string; data: any }) => {
        const res = await axios.put(`${BASE_URL}/${id}`, data);
        return res.data;
    }
);

export const deleteMediaKitItem = createAsyncThunk('mediaKit/delete', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- Slice ---
const mediaKitSlice = createSlice({
    name: 'mediaKit',
    initialState: {
        mediaKitItems: [] as any[],
        mediaKitItem: null as any | null,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // FETCH ALL
            .addCase(fetchMediaKitItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMediaKitItems.fulfilled, (state, action) => {
                state.loading = false;
                state.mediaKitItems = action.payload;
            })
            .addCase(fetchMediaKitItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            })

            // GET ONE
            .addCase(getMediaKitItemById.fulfilled, (state, action) => {
                state.mediaKitItem = action.payload;
            })

            // CREATE
            .addCase(addMediaKitItem.fulfilled, (state, action) => {
                state.mediaKitItems.push(action.payload);
            })

            // UPDATE
            .addCase(updateMediaKitItem.fulfilled, (state, action) => {
                state.mediaKitItems = state.mediaKitItems.map((item) =>
                    item._id === action.payload._id ? action.payload : item
                );
            })

            // DELETE
            .addCase(deleteMediaKitItem.fulfilled, (state, action) => {
                state.mediaKitItems = state.mediaKitItems.filter((item) => item._id !== action.payload);
            });
    },
});

export default mediaKitSlice.reducer;
