(()=>{"use strict";var e,l={714:()=>{const e=window.React,l=window.wp.blockEditor,t=JSON.parse('{"caption":"","rows":[{"cells":["","","",""]},{"cells":["","","",""]}],"style":"","width":100}'),a=window.wp.blocks,r=window.wp.components,n=window.wp.primitives,o=(0,e.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(n.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"})),s=(0,e.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(n.Path,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"}));(0,a.registerBlockType)("rachana-block/table",{attributes:{table:{type:"object",default:t}},edit:({attributes:t,setAttributes:a})=>{const{table:n}=t,c=(0,l.useBlockProps)(),i=(e,l)=>{a({table:{...n,[e]:l}})},m=(e,l,t)=>{const r=n.rows.map(((a,r)=>{if(r===e){const e=a.cells.map(((e,a)=>a===l?t:e));return{...a,cells:e}}return a}));a({table:{...n,rows:r}})};return(0,e.createElement)("div",{...c},(0,e.createElement)(l.InspectorControls,null,(0,e.createElement)(r.PanelBody,{title:"Table Settings"},(0,e.createElement)(r.TextControl,{label:"Caption",value:n.caption,onChange:e=>i("caption",e)}),(0,e.createElement)(r.SelectControl,{label:"Table Style",value:n.style,options:[{label:"Default",value:""},{label:"Small",value:"table-sm"},{label:"Bordered",value:"table-bordered"},{label:"Borderless",value:"table-borderless"},{label:"Hover",value:"table-hover"},{label:"Dark",value:"table-dark"}],onChange:e=>i("style",e)}),(0,e.createElement)(r.RangeControl,{label:"Table Width",value:n.width,onChange:e=>i("width",e),min:0,max:100,step:10}))),(0,e.createElement)("div",{className:"table-responsive"+("table-responsive"===n.style?"":"-lg")},(0,e.createElement)("table",{className:`table ${n.style}`,style:{width:`${n.width}%`}},(0,e.createElement)(l.RichText,{tagName:"caption",value:n.caption,onChange:e=>i("caption",e),placeholder:"Enter table caption..."}),(0,e.createElement)("thead",null,(0,e.createElement)("tr",null,n.rows[0].cells.map(((t,s)=>(0,e.createElement)("th",{key:s,scope:"col"},(0,e.createElement)(l.RichText,{tagName:"span",value:n.rows[0].cells[s],onChange:e=>m(0,s,e),placeholder:`Header ${s+1}`}),(0,e.createElement)(r.Button,{isSmall:!0,icon:o,onClick:()=>(e=>{const l=n.rows.map((l=>({...l,cells:l.cells.filter(((l,t)=>t!==e))})));a({table:{...n,columns:n.rows[0].cells.length-1,rows:l}})})(s)})))),(0,e.createElement)("th",null,(0,e.createElement)(r.Button,{isSmall:!0,icon:s,onClick:()=>{const e=n.rows.map((e=>({...e,cells:[...e.cells,""]})));a({table:{...n,columns:n.rows[0].cells.length+1,rows:e}})}})))),(0,e.createElement)("tbody",null,n.rows.slice(1).map(((t,s)=>(0,e.createElement)("tr",{key:s},t.cells.map(((t,a)=>(0,e.createElement)("td",{key:a},(0,e.createElement)(l.RichText,{tagName:"span",value:t,onChange:e=>m(s+1,a,e),placeholder:`Cell ${a+1}`})))),(0,e.createElement)("td",null,(0,e.createElement)(r.Button,{isSmall:!0,icon:o,onClick:()=>(e=>{const l=n.rows.filter(((l,t)=>t!==e));a({table:{...n,rows:l}})})(s)}))))),(0,e.createElement)("tr",null,(0,e.createElement)("td",{colSpan:n.columns+1,style:{border:"none"}},(0,e.createElement)(r.Button,{isSmall:!0,icon:s,onClick:()=>{const e=n.rows[0].cells.length,l={cells:Array(e).fill("")};a({table:{...n,rows:[...n.rows,l]}})}})))))))},save:({attributes:t})=>{const{table:a}=t,r=l.useBlockProps.save();return(0,e.createElement)("div",{...r},(0,e.createElement)("div",{className:"table-responsive"+("table-responsive"===a.style?"":"-lg")},(0,e.createElement)("table",{className:`table ${a.style}`,style:{width:`${a.width}%`}},(0,e.createElement)("caption",null,a.caption),(0,e.createElement)("thead",null,(0,e.createElement)("tr",null,a.rows[0].cells.map(((l,t)=>(0,e.createElement)("th",{key:t,scope:"col"},l))))),(0,e.createElement)("tbody",null,a.rows.slice(1).map(((l,t)=>(0,e.createElement)("tr",{key:t},l.cells.map(((l,t)=>(0,e.createElement)("td",{key:t},l))))))))))}})}},t={};function a(e){var r=t[e];if(void 0!==r)return r.exports;var n=t[e]={exports:{}};return l[e](n,n.exports,a),n.exports}a.m=l,e=[],a.O=(l,t,r,n)=>{if(!t){var o=1/0;for(m=0;m<e.length;m++){for(var[t,r,n]=e[m],s=!0,c=0;c<t.length;c++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](t[c])))?t.splice(c--,1):(s=!1,n<o&&(o=n));if(s){e.splice(m--,1);var i=r();void 0!==i&&(l=i)}}return l}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[t,r,n]},a.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={732:0,292:0};a.O.j=l=>0===e[l];var l=(l,t)=>{var r,n,[o,s,c]=t,i=0;if(o.some((l=>0!==e[l]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)var m=c(a)}for(l&&l(t);i<o.length;i++)n=o[i],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(m)},t=globalThis.webpackChunkrachana_wordpress_blocks=globalThis.webpackChunkrachana_wordpress_blocks||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))})();var r=a.O(void 0,[292],(()=>a(714)));r=a.O(r)})();