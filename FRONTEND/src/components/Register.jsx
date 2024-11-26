import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function Register() {
  const history = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/v1/users/register', {
        username, email, password
      });

      if (res.status === 201) {
        alert("User Registered Successfully");
        history("/", { state: { id: username } });
      } else if (res.status === 409) {
        alert("User Already Exists");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("User Already Exists");
      } else {
        alert("Wrong Details");
        console.log(error);
      }
    }
  }


  return (
    <div className='bg'>
      <div className='content-container'>
    <div className='signup'>
      <h2>Welcome User! Signup</h2>
      <form action="POST" method="post">
        <input type="text" className='input-box' onChange={(e) => { setUsername(e.target.value) }} placeholder='Username' name="" id="" />
        <br />
        <input type="email" className='input-box' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name="" id="" />
        <br />
        <input type="password" className='input-box' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name="" id="" />
        <br />
        <input className='action-btn' type="submit" onClick={submit} />
      </form>
      <br />
      <div className='signup-login-container'>
      <p className='signup-login-text'>Already have an account?</p>
      <Link to="/" className='login-text'>Login</Link>

      </div>
      

    </div>
    </div>
    </div>
  )
}

export default Register