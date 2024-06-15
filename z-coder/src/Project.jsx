import React, { useState } from 'react';
import Modal from 'react-modal';
import './assets/Userdetail.css';

Modal.setAppElement('#root');

const Project = ({ isOpen, onRequestClose, onSubmit }) => {
    const [formData, setFormData] = useState({
    projects: '',
    projectLink: ''
    });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onRequestClose();   
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
            overlayClassName="overlay"
        >
            <div className="modal-content">
                <h2>Add Project</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="skill">Project: </label>
                        <input
                            type="text"
                            id="projects"
                            name="projects"
                            value={formData.projects}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="skill">GitHub Link: </label>
                        <input
                            type="url"
                            id="projectLink"
                            name="projectLink"
                            value={formData.projectLink}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='inf'>
                        <button type="submit" className='inf1'>Submit</button>
                        <button type="button" onClick={onRequestClose} className='inf1'>Close</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default Project;
