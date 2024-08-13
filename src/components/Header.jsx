import React, { useState, useEffect } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Gallery', link: '/gallery' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
    
  ];

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
    }
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  return (
    <div className='header'>
      {<h1 className='left-head' onClick={handleButtonClick}>❒❒❒</h1>}
      <img src = "" className='iris'/>
      <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className='footer-top'>
        <div style={{}}>
          <span style={{fontSize: "20px", marginBottom: "1px solid black"}}>❒❒❒</span>
        </div>
      
      <div className='large-group-top'>
        <span style={{color: "black"}}>Home</span>
        <span style={{color: "black"}}>Seasons</span>
        <span style= {{fontSize: "20px" , color: "black", fontWeight: "200", paddingTop:"3px", paddingBottom: "3px"}}>Social Media: (Coming Soon)</span>
        <span style= {{fontSize: "20px", color: "black", fontWeight: "200",  paddingTop:"3px", paddingBottom: "3px"}}>Instagram (bruh.ngl)</span>
        <span style= {{fontSize: "20px", color: "black", fontWeight: "200",  paddingTop:"3px", paddingBottom: "3px"}}>Twitter</span>
        <span>About</span>
        
      </div>

      <div className='small-group-top'>
        <span>Social Media:</span>
        <span>Instagram</span>
        <span>Twitter</span>
        <span>Github</span>
        <span>Youtube</span>
        
      </div>

      <div className='policy-top'>Privacy Policy and legal terms</div>
      
      
      </div>
      </div>
      
      <h1 className='right-head'>Reach Out</h1>
    </div>
  );
};

export default React.memo(Header);

