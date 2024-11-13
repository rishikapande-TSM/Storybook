import React from 'react';
import Container from './Container';

export default {
  title: 'Example/Container',
  component: Container,
  argTypes: {
    children: { control: false },
    customWidth: { 
      control: 'text', 
      description: 'Set a custom width for the fluid container.',
    },
  },
};

const Template = (args) => <Container {...args} />;

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  fluid: false,
  children: (
    <div style={{ height: '200px', textAlign: 'center', padding: '20px' }}>
      <p><strong>Fixed-Width Container</strong></p>
    </div>
  ),
};

export const FluidWidth = Template.bind({});
FluidWidth.args = {
  fluid: true,
  customWidth: '80%', 
  children: (
    <div style={{ height: '200px', textAlign: 'center', padding: '20px' }}>
      <p><strong>Fluid Container</strong> with adjustable width.</p>
    </div>
  ),
};
