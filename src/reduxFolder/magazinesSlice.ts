import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/magazines';

// --- Thunks ---
export const fetchMagazines = createAsyncThunk('magazines/fetchAll', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

export const getMagazineById = createAsyncThunk('magazines/getById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addMagazine = createAsyncThunk('magazines/add', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

export const updateMagazine = createAsyncThunk('magazines/update', async ({ id, data }: { id: string; data: any }) => {
    const res = await axios.put(`${BASE_URL}/${id}`, data);
    return res.data;
});

export const deleteMagazine = createAsyncThunk('magazines/delete', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- Slice ---
const magazinesSlice = createSlice({
    name: 'magazines',
    initialState: {
        magazines: [],
        magazine: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // FETCH ALL
            .addCase(fetchMagazines.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMagazines.fulfilled, (state, action) => {
                state.loading = false;
                state.magazines = action.payload;
            })
            .addCase(fetchMagazines.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            })

            // GET ONE
            .addCase(getMagazineById.fulfilled, (state, action) => {
                state.magazine = action.payload;
            })

            // CREATE
            .addCase(addMagazine.fulfilled, (state, action) => {
                state.magazines.push(action.payload);
            })

            // UPDATE
            .addCase(updateMagazine.fulfilled, (state, action) => {
                state.magazines = state.magazines.map((m: any) => (m._id === action.payload._id ? action.payload : m));
            })

            // DELETE
            .addCase(deleteMagazine.fulfilled, (state, action) => {
                state.magazines = state.magazines.filter((m: any) => m._id !== action.payload);
            });
    },
});

export default magazinesSlice.reducer;
