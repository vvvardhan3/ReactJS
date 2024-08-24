import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXm-Lz1wqab2UY4q-vR2b1nEBH3NHEPpIsA&s"/>
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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h3>
        //
      </h3>
    </div>
  )
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
          Search
      </div>
      <div className="res-container">
        // RestaurantCards
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("text"));
root.render(<AppLayout></AppLayout>);
