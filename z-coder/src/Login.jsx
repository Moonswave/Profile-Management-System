import React, { useState } from 'react';
import './assets/Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid email or password');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      alert('Failed to sign in with Google');
    }
  };

  return (
    <div className='log'>
      <div className="container">
        <div className="additional-background"></div>
        <div className="form-side">
          <div className="form-container">
            <div className="logo">
              <img src="src/assets/logo.png" alt="Logo" />
            </div>
            <h2>Welcome back to your gaming oasis!</h2>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="options">
                <label>
                  <input type="checkbox" name="remember" />
                  Remember me
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              <button type="submit" className="login-btn">Login</button>
              <button type="button" className="google-btn" onClick={handleGoogleSignIn}>Continue with Google</button>
            </form>
            <p className="signup">
              New to PlayTopia? 
              <NavLink to="/register">Create Now</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
