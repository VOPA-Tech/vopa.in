import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/brouchers';

// --- Thunks ---
export const fetchBrouchers = createAsyncThunk('brouchers/fetchAll', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

export const getBroucherById = createAsyncThunk('brouchers/getById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addBroucher = createAsyncThunk('brouchers/add', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

export const updateBroucher = createAsyncThunk('brouchers/update', async ({ id, data }: { id: string; data: any }) => {
    const res = await axios.put(`${BASE_URL}/${id}`, data);
    return res.data;
});

export const deleteBroucher = createAsyncThunk('brouchers/delete', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- Slice ---
const brouchersSlice = createSlice({
    name: 'brouchers',
    initialState: {
        brouchers: [],
        broucher: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // FETCH ALL
            .addCase(fetchBrouchers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBrouchers.fulfilled, (state, action) => {
                state.loading = false;
                state.brouchers = action.payload;
            })
            .addCase(fetchBrouchers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            })

            // GET ONE
            .addCase(getBroucherById.fulfilled, (state, action) => {
                state.broucher = action.payload;
            })

            // CREATE
            .addCase(addBroucher.fulfilled, (state, action) => {
                state.brouchers.push(action.payload);
            })

            // UPDATE
            .addCase(updateBroucher.fulfilled, (state, action) => {
                state.brouchers = state.brouchers.map((b: any) => (b._id === action.payload._id ? action.payload : b));
            })

            // DELETE
            .addCase(deleteBroucher.fulfilled, (state, action) => {
                state.brouchers = state.brouchers.filter((b: any) => b._id !== action.payload);
            });
    },
});

export default brouchersSlice.reducer;
