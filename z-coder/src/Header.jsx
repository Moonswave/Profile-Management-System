import React from 'react'
import "./assets/Header.css"

const Header = () => {
  return (
    <>
        <div className='Header'>
            <div>
            <img src="./src/assets/logo.png" className='logo' />
            </div>
            <div className='context'> 
                <h2 className='content'>Programs</h2>
                <h2 className='content'>|</h2>
                <h2 className='content'>Problems</h2>
                <h2 className='content'>|</h2>
                <h2 className='content'>Calender</h2>
                <h2 className='content'>|</h2>
                <h2 className='content'>Testimonial</h2>
            </div>
            <div className='butn'>
                <button className='sign'>Sign In</button>
                <button className='register'>Register <img src='https://img.icons8.com/?size=100&id=46913&format=png&color=000000' className='arrow'/></button>
            </div>
        </div>
    </>
  )
}

export default Header