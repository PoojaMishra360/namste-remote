
import RestroCard from "./RestroCard"; // default import
import resObject from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  
  const [resList, setResList] = useState(resObject);

  

  return (
    <div className="body">
   <div className="filter">

        <button className="filter-btn" onClick={() => {
        const filteredResList= resList.filter(res => res.avgRating > 4);
        console.log(filteredResList);
        setResList(filteredResList);
        }}>Top Rated Restaurants</button>
   </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestroCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
// default export 