import React, { useState, useEffect } from 'react';
import './assets/Profile.css';
import { NavLink } from 'react-router-dom';
import Userdetail from './Userdetail';
import Rating from './Rating';

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [userDetail, setUserDetail] = useState([]);
    const [rating, setRating] = useState([]);

    useEffect(() => {
        const storedUserDetail = JSON.parse(localStorage.getItem('userDetail'));
        const storedRating = JSON.parse(localStorage.getItem('rating'));

        if (storedUserDetail) {
            setUserDetail(storedUserDetail);
        }

        if (storedRating) {
            setRating(storedRating);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userDetail', JSON.stringify(userDetail));
    }, [userDetail]);

    useEffect(() => {
        localStorage.setItem('rating', JSON.stringify(rating));
    }, [rating]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal1 = () => {
        setIsModalOpen1(true);
    };

    const closeModal1 = () => {
        setIsModalOpen1(false);
    };

    const addUserDetail = (detail) => {
        setUserDetail([detail]);
    };

    const addRating = (rate) => {
        setRating([rate]);
    };

    return (
        <div className='pro'>
            <div className="container">
                <div className="left-section">
                    <img src={"./src/assets/logo.png"} alt="Website Logo" className="logo" />
                    <div className="options">
                        <NavLink to={`/home`} className="opt">
                            <div className="option">Home</div>
                        </NavLink>
                        <NavLink to={`/problem`} className="opt">
                            <div className="option">Saved Problems</div>
                        </NavLink>
                        <div className="option">Contest Calendar</div>
                    </div>
                    <button className="logout-button">
                        <span className="material-icons">logout</span> Logout
                    </button>
                </div>
                <div className="main-section">
                    <div className="card user-details-card">
                        <div className="card-header">
                            <h2>User Details</h2>
                            <button className="edit-button" onClick={openModal}>Edit</button>
                        </div>
                        <div className="card-content user-details-content">
                            <img src={'./src/assets/profile-pic.jpg'} alt="User Image" className="user-image" />
                            {userDetail.map((detail, index) => (
                                <div className="user-info" key={index}>
                                    <p><strong>Username:</strong> {detail.username} </p>
                                    <p><strong>Country:</strong> {detail.country} </p>
                                    <p><strong>Status:</strong> {detail.status}</p>
                                    <p><strong>Institution:</strong> {detail.institution} </p>
                                    <p><strong>Pro Plan:</strong> {detail.proPlan} </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h2>Ratings on Coding Platforms</h2>
                            <button className="edit-button" onClick={openModal1}>Edit</button>
                        </div>
                        {rating.map((rate, index) => (
                            <div className="user-info" key={index}>
                                <p><strong>Atcoder:</strong> {rate.atcoder} </p>
                                <p><strong>Code Forces:</strong> {rate.codeforces} </p>
                                <p><strong>Code Chef:</strong> {rate.codechef}</p>
                                <p><strong>Geeks For Geeks:</strong> {rate.gfg} </p>
                                <p><strong>Leetcode:</strong> {rate.leetcode} </p>
                            </div>
                        ))}
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h2>Skill Sets</h2>
                            <button className="edit-button">Edit</button>
                        </div>
                        <div className="card-content">
                            <ul>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h2>Projects Done (GitHub Repo. Link)</h2>
                            <button className="edit-button">Edit</button>
                        </div>
                        <div className="card-content">
                            <ul>
                                <li>Hello</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Userdetail isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={addUserDetail} />
            <Rating isOpen={isModalOpen1} onRequestClose={closeModal1} onSubmit={addRating} />
        </div>
    );
};

export default Profile;
