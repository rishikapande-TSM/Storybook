
import React from 'react';
import { Grid, GridItem } from './Grid';

export default {
  title: 'Example/Grid',
  component: Grid,
  argTypes: {
    columns: {
      control: { type: 'number' },
      description: 'Number of columns in the grid',
      defaultValue: 3,
    },
    rowGap: {
      control: { type: 'text' },
      description: 'Gap between rows',
      defaultValue: '16px',
    },
    columnGap: {
      control: { type: 'text' },
      description: 'Gap between columns',
      defaultValue: '16px',
    },
  },
};

const Template = (args) => (
  <Grid {...args}>
    {Array.from({ length: 6 }).map((_, index) => (
      <GridItem key={index}>Item {index + 1}</GridItem>
    ))}
  </Grid>
);

export const Grid1 = Template.bind({});
Grid1.args = {
  columns: 3,
  rowGap: '20px',
  columnGap: '16px',
};

export const Grid2 = Template.bind({});
Grid2.args = {
  columns: 2,
  rowGap: '20px',
  columnGap: '24px',
};

export const Grid3 = Template.bind({});
Grid3.args = {
  columns: 4,
  rowGap: '13px',
  columnGap: '8px',
};
