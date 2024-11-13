// BadgeComponent.stories.js
import React from 'react';
import BadgeComponent from './BadgeComponent';

export default {
  title: 'Example/Badge',
  component: BadgeComponent,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['success', 'error', 'default', 'processing', 'warning'],
      },
    },
  },
};

const Template = (args) => <BadgeComponent {...args} />;

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  text: 'Success',
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
  text: 'Error',
};

export const Default = Template.bind({});
Default.args = {
  status: 'default',
  text: 'Default',
};

export const Processing = Template.bind({});
Processing.args = {
  status: 'processing',
  text: 'Processing',
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
  text: 'Warning',
};
