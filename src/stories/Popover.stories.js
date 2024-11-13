import React, { useState } from 'react';
import Popover from './Popover'; // Import your Popover component

// Meta configuration for the Storybook
export default {
  title: 'Example/Popover',
  component: Popover, 
};

// Default story for the Popover
export const Popovers = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const openPopover = () => setIsOpen(true); // Open popover
  const closePopover = () => setIsOpen(false); // Close popover

  return (
    <div>
      {/* Button to open the popover */}
      <button className="open-popover-btn" onClick={openPopover}>
        Open Popover
      </button>

      {/* Popover component with content and actions */}
      <Popover
        content="Wohoo! You opened a Popover."
        isOpen={isOpen}
        onClose={closePopover}
      />
    </div>
  );
};

