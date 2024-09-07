import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li
            className="login-btn"
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
