import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXm-Lz1wqab2UY4q-vR2b1nEBH3NHEPpIsA&s"
        />
      </div>
      <div className="nav-items">
        <ul className="list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={props.resLogo}
      />
      <h3 className="res-name">{props.resName}</h3>
      <h4 className="res-cuisine"> {props.resCuisine}</h4>
      <h4 className="res-rating"> {props.resRating}</h4>
      <h4 className="res-eta"> {props.resEta}</h4>
      <h4 className="res-cost"> {props.resCost}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="KFC"
          resCuisine="Burgers, Rolls & Wraps"
          resLogo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_347868.JPG"
          resRating= "4.2"
          resEta= "30-35mins"
          resCost= "700 for two"
        />
        <RestaurantCard 
        resName="Pizza Hut"
        resCuisine="Pizzas"
        resLogo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/e981bc3d-6ba5-4150-8354-281f41fce767_10584.jpg"
        resRating= "4.4"
        resEta= "35-40mins"
        resCost= "500 for two"
         />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("text"));
root.render(<AppLayout></AppLayout>);
