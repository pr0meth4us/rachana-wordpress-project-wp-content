(()=>{"use strict";var e,t={614:()=>{const e=window.React,t=window.wp.blockEditor,a=JSON.parse('{"title":"","content":"","imageUrl":"","contentColor":"var(--cgds-text-color)","titleColor":"var(--cgds-primary)","href":"","linkText":"","lastUpdated":""}'),l=window.wp.blocks,r=window.wp.components,o=(e,t,a,l)=>e.map(((e,r)=>r===t?{...e,[a]:l}:e));(0,l.registerBlockType)("rachana-block/card",{attributes:{cardItems:{type:"array",default:[a]}},edit:({attributes:l,setAttributes:c})=>{const{cardItems:n,style:s}=l,i=(0,t.useBlockProps)(),m=(e,t,a)=>{c({cardItems:o(n,e,t,a)})};return(0,e.createElement)("div",{...i},(0,e.createElement)(t.InspectorControls,null,(0,e.createElement)(r.PanelBody,{title:"Card Settings"},(0,e.createElement)(r.Button,{isSecondary:!0,onClick:()=>{var e,t;c({cardItems:(e=n,t=a,[...e,{...t}])})}},"Add Card Item"),(0,e.createElement)(r.SelectControl,{label:"Card Style",value:s||"",options:[{label:"Vertical",value:""},{label:"Horizontal",value:"card-horizontal"}],onChange:e=>{c({style:e})}}))),n.map(((a,l)=>(0,e.createElement)("div",{key:l},(0,e.createElement)(t.InspectorControls,null,(0,e.createElement)(r.PanelBody,{title:`Card Item ${l+1}`},(0,e.createElement)("div",{className:"components-base-control"},(0,e.createElement)("label",{className:"components-base-control__label"},"Body Text Color"),(0,e.createElement)(r.ColorPicker,{color:a.contentColor,onChangeComplete:e=>m(l,"contentColor",e.hex),disableAlpha:!0})),(0,e.createElement)("div",{className:"components-base-control"},(0,e.createElement)("label",{className:"components-base-control__label"},"Card Title Color"),(0,e.createElement)(r.ColorPicker,{color:a.titleColor,onChangeComplete:e=>m(l,"titleColor",e.hex),disableAlpha:!0})))),(0,e.createElement)("div",{className:"card",id:"card-"+(l+1)},(0,e.createElement)("span",null,"Card ",l+1),(0,e.createElement)(t.RichText,{tagName:"p",value:a.lastUpdated,onChange:e=>m(l,"lastUpdated",e),placeholder:"Last updated: [date/time]...",className:"card-text"}),(0,e.createElement)("div",{className:"col-md-12 image-upload-placeholder"},(0,e.createElement)(t.MediaUpload,{onSelect:e=>((e,t)=>{m(e,"imageUrl",t.url)})(l,e),allowedTypes:["image"],value:a.imageUrl,render:({open:t})=>(0,e.createElement)("button",{onClick:t},a.imageUrl?(0,e.createElement)("img",{src:a.imageUrl,alt:"Card Image"}):"Upload Image")})),(0,e.createElement)(t.RichText,{tagName:"h2",value:a.title,onChange:e=>m(l,"title",e),placeholder:"Enter card title...",className:"card-title"}),(0,e.createElement)(t.RichText,{tagName:"p",value:a.content,onChange:e=>m(l,"content",e),placeholder:"Enter card content...",className:"card-content",allowedFormats:["core/bold","core/heading"]}),(0,e.createElement)(t.RichText,{tagName:"p",value:a.linkText,onChange:e=>m(l,"linkText",e),placeholder:'Enter link guide e.g., "Click here for more details" ...',className:"card-content",allowedFormats:["core/bold","core/heading"]}),(0,e.createElement)(t.RichText,{tagName:"p",value:a.href,onChange:e=>m(l,"href",e),placeholder:"Enter the link to the page ...",className:"card-content",allowedFormats:["core/bold","core/heading"]}))))))},save:({attributes:a})=>{const{cardItems:l,style:r}=a,o=t.useBlockProps.save();return(0,e.createElement)("div",{...o,className:"wrapper-fluid"},(0,e.createElement)("section",{className:"page-component-overview"},(0,e.createElement)("article",null,(0,e.createElement)("div",{className:"cgds page-component-item-wrapper picture-item"},l.map(((t,a)=>(0,e.createElement)("div",{className:"cgds card",key:a+1,variant:`${r}`},(0,e.createElement)("div",{className:"card-body"},t.lastUpdated&&(0,e.createElement)("p",{className:"card-text"},(0,e.createElement)("small",{className:"text-muted"},t.lastUpdated)),t.imageUrl&&(0,e.createElement)("img",{className:"card-horizontal"===r?"card-img-left":"card-img-top",src:t.imageUrl,alt:"Card Image"}),(0,e.createElement)("a",{className:"stretched-link link-primary h3 card-title",style:{color:t.titleColor}},"ចំណងជើងកាត"),(0,e.createElement)("p",{className:"card-text",style:{color:t.contentColor}},t.content),t.linkText&&(0,e.createElement)("a",{className:"card-link",href:"#"},(0,e.createElement)("i",{className:"bi bi-arrow-right-circle-fill"})," ",t.linkText)))))))))}})}},a={};function l(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,a,r,o)=>{if(!a){var c=1/0;for(m=0;m<e.length;m++){for(var[a,r,o]=e[m],n=!0,s=0;s<a.length;s++)(!1&o||c>=o)&&Object.keys(l.O).every((e=>l.O[e](a[s])))?a.splice(s--,1):(n=!1,o<c&&(c=o));if(n){e.splice(m--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,r,o]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={860:0,84:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,[c,n,s]=a,i=0;if(c.some((t=>0!==e[t]))){for(r in n)l.o(n,r)&&(l.m[r]=n[r]);if(s)var m=s(l)}for(t&&t(a);i<c.length;i++)o=c[i],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(m)},a=globalThis.webpackChunkrachana_wordpress_blocks=globalThis.webpackChunkrachana_wordpress_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=l.O(void 0,[84],(()=>l(614)));r=l.O(r)})();