import React from 'react';
import PropTypes from 'prop-types';
import './FlexContainer.css';

const FlexContainer = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  flexWrap,
  gap,
}) => {
  const style = {
    display: 'flex',
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    gap,
  };

  return <div style={style}>{children}</div>;
};

FlexContainer.propTypes = {
  justifyContent: PropTypes.oneOf([
    'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly',
  ]),
  alignItems: PropTypes.oneOf([
    'stretch', 'flex-start', 'flex-end', 'center', 
  ]),
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  gap: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FlexContainer.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '10px',
};

export default FlexContainer;
