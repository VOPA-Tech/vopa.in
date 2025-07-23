// src/redux/slices/contentSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/employees';

export const fetchEmployees = createAsyncThunk('content/fetchEmployees', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

export const getEmployeeById = createAsyncThunk('content/getEmployeeById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addEmployee = createAsyncThunk('content/addEmployee', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

export const updateEmployee = createAsyncThunk(
    'content/updateEmployee',
    async ({ id, data }: { id: string; data: any }) => {
        const res = await axios.put(`${BASE_URL}/${id}`, data);
        return res.data;
    }
);

export const deleteEmployee = createAsyncThunk('content/deleteEmployee', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        employees: [],
        employee: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.loading = false;
                state.employees = action.payload;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            })

            .addCase(getEmployeeById.fulfilled, (state, action) => {
                state.employee = action.payload;
            })

            .addCase(addEmployee.fulfilled, (state, action) => {
                state.employees.push(action.payload);
            })

            .addCase(updateEmployee.fulfilled, (state, action) => {
                state.employees = state.employees.map((emp: any) =>
                    emp._id === action.payload._id ? action.payload : emp
                );
            })

            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.employees = state.employees.filter((emp: any) => emp._id !== action.payload);
            });
    },
});

export default contentSlice.reducer;
