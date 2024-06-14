import React, { useState } from 'react';
import Modal from 'react-modal';
import './assets/Userdetail.css';

Modal.setAppElement('#root');

const Rating = ({ isOpen, onRequestClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        username: '',
        country: '',
        status: '',
        institution: '',
        proPlan: ''
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
                <h2>Edit User Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Atcoder : </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="country">Code Forces : </label>
                        <p
                            type="number"
                            className="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        >
                        </p>
                    </div>
                    <div className="input-group">
                        <label htmlFor="status">Code Chef : </label>
                        <p
                            type="number"
                            className="country"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        >
                        </p>
                    </div>
                    <div className="input-group">
                        <label htmlFor="institution">Geeks For Geeks : </label>
                        <p
                            type="number"
                            className="country"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            required
                        >
                        </p>
                    </div>
                    <div className="input-group">
                        <label htmlFor="proPlan">Leet Code : </label>
                        <p
                            type="number"
                            className="country"
                            name="proPlan"
                            value={formData.proPlan}
                            onChange={handleChange}
                            required
                        > 
                        </p>
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

export default Rating;
