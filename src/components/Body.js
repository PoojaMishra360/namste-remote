import RestroCard from "./RestroCard"; // default import
import resObject from "../utils/mockData";
import React, { useState, useEffect } from "react";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [resFilterList, setResFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Case 1 if no dependency array is provided, the useEffect will run after every render of the component.
  // Case 2 if an empty dependency array is provided, the useEffect will run only once after the initial render of the component.
  // Case 3 if a dependency array with variables is provided, the useEffect will run after the initial render and whenever any of the dependencies change. (variable changes )
  useEffect(() => {
    setTimeout(() => {
      console.log("Data fetched");
      setResList(resObject);
      setResFilterList(resObject);
    }, 1000);

    fetchData();
  }, [resFilterList]);
  const fetchData = async () => {
    // const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    // const json = await data.json();
    // console.log(json);
    //  setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || resObject);
  };

  const handleSearch = () => {
    const filteredList = resList.filter((res) =>
      res.resName.toLowerCase().includes(searchText.toLowerCase())
    );
    setResFilterList(filteredList);
  };

  return resList.length == 0 ? (
    <h1> data loaded </h1>
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = resList.filter((res) => res.avgRating > 4);
            console.log(filteredResList);
            setResFilterList(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resFilterList.map((res) => (
          <RestroCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
// default export
