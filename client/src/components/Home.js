import React from 'react'
import Navbar from './Navbar/Navbar'
import DropdownComponent from './Navbar/test'
import Mn from './mn'
import Example from './bang'
import Banner from './Banner/Banner'
import B2 from './Banner/B2'
import B3 from './Banner/B3'
import B4 from './Banner/B4'
import SliderComponent from './Banner/B5'
import Footer from './Footer/Footer'
import Card from './card/Card'
const Home = () => {
  return (
    <>
        <Navbar/>
        {/* <B2/>
        <B4/> */}
        <SliderComponent/>
        <Card/>
        {/* <Banner/> */}
        <Footer/>
    </>
  )
}

export default Home;