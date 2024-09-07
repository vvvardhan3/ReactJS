import { LOGO_URL } from "../utils/constant";
import { useState } from "react";


const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li
            className="login-btn"
            onClick={() => {
              if (btnNameReact === 'Login') {
                setBtnNameReact('Logout');
              } else {
                setBtnNameReact('Login');
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
