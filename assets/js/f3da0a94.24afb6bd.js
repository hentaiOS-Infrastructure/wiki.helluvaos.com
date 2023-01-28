"use strict";(self.webpackChunkhentaiwiki=self.webpackChunkhentaiwiki||[]).push([[86],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>h});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=i,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||n;return r?a.createElement(h,o(o({ref:t},g),{},{components:r})):a.createElement(h,o({ref:t},g))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_label:"Adaptive Charging"},o="How Adaptive Charging works",s={unversionedId:"ximi/gourami/adaptive-charging",id:"ximi/gourami/adaptive-charging",title:"How Adaptive Charging works",description:"Adaptive Charging is designed to deliver battery life that lasts all day. Incorporating some of the device's large batteries encouraged upgrades to charge as well: from a user perspective, a bigger battery shouldn\u2019t have to mean it takes longer to charge to 100%.",source:"@site/devtech/ximi/gourami/adaptive-charging.md",sourceDirName:"ximi/gourami",slug:"/ximi/gourami/adaptive-charging",permalink:"/devtech/ximi/gourami/adaptive-charging",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Adaptive Charging"},sidebar:"mainSidebar",previous:{title:"Sv1 to Sv2",permalink:"/devtech/ximi/gourami/upgrading-guide/sv1tosv2"},next:{title:"Reporting Issues",permalink:"/devtech/ximi/gourami/reporting-issues"}},c={},l=[],g={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-adaptive-charging-works"},"How Adaptive Charging works"),(0,i.kt)("p",null,"Adaptive Charging is designed to deliver battery life that lasts all day. Incorporating some of the device's large batteries encouraged upgrades to charge as well: from a user perspective, a bigger battery shouldn\u2019t have to mean it takes longer to charge to 100%."),(0,i.kt)("p",null,"Battery cell design determines the maximum charging power required for smartphones. A battery can be designed for high energy density, or for fast charging power capability, which requires trading off capacity to minimize battery degradation."),(0,i.kt)("p",null,"Regardless of available power coming from the wall plug, the actual power delivered through a full charge cycle varies over the course of a single charge. The charge rate at any moment is based on factors such as battery cell and system design, temperature, system usage, and state of charge."),(0,i.kt)("p",null,"We\u2019ve optimized Gourami's lithium-ion battery for high charge rates when the battery level is low. it can get up to 50% in around 30 minutes (with Xiaomi\u2019s 30W USB-C Power Charger), and quickly reaches up to 80% in about an hour, depending on device usage and temperature. The peak power that the device draws from the wired charger is 27W and 30W, respectively. As the battery gets closer to full, charging power is gradually reduced in order to improve battery longevity."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/support-forums-api/attachment/thread-135906719-3819305603872996858.gif",alt:"Battery Charging mmmm"})),(0,i.kt)("p",null,"It may also pause charging above 80% under certain conditions, and if you enable Adaptive Charging, Gourami devices can optimize charge rates for gradual overnight charging. Taken together, these approaches help you charge your Gourami device quickly when the battery is low, but also help minimize degradation to preserve the lifespan of your battery."))}p.isMDXComponent=!0}}]);