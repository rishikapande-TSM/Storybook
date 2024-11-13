// DatePicker.stories.js
import React from 'react';
import DatePicker from './DatePicker';

export default {
  title: 'Example/DatePicker',
  component: DatePicker,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['single', 'range'],
    },
    placeholder: { control: 'text' },
  },
};

const Template = (args) => <DatePicker {...args} />;

export const SingleDate = Template.bind({});
SingleDate.args = {
  variant: 'single',
  placeholder: 'Select Date',
};

export const DateRange = Template.bind({});
DateRange.args = {
  variant: 'range',
  placeholder: 'Select Date Range',
};
