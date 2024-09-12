import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="p-6  w-[666] h-auto mx-auto my-3 shadow-xl bg-gray-50 ">
        <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>▼</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
      
    </div>
  );
};

export default RestaurantCategory;
