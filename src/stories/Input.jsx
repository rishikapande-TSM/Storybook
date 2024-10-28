
import React from 'react';
import './Input.css'; 
import ReactTooltip from 'react-tooltip';

const Input = ({ type = "text", placeholder, disabled, value, error, onChange, tooltip, ...rest }) => (
  <div className={`input-container ${error ? 'input-error' : ''}`}>
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className="input-element"
      data-tip={tooltip} 
      data-for="inputTooltip" 
      {...rest}
    />
    {tooltip && <ReactTooltip place="bottom" type="dark" effect="solid" />}
    {error && <span className="error-message">{error}</span>}
  </div>
);

export default Input;
