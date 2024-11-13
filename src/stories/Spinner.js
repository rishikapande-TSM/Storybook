// Spinner.js
import React from 'react';
import './Spinner.css';

const Spinner = ({ size = 'medium', color = '#36d7b7', variant = 'inline' }) => {
  // Define size based on prop (small, medium, large)
  const spinnerSize = size === 'small' ? 24 : size === 'medium' ? 36 : 48;
  const borderWidth = spinnerSize / 6;

  return (
    <div className={variant === 'fullscreen' ? 'fullscreen-spinner' : 'inline-spinner'}>
      <div
        className="spinner"
        style={{
          width: spinnerSize,
          height: spinnerSize,
          borderTopWidth: borderWidth,
          borderTopColor: color, 
        }}
      ></div>
    </div>
  );
};

export default Spinner;
