// authActions.js
//  functions to simulate login and logout. These will update the Redux state.
import axios from '../../AXIOS_CONFIG/axios';
import { loginStart, loginSuccess, loginFailure, logout } from './authSlice';

export const userLogin = (username, password) => async (dispatch) => {
    try {
        dispatch(loginStart());
        const response = await axios.post('/auth/signin', { username, password });
        const { token } = response.data;

        localStorage.setItem('access_token', token);
        dispatch(loginSuccess({ user: { username }, roles: [] }));
    } catch (error) {
        dispatch(loginFailure('Login failed'));
        console.error('Login failed:', error);
        throw error;
    }
};

export const userSignup = (firstName, lastName, email, password) => async (dispatch) => {
    try {
        dispatch(loginStart());
        await axios.post('/auth/signup', { firstName, lastName, email, password });
        dispatch(loginSuccess({ user: { email }, roles: [] }));
    } catch (error) {
        dispatch(loginFailure('Signup failed'));
        console.error('Signup failed:', error);
        throw error;
    }
};

export const refreshToken = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('access_token');
        const response = await axios.post('/api/auth/refresh-token', { token });
        const { token: newToken } = response.data;

        localStorage.setItem('access_token', newToken);
    } catch (error) {
        console.error('Token refresh failed:', error);
        throw error;
    }
};

export const userLogout = () => async (dispatch) => {
    try {
        await axios.post('/api/auth/logout');
        localStorage.removeItem('access_token');
        dispatch(logout());
    } catch (error) {
        console.error('Logout failed:', error);
        throw error;
    }
};

export const setupTokenRefresh = () => {
    setInterval(async () => {
        try {
            const token = localStorage.getItem('access_token');
            if (token) {
                const response = await axios.post('/api/auth/refresh-token', { token });
                const { token: newToken } = response.data;
                localStorage.setItem('access_token', newToken);
            }
        } catch (error) {
            console.error('Token refresh failed:', error);
        }
    }, 15 * 60 * 1000); // Refresh every 15 minutes
};