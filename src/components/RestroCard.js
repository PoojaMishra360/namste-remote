import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import { VCDN_URL } from "../utils/constant"; // named import
// const RestroCard = (resName, cuisine) => its calling destrucring
const RestroCard = (props) => {
  const { resData } = props;
  const data = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-52 bg-gray-500 hover:bg-amber-400">
      <img className="res-logo" src={VCDN_URL} />
      <Link to={"/menu/" + resData.id}>
        <h3>{resData.resName}</h3>
      </Link>
      <h5>{resData.cuisine}</h5>
      <h5>4.4 star</h5>
      <h5>38mintes </h5>
         <h5> User : {data.user.name}</h5>
    </div>
  );
};


// higher order component
// taking component as input and returning modified component 
// taking input component as restro card and returning new component 
export const withPromotedLabel = (RestroCard) => {
 return (props) => {
  return (
    <div>
      <span className="absolute bg-red-500 text-white p-2">Promoted</span>
      <RestroCard {...props} />
    </div>
  );
}
}

export default RestroCard;
