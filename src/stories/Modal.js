import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css'; 

const Modal = ({ isOpen, title, description, onClose }) => {
  // Don't render the modal if it's not open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close-btn" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <p className="modal-description">{description}</p>
        </div>
      </div>
    </div>
    
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,    
  title: PropTypes.string.isRequired,   
  description: PropTypes.string.isRequired,  
  onClose: PropTypes.func.isRequired,   
};

export default Modal;
