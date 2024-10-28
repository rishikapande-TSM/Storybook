
import React from 'react';
import FileUpload from './FileUpload';

export default {
  title: 'Example/FileUpload',
  component: FileUpload,
  argTypes: {
    multiple: {
      control: { type: 'boolean' },
    },
    onFilesChange: { action: 'filesChanged' },
  },
};

const Template = (args) => <FileUpload {...args} />;

export const SingleFile = Template.bind({});
SingleFile.args = {
  multiple: false,
};

export const MultiFile = Template.bind({});
MultiFile.args = {
  multiple: true,
};
