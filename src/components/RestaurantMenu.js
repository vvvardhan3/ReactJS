import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(
    () => {
      fetchMenu();
    },
    [] // I want to render this restaurant menu only once!
  );

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.2472528&lng=80.1514447&restaurantId=686427");
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <ShimmerUi />;
  }

//   const { name, areaName, costForTwoMessage, cuisines, avgRating } =
//     resInfo?.cards[2]?.card?.card?.info;

//   const { deliveryTime } = resInfo?.cards[2]?.card?.card?.info?.sla;

  return (
    <div className="res-menu-container w-8/12 m-auto ">
      <div>
        <h1 className="resMenuName">{resInfo?.cards[2]?.card?.card?.info.name}</h1>
      </div>
      <div className="res-menu-card">
        <h3>{resInfo?.cards[2]?.card?.card?.info.areaName}</h3>
        <h3>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")}</h3>
        <h3>{resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</h3>
        <h3>{resInfo?.cards[2]?.card?.card?.info?.sla.deliveryTime} mins</h3>
        <h3>{resInfo?.cards[2]?.card?.card?.info.avgRating} Rating</h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
