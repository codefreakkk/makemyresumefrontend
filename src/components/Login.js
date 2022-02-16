import React from "react";
import Navbar from "../Navbars/Navbar";
import { useState } from "react";
import axios from "axios";
import "../css/style.css";

function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function handleClick() {
    axios
      .post("http://localhost:8000/login", {
        name: name,
        pass: pass,
      })
      .then((res) => {
        if (res.data.status === true) {
          localStorage.setItem("token", res.data.token);
          window.location.href = "/";
          alert("Login Successful");
        } else {
          alert("Login Failed");
        }
      })
      .catch((err) => {
        alert("Some error occured " + err);
      });
  }

  return (
    <>
      <Navbar />
      <div className="lcont">
        <h3>Login</h3>
        <div className="inputbox" style={{ marginTop: 10 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputbox">
          <input
            type="text"
            className="form-control"
            value={pass}
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button
          onClick={handleClick}
          style={{ width: "20%" }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
