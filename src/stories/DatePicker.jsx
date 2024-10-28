
import React from 'react';
 import './DatePicker.css'; 

const DatePicker = ({ singleDate, startDate, endDate, onDateChange }) => {
  return (
    <div className="date-picker">
      {singleDate ? (
        <div>
          <label>Select Date:</label>
          <input
            type="date"
            onChange={(e) => onDateChange([e.target.value])}
          />
        </div>
      ) : (
        <div>
          <label>Select Date Range:</label>
          <input
            type="date"
            className="date-range-input"
            value={startDate}
            onChange={(e) => onDateChange([e.target.value, endDate])}
          />
          <input
            type="date"
            className="date-range-input"
            value={endDate}
            onChange={(e) => onDateChange([startDate, e.target.value])}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
