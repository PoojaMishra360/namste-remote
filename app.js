import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/burger-mascot-logo-design_779267-1066.jpg?semt=ais_hybrid&w=740&q=80"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// const RestroCard = (resName, cuisine) => its calling destrucring
const RestroCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zCPmUwWrRfNmz9_UnZL3KoW3bNMHtTr9Qg&s"
      />
      <h3>{resData.resName}</h3>
      <h5>{resData.cuisine}</h5>
      <h5>4.4 star</h5>
      <h5>38mintes </h5>
    </div>
  );
};

const resObject = [
  {
    id: 1,
    resName: "Meghana Restaurant",
    cuisine: "North Indian,South,North",
  },
  {
    id: 2,
    resName: "KFC",
    cuisine: "Burger,Fast Food",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObject.map((res) => (
          <RestroCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
