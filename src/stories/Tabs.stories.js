import React from 'react';
import { Tabs, Tab } from './Tabs';
import { FaBeer, FaCoffee, FaApple } from 'react-icons/fa'; 

export default {
  title: 'Example/Tabs',
  component: Tabs,
};

const HorizontalTemplate = (args) => (
  <Tabs {...args}>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </Tabs>
);

const VerticalTemplate = (args) => (
  <Tabs {...args}>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </Tabs>
);

const IconTextTemplate = (args) => (
  <Tabs {...args}>
    <Tab icon={<FaBeer />}>Tab 1</Tab>
    <Tab icon={<FaCoffee />}>Tab 2</Tab>
    <Tab icon={<FaApple />}>Tab 3</Tab>
  </Tabs>
);

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {
  variant: 'horizontal',
};

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {
  variant: 'vertical',
};

export const IconText = IconTextTemplate.bind({});
IconText.args = {
  variant: 'icon-text',
};
