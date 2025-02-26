// TestLogin.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { simulateLogin } from './Redux/reducers/authActions';

const TestLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Use the useNavigate hook

    const handleLogin = () => {
        // Simulate a user with roles
        const user = { id: 1, name: 'John Doe' };
        const roles = ['user']; // or ['admin'] for admin users
        dispatch(simulateLogin(user, roles));
        navigate('/'); // Use the navigate function
    };

    return (
        <div>
            <h2>Test Login</h2>
            <button onClick={handleLogin}>Simulate Login</button>
        </div>
    );
};

export default TestLogin;
