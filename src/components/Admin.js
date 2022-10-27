import React from 'react'
import Logo from "../assete/logo/logo-techcells.svg";

const Admin = () => {
  return (
    <div className="component admin">
      <div style={{textAlign: 'center'}}>
      <img style={{ width: 170 }} src={Logo} alt="Logo" /><br/><br/>
      <h2 >Welcome Back!</h2>
      <br/>
      </div>
      <form>
        <label for="email">Email Address</label>
        <input type="email" id="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" id="password" />
        <div className='check'>
          <span>
            <input type="checkbox" id="checkbox" />
            <label for="checkbox">Remember me</label>
          </span>
          <a href="/">Forgot your password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Admin