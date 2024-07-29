import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">Muslih Akbar</div>
      <nav>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
