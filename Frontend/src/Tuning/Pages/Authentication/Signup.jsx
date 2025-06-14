import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userSignup } from '../../../Redux/reducers/authActions'
import { loginStart, loginSuccess, loginFailure } from '../../../Redux/reducers/authSlice'
import { FaSpinner } from 'react-icons/fa'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error: signupError } = useSelector((state) => state.auth)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match')
      setTimeout(() => setErrorMessage(''), 2000)
      return
    }

    try {
      dispatch(loginStart())
      await dispatch(userSignup(firstName, lastName, email, password))
      dispatch(loginSuccess({ user: { email }, roles: [] }))
      setSuccessMessage('Signup successful!')
      setTimeout(() => setSuccessMessage(''), 2000)
      navigate('/signin')
    } catch (err) {
      dispatch(loginFailure('Signup failed. Please check your details.'))
      setErrorMessage('Signup failed. Please check your details.')
      setTimeout(() => setErrorMessage(''), 2000)
    }
  }

  return (
        <div className="px-xl-5 px-4 auth-body">
            {loading && <FaSpinner className="spinner" />}
            {errorMessage && <div className="error-message text-danger">{errorMessage}</div>}
            {successMessage && <div className="success-message text-success">{successMessage}</div>}
			<form onSubmit={handleSubmit}>
				<ul className="row g-3 list-unstyled li_animate">
					<li className="col-6">
						<label className="form-label">Full name</label>
						<input
              type="text"
              className="form-control form-control-lg"
              placeholder="Jony"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
					</li>
					<li className="col-6">
						<label className="form-label">&nbsp;</label>
						<input
              type="text"
              className="form-control form-control-lg"
              placeholder="Parker"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
					</li>
					<li className="col-12">
						<label className="form-label">Email address</label>
						<input
              type="email"
              className="form-control form-control-lg"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
					</li>
					<li className="col-6">
						<label className="form-label">Password</label>
						<input
              type="password"
              className="form-control form-control-lg"
              placeholder="8+ characters required"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
					</li>
					<li className="col-6">
						<label className="form-label">Confirm password</label>
						<input
              type="password"
              className="form-control form-control-lg"
              placeholder="8+ characters required"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
					</li>
					<li className="col-12">
						<button type="submit" className="btn btn-lg w-100 btn-primary text-uppercase mb-2">
              SIGN UP
            </button>
					</li>
					{error && <li className="col-12 text-danger">{error}</li>}
          <li className="col-12">
            <small className="text-muted">Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.</small>
          </li>
				</ul>
			</form>
      <div className="text-center mt-3">
        <span>Already have an account? </span>
        <Link to="/signin" className="text-primary">Sign in</Link>
      </div>
		</div>
    )
}

export default Signup