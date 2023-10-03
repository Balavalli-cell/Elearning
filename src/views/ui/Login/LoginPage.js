import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import '../.././../assets/css/Login.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/login', { email, password })
      .then((res) => {
        console.log('login: ' + res.data);
        if (res.data.Status === 'Success') {
          alert('Login successful');
          navigate('/layout'); // Redirect to '/layout' (dashboard) on successful login
        } else {
          alert('Login failed. Please check your email and password.');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <img src={require('./login.png')} alt="Login" />
      {/* Provide alt text for the image */}
      <div className="login-form">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className='white-text'>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '70%' }} // Increase the width as needed
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className='white-etext'>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '70%' }} // Increase the width as needed
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
        <Link to="/Forgotpage" className="text-center text-decoration-none">
          Forgot Password
        </Link>
        <p>------------------------------------------------------------</p>
        <Link to="/SignupPage" className="register-link">
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
