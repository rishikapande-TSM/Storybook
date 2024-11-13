// src/stories/Table.stories.js
import React from 'react';
import Table from './Table'; 


const data = [
    { name: 'John Doe', age: 30, country: 'USA', details: 'John is a software developer.' },
    { name: 'Jane Smith', age: 25, country: 'UK', details: 'Jane is a product manager.' },
    { name: 'Maria Garcia', age: 28, country: 'Spain', details: 'Maria is a UX designer.' },
    { name: 'David Lee', age: 35, country: 'Canada', details: 'David is a data analyst.' },
    { name: 'Sarah Johnson', age: 42, country: 'Australia', details: 'Sarah is a marketing director.' },
    { name: 'Michael Brown', age: 38, country: 'Germany', details: 'Michael is a project manager.' },
    { name: 'Emily Davis', age: 31, country: 'USA', details: 'Emily is a graphic designer.' },
    { name: 'James Wilson', age: 45, country: 'Canada', details: 'James is a software engineer.' },
    { name: 'Jessica Moore', age: 29, country: 'Australia', details: 'Jessica is a content creator.' },
    { name: 'William Clark', age: 33, country: 'UK', details: 'William is a data scientist.' },
  ];
  

// Column configuration
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'country', label: 'Country' },
];

export default {
  title: 'Example/Table',
  component: Table,
  argTypes: {
    rowsPerPage: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      defaultValue: 2,
    },
  },
};


// Story for Table with pagination
export const Tables = () => (
  <Table data={data} columns={columns} rowsPerPage={5} />
);

