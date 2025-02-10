"use strict";(self.webpackChunkhentaiwiki=self.webpackChunkhentaiwiki||[]).push([[862],{5046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"ximi/gourami/upgrading-guide/goingtovallhalla","title":"Upgrading to Vallhalla (VA11 HALL-A, September Security Rollups)","description":"Upgrading recovery and boot images","source":"@site/devtech/ximi/gourami/upgrading-guide/goingtovallhalla.md","sourceDirName":"ximi/gourami/upgrading-guide","slug":"/ximi/gourami/upgrading-guide/goingtovallhalla","permalink":"/devtech/ximi/gourami/upgrading-guide/goingtovallhalla","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Vallhalla"},"sidebar":"sidebar","previous":{"title":"Frequently Asked Questions","permalink":"/devtech/ximi/gourami/installation-guide/faq"},"next":{"title":"Sv1 to Sv2","permalink":"/devtech/ximi/gourami/upgrading-guide/sv1tosv2"}}');var o=t(123),r=t(9161),l=t(4179),s=t(6977);const i={sidebar_label:"Vallhalla"},u="Upgrading to Vallhalla (VA11 HALL-A, September Security Rollups)",c={},d=[{value:"Upgrading recovery and boot images",id:"upgrading-recovery-and-boot-images",level:2},{value:"Sideloading",id:"sideloading",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"upgrading-to-vallhalla-va11-hall-a-september-security-rollups",children:"Upgrading to Vallhalla (VA11 HALL-A, September Security Rollups)"})}),"\n",(0,o.jsx)(n.h2,{id:"upgrading-recovery-and-boot-images",children:"Upgrading recovery and boot images"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Enter Fastboot mode,"})," make sure your phone turned off. Press and hold the Power and Volume buttons for 3 seconds until the phone turns on. You will be in Fasboot mode."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Fastboot",src:t(2074).A+""})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Once your phone is in Fastboot mode, connect your phone to a computer using a USB Cable."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Once you connected your phone to a computer using a USB Cable, check your phone connection to the computer by executing ",(0,o.jsx)(n.code,{children:"fastboot devices"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Once the device showed up in fastboot devices, continue with Sideloading the boot image with the following commands:"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(l.A,{defaultValue:"alioth",values:[{label:"A-Only Devices",value:"a-devices"},{label:"POCO F3 (alioth)",value:"alioth"},{label:"POCO F4 (munch)",value:"munch"}],children:[(0,o.jsx)(s.A,{value:"a-devices",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"fastboot flash dtbo dtbo_gourami.img\nfastboot flash recovery recovery_DEVICENAME.img\n"})})}),(0,o.jsx)(s.A,{value:"alioth",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"fastboot flash dtbo dtbo_gourami.img\nfastboot flash boot boot_alioth.img\nfastboot flash vendor_boot vendor_boot_alioth.img\n"})})}),(0,o.jsx)(s.A,{value:"munch",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"fastboot flash dtbo dtbo_gourami.img\nfastboot flash boot boot_munch.img\nfastboot flash vendor_boot vendor_boot_munch.img\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"sideloading",children:"Sideloading"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Enter Recovery mode"})," by pressing and holding the Power and Volume up buttons for 3 seconds until the phone turns on. You will be in Recovery mode."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Once your phone is in Recovery mode and shows \u201cNo Command\u201d, hit Power button, while holding it, hit Volume + (Up) button."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"KeyCombination",src:t(367).A+""})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Use the volume buttons to move through the menu options, when \u201cInstall update through ADB\u201d is highlighted, press the Power button."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Flash the ROM through recovery with adb sideload command from your Mac/PC."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"ADBSideloadWindow",src:t(8590).A+""})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Use the volume buttons to move through the menu options, when \u201cReboot to System\u201d is highlighted, press the Power button."}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},6977:(e,n,t)=>{t.d(n,{A:()=>l});t(1467);var a=t(7167);const o={tabItem:"tabItem_aOdX"};var r=t(123);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:t,children:n})}},4179:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(1467),o=t(7167),r=t(9565),l=t(9224),s=t(3705),i=t(8422),u=t(5591),c=t(1913);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=m({queryString:t,groupId:o}),[b,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,c.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),f=(()=>{const e=u??b;return g({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)}),[d,p,r]),tabValues:r}}var p=t(6475);const f={tabList:"tabList_DJjp",tabItem:"tabItem_kVw8"};var v=t(123);function x(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),o=s[t].value;o!==a&&(u(n),l(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...r,className:(0,o.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,p.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},8590:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/adb-sideload-window-80d2df96f50373ebe778b7216eacb811.svg"},2074:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/fastboot-19cb6aaa1dfd0d9204a94b8112ef8fd1.svg"},367:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/key-combination-6f23628fc528c415004dae4dbbc5bda4.svg"},9161:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var a=t(1467);const o={},r=a.createContext(o);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);