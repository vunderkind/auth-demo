import React from 'react';
import '../App.css';

function Login() {
  return (
    <div className="App">
      <h2>Log in to the kini</h2>
      <form>
        <input type="text" placeholder="Log in"/>
        <br/>
        <input type="password" placeholder="Enter password"/>
        <br/>
        <button>Smash me</button>
      </form>
      </div>
  );
}

export default Login;
