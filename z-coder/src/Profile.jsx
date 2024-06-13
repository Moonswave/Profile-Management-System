import React from 'react'
import './assets/Profile.css'
import { NavLink, useNavigate } from 'react-router-dom';


const Profile = () => {
  return (
    <div className='pro'>
    <div class="container">
        <aside class="sidebar">
            <div class="logo">
                <NavLink to={`/home`}>
                <img src="./src/assets/logo.png" alt="Company Logo"/>
                </NavLink>
            </div>
            <nav className='preferences'>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Materials</a></li>
                    <li><a href="#">Transactions</a></li>
                </ul>
            </nav>
            <div class="preferences">
                <a href="#">Settings</a>
                <a href="#">Help Center</a>
            </div>
            <NavLink to={`/`}>
            <button class="logout">Log Out</button>
            </NavLink>
        </aside>
        <div class="main-content">
            <div class="top-bar">
                <div class="profile-dropdown">
                    <img src="./src/assets/profile-pic.jpg" alt="Profile Picture" className="profile-pic"/>
                    <div class="dropdown-content">
                        <img src="./src/assets/profile-pic.jpg" alt="Profile Picture" className="dropdown-profile-pic"/>
                        <h3>User Name</h3>
                        <p>@username</p>
                    </div>
                </div>
            </div>
            <section class="overview">
                <div class="soft-skills">
                    <h4>Soft Skills</h4>
                </div>
                <div class="interests">
                    <h4>Interests</h4>
                </div>
            </section>
            <section class="details">
                <div class="study-time">
                    <h4>Study Time</h4>
                </div>
                <div class="ongoing-courses">
                    <h4>Ongoing Courses</h4>
                </div>
            </section>
            <section class="additional-info">
                <div class="instructors">
                    <h4>Instructors</h4>
                </div>
                <div class="rewards">
                    <h4>Rewards</h4>
                </div>
            </section>
            <section class="profile-info">
                <h4>Profile Info</h4>
            </section>
        </div>
    </div>
    </div>
  )
}

export default Profile