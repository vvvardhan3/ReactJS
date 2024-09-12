import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 flex justify-between"
        >
          <div className="w-8/12">
            <div>
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-[150] h-[144] rounded-lg mx-auto "
            />
            <div className=" relative m-2 p-1  ">
              <button
                className="text-green-600 text-lg rounded-md absolute -top-7 font-bold bg-white w-[120] h-[38] hover:bg-gray-200"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
