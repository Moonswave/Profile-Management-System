import React from 'react'
import './assets/Footer.css'

const Footer = () => {
  return (
    <>
        <div className='foot'>
            <div className='foot1'>
                <p className='foot2'>About</p>
                <p className='foot2'>Policy</p>
                <p className='foot2'>Terms</p>
            </div>
            <div className='foot3'>
                <img src="./src/assets/logo.png" alt=""  className='foot4'/>
                <p className='foot2'>Coding Made Easy</p>
            </div>
            <div className='foot1'>
                <p className='foot2'>Tutorials</p>
                <p className='foot2'>Community</p>
                <p className='foot2'>Resources</p>
            </div>
        </div>
    </>
  )
}

export default Footer