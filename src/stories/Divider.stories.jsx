
import React from 'react';
import Divider from './Divider';

export default {
  title: 'Example/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      control: { type: 'select', options: ['horizontal', 'vertical'] },
    },
    thickness: { control: { type: 'number' } },
    color: { control: { type: 'color' } },
  },
};

const Template = (args) => <Divider {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
  thickness: 2,
  color: '#000',
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
  thickness: 2,
  color: '#000',
};
