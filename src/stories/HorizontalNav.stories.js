import React from 'react';
import HorizontalNav from './HorizontalNav';

export default {
  title: 'Example/HorizontalNav', // Storybook title
  component: HorizontalNav,
  argTypes: {
    links: {
      control: 'object', 
    },
  },
};

const Template = (args) => <HorizontalNav {...args} />;


// Horizontal Navigation with Active Link
export const Nav = Template.bind({});
Nav.args = {
  links: [
    { label: 'Home', href: '/', className: 'active' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
};


