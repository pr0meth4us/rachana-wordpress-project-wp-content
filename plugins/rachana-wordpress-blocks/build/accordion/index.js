(()=>{"use strict";var e,o={326:()=>{const e=window.React,o=JSON.parse('{"accordionTitle":"","titleColor":"#1c4076","bodyContent":"","buttonColor":"#f3f5f8","iconColor":"#1c4076","iconType":"bi-info-circle-fill","bodyTextColor":"#414c5f","font":"Kantumruy Pro"}'),l=window.wp.blocks,t=window.wp.components,a=window.wp.blockEditor;(0,l.registerBlockType)("rachana-block/accordion-item",{title:"Accordion",icon:"editor-expand",category:"common",attributes:{accordionItems:{type:"array",default:[o]}},edit:({attributes:l,setAttributes:n})=>{const{accordionItems:c}=l,r=(e,o,l)=>{((e,o,l,t,a,n)=>{t({items:a.map(((t,a)=>a===e?{...t,[o]:l}:t))})})(e,o,l,n,c)};return(0,e.createElement)("div",null,(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(t.PanelBody,{title:"Accordion Settings"},(0,e.createElement)("button",{className:"components-button is-secondary",onClick:()=>{((e,o,l)=>{e({items:[...o,{...l}]})})(n,c,o)}},"Add Accordion Item"))),(0,e.createElement)("div",{className:"cgds accordion",id:"accordionExample"},c.map(((o,l)=>(0,e.createElement)("div",{className:"accordion-item",key:l},(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(t.PanelBody,{title:`Accordion Item ${l+1}`},(0,e.createElement)(t.TextControl,{label:"Font",value:o.font,onChange:e=>r(l,"font",e)}),(0,e.createElement)(t.SelectControl,{label:"Icon Type",value:o.iconType,options:[{label:"None",value:""},{label:"Info Circle",value:"bi bi-info-circle-fill"},{label:"Person",value:"bi bi-person-fill"},{label:"Heart",value:"bi bi-heart-fill"}],onChange:e=>r(l,"iconType",e)}),(0,e.createElement)("div",{className:"components-base-control"},(0,e.createElement)("label",{className:"components-base-control__label"},"Icon Color"),(0,e.createElement)(t.ColorPicker,{color:o.iconColor,onChangeComplete:e=>r(l,"iconColor",e.hex),disableAlpha:!0})),(0,e.createElement)("div",{className:"components-base-control"},(0,e.createElement)("label",{className:"components-base-control__label"},"Title Color"),(0,e.createElement)(t.ColorPicker,{color:o.titleColor,onChangeComplete:e=>r(l,"titleColor",e.hex),disableAlpha:!0})),(0,e.createElement)("div",{className:"components-base-control"},(0,e.createElement)("label",{className:"components-base-control__label"},"Button Color"),(0,e.createElement)(t.ColorPicker,{color:o.buttonColor,onChangeComplete:e=>r(l,"buttonColor",e.hex),disableAlpha:!0})),(0,e.createElement)("div",{className:"components-base-control"},(0,e.createElement)("label",{className:"components-base-control__label"},"Body Text Color"),(0,e.createElement)(t.ColorPicker,{color:o.bodyTextColor,onChangeComplete:e=>r(l,"bodyTextColor",e.hex),disableAlpha:!0})))),(0,e.createElement)("h2",{className:"accordion-header",id:`heading${l}`},(0,e.createElement)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":`#collapse${l}`,"aria-expanded":"true","aria-controls":`collapse${l}`,style:{backgroundColor:o.buttonColor,color:o.titleColor,fontFamily:o.font}},o.iconType?(0,e.createElement)("i",{className:`${o.iconType}`,style:{color:o.iconColor}}):null,(0,e.createElement)(a.RichText,{tagName:"span",value:o.accordionTitle,onChange:e=>r(l,"accordionTitle",e),placeholder:"Accordion Title"}))),(0,e.createElement)("div",{id:`collapse${l}`,className:"accordion-collapse collapse show","aria-labelledby":`heading${l}`,"data-bs-parent":"#accordionExample"},(0,e.createElement)(a.RichText,{tagName:"div",className:"accordion-body",value:o.bodyContent,onChange:e=>r(l,"bodyContent",e),style:{color:o.bodyTextColor,fontFamily:o.font},placeholder:"Write your content here"})))))))},save:({attributes:o})=>{const{accordionItems:l}=o;return(0,e.createElement)("div",{className:"cgds accordion",id:"accordionExample"},l.map(((o,l)=>(0,e.createElement)("div",{className:"accordion-item",key:l},(0,e.createElement)("h2",{className:"accordion-header",id:`heading${l}`},(0,e.createElement)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":`#collapse${l}`,"aria-expanded":"true","aria-controls":`collapse${l}`,style:{backgroundColor:o.buttonColor,color:o.titleColor,fontFamily:o.font}},(0,e.createElement)("i",{className:`bi ${o.iconType}`,style:{color:o.iconColor}}),o.accordionTitle)),(0,e.createElement)("div",{id:`collapse${l}`,className:"accordion-collapse collapse","aria-labelledby":`heading${l}`,"data-bs-parent":"#accordionExample"},(0,e.createElement)("div",{className:"accordion-body",style:{color:o.bodyTextColor,fontFamily:o.font}},o.bodyContent))))))}})}},l={};function t(e){var a=l[e];if(void 0!==a)return a.exports;var n=l[e]={exports:{}};return o[e](n,n.exports,t),n.exports}t.m=o,e=[],t.O=(o,l,a,n)=>{if(!l){var c=1/0;for(d=0;d<e.length;d++){for(var[l,a,n]=e[d],r=!0,i=0;i<l.length;i++)(!1&n||c>=n)&&Object.keys(t.O).every((e=>t.O[e](l[i])))?l.splice(i--,1):(r=!1,n<c&&(c=n));if(r){e.splice(d--,1);var s=a();void 0!==s&&(o=s)}}return o}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[l,a,n]},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={170:0,246:0};t.O.j=o=>0===e[o];var o=(o,l)=>{var a,n,[c,r,i]=l,s=0;if(c.some((o=>0!==e[o]))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(i)var d=i(t)}for(o&&o(l);s<c.length;s++)n=c[s],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(d)},l=globalThis.webpackChunkrachana_wordpress_blocks=globalThis.webpackChunkrachana_wordpress_blocks||[];l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l))})();var a=t.O(void 0,[246],(()=>t(326)));a=t.O(a)})();