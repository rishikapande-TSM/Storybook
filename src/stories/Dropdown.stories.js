// SelectDropdown.stories.js
import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['single', 'multi', 'searchable'],
    },
    placeholder: { control: 'text' },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  variant: 'single',
  placeholder: 'Click Me',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  variant: 'multi',
  placeholder: 'Select options',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
};

export const SearchableSelect = Template.bind({});
SearchableSelect.args = {
  variant: 'searchable',
  placeholder: 'Search options',
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
};
