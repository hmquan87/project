import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
    success: boolean;
    error: string | null;
}
interface credentials {
    username: string;
    password: string
}
const initialState: AuthState = {
    success: false,
    error: null,
};

export const loginAction = createAsyncThunk(
    'auth/login',
    async (values: credentials) => {
        const response = await axios.post('https://dev.mys.tinasoft.com.vn/api/v1/auth/login', {
            username: values.username,
            password: values.password,
        });
        return response.data;
    }
);

const loginSlice = createSlice({
    name: 'loginAction',
    initialState,
    reducers: {
        clearSuccess(state) {
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAction.pending, (state) => {
                state.error = null;
            })
            .addCase(loginAction.fulfilled, (state) => {
                state.success = true;
                state.error = null;
            })
            .addCase(loginAction.rejected, (state, action) => {
                state.error = action.error.message || 'Failed to login';
            });
    },
});

export const { clearSuccess } = loginSlice.actions;
export default loginSlice.reducer;