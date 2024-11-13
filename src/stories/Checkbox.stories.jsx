// Checkbox.stories.js
import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: 'Checked',
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  label: 'Unchecked',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
  label: 'Indeterminate',
};
