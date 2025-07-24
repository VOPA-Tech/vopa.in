import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import authSlice from './authSlice';
import usersSlice from './usersSlice';
import employeeSlice from './employeeSlice';
import vacancySlice from './vacancySlice';
import blogSlice from './blogSlice';
export const store = configureStore({
    reducer: {
        appState: appSlice,
        authState: authSlice,
        usersState: usersSlice,
        employeeState: employeeSlice,
        vacancyState: vacancySlice,
        blogState: blogSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
