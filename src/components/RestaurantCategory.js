import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {

    const [showItems, setShowItems] = useState(false);
  
    const handleClick = () => {
        setShowItems(!showItems);
    }

  return (
    <div>
      <div className="p-6  w-[666] h-auto  mx-auto my-3 shadow-xl bg-gray-50 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>▼</span>
        </div>
        { showItems && <ItemList items={data.itemCards} />}
      </div>
      
    </div>
  );
};

export default RestaurantCategory;
