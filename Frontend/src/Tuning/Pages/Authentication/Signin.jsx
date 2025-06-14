import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { simulateLogin } from '../../../Redux/reducers/authActions'; // Adjust the import based on your Redux setup

const Signin = () => {
    const [username, setUserName] = useState('admin');
    const [password, setPassword] = useState('Sup3rUs3r@@@@@');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Simulate login without API call
            const user = { username, role: 'admin' };
            dispatch(simulateLogin(user, 'admin'));
            navigate('/');
        } catch (err) {
            alert('Login failed');
            setError('Login failed');
        }
    };

    return (
        <div className="px-xl-5 px-4 auth-body">
            <form onSubmit={handleSubmit}>
                <ul className="row g-3 list-unstyled li_animate">
                    <li className="col-12">
                        <label className="form-label">User Name</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </li>
                    <li className="col-12">
                        <div className="form-label">
                            <span className="d-flex justify-content-between align-items-center">
                                Password
                                {/* <Link className="text-primary" to="/password-reset">
                                    Forgot Password?
                                </Link> */}
                            </span>
                        </div>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </li>
                    <li className="col-12">
                        <div className="form-check fs-5">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="Rememberme"
                            />
                            {/* <label className="form-check-label fs-6" htmlFor="Rememberme">
                                Remember this Device
                            </label> */}
                        </div>
                    </li>
                    <li className="col-12 my-lg-4">
                        <button type="submit" className="btn btn-lg w-100 btn-primary text-uppercase mb-2">
                            SIGN IN
                        </button>
                        {/* <a className="btn btn-lg btn-secondary w-100" href="#">
                            <i className="fa fa-google me-2"></i>
                            <span> Sign in with Google</span>
                        </a> */}
                    </li>
                    <li className="col-12 text-center">
                        <span className="text-muted d-flex d-sm-inline-flex">
                            New to ControlHub{' '}
                            {/* <Link className="ms-2" to="/signup" title="">
                                Sign up here
                            </Link> */}
                        </span>
                    </li>
                </ul>
                {error && <p className="text-danger text-center">{error}</p>}
            </form>
        </div>
    );
};

export default Signin;