import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex justify-between shadow-lg w-11/12 m-auto ">
      <div className="logo">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="p-4 font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li
            className="p-4"
            onClick={() => {
              if (btnNameReact === "Login") {
                setBtnNameReact("Logout");
              } else {
                setBtnNameReact("Login");
              }
            }}
          >
            {btnNameReact}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
