import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default {
    title: 'Example/Dropdown',
    component: Dropdown,
    argTypes: {
        options: {
            control: 'array',
        },
        isMulti: {
            control: 'boolean',
        },
        onChange: { action: 'changed' },
    },
};

const Template = (args) => {
    const [selectedValues, setSelectedValues] = useState(args.selectedValues);

    return (
        <Dropdown 
            {...args} 
            selectedValues={selectedValues} 
            onChange={setSelectedValues} 
        />
    );
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    selectedValues: 'option1', 
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    isMulti: true,
    selectedValues: ['option1', 'option2'], 
};
