import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructuring:
  const { name, cuisines, avgRating, costForTwo } = resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + resData.info.cloudinaryImageId} />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cuisine"> {cuisines.join(", ")}</h4>
      <h4 className="res-rating"> {avgRating} stars</h4>
      <h4 className="res-eta"> {deliveryTime} mins</h4>
      <h4 className="res-cost"> {costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
