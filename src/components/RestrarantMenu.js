import React, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";

import { restroListMenu } from "../utils/constant";

const RestrarantMenu = () => {
    const [menuList, setMenuList] = useState([]);
    const {resId} = useParams();
    
 useEffect(() => {  
    console.log("RestrarantMenu useEffect");
    fetchMenu();
    setInterval(() => {
        console.log("Interval from RestrarantMenu");
       }, 1000);

       // cleanup function when component unmounts (when we navigate away or close the component or page leaves)
       return () => {
        clearInterval();
        console.log("RestrarantMenu component unmounted");
       }
 }, []);


 const fetchMenu = async() =>{
  const data =  await fetch(restroListMenu + resId);
    const json = await data.json();
    console.log(json);
    setMenuList(json);
}

const {name , cuisines ,costForTwoMessage}= menuList?.data?.cards[2]?.card?.card?.info || {};
   const {itemCards} = menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card|| {};

console.log(itemCards);
   return (
    <div className="menu">
        <h1>{menuList?.data?.cards[2]?.card?.card?.info?.name}</h1>
        <h3>{cuisines?.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <ul>
            {itemCards?.map((item) => (
                <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.price}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default RestrarantMenu
