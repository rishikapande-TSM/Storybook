
import React from 'react';
import './RadioButton.css'; 

const RadioButton = ({ name, value, label, checked, onChange }) => (
  <label className="radio-container">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={(e) => onChange(e.target.value)}
    />
    <span className="radio-label">{label}</span>
  </label>
);

export default RadioButton;
