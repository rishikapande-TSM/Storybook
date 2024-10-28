// RadioButton.stories.js
import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Example/RadioButton',
  component: RadioButton,
};

const Template = () => {
  const [selectedValue, setSelectedValue] = useState('option1'); // Default: Option 1 is selected

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <RadioButton
        name="exampleGroup"
        value="option1"
        label="Option 1"
        checked={selectedValue === 'option1'}
        onChange={handleChange}
      />
      <RadioButton
        name="exampleGroup"
        value="option2"
        label="Option 2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
    </div>
  );
};

export const RadioButtons = Template.bind({});
