import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login as loginApi } from 'helpers';
import { APICore, setAuthorization } from 'helpers/api/apiCore';

const api = new APICore();

interface UserSession {
    token: string;
    role: string;
    [key: string]: any;
}

interface AuthState {
    user: UserSession | null;
    error: string | null;
    loading: boolean;
}

const initialState: AuthState = {
    user: api.getLoggedInUser(),
    error: null,
    loading: false,
};

export const login = createAsyncThunk<
    UserSession, // return type
    { email: string; password: string }, // argument
    { rejectValue: string } // error
>('auth/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await loginApi({ email, password });

        if (!response || !response.data) {
            return rejectWithValue('No response from server');
        }

        const { token, admin } = response.data;

        const session: UserSession = {
            token,
            ...admin,
        };

        api.setLoggedInUser(session);
        setAuthorization(token);

        return session;
    } catch (error: any) {
        console.error('❌ Login error:', error);
        return rejectWithValue(error?.message || 'Login failed');
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.error = null;
            state.loading = false;

            api.logout(); // Clear sessionStorage
            setAuthorization(null); // Clear auth token from headers
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed';
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
