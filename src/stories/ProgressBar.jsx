import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ variant, value }) => {
  switch (variant) {
    case 'linear':
      return (
        <div className="progress-bar-container">
          <div className="linear-progress">
            <div className={`progress-bar ${value === undefined ? 'indeterminate' : ''}`}></div>
          </div>
        </div>
      );

    case 'circular':
      return (
        <div className="progress-bar-container circular-container">
          <div className="circular-progress">
            <svg viewBox="0 0 36 36" className="circular-progress-bar">
              <circle
                className="circle-background"
                cx="18"
                cy="18"
                r="15.915"
                strokeWidth="2"
              />
              <circle
                className={`circle-progress ${value === undefined ? 'indeterminate' : ''}`}
                cx="18"
                cy="18"
                r="15.915"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default ProgressBar;
