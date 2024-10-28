
import React from 'react';
// import './Grid.css';


export const Grid = ({ children, columns = 3, rowGap = '16px', columnGap = '16px' }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${rowGap} ${columnGap}`, 
  };

  return <div style={gridStyle}>{children}</div>;
};


export const GridItem = ({ children }) => {
  return <div className="grid-item">{children}</div>;
};
