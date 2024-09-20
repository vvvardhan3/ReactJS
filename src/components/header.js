import logo from "../../assets/logo.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className=" border-b-2  ">
      <div className="text-gray-500 flex justify-between py-2  w-8/12 m-auto r ">
        <div>
          <Link to="/"> 
          <img
            className="p-1 transition duration-200 cursor-pointer  hover:scale-110 xs:w-8"
            src= {logo}
          />
          </Link>
        </div>
        <div className="flex items-center ">
          <ul className="flex">
            <div className="flex flex-wrap px-4 cursor-pointer">
              <li className="py-4">
                <Link to="https://www.swiggy.com/corporate/">🏢</Link>
              </li>
              <li className="py-4 px-2">
                <Link to="https://www.swiggy.com/corporate/">About Us</Link>
              </li>
            </div>

            <div className="flex flex-wrap px-4 cursor-pointer">
              <li className="py-4 ">
                <Link to="/search">🔍</Link>
              </li>
              <li className="py-4 px-2">
                <Link to="/search">Search</Link>
              </li>
            </div>
            <div className="flex flex-wrap px-4 cursor-pointer">
              <li className="py-4">
                <Link to="/help">🛟</Link>
              </li>
              <li className="py-4 px-2">
                <Link to="/help">Help</Link>
              </li>
            </div>
            <div className="flex flex-wrap px-4 cursor-pointer">
              <li className="py-4">
                <Link to="/contactus"> ✉</Link>
              </li>
              <li className="py-4 px-2">
                <Link to="/contactus">Contact Us</Link>
              </li>
            </div>
            <div className="flex flex-wrap px-4 cursor-pointer">
              <li className="py-4">
                <Link to="/cart">🛒</Link>
              </li>
              <li className="py-4 px-2">
                <Link to="/cart">Cart ({cartItems.length} items)</Link>
              </li>
            </div>
            <div className="flex flex-wrap px-4 cursor-pointer">
            <li className="py-4"
            onClick={() => {
                if (btnNameReact === "Login") {
                  setBtnNameReact("Logout");
                } else {
                  setBtnNameReact("Login");
                }
              }}
            >
              👤
            </li>
            <li className="py-4 px-2"
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

            </div>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
