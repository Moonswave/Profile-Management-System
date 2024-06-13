import React, { useState } from 'react';
import Modal from 'react-modal';
import './assets/InfoModal.css';

Modal.setAppElement('#root');

const InfoModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    problemLink: '',
    topic: '',
    solutionLink: '',
    language: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Problem Name is required';
    }
    if (!formData.problemLink || !isValidURL(formData.problemLink)) {
      validationErrors.problemLink = 'A valid Problem Link is required';
    }
    if (!formData.topic) {
      validationErrors.topic = 'Topic is required';
    }
    if (!formData.solutionLink || !isValidURL(formData.solutionLink)) {
      validationErrors.solutionLink = 'A valid Solution Link is required';
    }
    if (!formData.language) {
      validationErrors.language = 'Language is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      onRequestClose();
    } else {
      setErrors(validationErrors);
    }
  };

  const isValidURL = (string) => {
    try {
      new URL(string);
    } catch (_) {
      return false;
    }
    return true;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>Enter Problem Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="info-name">Problem Name</label>
            <input
              type="text"
              id="info-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>
          <div className="input-group">
            <label htmlFor="info-problemLink">Problem Link</label>
            <input
              type="url"
              id="info-problemLink"
              name="problemLink"
              value={formData.problemLink}
              onChange={handleChange}
              required
            />
            {errors.problemLink && <small className="error-text">{errors.problemLink}</small>}
          </div>
          <div className="input-group">
            <label htmlFor="info-topic">Topic</label>
            <input
              type="text"
              id="info-topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
            />
            {errors.topic && <small className="error-text">{errors.topic}</small>}
          </div>
          <div className="input-group">
            <label htmlFor="info-solutionLink">Solution Link</label>
            <input
              type="url"
              id="info-solutionLink"
              name="solutionLink"
              value={formData.solutionLink}
              onChange={handleChange}
              required
            />
            {errors.solutionLink && <small className="error-text">{errors.solutionLink}</small>}
          </div>
          <div className="input-group">
            <label htmlFor="info-language">Language</label>
            <input
              type="text"
              id="info-language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
            />
            {errors.language && <small className="error-text">{errors.language}</small>}
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

export default InfoModal;
