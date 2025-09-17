import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/media-mentions';

// --- Thunks ---
export const fetchMediaMentions = createAsyncThunk('mediaMentions/fetchAll', async () => {
    const res = await axios.get(BASE_URL);

    return res.data;
});

export const getMediaMentionById = createAsyncThunk('mediaMentions/getById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addMediaMention = createAsyncThunk('mediaMentions/add', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    console.log('MediaMentions not populating', res.data);
    return res.data;
});

export const updateMediaMention = createAsyncThunk(
    'mediaMentions/update',
    async ({ id, data }: { id: string; data: any }) => {
        const res = await axios.put(`${BASE_URL}/${id}`, data);
        return res.data;
    }
);

export const deleteMediaMention = createAsyncThunk('mediaMentions/delete', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- Slice ---
const mediaMentionsSlice = createSlice({
    name: 'mediaMentions',
    initialState: {
        mentions: [],
        mention: null,
        loading: false,
        error: null,
    },
    reducers: {
        resetMention: (state) => {
            state.mention = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // FETCH ALL
            .addCase(fetchMediaMentions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMediaMentions.fulfilled, (state, action) => {
                state.loading = false;
                state.mentions = action.payload;
            })
            .addCase(fetchMediaMentions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            })

            // GET ONE
            .addCase(getMediaMentionById.fulfilled, (state, action) => {
                state.mention = action.payload;
            })

            // CREATE
            .addCase(addMediaMention.fulfilled, (state, action) => {
                state.mentions.push(action.payload);
            })

            // UPDATE
            .addCase(updateMediaMention.fulfilled, (state, action) => {
                state.mentions = state.mentions.map((m: any) => (m._id === action.payload._id ? action.payload : m));
            })

            // DELETE
            .addCase(deleteMediaMention.fulfilled, (state, action) => {
                state.mentions = state.mentions.filter((m: any) => m._id !== action.payload);
            });
    },
});

export const { resetMention } = mediaMentionsSlice.actions;
export default mediaMentionsSlice.reducer;
