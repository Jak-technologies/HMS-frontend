// authSlice.js
// manage authentication  states (login and logout)
import { createSlice } from '@reduxjs/toolkit';

// Temporarily disable authentication logic
const initialState = {
    isAuthenticated: true, // Set to true to bypass login
    user: { id: 1, name: 'Test User' }, // Mock user data
    roles: ['user'], // Mock roles
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