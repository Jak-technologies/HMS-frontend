// authSlice.js
// manage authentication  states (login and logout)
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    roles: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.roles = action.payload.roles;
        },
        
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.roles = [];
        },
    },
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;