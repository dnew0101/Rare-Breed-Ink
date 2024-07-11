import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Photos/logo.jpeg';
import { NavigationMenu } from '../@/components/ui/navigation-menu.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)' }} 
    className='fixed top-0 w-full flex justify-between items-center p-6 text-white'>
      {/* <div>
        <img src={logo} alt="Rare Breed Ink Logo" className='h-8' />
      </div>
      <nav>
        <ul className='flex space-x-4'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/aftercare">Aftercare</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav> */}

      {/*Split header into two sections; start with a container div for both sides
      then section off with two nav element. Left side will contain logo image, right side
      will be hamburger when in mobile and nav menus when desktop*/}
      <div className='full-nav-container h-14 max-w-screen-2xl items-center'>
        <NavigationMenu className={''}>

        </NavigationMenu>
        <NavigationMenu className={''}>

        </NavigationMenu>
      </div>
    </header>
  );
}

export default Header;