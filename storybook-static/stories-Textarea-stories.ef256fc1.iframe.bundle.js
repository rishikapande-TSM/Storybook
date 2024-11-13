"use strict";(self.webpackChunkrishika_storybook=self.webpackChunkrishika_storybook||[]).push([[141],{"./src/stories/Textarea.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FixedSize:()=>FixedSize,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Textarea_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Textarea_Textarea=_ref=>{let{placeholder,maxLength,resizable=!0,error}=_ref;const[text,setText]=(0,react.useState)("");return(0,jsx_runtime.jsxs)("div",{className:"textarea-container",children:[(0,jsx_runtime.jsx)("textarea",{className:`textarea ${resizable?"":"fixed"} ${error?"error":""}`,placeholder,maxLength,value:text,onChange:event=>{setText(event.target.value)}}),maxLength&&(0,jsx_runtime.jsxs)("div",{className:"counter",children:[text.length,"/",maxLength]}),error&&(0,jsx_runtime.jsx)("div",{className:"error-message",children:error})]})},stories_Textarea=Textarea_Textarea;Textarea_Textarea.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{resizable:{defaultValue:{value:"true",computed:!1},required:!1}}};const Textarea_stories={title:"Example/Textarea",component:stories_Textarea,argTypes:{maxLength:{control:"number"},placeholder:{control:"text"},resizable:{control:"boolean"},error:{control:"text"}}},FixedSize=(args=>(0,jsx_runtime.jsx)(stories_Textarea,{...args})).bind({});FixedSize.args={placeholder:"textarea",maxLength:100,resizable:!1};const __namedExportsOrder=["FixedSize"];FixedSize.parameters={...FixedSize.parameters,docs:{...FixedSize.parameters?.docs,source:{originalSource:"args => <Textarea {...args} />",...FixedSize.parameters?.docs?.source}}}}}]);