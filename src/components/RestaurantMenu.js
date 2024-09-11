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
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=121603"
    );
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
    <div className="p-8 w-10/12 m-auto ">
      <div className="p-6  w-[566] h-auto m-auto  shadow-2xl">
        <div className="font-bold text-2xl">
          <h1 className="">{resInfo?.cards[2]?.card?.card?.info.name}</h1>
        </div>
        <div className="flex justify-between">
          <div>
            <h3>• {resInfo?.cards[2]?.card?.card?.info.locality}</h3>
            <h3>• {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</h3>
            <h3>• {resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")}</h3>
          </div>
          <div className="">
            <h3>
              • {resInfo?.cards[2]?.card?.card?.info?.sla.minDeliveryTime} - {resInfo?.cards[2]?.card?.card?.info?.sla.maxDeliveryTime} mins
            </h3>
            <h3>• {resInfo?.cards[2]?.card?.card?.info.avgRatingString} ({(resInfo?.cards[2]?.card?.card?.info.totalRatingsString)})  </h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
