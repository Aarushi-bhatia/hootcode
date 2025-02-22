import React from 'react'
import Hero from './Hero'
import About from './About'
import OurProduct from './OurProduct'

const HomePage = () => {
  return (
    <>
    <Hero />
    <About />
    <OurProduct />
    <footer className='bottom-0 p-4 font-semibold text-center text-white bg-[#183A56]'>HootCode @2025</footer>
    </>
  )
}

export default HomePage