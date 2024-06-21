import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <Header />
      <main className='p-4'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-2'>Welcome to Our Website!</h1>
        <p className='text-center text-gray-600'>This is the main section of our homepage, designed to catch your attention.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Home;