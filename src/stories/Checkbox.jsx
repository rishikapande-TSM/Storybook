// Checkbox.js
import React, { useEffect, useRef } from 'react';
import './Checkbox.css'; // Optional styles

const Checkbox = ({ checked = false, indeterminate = false, label, onChange }) => {
  const checkboxRef = useRef();

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        ref={checkboxRef}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;
