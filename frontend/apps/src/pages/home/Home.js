import React from 'react'
import Footer from '../../components/footer/Footer'
import Cards from '../../components/homePage/cards/Cards'
import HeroSection from '../../components/homePage/herosection/HeroSection'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Cards/>
        <Footer/>
    </>
  )
}

export default Home