import React from "react";
import { Link } from "react-router-dom";
import { VCDN_URL } from "../utils/constant"; // named import
// const RestroCard = (resName, cuisine) => its calling destrucring
const RestroCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-52 bg-gray-500 hover:bg-amber-400">
      <img className="res-logo" src={VCDN_URL} />
      <Link to={"/menu/" + resData.id}>
        <h3>{resData.resName}</h3>
      </Link>
      <h5>{resData.cuisine}</h5>
      <h5>4.4 star</h5>
      <h5>38mintes </h5>
    </div>
  );
};

export default RestroCard;
