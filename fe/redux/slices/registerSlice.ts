import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { message } from "antd";


interface Register {
    fullName: string;
    username: string;
    password: string;
    email: string;
    confirmPass: string;
}

interface VerifyOtp {
    isVerify: boolean | null
}

const initialState: VerifyOtp = {
    isVerify: null
}


export const registerAction = createAsyncThunk(
    'register',
    async (values: Register) => {
        const { fullName, username, email, password, confirmPass } = values;
        if (password === confirmPass) {
            try {
                const res = await axios.post('https://dev.mys.tinasoft.com.vn/api/v1/auth/register',
                    {
                        username: username,
                        password: password,
                        fullName: fullName,
                        email: email
                    }
                )
                return res.data
            } catch (error: any) {
               message.error(error)

            }
        } else message.error('Mật khẩu không khớp')
    }
)

const registerSlice = createSlice({
    name:'register',
    initialState,
    reducers: {
        clearSuccess(state) {
            state.isVerify = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAction.fulfilled, (state) => {
                state.isVerify = true
            })
    }
})

export const { clearSuccess } = registerSlice.actions;

export default registerSlice.reducer