import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo } = resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-5 p-4 w-[260] shadow-xl hover:bg-gray-200  ">
      <img 
        className="rounded-md "
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId} />
      <h3 className="font-bold pt-2 text-lg"> {name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {avgRating} stars</h4>
      <h4> {deliveryTime} mins</h4>
      <h4> {costForTwo} for two</h4>
    </div>
  );
};

export default RestaurantCard;
