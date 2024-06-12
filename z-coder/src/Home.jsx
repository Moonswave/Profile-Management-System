import React from 'react'
import Header from './Header'
import "./assets/Home.css"
import Intro from './Intro'
import Programs from './Programs' 
import Testimonial from './Testimonial'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='Background'>
        <Header/>
        <Intro/>
        <Programs/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home