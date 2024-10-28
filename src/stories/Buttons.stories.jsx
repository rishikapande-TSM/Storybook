import React from 'react';
import Buttons from "./Buttons";
import { faSyncAlt, faUndoAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

export default {
   title:"Example/Buttons",
   component:Buttons,
   argTypes:{
      onClick:{action:'clicked'},
     variant:{
      control:{type:'select'},
      options:['primary','secondary','disabled'],
     },
     size:{
      control:{type:'select'},
      options:['small','medium','large'],
     },
     icon: {
      control: { type: 'select' }, 
      options: [faSyncAlt, faUndoAlt, faSearch], 
    },
   },
};

const Template=(args)=> <Buttons {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};


export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'disabled',
  label: 'Button',
};

export const RefreshButton=Template.bind({});
RefreshButton.args = {
  //  label: 'Refresh',
   icon: faSyncAlt,
 };

 export const ResetButton=Template.bind({});
ResetButton.args = {
   variant: 'primary',
  //  label: ' Reset',
   icon: faUndoAlt,
 };

 export const SearchButton=Template.bind({});
SearchButton.args = {
   variant: 'primary',
  //  label: 'Search',
   icon: faSearch,
 };