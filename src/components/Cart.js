import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-auto p-4">
            <h1 className="texr-2xl font-bold">Cart</h1>
            <div >
                <div className="p-1 w-[100] rounded-md m-auto my-1 shadow-xl text-white bg-red-500"
                onClick={handleClearCart}>
                <button>Clear Cart</button>
                </div>
                {cartItems.length === 0 && <h1>Please add Items to the cart</h1> }
               
                <div className="w-6/12 m-auto bg-slate-100 rounded-lg">
                <ItemList items={cartItems}></ItemList>
                </div>
                
            </div>
        </div>
    )
}

export default Cart;