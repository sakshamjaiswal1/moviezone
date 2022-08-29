import React from "react";
import "./LoginUi.css";
import profile from "./Album/a.png";
import email from "./Album/email.jpg";
import pass from "./Album/pass.png";

function LoginUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="username" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a>
              <br />

              <br />
              <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
