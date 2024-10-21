"use strict";(self.webpackChunkhentaiwiki=self.webpackChunkhentaiwiki||[]).push([[394],{9603:(M,j,t)=>{t.r(j),t.d(j,{assets:()=>a,contentTitle:()=>n,default:()=>S,frontMatter:()=>i,metadata:()=>o,toc:()=>T});var u=t(123),L=t(147),e=t(521),N=t(658);const i={sidebar_label:"A-Only",title:"Xiaomi Gourami A-Only Installation Guide",description:"Installation Guide for installing hentaiOS to Xiaomi Gourami (Kona) A-Only devices",keywords:["install guide","xiaomi","gourami","apollo","xiaomi mi 10t"]},n="A-Only Installation Guide",o={id:"ximi/gourami/installation-guide/a-only",title:"Xiaomi Gourami A-Only Installation Guide",description:"Installation Guide for installing hentaiOS to Xiaomi Gourami (Kona) A-Only devices",source:"@site/devtech/ximi/gourami/installation-guide/a-only.md",sourceDirName:"ximi/gourami/installation-guide",slug:"/ximi/gourami/installation-guide/a-only",permalink:"/devtech/ximi/gourami/installation-guide/a-only",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"A-Only",title:"Xiaomi Gourami A-Only Installation Guide",description:"Installation Guide for installing hentaiOS to Xiaomi Gourami (Kona) A-Only devices",keywords:["install guide","xiaomi","gourami","apollo","xiaomi mi 10t"]},sidebar:"sidebar",previous:{title:"Xiaomi Gourami",permalink:"/devtech/ximi/gourami/"},next:{title:"A/B",permalink:"/devtech/ximi/gourami/installation-guide/ab"}},a={},T=[{value:"Before you start",id:"before-you-start",level:2},{value:"Connect your device",id:"connect-your-device",level:2},{value:"Install from MIUI",id:"install-from-miui",level:2}];function g(M){const j={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,L.R)(),...M.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(j.h1,{id:"a-only-installation-guide",children:"A-Only Installation Guide"}),"\n",(0,u.jsx)(j.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,u.jsxs)(j.ol,{children:["\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsxs)(j.p,{children:[(0,u.jsx)(j.strong,{children:"Keep a backup of your data."})," Make sure to keep a backup of your files as the installaton will wipe your data."]}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsxs)(j.p,{children:[(0,u.jsx)(j.strong,{children:"You must come from MIUI."})," Make sure you come from MIUI and not using other ROM before installation. If you come from other ROM, flash MIUI and boot it once before continuing installation."]}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsxs)(j.p,{children:["To obtain the required platform-tools, ",(0,u.jsx)(j.a,{href:"/docs/installation/installing-requirements",children:"Read here."})]}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsxs)(j.p,{children:["You can download the latest required installkit ",(0,u.jsx)(j.a,{href:"https://get.hentaios.com/download?id=344db749b407c9f5&rv=2",children:"here."})]}),"\n"]}),"\n"]}),"\n",(0,u.jsx)(j.h2,{id:"connect-your-device",children:"Connect your device"}),"\n",(0,u.jsxs)(j.ol,{children:["\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsxs)(j.p,{children:[(0,u.jsx)(j.strong,{children:"Enter Fastboot mode,"})," make sure your phone turned off. Press and hold the Power and Volume buttons for 3 seconds until the phone turns on. You will be in Fasboot mode."]}),"\n",(0,u.jsx)(j.p,{children:(0,u.jsx)(j.img,{alt:"Fastboot",src:t(1219).A+""})}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsx)(j.p,{children:"Once your phone is in Fastboot mode, connect your phone to a computer using a USB Cable."}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsxs)(j.p,{children:["Once you connected your phone to a computer using a USB Cable, check your phone connection to the computer by executing ",(0,u.jsx)(j.code,{children:"fastboot devices"})]}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsx)(j.p,{children:"Once the device showed up in fastboot devices, continue with Sideloading the boot image with the following commands:"}),"\n"]}),"\n"]}),"\n",(0,u.jsxs)(e.A,{defaultValue:"lmi",values:[{label:"POCO F2 Pro (lmi)",value:"lmi"},{label:"Mi 10T Pro (apollo)",value:"apollo"}],children:[(0,u.jsx)(N.A,{value:"lmi",children:(0,u.jsx)(j.pre,{children:(0,u.jsx)(j.code,{className:"language-bash",children:"cd {directory where you extracted the installkit files}/lmi\nfastboot flash dtbo dtbo.img\nfastboot flash recovery recovery.img\n"})})}),(0,u.jsx)(N.A,{value:"apollo",children:(0,u.jsx)(j.pre,{children:(0,u.jsx)(j.code,{className:"language-bash",children:"cd {directory where you extracted the installkit files}/apollo\nfastboot flash dtbo dtbo.img\nfastboot flash recovery recovery.img\n"})})})]}),"\n",(0,u.jsx)(j.h2,{id:"install-from-miui",children:"Install from MIUI"}),"\n",(0,u.jsxs)(j.ol,{children:["\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsxs)(j.p,{children:[(0,u.jsx)(j.strong,{children:"Enter Recovery mode"})," by pressing and holding the Power and Volume up buttons for 3 seconds until the phone turns on. You will be in Recovery mode."]}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsx)(j.p,{children:"Once your phone is in Recovery mode and shows \u201cNo Command\u201d, hit Power button, while holding it, hit Volume + (Up) button."}),"\n",(0,u.jsx)(j.p,{children:(0,u.jsx)(j.img,{alt:"KeyCombination",src:t(3836).A+""})}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsxs)(j.p,{children:[(0,u.jsx)(j.strong,{children:"Do a Factory Reset."})," Use the volume buttons to move through the menu options, when \u201cFactory Reset\u201d is highlighted, press the Power button."]}),"\n",(0,u.jsx)(j.p,{children:(0,u.jsx)(j.img,{alt:"WipeData",src:t(1609).A+""})}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsx)(j.p,{children:"Use the volume buttons to move through the menu options, when \u201cInstall update through ADB\u201d is highlighted, press the Power button."}),"\n",(0,u.jsx)(j.p,{children:(0,u.jsx)(j.img,{alt:"ADBInstall",src:t(8634).A+""})}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsx)(j.p,{children:"Flash the ROM through recovery with adb sideload command from your Mac/PC."}),"\n",(0,u.jsx)(j.p,{children:(0,u.jsx)(j.img,{alt:"ADBSideloadWindow",src:t(949).A+""})}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsx)(j.p,{children:"Use the volume buttons to move through the menu options, when \u201cReboot to System\u201d is highlighted, press the Power button."}),"\n",(0,u.jsx)(j.p,{children:(0,u.jsx)(j.img,{alt:"Reboot to System",src:t(1820).A+""})}),"\n"]}),"\n"]}),"\n",(0,u.jsx)(j.h1,{id:"sideloading-updates",children:"Sideloading Updates"}),"\n",(0,u.jsxs)(j.ol,{children:["\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsxs)(j.p,{children:[(0,u.jsx)(j.strong,{children:"Enter Recovery mode"})," by pressing and holding the Power and Volume up buttons for 3 seconds until the phone turns on. You will be in Recovery mode."]}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsx)(j.p,{children:"Once your phone is in Recovery mode and shows \u201cNo Command\u201d, hit Power button, while holding it, hit Volume + (Up) button."}),"\n",(0,u.jsx)(j.p,{children:(0,u.jsx)(j.img,{alt:"KeyCombination",src:t(3836).A+""})}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsx)(j.p,{children:"Use the volume buttons to move through the menu options, when \u201cInstall update through ADB\u201d is highlighted, press the Power button."}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsx)(j.p,{children:"Flash the ROM through recovery with adb sideload command from your Mac/PC."}),"\n",(0,u.jsx)(j.p,{children:(0,u.jsx)(j.img,{alt:"ADBSideloadWindow",src:t(949).A+""})}),"\n"]}),"\n",(0,u.jsxs)(j.li,{children:["\n",(0,u.jsx)(j.p,{children:"Use the volume buttons to move through the menu options, when \u201cReboot to System\u201d is highlighted, press the Power button."}),"\n"]}),"\n"]})]})}function S(M={}){const{wrapper:j}={...(0,L.R)(),...M.components};return j?(0,u.jsx)(j,{...M,children:(0,u.jsx)(g,{...M})}):g(M)}},658:(M,j,t)=>{t.d(j,{A:()=>N});t(1467);var u=t(7167);const L={tabItem:"tabItem_A6xC"};var e=t(123);function N(M){let{children:j,hidden:t,className:N}=M;return(0,e.jsx)("div",{role:"tabpanel",className:(0,u.A)(L.tabItem,N),hidden:t,children:j})}},521:(M,j,t)=>{t.d(j,{A:()=>d});var u=t(1467),L=t(7167),e=t(2196),N=t(4110),i=t(9343),n=t(3825),o=t(1950),a=t(6570);function T(M){return u.Children.toArray(M).filter((M=>"\n"!==M)).map((M=>{if(!M||(0,u.isValidElement)(M)&&function(M){const{props:j}=M;return!!j&&"object"==typeof j&&"value"in j}(M))return M;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof M.type?M.type:M.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(M){const{values:j,children:t}=M;return(0,u.useMemo)((()=>{const M=j??function(M){return T(M).map((M=>{let{props:{value:j,label:t,attributes:u,default:L}}=M;return{value:j,label:t,attributes:u,default:L}}))}(t);return function(M){const j=(0,o.X)(M,((M,j)=>M.value===j.value));if(j.length>0)throw new Error(`Docusaurus error: Duplicate values "${j.map((M=>M.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(M),M}),[j,t])}function S(M){let{value:j,tabValues:t}=M;return t.some((M=>M.value===j))}function s(M){let{queryString:j=!1,groupId:t}=M;const L=(0,N.W6)(),e=function(M){let{queryString:j=!1,groupId:t}=M;if("string"==typeof j)return j;if(!1===j)return null;if(!0===j&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:j,groupId:t});return[(0,n.aZ)(e),(0,u.useCallback)((M=>{if(!e)return;const j=new URLSearchParams(L.location.search);j.set(e,M),L.replace({...L.location,search:j.toString()})}),[e,L])]}function x(M){const{defaultValue:j,queryString:t=!1,groupId:L}=M,e=g(M),[N,n]=(0,u.useState)((()=>function(M){let{defaultValue:j,tabValues:t}=M;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(j){if(!S({value:j,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${t.map((M=>M.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return j}const u=t.find((M=>M.default))??t[0];if(!u)throw new Error("Unexpected error: 0 tabValues");return u.value}({defaultValue:j,tabValues:e}))),[o,T]=s({queryString:t,groupId:L}),[x,l]=function(M){let{groupId:j}=M;const t=function(M){return M?`docusaurus.tab.${M}`:null}(j),[L,e]=(0,a.Dv)(t);return[L,(0,u.useCallback)((M=>{t&&e.set(M)}),[t,e])]}({groupId:L}),D=(()=>{const M=o??x;return S({value:M,tabValues:e})?M:null})();(0,i.A)((()=>{D&&n(D)}),[D]);return{selectedValue:N,selectValue:(0,u.useCallback)((M=>{if(!S({value:M,tabValues:e}))throw new Error(`Can't select invalid tab value=${M}`);n(M),T(M),l(M)}),[T,l,e]),tabValues:e}}var l=t(8109);const D={tabList:"tabList_bOfO",tabItem:"tabItem_Cpua"};var c=t(123);function r(M){let{className:j,block:t,selectedValue:u,selectValue:N,tabValues:i}=M;const n=[],{blockElementScrollPositionUntilNextRender:o}=(0,e.a_)(),a=M=>{const j=M.currentTarget,t=n.indexOf(j),L=i[t].value;L!==u&&(o(j),N(L))},T=M=>{let j=null;switch(M.key){case"Enter":a(M);break;case"ArrowRight":{const t=n.indexOf(M.currentTarget)+1;j=n[t]??n[0];break}case"ArrowLeft":{const t=n.indexOf(M.currentTarget)-1;j=n[t]??n[n.length-1];break}}j?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,L.A)("tabs",{"tabs--block":t},j),children:i.map((M=>{let{value:j,label:t,attributes:e}=M;return(0,c.jsx)("li",{role:"tab",tabIndex:u===j?0:-1,"aria-selected":u===j,ref:M=>n.push(M),onKeyDown:T,onClick:a,...e,className:(0,L.A)("tabs__item",D.tabItem,e?.className,{"tabs__item--active":u===j}),children:t??j},j)}))})}function I(M){let{lazy:j,children:t,selectedValue:L}=M;const e=(Array.isArray(t)?t:[t]).filter(Boolean);if(j){const M=e.find((M=>M.props.value===L));return M?(0,u.cloneElement)(M,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:e.map(((M,j)=>(0,u.cloneElement)(M,{key:j,hidden:M.props.value!==L})))})}function y(M){const j=x(M);return(0,c.jsxs)("div",{className:(0,L.A)("tabs-container",D.tabList),children:[(0,c.jsx)(r,{...j,...M}),(0,c.jsx)(I,{...j,...M})]})}function d(M){const j=(0,l.A)();return(0,c.jsx)(y,{...M,children:T(M.children)},String(j))}},8634:(M,j,t)=>{t.d(j,{A:()=>u});const u=t.p+"assets/images/adb-install-26146a3c849c149adf87d6ee1e1e8f7a.svg"},949:(M,j,t)=>{t.d(j,{A:()=>u});const u=t.p+"assets/images/adb-sideload-window-80d2df96f50373ebe778b7216eacb811.svg"},1219:(M,j,t)=>{t.d(j,{A:()=>u});const u=t.p+"assets/images/fastboot-19cb6aaa1dfd0d9204a94b8112ef8fd1.svg"},3836:(M,j,t)=>{t.d(j,{A:()=>u});const u=t.p+"assets/images/key-combination-6f23628fc528c415004dae4dbbc5bda4.svg"},1820:(M,j,t)=>{t.d(j,{A:()=>u});const u=t.p+"assets/images/reboot-system-99b1d69beab0c97bcd4f69b6b787af41.svg"},1609:(M,j,t)=>{t.d(j,{A:()=>u});const u="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE1IiBoZWlnaHQ9IjE4NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Ik0xNTUuNzk1IDcyLjYwOWgxLjUxYTEgMSAwIDAgMSAxIDF2MTcuMTY3YTEgMSAwIDAgMS0xIDFoLTEuNTFWNzIuNjA5WiIgZmlsbD0iI0Q5RDlEOSIvPjxwYXRoIGQ9Ik0xNTUuNzk1IDk1Ljk5N2gxLjUxYTEgMSAwIDAgMSAxIDF2MTcuMTY3YTEgMSAwIDAgMS0xIDFoLTEuNTFWOTUuOTk3WiIgZmlsbD0iIzAwN0FGRiIvPjxwYXRoIGQ9Ik0xNTUuNzk1IDEzMC42M2gxLjUxYTEgMSAwIDAgMSAxIDF2MTcuMTY2YTEgMSAwIDAgMS0xIDFoLTEuNTFWMTMwLjYzWiIgZmlsbD0iI0U5NEY2MCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTM1LjMzMy0uNDE2SDIxLjYzNmMtMTIuMTUgMC0yMiA5Ljg1LTIyIDIydjMwMC4wOTRjMCAxMi4xNSA5Ljg1IDIyIDIyIDIyaDExMy42OTdjMTIuMTUgMCAyMi05Ljg1IDIyLTIyVjE1MS4yMTNoLTEuNjU0YS41LjUgMCAwIDEtLjUtLjV2LTIxYS41LjUgMCAwIDEgLjUtLjVoMS42NTR2LTEyLjYzMmgtMS42NTRhLjUuNSAwIDAgMS0uNS0uNXYtMjFhLjUuNSAwIDAgMSAuNS0uNWgxLjY1NHYtMS4zODloLTEuNjU0YS41LjUgMCAwIDEtLjUtLjV2LTIxYS41LjUgMCAwIDEgLjUtLjVoMS42NTRWMjEuNTg0YzAtMTIuMTUtOS44NS0yMi0yMi0yMlptLTEzMi42OTcgMjJjMC0xMC40OTQgOC41MDctMTkgMTktMTloMTEzLjY5N2MxMC40OTMgMCAxOSA4LjUwNiAxOSAxOXYzMDAuMDk0YzAgMTAuNDk0LTguNTA3IDE5LTE5IDE5SDIxLjYzNmMtMTAuNDkzIDAtMTktOC41MDYtMTktMTlWMjEuNTg0WiIgZmlsbD0iI0E2QTZBNiIvPjxyZWN0IHg9IjIuNjM2IiB5PSIyLjU4NCIgd2lkdGg9IjE1MS42OTciIGhlaWdodD0iMzM4LjA5NCIgcng9IjE5IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTIxMy42MzEgMTA0LjU4MWExIDEgMCAxIDEgMCAyaC00NC4xMzJsNC43OSA0Ljc5YTEuMDA0IDEuMDA0IDAgMCAxLTEuNDIgMS40MmwtNy4yMS03LjIxIDcuMjEtNy4yMWExLjAwNCAxLjAwNCAwIDAgMSAxLjQyIDEuNDJsLTQuNzkgNC43OWg0NC4xMzJaIiBmaWxsPSIjMDA3QUZGIi8+PHBhdGggZD0iTTIxMS43NDEgMTM5LjIxM2ExIDEgMCAwIDEgMCAyaC00Mi4yNDJsNC43OSA0Ljc5YTEuMDA0IDEuMDA0IDAgMCAxLTEuNDIgMS40MmwtNy4yMS03LjIxIDcuMjEtNy4yMWExLjAwNCAxLjAwNCAwIDAgMSAxLjQyIDEuNDJsLTQuNzkgNC43OWg0Mi4yNDJaIiBmaWxsPSIjRTk0RjYwIi8+PHBhdGggZD0iTTE4LjUyNCAyMi4zOTVoLjcyN2wtMS44MTctNS42MzZIMTYuN2wtMS44MTYgNS42MzZoLjY5OWwuNDkyLTEuNjE3aDEuOTZsLjQ5IDEuNjE3Wm0tMS40NzYtNC44MDhoLjAybC43ODggMi42MDFoLTEuNjAxbC43OTMtMi42MDFabTMuMjMgNC44MDhoLjY2NFYxOS45YzAtLjcyMy40NjktMS4yMSAxLjE2OC0xLjIxLjY2IDAgLjk3My4zNTkuOTczIDEuMTI0djIuNTgyaC42NjR2LTIuNzVjMC0xLjAxNS0uNS0xLjU2Ni0xLjQyMi0xLjU2Ni0uNjQ1IDAtMS4xMjkuMjk3LTEuMzU1LjgyNGgtLjA1NXYtLjc0NmgtLjYzN3Y0LjIzOFptNi40MTQuMDdjLjYwNiAwIDEuMDUtLjI1IDEuMjctLjcxOGguMDc0di42NDhoLjY1MnYtNS45MDJoLS42NzV2Mi4zMmgtLjA3Yy0uMTg0LS40NjUtLjYzOC0uNzI2LTEuMjUtLjcyNi0uOTgxIDAtMS42MjIuNzA3LTEuNjIyIDEuNzkzdi43ODljMCAxLjA5LjY0IDEuNzk3IDEuNjIxIDEuNzk3Wm0uMTk1LS42MDVjLS42OTkgMC0xLjE0OC0uNTA0LTEuMTQ4LTEuMjg1di0uNjFjMC0uNzguNDUtMS4yOCAxLjE0OC0xLjI4LjY5NiAwIDEuMTQ1LjUgMS4xNDUgMS4yOHYuNjFjMCAuNzg1LS40NSAxLjI4NS0xLjE0NSAxLjI4NVptNC44NDgtMS4zNjNjMC0xLjA3OC41NTUtMS43MjcgMS40OTItMS43MjcuMjMgMCAuNTA0LjA0Ny43LjExN3YtLjc0NmMtLjE0MS0uMDU4LS4zNzItLjA5My0uNjE0LS4wOTMtLjgxNiAwLTEuMzQ0LjQwNi0xLjUgMS4xOTFoLS4wODZ2LTEuMDgyaC0xLjU4MnYuNTMxaC45NDJ2My4xNzZoLS44NTZ2LjUzMWgyLjgxN3YtLjUzMWgtMS4zMTN2LTEuMzY3Wm01LjExMyAxLjk3NmMxLjEyMSAwIDEuODM2LS43MyAxLjgzNi0xLjg3NXYtLjY0YzAtMS4xNDUtLjcxNS0xLjg3NS0xLjgzNi0xLjg3NS0xLjEyIDAtMS44MzUuNzMtMS44MzUgMS44NzV2LjY0YzAgMS4xNDUuNzE0IDEuODc1IDEuODM1IDEuODc1Wm0wLTMuODA0Yy43MjcgMCAxLjE4LjUxNSAxLjE4IDEuMzQ3di41MmMwIC44MzYtLjQ1MyAxLjM0OC0xLjE4IDEuMzQ4LS43MjYgMC0xLjE4LS41MTItMS4xOC0xLjM0OHYtLjUyYzAtLjgzMi40NTQtMS4zNDcgMS4xOC0xLjM0N1ptNS4wMi0xLjU1MWMuMzEyIDAgLjU1LS4yMzQuNTUtLjU0N2EuNTM2LjUzNiAwIDAgMC0uNTUtLjU0My41MzYuNTM2IDAgMCAwLS41NS41NDNjMCAuMzEzLjIzNy41NDcuNTUuNTQ3Wm0xLjc3NyA1LjI3N3YtLjU1aC0xLjQwMnYtMy42ODhoLTIuMDk4di41NWgxLjQ0MnYzLjEzN2gtMS40NTR2LjU1MWgzLjUxMlptMi44MjguMDdjLjYwNiAwIDEuMDUxLS4yNSAxLjI3LS43MThoLjA3NHYuNjQ4aC42NTJ2LTUuOTAyaC0uNjc1djIuMzJoLS4wN2MtLjE4NC0uNDY1LS42MzctLjcyNi0xLjI1LS43MjYtLjk4MSAwLTEuNjIyLjcwNy0xLjYyMiAxLjc5M3YuNzg5YzAgMS4wOS42NCAxLjc5NyAxLjYyMSAxLjc5N1ptLjE5Ni0uNjA1Yy0uNyAwLTEuMTQ5LS41MDQtMS4xNDktMS4yODV2LS42MWMwLS43OC40NS0xLjI4IDEuMTQ5LTEuMjguNjk1IDAgMS4xNDQuNSAxLjE0NCAxLjI4di42MWMwIC43ODUtLjQ0OSAxLjI4NS0xLjE0NCAxLjI4NVptMTAuMTc1LTEuNzEgMS4wNTEgMi4yNDVoLjc3OGwtMS4xNDktMi4zODZjLjY0LS4yMTEgMS4wNTEtLjgxNyAxLjA1MS0xLjU1NSAwLTEuMDQ3LS43LTEuNjk1LTEuODE3LTEuNjk1aC0xLjg5djUuNjM2aC42OFYyMC4xNWgxLjI5NlptLTEuMjk2LTIuNzc4aDEuMTQ4Yy43NTQgMCAxLjE4NC4zOTggMS4xODQgMS4wOTggMCAuNzAzLS40MzggMS4wOTctMS4yMTUgMS4wOTdoLTEuMTE3di0yLjE5NVptNy4xNzEgMy45M2MtLjExNy4zNy0uNTExLjU5Ny0xLjA0Ni41OTctLjcyMyAwLTEuMTg0LS41LTEuMTg0LTEuMjc3di0uMTcyaDIuODg3di0uNDE0YzAtMS4yMjctLjY0OS0xLjk1Ny0xLjc1LTEuOTU3LTEuMDc4IDAtMS43OTMuNzM0LTEuNzkzIDEuODUxdi42MzdjMCAxLjIwNy42NzUgMS45MDYgMS44NCAxLjkwNi44OSAwIDEuNTYyLS40NzIgMS42OTEtMS4xNzFoLS42NDVabS0xLjA5Ny0yLjY1M2MuNjgzIDAgMS4wOTcuNDg4IDEuMDk3IDEuMjk3aC0yLjIzYzAtLjgxMy40MjYtMS4yOTcgMS4xMzMtMS4yOTdabTYuNjY0LjgyOGMtLjExLS44Ny0uNzUtMS40MDItMS42ODgtMS40MDItMS4xNTIgMC0xLjgyNC43MDctMS44MjQgMS45MjJ2LjU1NWMwIDEuMjE0LjY3MiAxLjkyMSAxLjgyNCAxLjkyMS45MzggMCAxLjU4Mi0uNTI3IDEuNjg4LTEuMzloLS42NTZjLS4wODIuNDg0LS40OTYuNzkzLTEuMDQzLjc5My0uNzM5IDAtMS4xNDktLjUtMS4xNDktMS40MXYtLjM4M2MwLS45MS40MS0xLjQxNCAxLjE0OS0xLjQxNC41NDYgMCAuOTYuMzEyIDEuMDQzLjgwOGguNjU2Wm0zLjE4IDIuOTk2YzEuMTIgMCAxLjgzNi0uNzMgMS44MzYtMS44NzV2LS42NGMwLTEuMTQ1LS43MTUtMS44NzUtMS44MzYtMS44NzVzLTEuODM2LjczLTEuODM2IDEuODc1di42NGMwIDEuMTQ1LjcxNSAxLjg3NSAxLjgzNiAxLjg3NVptMC0zLjgwNGMuNzI2IDAgMS4xOC41MTUgMS4xOCAxLjM0N3YuNTJjMCAuODM2LS40NTQgMS4zNDgtMS4xOCAxLjM0OC0uNzI3IDAtMS4xOC0uNTEyLTEuMTgtMS4zNDh2LS41MmMwLS44MzIuNDUzLTEuMzQ3IDEuMTgtMS4zNDdabTMuMDMtLjUxMiAxLjU1MiA0LjIzOGguNzNsMS41NDctNC4yMzhoLS43MDdsLTEuMTc2IDMuNTI3aC0uMDVsLTEuMTg0LTMuNTI3aC0uNzExWm04LjAwNSAzLjE0NWMtLjExOC4zNy0uNTEyLjU5Ny0xLjA0Ny41OTctLjcyMyAwLTEuMTg0LS41LTEuMTg0LTEuMjc3di0uMTcyaDIuODg3di0uNDE0YzAtMS4yMjctLjY0OC0xLjk1Ny0xLjc1LTEuOTU3LTEuMDc4IDAtMS43OTMuNzM0LTEuNzkzIDEuODUxdi42MzdjMCAxLjIwNy42NzYgMS45MDYgMS44NCAxLjkwNi44OSAwIDEuNTYyLS40NzIgMS42OTEtMS4xNzFoLS42NDRabS0xLjA5OC0yLjY1M2MuNjg0IDAgMS4wOTguNDg4IDEuMDk4IDEuMjk3aC0yLjIzYzAtLjgxMy40MjUtMS4yOTcgMS4xMzItMS4yOTdabTQuNzMgMS44NDhjMC0xLjA3OC41NTUtMS43MjcgMS40OTMtMS43MjcuMjMgMCAuNTA0LjA0Ny42OTkuMTE3di0uNzQ2Yy0uMTQtLjA1OC0uMzcxLS4wOTMtLjYxMy0uMDkzLS44MTcgMC0xLjM0NC40MDYtMS41IDEuMTkxaC0uMDg2di0xLjA4MmgtMS41ODJ2LjUzMWguOTQxdjMuMTc2aC0uODU1di41MzFoMi44MTZ2LS41MzFoLTEuMzEzdi0xLjM2N1ptMy45MjYgMy40MDZjLjc4NSAwIDEuMTQxLS4zMDggMS41MTItMS4zNTFsMS41OTgtNC4zOTVoLS43MDdsLTEuMTg0IDMuNTQ3aC0uMDVsLTEuMTg4LTMuNTQ3aC0uNzIzbDEuNTU5IDQuMjY2LS4wNzUuMjNjLS4xNzUuNDkyLS4zOTQuNjcyLS43OTMuNjcyLS4wNjIgMC0uMTgzLS4wMDQtLjIzNC0uMDE2di41ODJjLjA1OS4wMDguMTg4LjAxMi4yODUuMDEyWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGw9IiMwMUZGRkUiIGQ9Ik0yLjYzNiA0NS40M2gxNTEuNjk3djE0LjMzNUgyLjYzNnoiLz48cGF0aCBkPSJtMTcuMDkgNTIuMTAxLjgzMyAzLjQ5NmguNjQ4bC45NjktNS42MzdoLS42NTJsLS4zNCAyLjI1OC0uMzQgMi4zNDhoLS4wNDNsLS43OS0zLjMxN2gtLjYxNmwtLjc5IDMuMzE3aC0uMDQybC0uMzQtMi4zNDgtLjM0LTIuMjU4aC0uNjUybC45NjggNS42MzdoLjY0OWwuODMyLTMuNDk2aC4wNDdabTQuOTk3LTEuNzgxYy4zMTIgMCAuNTUtLjIzNS41NS0uNTQ3YS41MzYuNTM2IDAgMCAwLS41NS0uNTQzLjUzNi41MzYgMCAwIDAtLjU1MS41NDNjMCAuMzEyLjIzOC41NDcuNTUuNTQ3Wm0xLjc3NyA1LjI3N3YtLjU1aC0xLjQwMnYtMy42ODhoLTIuMDk4di41NWgxLjQ0MXYzLjEzN2gtMS40NTN2LjU1MWgzLjUxMlptMy4zNi00LjMwOGMtLjYwNiAwLTEuMDQ3LjI1LTEuMjcuNzE4aC0uMDd2LS42NDhoLS42NTd2NS42NjhoLjY3NlY1NC45NGguMDc0Yy4xODQuNDY1LjYzMy43MjYgMS4yNDYuNzI2Ljk4IDAgMS42MjItLjcwNyAxLjYyMi0xLjc5M3YtLjc4OWMwLTEuMDktLjY0MS0xLjc5Ni0xLjYyMi0xLjc5NlptLS4xOTIuNjA5Yy43IDAgMS4xNDUuNSAxLjE0NSAxLjI4MXYuNjFjMCAuNzgtLjQ0NiAxLjI4NS0xLjE0NSAxLjI4NS0uNyAwLTEuMTQ1LS41LTEuMTQ1LTEuMjg1di0uNjFjMC0uNzgxLjQ0Ni0xLjI4MSAxLjE0NS0xLjI4MVptNi4wMTYgMi42MDVjLS4xMTguMzcxLS41MTIuNTk4LTEuMDQ3LjU5OC0uNzIzIDAtMS4xODQtLjUtMS4xODQtMS4yNzd2LS4xNzJoMi44ODd2LS40MTRjMC0xLjIyNy0uNjQ5LTEuOTU3LTEuNzUtMS45NTctMS4wNzggMC0xLjc5My43MzQtMS43OTMgMS44NTF2LjYzN2MwIDEuMjA3LjY3NiAxLjkwNiAxLjg0IDEuOTA2Ljg5IDAgMS41NjItLjQ3MiAxLjY5MS0xLjE3MmgtLjY0NFptLTEuMDk4LTIuNjUyYy42ODMgMCAxLjA5OC40ODggMS4wOTggMS4yOTdoLTIuMjNjMC0uODEzLjQyNS0xLjI5NyAxLjEzMi0xLjI5N1ptOS41NzggMy44MTZjLjYwNSAwIDEuMDUtLjI1IDEuMjctLjcxOGguMDc0di42NDhoLjY1MnYtNS45MDJoLS42NzZ2Mi4zMmgtLjA3Yy0uMTg0LS40NjUtLjYzNy0uNzI2LTEuMjUtLjcyNi0uOTggMC0xLjYyMS43MDctMS42MjEgMS43OTJ2Ljc5YzAgMS4wOS42NCAxLjc5NiAxLjYyMSAxLjc5NlptLjE5NS0uNjA1Yy0uNjk5IDAtMS4xNDgtLjUwNC0xLjE0OC0xLjI4NXYtLjYxYzAtLjc4LjQ1LTEuMjggMS4xNDgtMS4yOC42OTYgMCAxLjE0NS41IDEuMTQ1IDEuMjh2LjYxYzAgLjc4NS0uNDUgMS4yODUtMS4xNDUgMS4yODVabTQuNTg2LjYxYy42MTcgMCAxLjA3OS0uMjU1IDEuMjgyLS43MDhoLjA2NnYuNjM3aC42MzNWNTIuN2MwLS44ODMtLjU3LTEuMzktMS41NjctMS4zOS0uODY3IDAtMS41MjMuNDY0LTEuNjAxIDEuMTQ0aC42NTJjLjExLS4zNjQuNDUzLS41Ny45NDItLjU3LjU5IDAgLjkxNC4yOTIuOTE0LjgyM3YuMzgzbC0xLjE2NC4wNTljLS45NjUuMDUtMS41MDQuNDk2LTEuNTA0IDEuMjQ2IDAgLjc3LjUzOSAxLjI3NyAxLjM0NyAxLjI3N1ptLjE5Mi0uNTgzYy0uNTM1IDAtLjg2Ny0uMjczLS44NjctLjcxOCAwLS40NDIuMzEyLS42OTYuOTA2LS43MjNsMS4wOS0uMDV2LjVjMCAuNTY2LS40ODkuOTkxLTEuMTMuOTkxWm00LjQ2LTQuODY3djEuMTQ5aC0xLjEyOHYuNTY2aDEuMTI5djIuMzk4YzAgLjg4My40ODggMS4yODIgMS41MzkgMS4yODIuMjAzIDAgLjcxOC0uMDIuODI0LS4wNHYtLjU2MmMtLjExMy4wMTItLjU0LjAyNC0uNzc3LjAyNC0uNTk4IDAtLjkyMi0uMjUtLjkyMi0uNzExdi0yLjM5MWgxLjcxdi0uNTY2aC0xLjcxOHYtMS4xNDloLS42NTZabTUuMjM5IDUuNDVjLjYxNyAwIDEuMDc4LS4yNTUgMS4yODEtLjcwOGguMDY3di42MzdoLjYzMlY1Mi43YzAtLjg4My0uNTctMS4zOS0xLjU2Ni0xLjM5LS44NjcgMC0xLjUyMy40NjQtMS42MDEgMS4xNDRoLjY1MmMuMTEtLjM2NC40NTMtLjU3Ljk0MS0uNTcuNTkgMCAuOTE0LjI5Mi45MTQuODIzdi4zODNsLTEuMTY0LjA1OWMtLjk2NS4wNS0xLjUwNC40OTYtMS41MDQgMS4yNDYgMCAuNzcuNTQgMS4yNzcgMS4zNDggMS4yNzdabS4xOTEtLjU4M2MtLjUzNSAwLS44NjctLjI3My0uODY3LS43MTggMC0uNDQyLjMxMy0uNjk2LjkwNi0uNzIzbDEuMDktLjA1di41YzAgLjU2Ni0uNDg4Ljk5MS0xLjEyOS45OTFabTQuMTMzIDEuMDQzIDIuNzUtNi43MDdoLS42NTJsLTIuNzQ2IDYuNzA3aC42NDhabTUuMjA3LS41MzVWNTMuMTRoMi40MDd2LS42MTNINjUuNzN2LTEuOTM0aDIuNjMzdi0uNjMzSDY1LjA0djUuNjM3aC42OTFabTUuMzA1LjA3NGMuNjE3IDAgMS4wNzgtLjI1NCAxLjI4MS0uNzA3aC4wNjd2LjYzN2guNjMyVjUyLjdjMC0uODgzLS41Ny0xLjM5LTEuNTY2LTEuMzktLjg2NyAwLTEuNTIzLjQ2NC0xLjYwMiAxLjE0NGguNjUzYy4xMS0uMzY0LjQ1My0uNTcuOTQxLS41Ny41OSAwIC45MTQuMjkyLjkxNC44MjN2LjM4M2wtMS4xNjQuMDU5Yy0uOTY1LjA1LTEuNTA0LjQ5Ni0xLjUwNCAxLjI0NiAwIC43Ny41NCAxLjI3NyAxLjM0OCAxLjI3N1ptLjE5MS0uNTgyYy0uNTM1IDAtLjg2Ny0uMjczLS44NjctLjcxOCAwLS40NDIuMzEzLS42OTYuOTA2LS43MjNsMS4wOS0uMDV2LjVjMCAuNTY2LS40ODguOTkxLTEuMTI5Ljk5MVptNi45NS0yLjQxYy0uMTEtLjg3LS43NS0xLjQwMi0xLjY4OC0xLjQwMi0xLjE1MiAwLTEuODI0LjcwNy0xLjgyNCAxLjkyMnYuNTU0YzAgMS4yMTUuNjcyIDEuOTIyIDEuODI0IDEuOTIyLjkzOCAwIDEuNTgyLS41MjcgMS42ODgtMS4zOWgtLjY1N2MtLjA4Mi40ODQtLjQ5Ni43OTMtMS4wNDMuNzkzLS43MzggMC0xLjE0OC0uNS0xLjE0OC0xLjQxdi0uMzgzYzAtLjkxLjQxLTEuNDE0IDEuMTQ4LTEuNDE0LjU0NyAwIC45NjEuMzEyIDEuMDQzLjgwOGguNjU3Wm0yLjQ1Ni0yLjQ1N3YxLjE0OWgtMS4xMjh2LjU2NmgxLjEyOXYyLjM5OGMwIC44ODMuNDg4IDEuMjgyIDEuNTM5IDEuMjgyLjIwMyAwIC43MTgtLjAyLjgyNC0uMDR2LS41NjJjLS4xMTQuMDEyLS41NC4wMjQtLjc3OC4wMjQtLjU5NyAwLS45MjEtLjI1LS45MjEtLjcxMXYtMi4zOTFoMS43MXYtLjU2Nkg4MS4yOXYtMS4xNDloLS42NTdabTUuNjY5IDUuNDUzYzEuMTIgMCAxLjgzNS0uNzMgMS44MzUtMS44NzV2LS42NGMwLTEuMTQ1LS43MTQtMS44NzUtMS44MzUtMS44NzUtMS4xMjIgMC0xLjgzNi43My0xLjgzNiAxLjg3NXYuNjRjMCAxLjE0NS43MTQgMS44NzUgMS44MzYgMS44NzVabTAtMy44MDRjLjcyNiAwIDEuMTguNTE1IDEuMTggMS4zNDd2LjUyYzAgLjgzNi0uNDU0IDEuMzQ3LTEuMTggMS4zNDctLjcyNyAwLTEuMTgtLjUxMS0xLjE4LTEuMzQ3di0uNTJjMC0uODMyLjQ1My0xLjM0NyAxLjE4LTEuMzQ3Wm00Ljc3NyAxLjgyOGMwLTEuMDc4LjU1NS0xLjcyNyAxLjQ5Mi0xLjcyNy4yMyAwIC41MDQuMDQ3LjcuMTE3di0uNzQ2Yy0uMTQxLS4wNTgtLjM3Mi0uMDk0LS42MTQtLjA5NC0uODE2IDAtMS4zNDQuNDA3LTEuNSAxLjE5MmgtLjA4NnYtMS4wODJoLTEuNTgydi41MzFoLjk0MXYzLjE3NmgtLjg1NXYuNTMxaDIuODE2di0uNTMxSDkxLjA4di0xLjM2N1ptMy45MjYgMy40MDZjLjc4NSAwIDEuMTQtLjMwOSAxLjUxMS0xLjM1MmwxLjU5OC00LjM5NGgtLjcwN2wtMS4xODQgMy41NDdoLS4wNWwtMS4xODgtMy41NDdoLS43MjJsMS41NTggNC4yNjUtLjA3NC4yMzFjLS4xNzYuNDkyLS4zOTUuNjcyLS43OTMuNjcyLS4wNjMgMC0uMTg0LS4wMDQtLjIzNC0uMDE2di41ODJjLjA1OC4wMDguMTg3LjAxMi4yODUuMDEyWm0xMS4yOTMtMy43NTQgMS4wNSAyLjI0NmguNzc4bC0xLjE0OS0yLjM4N2MuNjQxLS4yMSAxLjA1MS0uODE2IDEuMDUxLTEuNTU0IDAtMS4wNDctLjY5OS0xLjY5Ni0xLjgxNi0xLjY5NmgtMS44OTF2NS42MzdoLjY4di0yLjI0NmgxLjI5N1ptLTEuMjk3LTIuNzc3aDEuMTQ4Yy43NTQgMCAxLjE4NC4zOTggMS4xODQgMS4wOTcgMCAuNzAzLS40MzggMS4wOTgtMS4yMTUgMS4wOThoLTEuMTE3di0yLjE5NVptNy4xNzIgMy45M2MtLjExOC4zNy0uNTEyLjU5Ny0xLjA0Ny41OTctLjcyMyAwLTEuMTg0LS41LTEuMTg0LTEuMjc3di0uMTcyaDIuODg3di0uNDE0YzAtMS4yMjctLjY0OS0xLjk1Ny0xLjc1LTEuOTU3LTEuMDc4IDAtMS43OTMuNzM0LTEuNzkzIDEuODUxdi42MzdjMCAxLjIwNy42NzYgMS45MDYgMS44NCAxLjkwNi44OSAwIDEuNTYyLS40NzIgMS42OTEtMS4xNzJoLS42NDRabS0xLjA5OC0yLjY1M2MuNjg0IDAgMS4wOTguNDg4IDEuMDk4IDEuMjk3aC0yLjIzMWMwLS44MTMuNDI2LTEuMjk3IDEuMTMzLTEuMjk3Wm0zLjM1NS42NTJjMCAuNjAyLjM3OS45ODkgMS4xNDUgMS4xNjRsLjYyOS4xNDVjLjUzOS4xMjEuNzQ2LjMuNzQ2LjYzNyAwIC40MDYtLjM2Ny42NjgtLjk0NS42NjgtLjU0NyAwLS45MjItLjIyNy0xLjAyLS42MTdoLS42NzZjLjA3NS43MjYuNzExIDEuMTc1IDEuNjcyIDEuMTc1IDEuMDA0IDAgMS42NTYtLjUwOCAxLjY1Ni0xLjI4OSAwLS42MTMtLjM3NS0uOTcyLTEuMTk5LTEuMTZsLS41OTctLjEzN2MtLjUzMi0uMTE3LS43NS0uMy0uNzUtLjYyNSAwLS4zODYuMzQ3LS42MzYuODg2LS42MzYuNDk2IDAgLjg1Mi4yMjYuOTMuNTk3aC42NDFjLS4wNzktLjcwNy0uNjc2LTEuMTQ4LTEuNTU5LTEuMTQ4LS45MzQgMC0xLjU1OS40OTItMS41NTkgMS4yMjZabTcuNjMzIDJjLS4xMTcuMzcxLS41MTEuNTk4LTEuMDQ3LjU5OC0uNzIyIDAtMS4xODMtLjUtMS4xODMtMS4yNzd2LS4xNzJoMi44ODZ2LS40MTRjMC0xLjIyNy0uNjQ4LTEuOTU3LTEuNzUtMS45NTctMS4wNzggMC0xLjc5Mi43MzQtMS43OTIgMS44NTF2LjYzN2MwIDEuMjA3LjY3NSAxLjkwNiAxLjgzOSAxLjkwNi44OTEgMCAxLjU2My0uNDcyIDEuNjkyLTEuMTcyaC0uNjQ1Wm0tMS4wOTctMi42NTJjLjY4MyAwIDEuMDk3LjQ4OCAxLjA5NyAxLjI5N2gtMi4yM2MwLS44MTMuNDI2LTEuMjk3IDEuMTMzLTEuMjk3Wm00LjE3NS0xLjYyOXYxLjE0OWgtMS4xMjl2LjU2NmgxLjEyOXYyLjM5OGMwIC44ODMuNDg5IDEuMjgyIDEuNTM5IDEuMjgyLjIwNCAwIC43MTktLjAyLjgyNS0uMDR2LS41NjJjLS4xMTQuMDEyLS41MzkuMDI0LS43NzguMDI0LS41OTcgMC0uOTIyLS4yNS0uOTIyLS43MTF2LTIuMzkxaDEuNzExdi0uNTY2aC0xLjcxOHYtMS4xNDloLS42NTdaIiBmaWxsPSIjMDAwIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAuMDU4KSIgZD0iTTAgMGgyMTV2MTg0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+"},147:(M,j,t)=>{t.d(j,{R:()=>N,x:()=>i});var u=t(1467);const L={},e=u.createContext(L);function N(M){const j=u.useContext(e);return u.useMemo((function(){return"function"==typeof M?M(j):{...j,...M}}),[j,M])}function i(M){let j;return j=M.disableParentContext?"function"==typeof M.components?M.components(L):M.components||L:N(M.components),u.createElement(e.Provider,{value:j},M.children)}}}]);