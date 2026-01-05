import { LoGO_URL } from "../utils/constant"; // named import
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LoGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              isLoggedIn === "logout"
                ? setIsLoggedIn("Login")
                : setIsLoggedIn("logout");
            }}
          >
            {isLoggedIn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
