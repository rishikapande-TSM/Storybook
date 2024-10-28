
import React, { useState } from 'react';
import DatePicker from './DatePicker';

export default {
  title: 'Example/DatePicker',
  component: DatePicker,
};


const SingleDateTemplate = (args) => {
  const [date, setDate] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate[0]); 
  };

  return <DatePicker {...args} singleDate={true} onDateChange={handleDateChange} />;
};

export const SingleDatePicker = SingleDateTemplate.bind({});
SingleDatePicker.args = {};


const DateRangeTemplate = (args) => {
  const [range, setRange] = useState([args.startDate, args.endDate]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  return (
    <DatePicker
      {...args}
      startDate={range[0]} 
      endDate={range[1]}
      onDateChange={handleRangeChange}
    />
  );
};

export const DateRangePicker = DateRangeTemplate.bind({});
DateRangePicker.args = {
  startDate: '', 
  endDate: '',
};
