import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

const Tooltip = ({ title, position }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determine the CSS class based on position prop
  const tooltipPositionClass = `tooltip-${position}`;

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="tooltip-target">
        Hover me
      </div>
      
      {isHovered && (
        <div className={`tooltip ${tooltipPositionClass}`}>
          {/* <div className="tooltip-arrow"></div> */}
          <span className="tooltip-text">{title}</span>
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
};

export default Tooltip;
