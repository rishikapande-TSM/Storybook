import React from 'react';
import { Accordion, AccordionSection } from './Accordion';

export default {
  title: 'Example/Accordion',
  component: Accordion,
};

const Template = (args) => (
  <Accordion {...args}>
    <AccordionSection title="Accordion 1">
      <p>This is the content for Accordion 1.</p>
    </AccordionSection>
    <AccordionSection title="Accordion 2">
      <p>This is the content for Accordion 2.</p>
    </AccordionSection>
    <AccordionSection title="Accordion 3">
      <p>This is the content for Accordion 3.</p>
    </AccordionSection>
  </Accordion>
);

// Single section open (default behavior)
export const Default = Template.bind({});
Default.args = {
  allowMultipleOpen: false, 
};

// Multiple sections open
export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
  allowMultipleOpen: true, 
};
