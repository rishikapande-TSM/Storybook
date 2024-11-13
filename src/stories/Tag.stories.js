import React from 'react';
import Tag from './Tag';

export default {
  title: 'Example/Tag',
  component: Tag,
};

export const Success = () => <Tag label="Success" status="success" />;
export const Processing = () => <Tag label="Processing" status="processing" />;
export const Error = () => <Tag label="Error" status="error" />;
export const Warning = () => <Tag label="Warning" status="warning" />;
