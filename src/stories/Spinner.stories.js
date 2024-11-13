// Spinner.stories.js
import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Example/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'], // Add size options
    },
    color: { control: 'color' }, // Add color picker
    variant: {
      control: { type: 'select' },
      options: ['inline', 'fullscreen'], // Add variant options
    },
  },
};

// Template for stories
const Template = (args) => <Spinner {...args} />;

// Inline Spinner Story
export const Inline = Template.bind({});
Inline.args = {
  size: 'medium',   // default size is medium
  color: '#333',    // default color is dark gray
  variant: 'inline', // default variant is inline
};

// Fullscreen Spinner Story
export const Fullscreen = Template.bind({});
Fullscreen.args = {
  size: 'large',    // larger size for fullscreen spinner
  color: '#007BFF', // blue color
  variant: 'fullscreen', // fullscreen variant
};
