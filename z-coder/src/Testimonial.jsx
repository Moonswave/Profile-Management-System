import React from 'react'
import './assets/Testimonial.css'

const Testimonial = () => {
  return (
    <>
      <div className='test'>
        <div className='test1'>
          <h1 className='test2'>
            What our happy students say about us
          </h1>
          <div className='test5'>
          <button className='test3'><img src='https://img.icons8.com/?size=100&id=39944&format=png&color=000000' className='test4'/></button>
          <button className='test3'><img src='https://img.icons8.com/?size=100&id=39969&format=png&color=000000' className='test4'/></button>
          </div>
        </div>
        <div className='test6'>
        <div class="testimonial-card">
          <div class="quote-mark">“</div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus aut odio unde dolore quia excepturi, sequi minima, voluptates quos tempora molestias vel. Temporibus alias ea ex, nisi voluptas illum quisquam?
          </p>
          <div class="author-info">
            <img
              src="./src/assets/6.png"
              alt="Calvin Thomas"
              class="author-image"
            />
            <div class="author-details">
              <p class="author-name">Calvin Thomas</p>
              <p class="author-title">Programmer</p>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="quote-mark">“</div>
          <p class="testimonial-text">
            You really feel like there's nothing you can't learn, which in turn
            builds so much confidence in your skills and gives the momentum to keep
            learning.
          </p>
          <div class="author-info">
            <img
              src="./src/assets/6.png"
              alt="Calvin Thomas"
              class="author-image"
            />
            <div class="author-details">
              <p class="author-name">Calvin Thomas</p>
              <p class="author-title">Programmer</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
  

export default Testimonial