import React from 'react';
import FlexContainer from './FlexContainer';

export default {
  title: 'Example/FlexContainer',
  component: FlexContainer,
  argTypes: {
    gap: {
      control: 'text',
      defaultValue: '10px',
    },
  },
};

const Template = (args) => (
  <FlexContainer {...args}>
    <div className="flex-item">Item 1</div>
    <div className="flex-item">Item 2</div>
    <div className="flex-item">Item 3</div>
    <div className="flex-item">Item 4</div>
    <div className="flex-item">Item 5</div>
    <div className="flex-item">Item 6</div>
  </FlexContainer>
);

// 1. Alignment Story
export const Alignment = Template.bind({});
Alignment.args = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'nowrap',
};
Alignment.argTypes = {
  justifyContent: {
    control: 'select',
    options: [
      'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly',
    ],
  },
  alignItems: {
    control: 'select',
    options: ['stretch', 'flex-start', 'flex-end', 'center'],
  },
};

// 2. Wrapping Story
export const Wrapping = Template.bind({});
Wrapping.args = {
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flexDirection: 'row',
};
Wrapping.argTypes = {
  flexWrap: {
    control: 'select',
    options: ['nowrap', 'wrap', 'wrap-reverse'],
  },
};

// 3. Direction Story
export const Direction = Template.bind({});
Direction.args = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flexWrap: 'nowrap',
};
Direction.argTypes = {
  flexDirection: {
    control: 'select',
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
  },
};
