import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css'; 

const Dropdown = ({ options, isMulti, selectedValues, onChange }) => {
    const handleChange = (event) => {
        const { options } = event.target;
        const selected = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);

    
        onChange(isMulti ? selected : selected[0] || ''); 
    };

    return (
        <div className="dropdown">
            <select multiple={isMulti} value={selectedValues} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    isMulti: PropTypes.bool,
    selectedValues: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
    isMulti: false,
    selectedValues: [],
};

export default Dropdown;
