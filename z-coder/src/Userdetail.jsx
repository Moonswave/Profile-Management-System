import React, { useState } from 'react';
import Modal from 'react-modal';
import './assets/Userdetail.css';

Modal.setAppElement('#root');

const Userdetail = ({ isOpen, onRequestClose, onSubmit }) => {
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
                        <label htmlFor="username">Username : </label>
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
                        <label htmlFor="country">Country : </label>
                        <select
                            type="text"
                            className="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="India">India</option>
                            <option value="USA">Other</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="status">Status : </label>
                        <select
                            type="text"
                            className="country"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="College Student">College Student</option>
                            <option value="School Student">School Student</option>
                            <option value="Berojgar">Berojgar</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="institution">Institution : </label>
                        <select
                            type="text"
                            className="country"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="IIT">IIT</option>
                            <option value="NIT">NIT</option>
                            <option value="IIIT">IIIT</option>
                            <option value="Others">Chutiya</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="proPlan">Plan Type : </label>
                        <select
                            type="text"
                            className="country"
                            name="proPlan"
                            value={formData.proPlan}
                            onChange={handleChange}
                            required
                        > 
                            <option value="">Select</option>
                            <option value="Free">Free</option>
                            <option value="Basic">Basic</option>
                            <option value="Advance">Advance</option>
                            <option value="Pro Plan">Pro Plan</option>
                        </select>
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

export default Userdetail;
