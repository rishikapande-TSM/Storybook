"use strict";(self.webpackChunkrishika_storybook=self.webpackChunkrishika_storybook||[]).push([[97],{"./src/stories/ProgressBar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CircularIndeterminate:()=>CircularIndeterminate,LinearIndeterminate:()=>LinearIndeterminate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProgressBar_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProgressBar_ProgressBar=_ref=>{let{variant,value}=_ref;switch(variant){case"linear":return(0,jsx_runtime.jsx)("div",{className:"progress-bar-container",children:(0,jsx_runtime.jsx)("div",{className:"linear-progress",children:(0,jsx_runtime.jsx)("div",{className:"progress-bar "+(void 0===value?"indeterminate":"")})})});case"circular":return(0,jsx_runtime.jsx)("div",{className:"progress-bar-container circular-container",children:(0,jsx_runtime.jsx)("div",{className:"circular-progress",children:(0,jsx_runtime.jsxs)("svg",{viewBox:"0 0 36 36",className:"circular-progress-bar",children:[(0,jsx_runtime.jsx)("circle",{className:"circle-background",cx:"18",cy:"18",r:"15.915",strokeWidth:"2"}),(0,jsx_runtime.jsx)("circle",{className:"circle-progress "+(void 0===value?"indeterminate":""),cx:"18",cy:"18",r:"15.915",strokeWidth:"2"})]})})});default:return null}},stories_ProgressBar=ProgressBar_ProgressBar;ProgressBar_ProgressBar.__docgenInfo={description:"",methods:[],displayName:"ProgressBar"};const ProgressBar_stories={title:"Example/ProgressBar",component:stories_ProgressBar},Template=args=>(0,jsx_runtime.jsx)(stories_ProgressBar,{...args}),LinearIndeterminate=Template.bind({});LinearIndeterminate.args={variant:"linear"};const CircularIndeterminate=Template.bind({});CircularIndeterminate.args={variant:"circular"};const __namedExportsOrder=["LinearIndeterminate","CircularIndeterminate"];LinearIndeterminate.parameters={...LinearIndeterminate.parameters,docs:{...LinearIndeterminate.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...LinearIndeterminate.parameters?.docs?.source}}},CircularIndeterminate.parameters={...CircularIndeterminate.parameters,docs:{...CircularIndeterminate.parameters?.docs,source:{originalSource:"args => <ProgressBar {...args} />",...CircularIndeterminate.parameters?.docs?.source}}}}}]);