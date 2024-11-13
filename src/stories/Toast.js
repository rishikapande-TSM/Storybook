import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Toast.css'; 

const Toast = ({ message, type, duration, onClose }) => {
  // Auto-close the toast after the given duration
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the toast after the duration
    }, duration);

    
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  
  const toastClass = `toast toast-${type}`;

  // If the component is receiving an invalid type, fallback to 'info'
  const validTypes = ['success', 'error', 'warning', 'info'];
  const toastType = validTypes.includes(type) ? type : 'info'; 

  // Ensure that the component always returns JSX
  if (!message) return null; 

  return (
    <div className={`toast toast-${toastType}`}>
      <span className="toast-message">{message}</span>
      <button className="toast-close-btn" onClick={onClose}>X</button>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  duration: PropTypes.number, 
  onClose: PropTypes.func.isRequired,
};

Toast.defaultProps = {
  duration: 5000, 
};

export default Toast;
