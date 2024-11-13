import React, { useState } from 'react';
import './DatePicker.css'; 

function DatePicker({ variant = 'single', className = '', placeholder = 'Select Date', ...rest }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Toggle the date picker display
  const toggleDatePicker = () => setIsOpen(!isOpen);

  // Format date as yyyy-mm-dd
  const formatDate = (date) => date ? date.toISOString().split('T')[0] : '';

  // Set the selected date and close the picker
  const handleDateSelect = (date) => {
    if (variant === 'single') {
      setSelectedDate(formatDate(date));
      setIsOpen(false);
    } else if (variant === 'range') {
      if (!startDate) setStartDate(date);
      else setEndDate(date);
    }
  };

  // Navigate months or years
  const changeMonth = (offset) => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + offset)));
  };

  const changeYear = (offset) => {
    setCurrentMonth(new Date(currentMonth.setFullYear(currentMonth.getFullYear() + offset)));
  };

  // Generate calendar dates
  const generateCalendarDates = () => {
    const dates = [];
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    // Fill initial empty days
    for (let i = 0; i < firstDay.getDay(); i++) dates.push(null);

    // Fill the actual dates
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dates.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
    }
    return dates;
  };

  return (
    <div className={`custom-date-picker ${className}`}>
      <div className="date-input-wrapper">
        {variant === 'range' ? (
          <div className="date-range-input">
            <input
              type="text"
              readOnly
              placeholder="Start Date"
              value={startDate ? formatDate(startDate) : ''}
              onClick={() => { setStartDate(''); toggleDatePicker(); }}
              className="date-input"
              {...rest}
            />
            <span>  </span>
            <input
              type="text"
              readOnly
              placeholder="End Date"
              value={endDate ? formatDate(endDate) : ''}
              onClick={() => { setEndDate(''); toggleDatePicker(); }}
              className="date-input"
              {...rest}
            />
          </div>
        ) : (
          <input
            type="text"
            readOnly
            placeholder={placeholder}
            value={selectedDate}
            onClick={toggleDatePicker}
            className="date-input"
            {...rest}
          />
        )}
    
        {/* <i
          className="fa fa-calendar calendar-icon"
          onClick={toggleDatePicker}
        ></i> */}

      </div>

      {isOpen && (
        <div className="calendar">
          <div className="calendar-header">
            <button onClick={() => changeYear(-1)}>&laquo;</button>
            <button onClick={() => changeMonth(-1)}>&lt;</button>
            <span>
              {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
            </span>
            <button onClick={() => changeMonth(1)}>&gt;</button>
            <button onClick={() => changeYear(1)}>&raquo;</button>
          </div>
          <div className="calendar-grid">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="day-label">
                {day}
              </div>
            ))}
            {generateCalendarDates().map((date, index) => (
              <div
                key={index}
                className={`date-cell ${date ? 'active' : ''}`}
                onClick={() => date && handleDateSelect(date)}
              >
                {date ? date.getDate() : ''}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DatePicker;
