import React from 'react';
import { BasicList, ListWithIcon } from './List'; 

export default {
  title: 'Example/ List', 
  component: BasicList,
};

export const List = () => <BasicList />;

export const ListWithIcons = () => <ListWithIcon />;
