import React from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.css';


const Icon = ({ type, name, size, color, onClick }) => {
  if (type === 'font') {
    return (
      <i
        className={`fas fa-${name}`}
        style={{ fontSize: size, color }}
        onClick={onClick}
      />
    );
  }

  return null;
};

Icon.propTypes = {
  type: PropTypes.oneOf(['font', 'svg']).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  size: 24,
  color: 'black',
  onClick: () => {},
};

export default Icon;
