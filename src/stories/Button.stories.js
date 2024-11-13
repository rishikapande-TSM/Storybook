import React from 'react'
import Button from './Button'


export default{
    title:'Example/Button',
    component:Button,
    args:{
        // children:'Button',
        
    },
}

const Template= args=> <Button {...args}/>

export const Primary= Template.bind({})
Primary.args={
    variant:'primary',
    children:'Primary Button'
}

export const Secondary= Template.bind({})
Secondary.args={
    variant:'Secondary',
     children:'Secondary Button'
}

export const Danger= Template.bind({})
Danger.args={
    variant:'Danger',
    children:'Danger Button'
}

export const Success= Template.bind({})
Success.args={
    variant:'Success',
    children:'Success Button'
}

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'Disabled',  
    children: 'Disabled Button',
    disabled: true,
};

export const Search = Template.bind({});
Search.args = {
  variant: 'search',
  children: ' Search ',
};

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  variant: 'searchIcon',
//   children: ' Search ',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link', 
  href: 'https://www.example.com', 
  children: 'Link button',
};