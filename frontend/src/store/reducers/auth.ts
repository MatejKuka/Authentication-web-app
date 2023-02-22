import {createSlice} from "@reduxjs/toolkit"
import { createAsyncThunk } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    authenticated: "",
    errorMessage: "",
    userInfo: {
        email: "",
        password: ""
    }
}

const authSlice = createSlice({
    extraReducers: undefined,
    initialState: INITIAL_STATE,
    name: "authentication",
    reducers: {
        logout: (state) => {
            localStorage.removeItem("userToken");
            state = INITIAL_STATE
        },
        login: (state) => {

        }
    }
});

const loginUser = createAsyncThunk("user/login",
    // @ts-ignore
    async ({email, password}) => {

    })

export const authActions = authSlice.actions;

export default authSlice;
