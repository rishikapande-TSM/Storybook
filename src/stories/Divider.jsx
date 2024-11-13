// Divider.js
import React from 'react';
import PropTypes from 'prop-types';
import './Divider.css';

const Divider = ({ orientation = 'horizontal', thickness = 1, color = '#000' }) => {
  const dividerClass = orientation === 'vertical' ? 'divider-vertical' : 'divider-horizontal';

  return (
    <div
      className={dividerClass}
      style={{
        backgroundColor: color,
        [orientation === 'vertical' ? 'width' : 'height']: thickness,
      }}
    />
  );
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  thickness: PropTypes.number,
  color: PropTypes.string,
};

export default Divider;
