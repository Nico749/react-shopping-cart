import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'

const Homepage = () => {
  return (
    <div>
     <Navbar />
     <Slider /> 
     <Categories />    
     <Newsletter />
     <Footer />
    </div>
  )
}

export default Homepage
