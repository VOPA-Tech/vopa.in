import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/press-releases';

// --- Async Thunks ---
export const fetchPressReleases = createAsyncThunk('pressRelease/fetchPressReleases', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

export const getPressReleaseById = createAsyncThunk('pressRelease/getPressReleaseById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addPressRelease = createAsyncThunk('pressRelease/addPressRelease', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

export const updatePressRelease = createAsyncThunk(
    'pressRelease/updatePressRelease',
    async ({ id, data }: { id: string; data: any }) => {
        const res = await axios.put(`${BASE_URL}/${id}`, data);
        return res.data;
    }
);

export const deletePressRelease = createAsyncThunk('pressRelease/deletePressRelease', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- Slice ---
const pressReleaseSlice = createSlice({
    name: 'pressRelease',
    initialState: {
        pressReleases: [] as any[],
        pressRelease: null as any,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPressReleases.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPressReleases.fulfilled, (state, action) => {
                state.loading = false;
                state.pressReleases = action.payload;
            })
            .addCase(fetchPressReleases.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch pressReleases';
            })

            .addCase(getPressReleaseById.fulfilled, (state, action) => {
                state.pressRelease = action.payload;
            })

            .addCase(addPressRelease.fulfilled, (state, action) => {
                state.pressReleases.push(action.payload);
            })

            .addCase(updatePressRelease.fulfilled, (state, action) => {
                state.pressReleases = state.pressReleases.map((b: any) =>
                    b._id === action.payload._id ? action.payload : b
                );
            })

            .addCase(deletePressRelease.fulfilled, (state, action) => {
                state.pressReleases = state.pressReleases.filter((b: any) => b._id !== action.payload);
            });
    },
});

export default pressReleaseSlice.reducer;
