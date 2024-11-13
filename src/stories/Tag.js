import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Tag.css';  // Assuming custom CSS for styling

// Status variant mapping to icons and colors
const statusVariants = {
  success: {
    icon: faCheckCircle,
    color: '#28a745', // Green
  },
  processing: {
    icon: faSpinner,
    color: '#17a2b8', // Blue
    spin: true,  // Spinner should rotate
  },
  error: {
    icon: faTimesCircle,
    color: '#dc3545', // Red
  },
  warning: {
    icon: faExclamationCircle,
    color: '#ffc107', // Yellow
  },
};

const StatusTag = ({ label, status }) => {
  const { icon, color, spin } = statusVariants[status] || statusVariants.success;

  return (
    <div className="status-tag" style={{ backgroundColor: color }}>
      <FontAwesomeIcon icon={icon} className={`status-icon ${spin ? 'spinning' : ''}`} />
      <span className="status-label">{label}</span>
    </div>
  );
};

StatusTag.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['success', 'processing', 'error', 'warning']).isRequired,
};

export default StatusTag;
