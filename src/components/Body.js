import RestaurantCard from "./restaurantCard";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]); // useState Variable

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch( 
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2472528&lng=80.1514447&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    // Optional Chaining
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  if (listOfRestaurants.length === 0) {
    return <ShimmerUi></ShimmerUi>
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (resData) => resData.info.avgRating > 4.5
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
