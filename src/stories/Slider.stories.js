// Slider.stories.jsx
import React, { useState } from 'react';
import Slider from './Slider';

export default {
  title: 'Example/Slider',
  component: Slider,
};

// Single Slider Story
const SingleSliderTemplate = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return <Slider {...args} value={value} onChange={handleChange} />;
};

export const SingleSlider = SingleSliderTemplate.bind({});
SingleSlider.args = {
  min: 0,
  max: 100,
  value: 50,
};

// Range Slider Story
const RangeSliderTemplate = (args) => {
  const [rangeValue, setRangeValue] = useState(args.rangeValue);

  const handleRangeChange = (newRange) => {
    setRangeValue(newRange);
  };

  return <Slider {...args} isRange={true} rangeValue={rangeValue} onChange={handleRangeChange} />;
};

export const RangeSlider = RangeSliderTemplate.bind({});
RangeSlider.args = {
  min: 0,
  max: 100,
  rangeValue: [20, 80],
};
