import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Example/Breadcrumbs', 
  component: Breadcrumbs,

};

const Template = (args) => <Breadcrumbs {...args} />;


export const Simple = Template.bind({});
Simple.args = {
  items: [
    { label: 'Home', href: '/', active: false },
    { label: 'Category', href: '/category', active: false },
    { label: 'Subcategory', href: '/category/subcategory', active: false },
    { label: 'Current Page', href: '', active: true },
  ],
};



