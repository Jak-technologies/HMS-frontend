import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../../Redux/reducers/authActions'; // Adjust the import based on your Redux setup
import { loginStart, loginSuccess, loginFailure } from '../../../Redux/reducers/authSlice';
import { FaSpinner } from 'react-icons/fa';

const Signin = () => {
    const [username, setUserName] = useState('admin');
    const [password, setPassword] = useState('Sup3rUs3r@@@@@');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error: authError } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(loginStart());
            await dispatch(userLogin(username, password));
            dispatch(loginSuccess({ user: { username }, roles: [] }));
            setSuccessMessage('Login successful!');
            setTimeout(() => setSuccessMessage(''), 2000);
            navigate('/');
        } catch (err) {
            dispatch(loginFailure('Incorrect username or password'));
            setErrorMessage('Incorrect username or password');
            setTimeout(() => setErrorMessage(''), 2000);
        }
    };

    return (
        <div className="px-xl-5 px-4 auth-body">
            {loading && <FaSpinner className="spinner" />}
            {errorMessage && <div className="error-message text-danger">{errorMessage}</div>}
            {successMessage && <div className="success-message text-success">{successMessage}</div>}
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
                            <Link className="ms-2" to="/signup" title="">
                                Sign up here
                            </Link>
                        </span>
                    </li>
                </ul>
                {error && <p className="text-danger text-center">{error}</p>}
            </form>
        </div>
    );
};

export default Signin;