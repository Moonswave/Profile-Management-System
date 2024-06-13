import React from 'react'
import "./assets/Header.css"
import { NavLink } from 'react-router-dom'

const Header1 = () => {
  return (
    <>
        <div className='Header'>
            <div>
              <NavLink to={`/home`}>
            <img src="./src/assets/logo.png" className='logo' />
            </NavLink>
            </div>
            <div className='context'> 
                <h2 className='content'>Programs</h2>
                <h2 className='content'>|</h2>
                <NavLink to={`/problem`} className='problem'>
                <h2 className='content'>Problems</h2>
                </NavLink>
                <h2 className='content'>|</h2>
                <h2 className='content'>Calender</h2>
                <h2 className='content'>|</h2>
                <h2 className='content'>Testimonial</h2>
            </div>
            <div className='butn'>
              <NavLink to={`/profile`}>
                <img src='./src/assets/6.png' className='userlogo'/>
                </NavLink>
            </div>
        </div>
    </>
  )
}

export default Header1