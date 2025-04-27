// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import "./nav.css";
import mainLogo from "../../assets/mainLogo.png";
const Navbar = () => {
      const [activeItem, setActiveItem] = useState(null);

      const handleItemClick = (item) => {
        setActiveItem(item);
      };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={mainLogo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-items">
        <div className="navbar-item-group">
          {["Communities", "Opportunities", "Messages", "Search"].map(
            (item) => (
              <div
                key={item}
                className={`navbar-item ${activeItem === item ? "active" : ""}`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </div>
            )
          )}
        </div>
        <div className="navbar-item">My Account</div>
      </div>
    </nav>
  );
};

export default Navbar;
