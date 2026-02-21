import { LoGO_URL } from "../utils/constant"; // named import
import React, { useState , useContext, use } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  // access  the context value
  const  user  = useContext(UserContext);

  // store as props we are provide in app.js file 
  const cartItems = useSelector((store) => store.cart.items);
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
          <li className="px-4"> <Link to="/cart">Cart ({cartItems.length})</Link></li>
          
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
          {isLoggedIn === "Login" && <li className="px-4">{user.user.name}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
