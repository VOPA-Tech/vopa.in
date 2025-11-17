import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APICore } from 'helpers/api/apiCore';

const api = new APICore();

interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
}

interface usersState {
    list: User[];
    loading: boolean;
    error: string | null;
}

const initialState: usersState = {
    list: [],
    loading: false,
    error: null,
};

// 🔁 GET all users
export const fetchUsers = createAsyncThunk('users/fetchAll', async (_, { rejectWithValue }) => {
    try {
        const response = await api.get('/users', {});

        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// ➕ CREATE user
export const createUser = createAsyncThunk('users/create', async (userData: any, { rejectWithValue }) => {
    try {
        const response = await api.create('/auth/register', userData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// ✏️ UPDATE user
export const updateUser = createAsyncThunk(
    'users/update',
    async ({ id, updateData }: { id: string; updateData: any }, { rejectWithValue }) => {
        try {
            const response = await api.update(`/users/${id}`, updateData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// ❌ DELETE user
export const deleteUser = createAsyncThunk('users/delete', async (id: string, { rejectWithValue }) => {
    try {
        await api.delete(`/users/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // GET
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // CREATE
            .addCase(createUser.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })

            // UPDATE
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.list.findIndex((u) => u._id === action.payload._id);
                if (index !== -1) state.list[index] = action.payload;
            })

            // DELETE
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.list = state.list.filter((user) => user._id !== action.payload);
            });
    },
});

export default usersSlice.reducer;
