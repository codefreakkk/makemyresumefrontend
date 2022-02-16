import React from "react";
import "../css/style.css";
import logo from "../images/resume.png";
import Navbar from "../Navbars/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Userdash() {
  const [loader, setLoader] = useState(true);
  const [state, setState] = useState(false);
  const [rname, setRname] = useState("");
  useEffect(() => {
    // check user logged in or not
    axios
      .post("http://localhost:8000/userdash", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        const status = res.data.status;
        if (status === false) {
          window.location.href = "/login";
        } else {
          setLoader(false);
          setState(true);
        }
      })
      .catch((err) => console.log("Some error occured " + err));
    // check if there are any existing resume
    axios
      .post("http://localhost:8000/getpersonaldetails", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        setRname(res.data[0].resumeName);
      })
      .catch((err) => console.log("Some error occured " + err));
  }, []);

  // loader rendering
  if (loader === true) {
    return (
      <>
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Oval color="blue" height={30} width={30} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="container mt-4">
          <h5>Resumes</h5>
          <div
            class="container mt-4"
            onClick={() => (window.location.href = "/resume")}
          >
            <div class="row">
              <div class="col" className="creater" style={{ marginRight: 45 }}>
                <h6>{rname}</h6>
                <span>
                  <i class="fas fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Userdash;
