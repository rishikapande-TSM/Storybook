import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = ({ fluid, customWidth, children }) => {
  const containerStyle = fluid && customWidth ? { width: customWidth } : {};
  const containerClass = fluid ? 'container-fluid' : 'container-fixed';

  return (
    <div className={containerClass} style={containerStyle}>
      {children}
    </div>
  );
};

Container.propTypes = {
  fluid: PropTypes.bool,
  customWidth: PropTypes.string, 
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  fluid: false,
  customWidth: '100%',
};

export default Container;
