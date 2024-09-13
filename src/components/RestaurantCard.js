import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo } = resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-5 p-4 w-80 h-90 cursor-pointer shadow-xl hover:bg-gray-200 ease-in duration-300 hover:scale-105">
      <img 
        className="rounded-md w-72 h-44 "
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId} />
      <h3 className="font-bold pt-2 text-lg"> {name}</h3>
      <h4 className="text-light line-clamp-1 text-slate-600"> {cuisines.join(", ")}</h4>
      <h4> {avgRating} stars</h4>
      <h4> {deliveryTime} mins</h4>
      <h4> {costForTwo} for two</h4>
    </div>
  );
};

export default RestaurantCard;
