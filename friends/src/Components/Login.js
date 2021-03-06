import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import '../App.css';
import { Link } from 'react-router-dom';

function Login(props) {
  const [credentials, setCredentials] = useState({})
  const [status, setStatus] = useState()
  const handleSubmit = (e)=> {
    e.preventDefault()
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
    .then(res=> {
      setStatus(res.status)
      localStorage.setItem('token', res.data.payload);
      props.history.push('/FriendsList')
  })
  }
  const handleChange =(e)=> {
    console.log(e.target.name)
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
    console.log(credentials)

  }
  return (
    <div className="App">
      <Link to="/">Back home</Link>
      <h2>Log in to the kini</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='username' value={credentials.username} onChange={handleChange} placeholder="Log in"/>
        <br/>
        <input type="password" name='password' value={credentials.password} onChange={handleChange} placeholder="Enter password"/>
        <br/>
        <button>Smash me</button>
      </form>
      </div>
  );
}

export default Login;
