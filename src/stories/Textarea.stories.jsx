import React from 'react';
import Textarea from './Textarea';

export default {
  title: 'Example/Textarea',
  component: Textarea,
  argTypes: {
    maxLength: { control: 'number' },
    placeholder: { control: 'text' },
    resizable: { control: 'boolean' },
    error: { control: 'text' },
  },
};

const Template = (args) => <Textarea {...args} />;

export const FixedSize = Template.bind({});
FixedSize.args = {
  placeholder: 'textarea',
   maxLength: 100,  
  resizable: false, 
};
