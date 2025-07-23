import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import authSlice from './authSlice';
import usersSlice from './usersSlice';
import contentSlice from './contentSlice';
export const store = configureStore({
    reducer: {
        appState: appSlice,
        authState: authSlice,
        usersState: usersSlice,
        contentState: contentSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
