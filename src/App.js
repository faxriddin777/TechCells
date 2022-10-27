import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Clocked from "./components/Clocked";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import ClockOut from "./components/ClockOut";

function App() {


  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route
            path="clocked"
            element={<Clocked />}
          />
          <Route
            path="clocked-out"
            element={<ClockOut />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
