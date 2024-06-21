import React from 'react';
import { Link } from 'react-router-dom'; // Step 1: Import Link
import logo from '../assets/logo.jpeg';

const Header = () => {
  return (
    <header className='fixed top-0 w-full flex justify-between items-center p-6 bg-black text-white'>
      <div>
        <img src={logo} alt="Rare Breed Ink Logo" className='h-8' />
      </div>
      <nav>
        <ul className='flex space-x-4'>
          <li><Link to="/">Home</Link></li> {/* Step 2: Use Link components */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/aftercare">Aftercare</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;