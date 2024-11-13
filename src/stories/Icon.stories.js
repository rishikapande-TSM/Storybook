import React from 'react';
import Icon from './Icon'; 

export default {
  title: 'Example/Icon',
  component: Icon,
  argTypes: {
    size: { control: 'number' },
    color: { control: 'color' },
    onClick: { action: 'clicked' },
    type: {
      control: {
        type: 'radio',
        options: ['font', 'svg'],
      },
    },
  },
};

const Template = (args) => <Icon {...args} />;

// Story for "home" icon
export const Home = Template.bind({});
Home.args = {
  type: 'font',
  name: 'home',
  size: 32,
  color: 'blue',
  onClick: () => alert('Home icon clicked!'),
};

// Story for "search" icon
export const Search = Template.bind({});
Search.args = {
  type: 'font',
  name: 'search',
  size: 35,
  color: 'green',
  onClick: () => alert('Search icon clicked!'),
};

// Story for  "delete" icon
export const Delete = Template.bind({});
Delete.args = {
  type: 'font',
  name: 'trash',
  size: 35,
  color: 'red',
  onClick: () => alert('Delete icon clicked!'),
};

// Story for "settings" icon
export const Settings = Template.bind({});
Settings.args = {
  type: 'font',
  name: 'cogs',
  size: 35,
  color: 'purple',
  onClick: () => alert('Settings icon clicked!'),
};

export const User = Template.bind({});
User.args = {
  type: 'font',
  name: 'user',
  size: 35,
  color: 'black',
  onClick: () => alert('User icon clicked!'),
};

export const Comment = Template.bind({});
Comment.args = {
  type: 'font',
  name: 'comment',
  size: 35,
  color: 'gray',
  onClick: () => alert('User icon clicked!'),
};

export const Download = Template.bind({});
Download.args = {
  type: 'font',
  name: 'download',
  size: 35,
  color: 'black',
  onClick: () => alert('Github icon clicked!'),
};