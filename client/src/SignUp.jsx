import React from "react";
import "./SignUp.css";
import profile from "./Album/a.png";
import email from "./Album/email.jpg";
import pass from "./Album/pass.png";

function SignUp() {
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
            <h1>Sign Up</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="username" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="login-button">
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
