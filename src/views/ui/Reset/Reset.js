import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../../assets/css/RS.css';

function Reset() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { id, token } = useParams();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match');
      return;
    }

    // Password validation checks
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    axios
    .post(`http://localhost:3001/reset/${id}/${token}`, { password })
    .then((res) => {
      if (res.data.Status === 'Success') {
        // Password successfully updated, show an alert
        alert('Password updated successfully');
        navigate('/login');
      }
    })
    .catch((err) => console.log(err));
}

  return (
    <div className="reset-password-container">
      <div className="reset-password-form">
        <h4>Reset Password</h4>
        <img src={require("./reset.png")} alt="Mail Icon" className="reset-icon"/>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="password" class="rp">
              <strong>New Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" class ="rp1">
              <strong>Confirm Password</strong>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="off"
              name="confirmPassword"
              className="form-control rounded-0"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {passwordMatchError && <p className="error-message">{passwordMatchError}</p>}
          </div>
          <button type="submit" className="rbtn">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
