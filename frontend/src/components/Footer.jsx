import React from 'react';

const Footer = () => {
  return (<>
    <footer className='bg-gray-800 text-white p-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <h2 className='font-bold text-xl mb-2'>Rare Breed Ink</h2>
          <p>Tacoma, WA</p>
          <p>Put Phone Number Here!</p>
        </div>
        <div>
          <a href="" className='text-white mr-4'>Facebook Placeholder... Add Icon</a>
          <a href="" className='text-white'>Instagram Placeholder... Add Icon</a>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Rare Breed Ink. All rights reserved.</p>
        </div>
      </div>
    </footer>
    <div>Footer</div>
  </>)
}

export default Footer;