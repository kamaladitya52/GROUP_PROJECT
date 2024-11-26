import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/v1/users/login', { email, password });

      if (res.status === 200) {
        navigate("/join-meeting", { state: { id: email } });
      } else if (res.status === 404) {
        alert("User Not Found");
      }
    } catch (error) {
      alert("Wrong Details");
      console.log(error);
    }
  };

  return (
  <div className='bg'>
    <div className='content-container'>
    <div className='Login'>
      <h2>Welcome User! Login</h2>
      <form onSubmit={submit}>
        <input
          className='input-box'
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          required
        />
        <br />
        <input
          className='input-box'
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
        <br />
        <button type="submit" className='action-btn'>Login</button>
      </form>
      <br />
      <div className='signup-login-container'>
      <p className='signup-login-text'>Don't have an account?</p>
      <Link to="/register" className='signup-text'>Signup</Link>
      </div>
     
      </div>
      </div>
    </div>
  );
}

export default Login;