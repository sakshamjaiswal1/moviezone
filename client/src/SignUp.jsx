import React, { useState, useEffect } from "react";
import "./SignUp.css";
import profile from "./Album/a.png";
import mail from "./Album/mail.jpg";
import pass from "./Album/pass.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate.push("/login");
    }
  }, []);

 async function SignUp() {
    console.warn(email, password);
    let item={email,password}
    let result= await fetch("http://localhost:3000/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":'application/json'
      },
      body:JSON.stringify(item)
    });
    result = await result.json();
  localStorage.setItem("user-info", JSON.stringify(result))
  navigate.push("/login")

  }
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
              <img src={mail} alt="email" className="email" />
              <input
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className="name"
              />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="name"
              />
            </div>
            <div className="login-button">
              <button onClick={SignUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
