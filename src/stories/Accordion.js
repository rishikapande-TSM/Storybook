import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Accordion.css'; 

// Accordion Section (Each individual section in the Accordion)
const AccordionSection = ({ title, children, isActive, onClick }) => {
  return (
    <div className="accordion-section">
      <button className="accordion-header" onClick={onClick}>
        {title}
      </button>
      <div className={`accordion-content ${isActive ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
};

AccordionSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Accordion Component (Controls multiple AccordionSections)
const Accordion = ({ children, allowMultipleOpen }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleToggle = (index) => {
    if (allowMultipleOpen) {
      // Allow multiple sections to be open
      setActiveIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) 
          : [...prev, index] // Open if closed
      );
    } else {
      // Only allow one section to be open at a time
      setActiveIndexes([index]);
    }
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: activeIndexes.includes(index),
          onClick: () => handleToggle(index),
        })
      )}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  allowMultipleOpen: PropTypes.bool,
};

Accordion.defaultProps = {
  allowMultipleOpen: false, 
};

export { Accordion, AccordionSection };
