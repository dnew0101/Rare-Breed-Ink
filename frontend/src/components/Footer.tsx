import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (<>
    <footer className='fixed bottom-0 w-full bg-black text-white p-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <h2 className='font-bold text-xl mb-2'>Rare Breed Ink</h2>
          <p>Tacoma, WA</p>
          <p>Put Phone Number Here!</p>
        </div>
        <div>
          <a href="https://www.instagram.com/rarebreedinkstudio/" className='text-white mr-4'>
          <i className="fab fa-instagram-square fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/rarebreedink66/" className='text-white'>
          <i className="fab fa-facebook-square fa-2x"></i>
          </a>
        </div>
        <div>
          <p className="text-xs">&copy; {new Date().getFullYear()} Rare Breed Ink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </>)
}

export default Footer;