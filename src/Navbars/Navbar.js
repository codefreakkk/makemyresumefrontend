import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  const [state, setState] = useState(false);
  useEffect(() => {
    axios
      .post("http://localhost:8000/resume", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        const status = res.data.status;
        if (status === false) {
          // window.location.href = "/";
        } else {
          setState(true);
        }
      })
      .catch((err) => console.log("Some error occured " + err));
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid" style={{ backgroundColor: "white" }}>
          <a
            class="navbar-brand"
            href="#"
            style={{ color: "rgb(60, 0, 199)", fontWeight: 700 }}
          >
            MMResume
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul
              class="navbar-nav"
              style={{ position: "relative", left: 500, top: 5 }}
            >
              <li class="nav-item" style={{ fontSize: 22 }}>
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{
                    fontSize: 18,
                    marginLeft: 60,
                    fontWeight: "light",
                    color: "gray",
                  }}
                >
                  Home
                </a>
              </li>
            </ul>
            <div class="d-flex" style={{ position: "absolute", right: 20 }}>
              {/* logic for login button */}
              {state ? (
                ""
              ) : (
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  onClick={() => (window.location.href = "/login")}
                >
                  Login
                </button>
              )}
              {/* logic for logout and register */}
              {state ? (
                <button
                  class="btn btn-primary"
                  style={{
                    marginLeft: 10,
                    backgroundColor: "rgb(60, 0, 199)",
                    border: "none",
                  }}
                  type="button"
                  onClick={logout}
                >
                  Logout
                </button>
              ) : (
                <button
                  class="btn btn-primary"
                  style={{
                    marginLeft: 10,
                    backgroundColor: "rgb(60, 0, 199)",
                    border: "none",
                  }}
                  type="button"
                  onClick={() => (window.location.href = "/register")}
                >
                  Register
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
