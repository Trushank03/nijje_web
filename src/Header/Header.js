import React from "react";
import "./Header.css"; // Optional: You can style this component with CSS
import nijje from "./Nijje_App_Icon.png";
import user from "./pngwing.com.png";
const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <img 
          src={nijje}
          alt="Logo" 
          className="logo-image" 
        />
          <div className="header-text">Nijje</div>
      </div>

      {/* Center text */}
      <div className="header-text">
        <div>Admin Panel</div>
      </div>

      <div className="leftContainer">
        <div className="nameContainer">Trushank Lohar</div>
        <div>
        
        <img src={user} alt='profile_image' className="profilePic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
