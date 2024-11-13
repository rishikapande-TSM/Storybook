import React, { useState } from 'react';
import Tooltip from './Tooltip'; // Import Tooltip component

// Meta configuration for the Storybook
export default {
  title: 'Example/Tooltip', 
  component: Tooltip, // The component to showcase
};



// Tooltip with different positions
export const TooltipTop = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Tooltip title="This is a tooltip on top!" position="top" />
    </div>
  );
};

export const TooltipBottom = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Tooltip title="This is a tooltip on bottom!" position="bottom" />
    </div>
  );
};

export const TooltipLeft = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Tooltip title="This is a tooltip on left!" position="left" />
    </div>
  );
};

export const TooltipRight = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Tooltip title="This is a tooltip on right!" position="right" />
    </div>
  );
};
