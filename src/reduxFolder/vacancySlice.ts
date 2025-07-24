import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = '/vacancies';

// --- Async Thunks ---
export const fetchVacancies = createAsyncThunk('vacancy/fetchVacancies', async () => {
    const res = await axios.get(BASE_URL);

    return res.data;
});

export const getVacancyById = createAsyncThunk('vacancy/getVacancyById', async (id: string) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
});

export const addVacancy = createAsyncThunk('vacancy/addVacancy', async (payload: any) => {
    const res = await axios.post(BASE_URL, payload);
    return res.data;
});

export const updateVacancy = createAsyncThunk(
    'vacancy/updateVacancy',
    async ({ id, data }: { id: string; data: any }) => {
        const res = await axios.put(`${BASE_URL}/${id}`, data);
        return res.data;
    }
);

export const deleteVacancy = createAsyncThunk('vacancy/deleteVacancy', async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

// --- Slice ---
const vacancySlice = createSlice({
    name: 'vacancy',
    initialState: {
        vacancies: [] as any[],
        vacancy: null as any,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVacancies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVacancies.fulfilled, (state, action) => {
                state.loading = false;
                state.vacancies = action.payload;
            })
            .addCase(fetchVacancies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            })

            .addCase(getVacancyById.fulfilled, (state, action) => {
                state.vacancy = action.payload;
            })

            .addCase(addVacancy.fulfilled, (state, action) => {
                state.vacancies.push(action.payload);
            })

            .addCase(updateVacancy.fulfilled, (state, action) => {
                state.vacancies = state.vacancies.map((vac: any) =>
                    vac._id === action.payload._id ? action.payload : vac
                );
            })

            .addCase(deleteVacancy.fulfilled, (state, action) => {
                state.vacancies = state.vacancies.filter((vac: any) => vac._id !== action.payload);
            });
    },
});

export default vacancySlice.reducer;
