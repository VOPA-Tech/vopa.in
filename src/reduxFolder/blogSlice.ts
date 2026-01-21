import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/blogs';

// --- Async Thunks ---
export const fetchBlogs = createAsyncThunk('blog/fetchBlogs', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

export const getBlogById = createAsyncThunk('blog/getBlogById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addBlog = createAsyncThunk('blog/addBlog', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

export const updateBlog = createAsyncThunk('blog/updateBlog', async ({ id, data }: { id: string; data: any }) => {
    const res = await axios.put(`${BASE_URL}/${id}`, data);
    return res.data;
});

export const deleteBlog = createAsyncThunk('blog/deleteBlog', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- Slice ---
const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [] as any[],
        blog: null as any,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = action.payload
                    .slice() // avoid mutating original array
                    .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch blogs';
            })

            .addCase(getBlogById.fulfilled, (state, action) => {
                state.blog = action.payload;
            })

            .addCase(addBlog.fulfilled, (state, action) => {
                state.blogs.push(action.payload);
            })

            .addCase(updateBlog.fulfilled, (state, action) => {
                state.blogs = state.blogs.map((b: any) => (b._id === action.payload._id ? action.payload : b));
            })

            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.blogs = state.blogs.filter((b: any) => b._id !== action.payload);
            });
    },
});

export default blogSlice.reducer;
