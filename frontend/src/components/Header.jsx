import React from 'react'

const Header = () => {
  return (<>
    <header className='flex justify-between items-center p-6 bg-gray-800 text-white'>
      <div>
        <img src="/path/to/shop/logo" alt="Rare Breed Ink Logo" className='h-8' />
      </div>
      <nav>
        <ul className='flex space-x-4'>
          <li>Home</li>
          <li>About</li>
          <li>Aftercare</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  </>)
}

export default Header