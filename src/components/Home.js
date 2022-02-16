import React from "react";
import "../css/style.css";
import Navbar from "../Navbars/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container1">
        <h1 className="heading">Create a professional resume</h1>
        <div className="para">
          Fill in the blanks, choose a template, and download your resume
          instantly.
        </div>
        <button
          type="button"
          class="btn btn-primary create"
          onClick={() => {
            window.location.href = "/userdash";
          }}
        >
          Create Resume
        </button>
      </div>
    </>
  );
}

export default Home;
