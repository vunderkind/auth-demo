import React, {useState} from 'react';
import '../App.css';

function Login() {
  const [credentials, setCredentials] = useState({})
  const handleSubmit = (e)=> {
    e.preventDefault()
    setCredentials({...credentials})
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
