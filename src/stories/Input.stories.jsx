// Input.stories.js
import React from 'react';
import Input from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    Tooltip:{control:'text'},
  },
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  placeholder: 'Enter text',
  value: '',
  Tooltip:'Enter text',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Enter password',
  Tooltip:'Enter password',
};

export const Focused = Template.bind({});
Focused.args = {
  type: 'text',
  placeholder: 'Focused input',
};

Focused.play = async ({ canvasElement }) => {
  const input = canvasElement.querySelector('input');
  input.focus(); 
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  disabled: true,
  placeholder: 'Disabled input',
};

export const Error = Template.bind({});
Error.args = {
  type: 'text',
  error: 'This field is required',
  placeholder: 'Enter text',
};
