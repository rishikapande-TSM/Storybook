import React, { useState } from 'react';
import './Textarea.css'; 

const Textarea = ({ 
  placeholder, 
  maxLength, 
  resizable = true, 
  error 
}) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="textarea-container">
      <textarea
        className={`textarea ${!resizable ? 'fixed' : ''} ${error ? 'error' : ''}`}
        placeholder={placeholder}
        maxLength={maxLength}
        value={text}
        onChange={handleChange}
      />
      {maxLength && (
        <div className="counter">
          {text.length}/{maxLength}
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Textarea;
