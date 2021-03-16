import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import './nav.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);



  const links = [ 'Home', 'About Us', 'Contact' ]

  const handleScroll = () => {
    const offset=window.scrollY;
    if(offset > 50 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let menu=['navbar'];
  if(scrolled){
    menu.push('scrolled');
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav className={menu.join(" ")}>
      <div className='nav-center'>
        <div className='nav-header'>
         <h1>LOGO</h1>
          <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}>
            
            {showLinks ? <FaTimes /> : <FaBars /> }
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link, i) => {
              
              return (
                <li key={i}>
                  <a href='#' onClick={()=>setShowLinks(false)} >{link}</a>
                </li>
              );
            })}
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;