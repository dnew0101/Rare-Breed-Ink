import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

//default to mobile first, then apply different styles via "md" classes for non-mobile devices
const Home = (props) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <Header />
      <main className='w-full h-full max-w-none max-h-none mx-0'>
        <section className='heroSection justify-center align-middle'>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home;