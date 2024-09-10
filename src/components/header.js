import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="flex justify-between shadow-lg ">
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
          <li className="p-4">
            <Link to="/cart">Cart</Link>
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
