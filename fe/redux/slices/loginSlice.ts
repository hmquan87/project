
'use client'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useState } from 'react';

interface AuthState {
    success: boolean;
    error: string | null;
    accessToken: string | null;
}
interface credentials {
    emailOrUsername: string;
    password: string

}
const initialState: AuthState = {
    success: false,
    error: null,
    accessToken: null
};




export const loginAction = createAsyncThunk(
    'auth/login',
    async (values: credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://dev.mys.tinasoft.com.vn/api/v1/auth/login', {
                emailOrUsername: values.emailOrUsername,
                password: values.password,
            });

            if (response.data.success) {
                console.log(response.data.data.accessToken);
                
                return response.data;
                
            } else {
                return rejectWithValue(response.data.message || 'Login failed');
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Network error');
            } else {
                return rejectWithValue('An unexpected error occurred');
            }
        }
    }
);

const loginSlice = createSlice({
    name: 'loginAction',
    initialState,
    reducers: {
        clearSuccess(state) {
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAction.pending, (state) => {
                state.error = null;
            })
            .addCase(loginAction.fulfilled, (state, action) => {
                state.success = true;
                state.error = null;
                state.accessToken = action.payload.data.accessToken;
            })
            .addCase(loginAction.rejected, (state, action) => {
                state.success = false;
                state.error = action.payload as string || 'Failed to login';
            });
    },
});


export const { clearSuccess } = loginSlice.actions;
export default loginSlice.reducer;