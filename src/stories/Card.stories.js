
import React from 'react';
import Card from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    image: { control: 'text' },
    content: { control: 'text' },
    actions: { control: 'text' },
  },
};

const Template = (args) => <Card {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  image: 'https://www.aceinfoway.com/blog/wp-content/uploads/2020/04/How-to-Build-a-Component-Library.jpg',
//   content: 'This card includes an image at the top.',
};

export const WithContent = Template.bind({});
WithContent.args = {
  title: 'Card with Content',
  content: 'Storybook is a tool that allows developers to build and test UI components in isolation. It provides a development environment where each component is showcased in various states, making it easy to see how components behave with different inputs. In Storybook, each component has "stories" that display different variations, such as a button in primary, secondary, or disabled states',
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Card with Actions',
  content: 'This card includes actions such as buttons at the bottom.',
  actions: (
    <>
      <button style={{ padding: '8px 16px' }}>Action 1</button>
      <button style={{ padding: '8px 16px' }}>Action 2</button>
    </>
  ),
};
