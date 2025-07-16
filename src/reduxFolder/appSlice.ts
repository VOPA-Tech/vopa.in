// src/store/slices/appSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBlogs } from 'api/fetchBlogs';
import { fetchTeamMembers } from 'api/fetchTeam';
import { fetchVacancies } from 'api/fetchVacancies';
// import { fetchBlogs } from 'api/fetchBlogs';
// import { fetchTeamMembers } from 'api/fetchTeam';
// import { fetchVacancies } from 'api/fetchVacancies';

export const loadBlogs = createAsyncThunk('app/loadBlogs', fetchBlogs);
export const loadTeam = createAsyncThunk('app/loadTeam', fetchTeamMembers);
export const loadVacancies = createAsyncThunk('app/loadVacancies', fetchVacancies);

type AppState = {
    isDonationModalOpen: boolean;
    blogs: any[];
    isBlogsLoading: boolean;
    teamMembers: any[];
    isTeamLoading: boolean;
    vacancies: any[];
    isVacanciesLoading: boolean;
};

const initialState: AppState = {
    isDonationModalOpen: false,
    blogs: [],
    isBlogsLoading: true,
    teamMembers: [],
    isTeamLoading: true,
    vacancies: [],
    isVacanciesLoading: true,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsDonationModalOpen(state, action) {
            state.isDonationModalOpen = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadBlogs.pending, (state) => {
                state.isBlogsLoading = true;
            })
            .addCase(loadBlogs.fulfilled, (state, action) => {
                state.blogs = action.payload;
                state.isBlogsLoading = false;
            })
            .addCase(loadBlogs.rejected, (state) => {
                state.isBlogsLoading = false;
            })

            .addCase(loadTeam.pending, (state) => {
                state.isTeamLoading = true;
            })
            .addCase(loadTeam.fulfilled, (state, action) => {
                state.teamMembers = action.payload;
                state.isTeamLoading = false;
            })
            .addCase(loadTeam.rejected, (state) => {
                state.isTeamLoading = false;
            })

            .addCase(loadVacancies.pending, (state) => {
                state.isVacanciesLoading = true;
            })
            .addCase(loadVacancies.fulfilled, (state, action) => {
                state.vacancies = action.payload;
                state.isVacanciesLoading = false;
            })
            .addCase(loadVacancies.rejected, (state) => {
                state.isVacanciesLoading = false;
            });
    },
});

export const { setIsDonationModalOpen } = appSlice.actions;
export default appSlice.reducer;
