import {LoGO_URL}from "../utils/constant"; // named import
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
   const [isLoggedIn, setIsLoggedIn] = useState("Login");
  return (
   
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LoGO_URL}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={() =>{
            (isLoggedIn==="logout")? 
              setIsLoggedIn("Login"):setIsLoggedIn("logout");
          }}>{isLoggedIn}</button>
        </ul>
      </div>
    </div>
  );
};


export default Header;