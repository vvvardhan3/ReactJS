import { useState, useEffect } from "react";
import RestaurantMenuShimmerUi from "./RestaurantMenuShimmerUi";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <RestaurantMenuShimmerUi />;
  }

  const {
    name,
    locality,
    costForTwoMessage,
    cuisines,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { minDeliveryTime, maxDeliveryTime } =
    resInfo?.cards[2]?.card?.card?.info?.sla;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div>
      <div className="p-8 w-10/12 m-auto ">
        <div className="p-6  w-[566] h-auto m-auto  shadow-2xl">
          <div className="font-bold text-2xl">
            <h1 className="">{name}</h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h3>• {locality}</h3>
              <h3>• {costForTwoMessage}</h3>
              <h3>• {cuisines}</h3>
            </div>
            <div className="">
              <h3>
                • {minDeliveryTime} - {maxDeliveryTime} mins
              </h3>
              <h3>
                • {avgRatingString} ({totalRatingsString}){" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 w-10/12 m-auto">
        <ul>
          {categories.map((category) => (
            <RestaurantCategory data = {category?.card?.card}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
