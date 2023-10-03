import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../../assets/css/Signup.css';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation logic
    if (!name) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }

    // Email validation logic
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }

    // Password validation logic
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    } else {
      // All fields are valid, make the API call or perform registration
      axios.post('http://localhost:3000/register', { name, email, password })
        .then(res => {
          navigate('/login');
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className="register-container">
       <img src={require("./register.png")} alt="Registration Icon" />
      <div className="register-form">
        <h2 className="wtext1">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="wtext1"><strong>Name</strong></label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="error-message">{nameError}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="wtext2"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="wtext3"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="wtext4"><strong>Confirm Password</strong></label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <button type="submit" className="btn2">Register</button>
        </form>
        <p><strong>-----------------------------------------------------------</strong></p>
        <Link to="/LoginPage" className="register-link">Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;
