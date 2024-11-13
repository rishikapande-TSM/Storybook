import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faExclamationCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Alert.css'; 

// Mapping variants to corresponding icons
const variantIcons = {
    success: faCheckCircle,
    error: faTimesCircle,
    warning: faExclamationCircle,
    info: faInfoCircle,
};

const Alert = ({ message, variant, onClose }) => {
  return (
    <div className={`alert alert-${variant}`}>
      <span className={`alert-icon ${variant}`}>
        <FontAwesomeIcon icon={variantIcons[variant]} />
      </span>
      <span className="alert-message">{message}</span>
      <button className="alert-close-btn" onClick={onClose}>X</button>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
