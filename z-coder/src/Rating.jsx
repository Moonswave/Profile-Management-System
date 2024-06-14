import React, { useState } from 'react';
import Modal from 'react-modal';
import './assets/Userdetail.css';

Modal.setAppElement('#root');

const Rating = ({ isOpen, onRequestClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        atcoder: '',
        codeforces: '',
        codechef: '',
        gfg: '',
        leetcode: ''
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
                            type="number"
                            id="username"
                            name="atcoder"
                            value={formData.atcoder}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="country">Code Forces : </label>
                        <input
                            type="number"
                            className="country"
                            name="codeforces"
                            value={formData.codeforces}
                            onChange={handleChange}
                            required
                        >
                        </input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="status">Code Chef : </label>
                        <input
                            type="number"
                            className="country"
                            name="codechef"
                            value={formData.codechef}
                            onChange={handleChange}
                            required
                        >
                        </input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="institution">Geeks For Geeks : </label>
                        <input
                            type="number"
                            className="country"
                            name="gfg"
                            value={formData.gfg}
                            onChange={handleChange}
                            required
                        >
                        </input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="proPlan">Leet Code : </label>
                        <input
                            type="number"
                            className="country"
                            name="leetcode"
                            value={formData.leetcode}
                            onChange={handleChange}
                            required
                        > 
                        </input>
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
