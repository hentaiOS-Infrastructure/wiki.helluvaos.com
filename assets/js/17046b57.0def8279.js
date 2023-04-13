"use strict";(self.webpackChunkhentaiwiki=self.webpackChunkhentaiwiki||[]).push([[915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),o=n(7294),r=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=f({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var b=n(2389);const g="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,r.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},3793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),l=n(5162);const i={sidebar_position:2},s="Manual installation",u={unversionedId:"installation/the-funny-way",id:"installation/the-funny-way",title:"Manual installation",description:"This is a guide for installing helluvaOS using the command line.",source:"@site/docs/installation/the-funny-way.md",sourceDirName:"installation",slug:"/installation/the-funny-way",permalink:"/docs/installation/the-funny-way",draft:!1,editUrl:"https://github.com/hentaiOS-Infrastructure/wiki-frontpage-develop/edit/master/docs/installation/the-funny-way.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"No Gore",permalink:"/docs/getting-started/design"},next:{title:"Introduction",permalink:"/docs/technical-data/intro"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Opening Terminal and Nerding Away",id:"opening-terminal-and-nerding-away",level:2},{value:"Obtaining fastboot",id:"obtaining-fastboot",level:3},{value:"Using the standalone release of platform-tools from Android",id:"using-the-standalone-release-of-platform-tools-from-android",level:5},{value:"Checking fastboot version",id:"checking-fastboot-version",level:3},{value:"Flashing as non-root",id:"flashing-as-non-root",level:3},{value:"Booting to bootloader mode",id:"booting-to-bootloader-mode",level:3},{value:"Obtaining factory images",id:"obtaining-factory-images",level:2},{value:"Flashing factory images",id:"flashing-factory-images",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manual-installation"},"Manual installation"),(0,o.kt)("p",null,"This is a guide for installing helluvaOS using the command line."),(0,o.kt)("admonition",{title:"May not reflect all devices",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This documentation is generically written and may not include specific guides for your specific device, refer to your device documentation for more information.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You should have a USB Cable for attaching the device to a laptop or desktop. Whenever possible, use the high quality standards-compliant USB Type-C cable that comes with your device. If your computer doesn't have any USB Type-C ports, you'll need a high quality USB Type-A to USB Type-C cable."),(0,o.kt)("admonition",{title:"About USB Hubs",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You should generally avoid using USB Hubs such as the front panel USB hub on a desktop computer case. Connect directly to a rear port on a desktop or the ports on the side of a laptop.")),(0,o.kt)("p",null,"Supported Operating Systems for install:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Arch Linux"),(0,o.kt)("li",{parentName:"ul"},"Debian 10 (buster) or later"),(0,o.kt)("li",{parentName:"ul"},"Windows (7 or later)"),(0,o.kt)("li",{parentName:"ul"},"macOS (10.12 or later)")),(0,o.kt)("p",null,"Make sure your operating system is up-to-date before proceeding."),(0,o.kt)("h2",{id:"opening-terminal-and-nerding-away"},"Opening Terminal and Nerding Away"),(0,o.kt)("p",null,"These instructions use command-line tools. Launch the terminal as you would on any other application. On Windows, launch a regular non-adminstrator instance of the Terminal. Do not use the legacy Command Prompt or adminstrator variant of Terminal."),(0,o.kt)("p",null,"Use the same terminal for the whole installation process. If you close it, you'll need to start over."),(0,o.kt)("p",null,"On Windows, run the following command to remove PowerShell's legacy curl alias for the current shell to avoid needing to reference it as ",(0,o.kt)("inlineCode",{parentName:"p"},"curl.exe")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Remove-Item Alias:Curl\n")),(0,o.kt)("h3",{id:"obtaining-fastboot"},"Obtaining fastboot"),(0,o.kt)("p",null,"You need an updated copy of the ",(0,o.kt)("inlineCode",{parentName:"p"},"fastboot")," tool and the directory containing it needs to be included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable. You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"fastboot --version")," to determine the current version. It must be at least ",(0,o.kt)("inlineCode",{parentName:"p"},"29.0.6"),". You can use a distribution package for this, but most of them mistakenly package development snapshots of fastboot, clobber the standard version scheme for platform-tools (adb, fastboot, etc.) with their own scheme and don't keep it up-to-date despite that being crucial."),(0,o.kt)("p",null,"On Arch Linux, install ",(0,o.kt)("inlineCode",{parentName:"p"},"android-tools")," and skip the section below on using the standalone release of platform-tools from Android:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo pacman -S android-tools\n")),(0,o.kt)("p",null,"Debian do not have a usable package for fastboot. Their packages for these tools are both broken and many years out-of-date. Follow the instructions below for platforms without a proper package."),(0,o.kt)("h5",{id:"using-the-standalone-release-of-platform-tools-from-android"},"Using the standalone release of platform-tools from Android"),(0,o.kt)("p",null,"To download and extract the standalone release of platform-tools from Debian, run the following commands:"),(0,o.kt)(r.Z,{defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"debian",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install libarchive-tools\ncurl -O https://dl.google.com/android/repository/platform-tools-latest-linux.zip\nbsdtar xvf platform-tools-latest-linux.zip\n"))),(0,o.kt)(l.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -O https://dl.google.com/android/repository/platform-tools-latest-darwin.zip\ntar xvf platform-tools-latest-darwin.zip\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -O https://dl.google.com/android/repository/platform-tools-latest-windows.zip\ntar xvf platform-tools-latest-windows.zip\n")))),(0,o.kt)("p",null,"Next, add the directory containing the extracted files to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable:"),(0,o.kt)(r.Z,{defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"debian",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export PATH=$PATH:$(pwd)/platform-tools\n"))),(0,o.kt)(l.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export PATH=$PATH:$(pwd)/platform-tools\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$env:PATH = $env:PATH + ";$(pwd)\\platform-tools"\n')))),(0,o.kt)("p",null,"This only changes the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable for the current shell."),(0,o.kt)("h3",{id:"checking-fastboot-version"},"Checking fastboot version"),(0,o.kt)("p",null,"Check the output of ",(0,o.kt)("inlineCode",{parentName:"p"},"fastboot --version")," to make sure the version is at least ",(0,o.kt)("inlineCode",{parentName:"p"},"29.0.6"),"."),(0,o.kt)("p",null,"Example of the output of ",(0,o.kt)("inlineCode",{parentName:"p"},"fastboot --version")," on Arch Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fastboot version 31.0.0p1-android-tools\nInstalled as /usr/bin/fastboot\n")),(0,o.kt)("h3",{id:"flashing-as-non-root"},"Flashing as non-root"),(0,o.kt)("p",null,"On traditional Linux distributions, you may need to run fastboot as root to flash the device.\nThis is not necessary on macOS or Windows."),(0,o.kt)("p",null,"On Arch Linux, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S android-udev\n")),(0,o.kt)("p",null,"On Debian, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install android-sdk-platform-tools-common\n")),(0,o.kt)("h3",{id:"booting-to-bootloader-mode"},"Booting to bootloader mode"),(0,o.kt)("p",null,"You need to boot your phone into the bootloader mode. To do this, hold down the volume down button on the device while the device is booting until you see a red warning sign or green Android robot."),(0,o.kt)("p",null,"The easiest approach is to reboot the phone and begin holding the volume down button until it boots up into the bootloader mode."),(0,o.kt)("h2",{id:"obtaining-factory-images"},"Obtaining factory images"),(0,o.kt)("p",null,"Extract the downloaded factory image package then navigate to the newly created directory by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," and drag the folder onto the terminal."),(0,o.kt)("h3",{id:"flashing-factory-images"},"Flashing factory images"),(0,o.kt)("p",null,"For Windows, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"flash-all.bat\n")),(0,o.kt)("p",null,"For macOS and Linux, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./flash-all.sh\n")),(0,o.kt)("p",null,"Don't touch, unplug, or remove the device until the installation is complete.\nYour phone will restart several times during the installation process and you'll need to wait for it to finish. It will boot into the OS once the installation is complete."))}m.isMDXComponent=!0}}]);