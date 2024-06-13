import React from 'react';
import './assets/Login.css';
import {NavLink} from 'react-router-dom'

const Login = () => {
  return (
    <div className='log'>
    <div className="container">
      <div className="additional-background"></div>
      <div className="form-side">
        <div className="form-container">  
          <div className="logo">
            <img src="src\assets\logo.png" alt="Logo" />
          </div>
          <h2>Welcome back to your gaming oasis!</h2>
          <form>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" name="remember" />
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <NavLink to={`/home`}>
            <button type="submit" className="login-btn">Login</button>
            </NavLink>
            <button type="button" className="google-btn">Continue with Google</button>
          </form>
          <p className="signup">
            New to PlayTopia? 
            <a href="/register">Create Now</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
