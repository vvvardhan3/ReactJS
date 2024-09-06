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


  export default {
    Header
  }