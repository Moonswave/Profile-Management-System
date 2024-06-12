import React from 'react'
import './assets/Programs.css'

const Programs = () => {
  return (
    <>
      <div className='text'>
        <span className='pro-heading'>
          It's free and way more fun, than you ever thought.
        </span>
        <p className='pro-para'>
          Exclusive slack includes a portfolio of curated projects, workshops, quizzes and access to exclusive Slack Community.
        </p>
      </div>
      <div className='tempelates'>
        <div className='temp'>
          <h2 className='temp-head'>
             Python 
          </h2>
          <img src='./src/assets/2.png' className='prog-img'/>
          <div className='temp-det'>
            <p className='author'>By Aniruddha</p>
            <p className='author'>10 hr</p>
          </div>
          <button className='enroll'>
            Enroll Course
          </button>
        </div>
        <div className='temp'>
          <h2 className='temp-head'>
            Game Development
          </h2>
          <img src='./src/assets/3.png' className='prog-img'/>
          <div className='temp-det'>
            <p className='author'>By AK</p>
            <p className='author'>10 hr</p>
          </div>
          <button className='enroll'>
            Enroll Course
          </button>
        </div>
        <div className='temp'>
          <h2 className='temp-head'>
           Data Science
          </h2>
          <img src='./src/assets/4.png' className='prog-img'/>
          <div className='temp-det'>
            <p className='author'>By HVP</p>
            <p className='author'>10 hr</p>
          </div>
          <button className='enroll'> 
            Enroll Course
          </button>
        </div>
        <div className='temp'>
          <h2 className='temp-head'>
           Cloud Computing
          </h2>
          <img src='./src/assets/5.png' className='prog-img'/>
          <div className='temp-det'>
            <p className='author'>By Guddu</p>
            <p className='author'>10 hr</p>
          </div>
          <button className='enroll'>
            Enroll Course
          </button>
        </div>
      </div>
    </>
  )
}

export default Programs