
import React, { useState, useEffect } from 'react';
import Toast from './Toast';

export default {
  title: 'Example/Toast',
  component: Toast,
  argTypes: {
    message: { control: 'text' },
    type: { control: 'select', options: ['success', 'error', 'warning', 'info'] },
    duration: { control: 'number' },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  console.log("Rendering Toast with args:", args);
  
  return (
    isOpen && (
      <Toast {...args} onClose={() => setIsOpen(false)} />
    )
  );
};

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  message: 'Success! Your operation was completed.',
  type: 'success',
  duration: 5000,
};

export const ErrorToast = Template.bind({});
ErrorToast.args = {
  message: 'Error! Something went wrong.',
  type: 'error',
  duration: 5000,
};

export const WarningToast = Template.bind({});
WarningToast.args = {
  message: 'Warning! Check your input.',
  type: 'warning',
  duration: 5000,
};

export const InfoToast = Template.bind({});
InfoToast.args = {
  message: 'Info! Here’s some important information.',
  type: 'info',
  duration: 5000,
};
