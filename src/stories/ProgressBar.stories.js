import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const LinearIndeterminate = Template.bind({});
LinearIndeterminate.args = {
  variant: 'linear',
};

export const CircularIndeterminate = Template.bind({});
CircularIndeterminate.args = {
  variant: 'circular',
};
