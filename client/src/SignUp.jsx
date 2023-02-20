import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import mail from "./Album/mail.jpg";
import pass from "./Album/pass.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/signup");
    }
  }, []);

  const signUp = async () => {
    console.warn(email, password);
    let item = { username: email, password };
    let result = await fetch("http://localhost:5001/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();

    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/login");
  };
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1>Sign Up</h1>
            <div className="second_input">
              <img src={mail} alt="email" className="email" />
              <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="name" />
            </div>
            <div className="second_input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="name" />
            </div>
            <div className="login-button">
              <button onClick={signUp}>Sign Up</button>
            </div>
            <div className="link_Signup">
              <p>Already Signed up?</p>
              <Link to="/login"> <h3>Login </h3> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
