import React, { useEffect, useState } from "react";
import "./LoginUi.css";
// import profile from "./Album/profile.svg";
import mail from "./Album/mail.jpg";
import pass from "./Album/pass.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginUi() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);

  const loginUi = async () => {
    console.warn(email, password);
    let item = { username: email, password };
    let result = await fetch("http://localhost:5001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();

    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/");
  };
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1>Login</h1>
            <div className="second_input">
              <img src={mail} alt="email" className="email" />
              <input type="text" placeholder="Email" className="name" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="second_input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="Password" className="name" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="login-button">
              <button onClick={loginUi}>Login</button>
            </div>

            <div className="link">
              <Link to="/login">
                <h3> Forgot password ? </h3>
              </Link>
              <Link to="/signup">
                <h3> Sign Up </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
