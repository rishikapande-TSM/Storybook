import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Popover.css'; // Import the CSS file for styling

const Popover = ({ content, isOpen }) => {
  return (
    isOpen && (
      <div className="popover">
        <div className="popover-content">{content}</div>
        {/* <button className="popover-close-btn" onClick={onClose}>
          Close
        </button> */}
      </div>
    )
  );
};

Popover.propTypes = {
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popover;
