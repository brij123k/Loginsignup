import React from "react";
// import {Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <div className="Login_con">
      <div className="Login_co1">
        <form>
          <div className="Login_page">
            <h1 className="Login_name">Login</h1>
          </div>
          <div className="Login_container">
          <div><label>Email</label></div>
            <div className="EMAIL_login">
              <input placeholder="Email" type="email" />
            </div>
            <div className="Password_login">
              <input placeholder="Password" type="password" />
            </div>
            <div>
              <button className="button_login">Submit</button>
            </div>
          </div>
          <div className="not_match">
            Not Have an <span>Sign in ?</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
