import React, { useState } from 'react';
import '../styles/header.scss'; // Make sure you have the correct path

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleMenuClickClose = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li className='nav-links-one'><a href="#home">HELLO</a></li>
         
          <li className='nav-links-three'>
            <a href="#services" onClick={handleMenuClick}>MENU</a>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button className='cross' onClick={handleMenuClickClose}>X</button>
                <ul>
                  <li><a href="#option1">ABOUT</a></li>
                  <li><a href="#option2" >WORK</a></li>
                  <li><a href="#option3">TEAM</a></li>
                  <li><a href="#option3">BLOG</a></li>
                  <li><a href="#option3">HELLO</a></li>
                 
                </ul>
               
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
