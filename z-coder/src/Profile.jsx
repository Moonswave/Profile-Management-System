import React, { useState, useEffect } from 'react';
import './assets/Profile.css';
import { NavLink } from 'react-router-dom';
import Userdetail from './Userdetail';
import Rating from './Rating';
import Skills from './Skills';
import Project from './Project';

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [userDetail, setUserDetail] = useState([]);
    const [rating, setRating] = useState([]);
    const [skills, setSkills] = useState([]);
    const [project, setProject] = useState([]);

    useEffect(() => {
        const storedUserDetail = JSON.parse(localStorage.getItem('userDetail')) || [];
        const storedRating = JSON.parse(localStorage.getItem('rating')) || [];
        const storedSkill = JSON.parse(localStorage.getItem('skills')) || [];
        const storedProject = JSON.parse(localStorage.getItem('project')) || [];

        if (storedUserDetail.length === 0) {
            setIsModalOpen(false);
        } else {
            setUserDetail(storedUserDetail);
        }

        if (storedRating.length === 0) {
            setIsModalOpen1(false);
        } else {
            setRating(storedRating);
        }

        if (storedSkill.length === 0) {
            setIsModalOpen2(false);
        } else {
            setSkills(storedSkill);
        }

        if (storedProject.length === 0) {
            setIsModalOpen3(false);
        } else {
            setProject(storedProject);
        }
    }, []);

    useEffect(() => {
        if (userDetail.length > 0) {
            localStorage.setItem('userDetail', JSON.stringify(userDetail));
        }
    }, [userDetail]);

    useEffect(() => {
        if (rating.length > 0) {
            localStorage.setItem('rating', JSON.stringify(rating));
        }
    }, [rating]);

    useEffect(() => {
        if (skills.length > 0) {
            localStorage.setItem('skills', JSON.stringify(skills));
        }
    }, [skills]);

    useEffect(() => {
        if (project.length > 0) {
            localStorage.setItem('project', JSON.stringify(project));
        }
    }, [project]);

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

    const openModal2 = () => {
        setIsModalOpen2(true);
    };

    const closeModal2 = () => {
        setIsModalOpen2(false);
    };

    const openModal3 = () => {
        setIsModalOpen3(true);
    };

    const closeModal3 = () => {
        setIsModalOpen3(false);
    };

    const addUserDetail = (detail) => {
        setUserDetail([detail]);
    };

    const addRating = (rate) => {
        setRating([rate]);
    };

    const addSkill = (skill) => {
        setSkills((prevSkills) => [...prevSkills, skill]);
    };

    const handleDelete = (skill) => {
        setSkills(prevSkills => prevSkills.filter(s => s !== skill));
    };

    const addProject = (project) => {
        setProject((prevProject) => [...prevProject, project]);
    };

    const handleDelete1 = (project) => {
        setProject(prevProject => prevProject.filter(p => p !== project));
    };

    const handleLogout = () => {
        setUserDetail([]);
        setRating([]);
        setSkills([]);
        setProject([]);
        localStorage.removeItem('userDetail');
        localStorage.removeItem('rating');
        localStorage.removeItem('skills');
        localStorage.removeItem('project');
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
                    <NavLink to={`/`} className='opt'>
                        <button className="logout-button" onClick={handleLogout}>
                            <p className="material-icons">logout</p>
                        </button>
                    </NavLink>
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
                            <button className="edit-button" onClick={openModal2}>Edit</button>
                        </div>
                        <div className="card-content">
                            <ul>
                                {skills.map((skill, index) => (
                                    <li className='card-content1' key={index}>
                                        <p>{skill}</p>
                                        <button type='submit' className='delete' onClick={() => handleDelete(skill)}>
                                            <img src='https://img.icons8.com/?size=100&id=99933&format=png&color=000000' className='delete'/>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h2>Projects Done (GitHub Repo. Link)</h2>
                            <button className="edit-button" onClick={openModal3}>Edit</button>
                        </div>
                        <div className="card-content">
                            <ul>
                                {project.map((project, index) => (
                                    <li className='card-content1' key={index}>
                                        <NavLink to={project.projectLink} target='blank' className="opt">
                                            <p className='project'>{project.projects}</p>
                                        </NavLink>
                                        <button type='submit' className='delete' onClick={() => handleDelete1(project)}>
                                            <img src='https://img.icons8.com/?size=100&id=99933&format=png&color=000000' className='delete'/>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Userdetail isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={addUserDetail} />
            <Rating isOpen={isModalOpen1} onRequestClose={closeModal1} onSubmit={addRating} />
            <Skills isOpen={isModalOpen2} onRequestClose={closeModal2} onSubmit={addSkill} />
            <Project isOpen={isModalOpen3} onRequestClose={closeModal3} onSubmit={addProject} />
        </div>
    );
};

export default Profile;
