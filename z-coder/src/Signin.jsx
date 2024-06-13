import React, { useState } from 'react';
import './assets/Signin.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordHelp, setPasswordHelp] = useState('');
  const [confirmPasswordHelp, setConfirmPasswordHelp] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let valid = true;

    if (!passwordRegex.test(password)) {
      setPasswordHelp('Password must contain at least one lowercase letter, one number, and one special character.');
      valid = false;
    } else {
      setPasswordHelp('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordHelp('Passwords do not match');
      valid = false;
    } else {
      setConfirmPasswordHelp('');
    }

    if (valid) {
      navigate('/home');
    }
  };

  return (
    <div className='signin'>
      <div className="container">
        <div className="additional-background"></div>
        <div className="form-side">
          <div className="form-container">
            <div className="logo">
              <img src="./src/assets/logo.png" alt="Logo" />
            </div>
            <h2>Create your gaming oasis account!</h2>
            <form id="signup-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <small id="password-help" className="help-text" style={{ color: passwordHelp ? 'red' : 'inherit' }}>
                  {passwordHelp || 'Password must contain at least one lowercase letter, one number, and one special character.'}
                </small>
              </div>
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <small id="confirm-password-help" className="help-text" style={{ color: confirmPasswordHelp ? 'red' : 'inherit' }}>
                  {confirmPasswordHelp}
                </small>
              </div>
              <button type="submit" className="signup-btn">Sign Up</button>
            </form>
            <p className="signinn">
              Already have an account? <a href="/login">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
