import React from 'react'
import Header1 from './Header1'
import "./assets/Home.css"
import Intro from './Intro'
import Programs from './Programs' 
import Testimonial from './Testimonial'
import Footer from './Footer'

const Home2 = () => {
  return (
    <div className='Background'>
          <Header1/>
          <Intro/>
          <Programs/>
          <Testimonial/>
          <Footer/>
    </div>
  )
}

export default Home2