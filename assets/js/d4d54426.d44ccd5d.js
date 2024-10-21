"use strict";(self.webpackChunkhentaiwiki=self.webpackChunkhentaiwiki||[]).push([[470],{9856:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(123),o=t(147),l=t(521),r=t(658);const s={sidebar_position:1},i="Installing Requirements",c={id:"installation/installing-requirements",title:"Installing Requirements",description:"These instructions use command-line tools. Launch the terminal as you would on any other application. On Windows, launch a regular non-adminstrator instance of the Terminal. Do not use the legacy Command Prompt or adminstrator variant of Terminal.",source:"@site/docs/installation/installing-requirements.md",sourceDirName:"installation",slug:"/installation/installing-requirements",permalink:"/docs/installation/installing-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/hentaiOS-Infrastructure/wiki-frontpage-develop/edit/master/docs/installation/installing-requirements.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Reporting Issues",permalink:"/docs/getting-started/issuetickets"},next:{title:"Installation FAQ",permalink:"/docs/installation/the-funny-way"}},u={},d=[{value:"Obtaining Platform Tools",id:"obtaining-platform-tools",level:2},{value:"Using the standalone release of Platform Tools from Google",id:"using-the-standalone-release-of-platform-tools-from-google",level:3},{value:"Checking fastboot version",id:"checking-fastboot-version",level:3},{value:"Flashing as non-root",id:"flashing-as-non-root",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"installing-requirements",children:"Installing Requirements"}),"\n",(0,a.jsx)(n.p,{children:"These instructions use command-line tools. Launch the terminal as you would on any other application. On Windows, launch a regular non-adminstrator instance of the Terminal. Do not use the legacy Command Prompt or adminstrator variant of Terminal."}),"\n",(0,a.jsx)(n.p,{children:"Use the same terminal for the whole installation process. If you close it, you'll need to start over."}),"\n",(0,a.jsx)(n.h2,{id:"obtaining-platform-tools",children:"Obtaining Platform Tools"}),"\n",(0,a.jsxs)(n.p,{children:["You need an updated copy of the ",(0,a.jsx)(n.code,{children:"fastboot"})," and ",(0,a.jsx)(n.code,{children:"adb"})," tool and the directory containing it needs to be included in the ",(0,a.jsx)(n.code,{children:"PATH"})," environment variable. You can run ",(0,a.jsx)(n.code,{children:"fastboot --version"})," to determine the current version. It must be at least ",(0,a.jsx)(n.code,{children:"29.0.6"}),". You can use a distribution package for this, but most of them mistakenly package development snapshots of fastboot, clobber the standard version scheme for platform-tools (adb, fastboot, etc.) with their own scheme and don't keep it up-to-date despite that being crucial."]}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"arch",values:[{label:"Arch Linux",value:"arch"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],children:[(0,a.jsx)(r.A,{value:"arch",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"sudo pacman -S android-tools\n"})})}),(0,a.jsx)(r.A,{value:"windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-PowerShell",children:"winget install Google.PlatformTools\n"})})}),(0,a.jsx)(r.A,{value:"macos",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"brew install android-platform-tools\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"using-the-standalone-release-of-platform-tools-from-google",children:"Using the standalone release of Platform Tools from Google"}),"\n",(0,a.jsx)(n.p,{children:"To download and extract the standalone release of platform-tools, run the following commands:"}),"\n",(0,a.jsxs)(l.A,{defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],children:[(0,a.jsx)(r.A,{value:"debian",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install libarchive-tools\ncurl -O https://dl.google.com/android/repository/platform-tools-latest-linux.zip\nbsdtar xvf platform-tools-latest-linux.zip\n"})})}),(0,a.jsx)(r.A,{value:"macos",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"curl -O https://dl.google.com/android/repository/platform-tools-latest-darwin.zip\ntar xvf platform-tools-latest-darwin.zip\n"})})}),(0,a.jsxs)(r.A,{value:"windows",children:[(0,a.jsxs)(n.p,{children:["Run the following command to remove PowerShell's legacy curl alias for the current shell to avoid needing to reference it as ",(0,a.jsx)(n.code,{children:"curl.exe"})," instead of ",(0,a.jsx)(n.code,{children:"curl"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"Remove-Item Alias:Curl\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl -O https://dl.google.com/android/repository/platform-tools-latest-windows.zip\ntar xvf platform-tools-latest-windows.zip\n"})})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Next, add the directory containing the extracted files to the ",(0,a.jsx)(n.code,{children:"PATH"})," environment variable:"]}),"\n",(0,a.jsxs)(l.A,{defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],children:[(0,a.jsx)(r.A,{value:"debian",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export PATH=$PATH:$(pwd)/platform-tools\n"})})}),(0,a.jsx)(r.A,{value:"macos",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"export PATH=$PATH:$(pwd)/platform-tools\n"})})}),(0,a.jsx)(r.A,{value:"windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-PowerShell",children:'$env:PATH = $env:PATH + ";$(pwd)\\platform-tools"\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["This only changes the ",(0,a.jsx)(n.code,{children:"PATH"})," environment variable for the current shell."]}),"\n",(0,a.jsx)(n.h3,{id:"checking-fastboot-version",children:"Checking fastboot version"}),"\n",(0,a.jsxs)(n.p,{children:["Check the output of ",(0,a.jsx)(n.code,{children:"fastboot --version"})," to make sure the version is at least ",(0,a.jsx)(n.code,{children:"29.0.6"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Example of the output of ",(0,a.jsx)(n.code,{children:"fastboot --version"})," on Arch Linux:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"fastboot version 31.0.0p1-android-tools\nInstalled as /usr/bin/fastboot\n"})}),"\n",(0,a.jsx)(n.h3,{id:"flashing-as-non-root",children:"Flashing as non-root"}),"\n",(0,a.jsx)(n.p,{children:"On traditional Linux distributions, you may need to run fastboot as root to flash the device.\nThis is not necessary on macOS or Windows."}),"\n",(0,a.jsx)(n.p,{children:"On Arch Linux, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S android-udev\n"})}),"\n",(0,a.jsx)(n.p,{children:"On Debian, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt install android-sdk-platform-tools-common\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},658:(e,n,t)=>{t.d(n,{A:()=>r});t(1467);var a=t(7167);const o={tabItem:"tabItem_A6xC"};var l=t(123);function r(e){let{children:n,hidden:t,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,r),hidden:t,children:n})}},521:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(1467),o=t(7167),l=t(2196),r=t(4110),s=t(9343),i=t(3825),c=t(1950),u=t(6570);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(o.location.search);n.set(l,e),o.replace({...o.location,search:n.toString()})}),[l,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,l=h(e),[r,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,d]=p({queryString:t,groupId:o}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,l]=(0,u.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:o}),g=(()=>{const e=c??f;return m({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{g&&i(g)}),[g]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(8109);const g={tabList:"tabList_bOfO",tabItem:"tabItem_Cpua"};var v=t(123);function x(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),o=s[t].value;o!==a&&(c(n),r(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,o.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},147:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var a=t(1467);const o={},l=a.createContext(o);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);