
// Slider.jsx
import React from 'react';
import './Slider.css'; // Import your styles here

const Slider = ({ min, max, value, onChange, isRange, rangeValue }) => {
  const handleSingleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="slider-container">
      {isRange ? (
        <>
          <input
            type="range"
            min={min}
            max={max}
            value={rangeValue[0]}
            onChange={(e) => onChange([e.target.value, rangeValue[1]])}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={rangeValue[1]}
            onChange={(e) => onChange([rangeValue[0], e.target.value])}
          />
        </>
      ) : (
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleSingleChange}
        />
      )}
      <div className="slider-values">
        {isRange ? (
          <>
            <span>Min: {rangeValue[0]}</span>
            <span>Max: {rangeValue[1]}</span>
          </>
        ) : (
          <span>Value: {value}</span>
        )}
      </div>
    </div>
  );
};

export default Slider;
