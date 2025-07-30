// src/store/slices/appSlice.ts
import { createSlice } from '@reduxjs/toolkit';

type AppState = {
    isDonationModalOpen: boolean;
};

const initialState: AppState = {
    isDonationModalOpen: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsDonationModalOpen(state, action) {
            state.isDonationModalOpen = action.payload;
        },
    },
});

export const { setIsDonationModalOpen } = appSlice.actions;
export default appSlice.reducer;
