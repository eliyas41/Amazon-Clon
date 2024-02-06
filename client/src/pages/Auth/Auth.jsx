import React from 'react'
import classes from "./Auth.module.css"
import { Link } from "react-router-dom";
const Auth = () => {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link >
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign-In</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' />
          </div>
          <button className={classes.login_signInButton}>Sign In</button>
        </form>

        {/* agreement */}
        <p>
          By signing-in you agree to  the AMAZON FAKE CLONE Conditions of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        {/* Create acount btn */}
        <button className={classes.login_registerButton}>Create your Amazon Account</button>
      </div>

    </section>
    
  )
}

export default Auth;