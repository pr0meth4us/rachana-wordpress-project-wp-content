(()=>{var e,t={870:(e,t,a)=>{"use strict";const r=window.React,l=window.wp.blockEditor,n=JSON.parse('{"title":"","content":"","imageUrl":"","contentColor":"var(--cgds-text-color)","titleColor":"var(--cgds-primary)","href":"","linkText":"","lastUpdated":"","id":""}'),o=window.wp.blocks,c=window.wp.components;var s=a(824),i=a.n(s);window.wp.apiFetch;const d=(e,t,a,r)=>e.map((e=>e.id===t?{...e,[a]:r}:e));(0,o.registerBlockType)("rachana-block/card",{attributes:{cardItems:{type:"array",default:[(e=>{const t={id:i().generate()};return Object.keys(e).forEach((a=>{t[a]=e[a]})),t})(n)]}},edit:({attributes:e,setAttributes:t})=>{const{cardItems:a,style:o}=e,s=(0,l.useBlockProps)(),m=(e,r,l)=>{t({cardItems:d(a,e,r,l)})};return(0,r.createElement)("div",{...s},(0,r.createElement)(l.InspectorControls,null,(0,r.createElement)(c.PanelBody,{title:"Card Settings"},(0,r.createElement)(c.Button,{isSecondary:!0,onClick:()=>{var e,r;t({cardItems:(e=a,r=n,[...e,{...r,id:i().generate()}])})}},"Add Card Item"),(0,r.createElement)(c.SelectControl,{label:"Card Style",value:o||"",options:[{label:"Vertical",value:""},{label:"Horizontal",value:"card-horizontal"}],onChange:e=>{t({style:e})}}))),a.map(((e,t)=>(0,r.createElement)("div",{key:e.id},(0,r.createElement)(l.InspectorControls,null,(0,r.createElement)(c.PanelBody,{title:`Card Item ${t+1}`},(0,r.createElement)("div",{className:"components-base-control"},(0,r.createElement)("label",{className:"components-base-control__label"},"Body Text Color"),(0,r.createElement)(c.ColorPicker,{color:e.contentColor,onChangeComplete:t=>m(e.id,"contentColor",t.hex),disableAlpha:!0})),(0,r.createElement)("div",{className:"components-base-control"},(0,r.createElement)("label",{className:"components-base-control__label"},"Card Title Color"),(0,r.createElement)(c.ColorPicker,{color:e.titleColor,onChangeComplete:t=>m(e.id,"titleColor",t.hex),disableAlpha:!0})),(0,r.createElement)("div",{className:"components-base-control"},(0,r.createElement)("label",{className:"components-base-control__label"},"Show Last Updated"),(0,r.createElement)(c.ToggleControl,{label:"Show Last Updated",checked:e.showLastUpdated,onChange:t=>m(e.id,"showLastUpdated",t)})),e.showLastUpdated&&(0,r.createElement)("div",{className:"components-base-control"},(0,r.createElement)("label",{className:"components-base-control__label"},"Last Updated"),(0,r.createElement)(c.DatePicker,{currentDate:e.lastUpdated,onChange:t=>m(e.id,"lastUpdated",(e=>new Date(e).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}).replace(/ /g,"/"))(t)),isClearable:!0})))),(0,r.createElement)("div",{className:"card",id:"card-"+e.id},(0,r.createElement)("span",null,"Card ",t+1),e.showLastUpdated&&(0,r.createElement)(l.RichText,{tagName:"p",value:e.lastUpdated,onChange:t=>m(e.id,"lastUpdated",t),placeholder:"Last updated: [date/time]...",className:"card-text"}),(0,r.createElement)("div",{className:"col-md-12 image-upload-placeholder"},(0,r.createElement)(l.MediaUpload,{onSelect:t=>((e,t)=>{m(e,"imageUrl",t.url)})(e.id,t),allowedTypes:["image"],value:e.imageUrl,render:({open:t})=>(0,r.createElement)("button",{onClick:t},e.imageUrl?(0,r.createElement)("img",{src:e.imageUrl,alt:"Card Image"}):"Upload Image")})),(0,r.createElement)(l.RichText,{tagName:"h2",value:e.title,onChange:t=>m(e.id,"title",t),placeholder:"Enter card title...",className:"card-title"}),(0,r.createElement)(l.RichText,{tagName:"p",value:e.content,onChange:t=>m(e.id,"content",t),placeholder:"Enter card content...",className:"card-content",allowedFormats:["core/bold","core/heading"]}),(0,r.createElement)(l.RichText,{tagName:"p",value:e.linkText,onChange:t=>m(e.id,"linkText",t),placeholder:'Enter link guide e.g., "Click here for more details" ...',className:"card-content",allowedFormats:["core/bold","core/heading"]}),(0,r.createElement)(l.RichText,{tagName:"p",value:e.href,onChange:t=>m(e.id,"href",t),placeholder:"Enter the link to the page ...",className:"card-content",allowedFormats:["core/bold","core/heading"]}))))))},save:({attributes:e})=>{const{cardItems:t,style:a}=e,n=l.useBlockProps.save();return(0,r.createElement)("div",{...n,className:"wrapper-fluid"},(0,r.createElement)("section",{className:"page-component-overview"},(0,r.createElement)("article",null,(0,r.createElement)("div",{className:"cgds page-component-item-wrapper picture-item"},t.map((e=>(0,r.createElement)("div",{className:`cgds card ${a}`,key:e.id},e.imageUrl&&(0,r.createElement)("img",{className:"card-horizontal"===a?"card-img-left":"card-img-top",src:e.imageUrl,alt:"Card Image"}),(0,r.createElement)("div",{className:"card-body"},e.lastUpdated&&(0,r.createElement)("p",{className:"card-text"},(0,r.createElement)("small",{className:"text-muted"},e.lastUpdated)),(0,r.createElement)("a",{className:"stretched-link link-primary h3 card-title",style:{color:e.titleColor}},e.title),(0,r.createElement)("p",{className:"card-text",style:{color:e.contentColor}},e.content),e.linkText&&(0,r.createElement)("a",{className:"card-link",href:"#"},(0,r.createElement)("i",{className:"bi bi-arrow-right-circle-fill"})," ",e.linkText)))))))))}})},824:(e,t,a)=>{"use strict";e.exports=a(276)},897:(e,t,a)=>{"use strict";var r,l,n,o=a(452),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){n=!1}function i(e){if(e){if(e!==r){if(e.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,a){return t!==a.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,s()}}else r!==c&&(r=c,s())}function d(){return n||(n=function(){r||i(c);for(var e,t=r.split(""),a=[],l=o.nextValue();t.length>0;)l=o.nextValue(),e=Math.floor(l*t.length),a.push(t.splice(e,1)[0]);return a.join("")}())}e.exports={get:function(){return r||c},characters:function(e){return i(e),r},seed:function(e){o.seed(e),l!==e&&(s(),l=e)},lookup:function(e){return d()[e]},shuffled:d}},852:(e,t,a)=>{"use strict";var r,l,n=a(697);a(897),e.exports=function(e){var t="",a=Math.floor(.001*(Date.now()-1567752802062));return a===l?r++:(r=0,l=a),t+=n(7),t+=n(e),r>0&&(t+=n(r)),t+n(a)}},697:(e,t,a)=>{"use strict";var r=a(897),l=a(659),n=a(886);e.exports=function(e){for(var t,a=0,o="";!t;)o+=n(l,r.get(),1),t=e<Math.pow(16,a+1),a++;return o}},276:(e,t,a)=>{"use strict";var r=a(897),l=a(852),n=a(905),o=a(263)||0;function c(){return l(o)}e.exports=c,e.exports.generate=c,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return o=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=n},905:(e,t,a)=>{"use strict";var r=a(897);e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6||new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e))}},659:e=>{"use strict";var t,a="object"==typeof window&&(window.crypto||window.msCrypto);t=a&&a.getRandomValues?function(e){return a.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(256*Math.random()));return t},e.exports=t},452:e=>{"use strict";var t=1;e.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(e){t=e}}},263:e=>{"use strict";e.exports=0},886:e=>{e.exports=function(e,t,a){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,l=-~(1.6*r*a/t.length),n="";;)for(var o=e(l),c=l;c--;)if((n+=t[o[c]&r]||"").length===+a)return n}}},a={};function r(e){var l=a[e];if(void 0!==l)return l.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,a,l,n)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,l,n]=e[d],c=!0,s=0;s<a.length;s++)(!1&n||o>=n)&&Object.keys(r.O).every((e=>r.O[e](a[s])))?a.splice(s--,1):(c=!1,n<o&&(o=n));if(c){e.splice(d--,1);var i=l();void 0!==i&&(t=i)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,l,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={860:0,84:0};r.O.j=t=>0===e[t];var t=(t,a)=>{var l,n,[o,c,s]=a,i=0;if(o.some((t=>0!==e[t]))){for(l in c)r.o(c,l)&&(r.m[l]=c[l]);if(s)var d=s(r)}for(t&&t(a);i<o.length;i++)n=o[i],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},a=globalThis.webpackChunkrachana_wordpress_blocks=globalThis.webpackChunkrachana_wordpress_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=r.O(void 0,[84],(()=>r(870)));l=r.O(l)})();