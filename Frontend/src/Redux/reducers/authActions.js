// authActions.js
//  functions to simulate login and logout. These will update the Redux state.
import { login, logout } from './authSlice';

export const simulateLogin = (user, roles) => (dispatch) => {
    dispatch(login({ user, roles }));
};

export const simulateLogout = () => (dispatch) => {
    dispatch(logout());
};