"use strict";(self.webpackChunkhentaiwiki=self.webpackChunkhentaiwiki||[]).push([[747],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return o?a.createElement(h,l(l({ref:t},c),{},{components:o})):a.createElement(h,l({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<r;u++)l[u]=o[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7055:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=o(7462),n=(o(7294),o(3905)),r=o(4866),l=o(5162);const i={sidebar_label:"Installing"},s="Installation Guide",u={unversionedId:"google/brooksea/installing",id:"google/brooksea/installing",title:"Installation Guide",description:"Before you start",source:"@site/devtech/google/brooksea/installing.md",sourceDirName:"google/brooksea",slug:"/google/brooksea/installing",permalink:"/devtech/google/brooksea/installing",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Installing"},sidebar:"mainSidebar",previous:{title:"Google Brooksea",permalink:"/devtech/google/brooksea/"}},c={},p=[{value:"Before you start",id:"before-you-start",level:2},{value:"Connect your device",id:"connect-your-device",level:2},{value:"Installing",id:"installing",level:2}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installation-guide"},"Installation Guide"),(0,n.kt)("h2",{id:"before-you-start"},"Before you start"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keep a backup of your data.")," Make sure to keep a backup of your files as the installaton will wipe your data.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Use Google ADB Driver"),"! Make sure to install Google ADB Drivers before continuing.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To obtain the required platform-tools, ",(0,n.kt)("a",{parentName:"p",href:"/docs/installation/installing-requirements"},"Read here.")))),(0,n.kt)("h2",{id:"connect-your-device"},"Connect your device"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Enter Fastboot mode,")," make sure your phone turned off. Press and hold the Power and Volume buttons for 3 seconds until the phone turns on. You will be in Fasboot mode."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Fastboot",src:o(9774).Z,width:"190",height:"397"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once your phone is in Fastboot mode, connect your phone to a computer using a USB Cable.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once you connected your phone to a computer using a USB Cable, check your phone connection to the computer by executing ",(0,n.kt)("inlineCode",{parentName:"p"},"fastboot devices"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the device showed up in fastboot devices, continue with Sideloading the boot image with the following commands:"))),(0,n.kt)(r.Z,{defaultValue:"brooklyn",values:[{label:"Google Silicon 1 (gs101)",value:"brooklyn"},{label:"Google Silicon 2 (gs201)",value:"chelsea"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"brooklyn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd {directory where you extracted the installkit files}/{devicename}\nfastboot flash boot boot.img\nfastboot flash dtbo dtbo.img\nfastboot flash vendor_boot vendor_boot.img\n"))),(0,n.kt)(l.Z,{value:"chelsea",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd {directory where you extracted the installkit files}/{devicename}\nfastboot flash boot boot.img\nfastboot flash dtbo dtbo.img\nfastboot flash init_boot init_boot.img\nfastboot flash vendor_boot vendor_boot.img\nfastboot flash vendor_kernel_boot vendor_kernel_boot.img\n")))),(0,n.kt)("h2",{id:"installing"},"Installing"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Enter Bootloader mode.")," Press and hold the Volume Down button and Power button at the same time for 10-15 seconds.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Use the volume buttons to change the menu options until "Recovery Mode" is displayed on screen. To select, press the Power button once.'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Recovery Mode",src:o(8976).Z,width:"190",height:"289"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On your screen, \u201cNo command\u201d is displayed. Press and hold the Power button. While you hold Power, press the Volume Up button and let go of both buttons quickly."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"No Command",src:o(594).Z,width:"246",height:"289"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Android Recovery options should be displayed. With the volume buttons, scroll to "Wipe data/factory reset" and press the Power button.'),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{alt:"Factory Reset",src:o(1866).Z,width:"245",height:"289"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'With the volume buttons, scroll to "Factory data reset" and press the Power button.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Factory reset should start. At the bottom of your screen, when the reset is finished, "Data wipe complete" is displayed.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the volume buttons to move through the menu options, when \u201cApply update from ADB\u201d is highlighted, press the Power button."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Apply Update",src:o(2022).Z,width:"245",height:"288"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Flash the ROM through recovery with adb sideload command from your Mac/PC."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"ADBSideloadWindow",src:o(9e3).Z,width:"490",height:"233"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'With the volume buttons, scroll to "Reboot system now" and press the Power button.'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Reboot Now",src:o(6182).Z,width:"245",height:"289"})))),(0,n.kt)("h1",{id:"sideloading-updates"},"Sideloading Updates"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Enter Bootloader mode.")," Press and hold the Volume Down button and Power button at the same time for 10-15 seconds.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Use the volume buttons to change the menu options until "Recovery Mode" is displayed on screen. To select, press the Power button once.'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Recovery Mode",src:o(8976).Z,width:"190",height:"289"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On your screen, \u201cNo command\u201d is displayed. Press and hold the Power button. While you hold Power, press the Volume Up button and let go of both buttons quickly."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"No Command",src:o(594).Z,width:"246",height:"289"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the volume buttons to move through the menu options, when \u201cApply update from ADB\u201d is highlighted, press the Power button."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Apply Update",src:o(2022).Z,width:"245",height:"288"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Flash the ROM through recovery with adb sideload command from your Mac/PC."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"ADBSideloadWindow",src:o(9e3).Z,width:"490",height:"233"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'With the volume buttons, scroll to "Reboot system now" and press the Power button.'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Reboot Now",src:o(6182).Z,width:"245",height:"289"})))))}m.isMDXComponent=!0},5162:(e,t,o)=>{o.d(t,{Z:()=>l});var a=o(7294),n=o(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:o,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,l),hidden:o},t)}},4866:(e,t,o)=>{o.d(t,{Z:()=>N});var a=o(7462),n=o(7294),r=o(6010),l=o(2466),i=o(6550),s=o(1980),u=o(7392),c=o(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:a,default:n}}=e;return{value:t,label:o,attributes:a,default:n}}))}function d(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??p(o);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function m(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:o}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:o=!1,groupId:a}=e,r=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=o.find((e=>e.default))??o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:o,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(o);return[a,(0,n.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var f=o(2389);const g="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:o,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,o=c.indexOf(t),a=u[o].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;t=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;t=c[o]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},t)},u.map((e=>{let{value:t,label:o,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),o??t)})))}function v(e){let{lazy:t,children:o,selectedValue:a}=e;const r=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",g)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},9e3:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/adb-sideload-window-80d2df96f50373ebe778b7216eacb811.svg"},2022:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/apply-update-552b1b067974e5b286ab9d567b0174f6.svg"},1866:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/factory-reset-291a0977f142360a96cbc131ac5dcf79.svg"},9774:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/fastboot-93657a2d3a7c266b84074aec68d7bd33.svg"},594:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/key-combination-350ef63ba010fdde837dc097a8df26c0.svg"},6182:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/reboot-now-9762c8b53181b2f0c0dbe0238da6a5a6.svg"},8976:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/recovery-mode-fe330d9073312be43c2c86483efcac4c.svg"}}]);