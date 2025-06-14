// authSlice.js
// manage authentication  states (login and logout)
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false, // Updated to reflect real authentication
    user: null,
    roles: [],
    loading: false, // Added loading state
    error: null, // Added error state
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.roles = action.payload.roles;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.roles = [];
            state.error = null;
        },
    },
})

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;