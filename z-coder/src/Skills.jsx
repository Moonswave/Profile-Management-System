import React, { useState } from 'react';
import Modal from 'react-modal';
import './assets/Userdetail.css';

Modal.setAppElement('#root');

const Skills = ({ isOpen, onRequestClose, onSubmit }) => {
    const [skill, setSkill] = useState('');

    const handleChange = (e) => {
        setSkill(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(skill);
        setSkill(''); // Reset the input field
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
            overlayClassName="overlay"
        >
            <div className="modal-content">
                <h2>Add Skill</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="skill">Skill: </label>
                        <input
                            type="text"
                            id="skill"
                            name="skill"
                            value={skill}
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

export default Skills;
