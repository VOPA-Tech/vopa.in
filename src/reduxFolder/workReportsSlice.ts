import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/work-reports';

// --- Thunks ---
export const fetchWorkReports = createAsyncThunk('workReports/fetchAll', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

export const getWorkReportById = createAsyncThunk('workReports/getById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addWorkReport = createAsyncThunk('workReports/add', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

export const updateWorkReport = createAsyncThunk(
    'workReports/update',
    async ({ id, data }: { id: string; data: any }) => {
        const res = await axios.put(`${BASE_URL}/${id}`, data);
        return res.data;
    }
);

export const deleteWorkReport = createAsyncThunk('workReports/delete', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- Slice ---
const workReportsSlice = createSlice({
    name: 'workReports',
    initialState: {
        reports: [],
        report: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // FETCH ALL
            .addCase(fetchWorkReports.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWorkReports.fulfilled, (state, action) => {
                state.loading = false;
                state.reports = action.payload;
            })
            .addCase(fetchWorkReports.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            })

            // GET ONE
            .addCase(getWorkReportById.fulfilled, (state, action) => {
                state.report = action.payload;
            })

            // CREATE
            .addCase(addWorkReport.fulfilled, (state, action) => {
                state.reports.push(action.payload);
            })

            // UPDATE
            .addCase(updateWorkReport.fulfilled, (state, action) => {
                state.reports = state.reports.map((r: any) => (r._id === action.payload._id ? action.payload : r));
            })

            // DELETE
            .addCase(deleteWorkReport.fulfilled, (state, action) => {
                state.reports = state.reports.filter((r: any) => r._id !== action.payload);
            });
    },
});

export default workReportsSlice.reducer;
