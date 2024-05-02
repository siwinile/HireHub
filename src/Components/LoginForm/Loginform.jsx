import React from 'react';
import './LoginForm.css';
import { FaUser,FaLock  } from "react-icons/fa";

function ComponentName() {
  return (
    <div classname='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='username'required/>
                <FaUser className='icon'/>

            </div>
            <div className="input-box">
                <input type="password" placeholder='password' required/>
                <FaLock className='icon'/>

<div className="remember-forgot">
    <label><input type="checkbox" />Remeber me</label>
    <a href="#">Forgot password?</a>

</div>
<button type="submit">Login</button>
<div className="register-link">
    <p>Dont have an account? <a href="#">Register</a></p>
</div>
            </div>
        </form>
      
    </div>
  );
}

export default ComponentName;
