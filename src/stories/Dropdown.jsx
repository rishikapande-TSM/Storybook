import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown({
  variant = 'single', // single, multi, searchable, grouped
  options = [],
  placeholder = 'Select...',
  className = '',
  ...rest
}) {
  const [selected, setSelected] = useState(variant === 'multi' ? [] : '');
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelect = (option) => {
    if (variant === 'multi') {
      // Handle multi-select
      if (selected.includes(option)) {
        setSelected(selected.filter(item => item !== option));
      } else {
        setSelected([...selected, option]);
      }
    } else {
      // Handle single select
      setSelected(option);
      setIsOpen(false);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`select-dropdown ${className}`} {...rest}>
      <div className="select-box" onClick={toggleDropdown}>
        <span className="selected">
          {variant === 'multi' 
            ? selected.length === 0 
              ? placeholder 
              : selected.join(', ') 
            : selected || placeholder}
        </span>
        {/* <span className="arrow">&#9660;</span> */}
      </div>
      
      {isOpen && (
        <div className="dropdown-list">
          {variant === 'searchable' && (
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
            />
          )}
          
          <ul>
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className={`dropdown-item ${selected.includes(option.value) ? 'selected' : ''}`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
