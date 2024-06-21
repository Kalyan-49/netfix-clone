import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
// import loadingSpinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [SignUpstate, setSignUpstate] = useState("sign In");
  return (
    <div className="login">
      <img src={logo} className="logo-image" alt="" />
      <div className="login-form">
        <h1>{SignUpstate}</h1>
        <form>
          {SignUpstate === "sign Up" ? (
            <input type="text" placeholder="username" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="singup-btn">{SignUpstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="login-checkbox" />
              <label htmlFor="login-checkbox">Remember me</label>
            </div>
            <p>Need help ?</p>
          </div>
        </form>
        <div className="form-switch">
          {SignUpstate === "sign Up" ? (
            <p>
              Already have account?
              <span
                onClick={() => {
                  setSignUpstate("sign In");
                }}
              >
                Sign In
              </span>
            </p>
          ) : (
            <p>
              New to Netflix?
              <span
                onClick={() => {
                  setSignUpstate("sign Up");
                }}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
