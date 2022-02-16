import React from "react";
import Navbar from "./Navbars/Navbar";
import Home from "./components/Home";
import Footer from "./Footers/Footer";
import Userdash from "./components/Userdash";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Harsh from "./components/Harsh";

function App() {
  return (
    <>
      <Routes>
        <Route path="/userdash" element={<Userdash />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/pdf" element={<Harsh />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
