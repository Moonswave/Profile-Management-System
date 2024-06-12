import React from 'react';
import "./assets/Intro.css";
import Header from './Header';

const Intro = () => {
  return (
    <>
      <div className='full'>
        <div className='punch'>
          <span className='para'>Learn to </span>
          <span className="highlight highlight-red para">code </span>
          <span className='para'>& </span>
          <span className="highlight highlight-yellow para">design </span>
          <span className='para'>, and more all on your own time</span>
          <p className='info'>
            A2H is a bootcamp-tier that guides you through a full Curriculum that includes a portfolio of curated projects, workshops, quizzes, and access to exclusive Slack Community.
          </p>
          <div className='find'>
            <div className='course'>
              <img src='https://img.icons8.com/?size=100&id=132&format=png&color=000000' className='icon1' alt='course icon'/>
              <input type="text" placeholder='Course Name' className='value'/>
            </div>
            <h1>|</h1>
            <div className='course'>
              <img src='https://img.icons8.com/?size=100&id=Wfmeg9dVsvca&format=png&color=000000' className='icon1' alt='tutor icon'/>
              <input type='text' placeholder='Tutor Name' className='value'/>
            </div>
          <button className='search'>Search</button>
          </div>
        </div>
        <div>
          <img src='./src/assets/1.png' className='baccha' alt='background'/>
        </div>
      </div>
    </>
  );
}

export default Intro;
