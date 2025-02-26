// TestLogout.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { simulateLogout } from './Redux/reducers/authActions';

const TestLogout = () => {
    const dispatch = useDispatch();
     const navigate = useNavigate(); // Use the useNavigate hook

    const handleLogout = () => {
        dispatch(simulateLogout());
        navigate('/signin')
    };

    return (
        <div>
            <h2>Test Logout</h2>
            <button onClick={handleLogout}>Simulate Logout</button>
        </div>
    );
};

export default TestLogout;