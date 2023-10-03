import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import axios from 'axios'
import '../../../assets/css/FP.css';
function Forgotpage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/fpass', { email })
      .then((res) => {
        if (res.data.Status === 'Success') {
          alert('Mail sent');
          navigate('/login');
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h4>Forgot Password</h4>
        <img src={require("./mail.png")} alt="Mail Icon" className="mail-icon"/>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" class = "elabel">
              <strong>Your email id</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              value={email}
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn4">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgotpage;
