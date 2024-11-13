
import React from 'react';
import './Input.css'; 


const Input = ({ type = "text", placeholder, disabled, value, error, onChange, tooltip, ...rest }) => (
  <div className={`input-container ${error ? 'input-error' : ''}`}>
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className="input-element"
      
      {...rest}
    />
    {error && <span className="error-message">{error}</span>}
  </div>
);

export default Input;
