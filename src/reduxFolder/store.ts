import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import authSlice from './authSlice';
import usersSlice from './usersSlice';
import employeeSlice from './employeeSlice';
import vacancySlice from './vacancySlice';
import jobsSlice from './jobsSlice';
import blogSlice from './blogSlice';
import eventSlice from './eventSlice';
import workReportsSlice from './workReportsSlice';
import magazinesSlice from './magazinesSlice';
import brouchersSlice from './brouchersSlice';
import mediaMentionsSlice from './mediaMentionsSlice';
import mediaCutoutsSlice from './mediaCutoutsSlice';
import mediaKitSlice from './mediaKitSlice';
import pressReleaseSlice from './pressReleaseSlice';
import websiteFeedbackSlice from './websiteFeedbackSlice';
import contactFormSlice from './contactFormSlice';
import volunteerFormSlice from './volunteerFormSlice';
export const store = configureStore({
    reducer: {
        appState: appSlice,
        authState: authSlice,
        usersState: usersSlice,
        employeeState: employeeSlice,
        vacancyState: vacancySlice,
        jobsState: jobsSlice,
        blogState: blogSlice,
        eventState: eventSlice,
        workReportsState: workReportsSlice,
        mediaMentionsState: mediaMentionsSlice,
        magazinesState: magazinesSlice,
        brouchersState: brouchersSlice,
        mediaCutoutsState: mediaCutoutsSlice,
        mediaKitState: mediaKitSlice,
        pressReleaseState: pressReleaseSlice,
        websiteFeedbackState: websiteFeedbackSlice,
        contactFormState: contactFormSlice,
        volunteerFormState: volunteerFormSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
