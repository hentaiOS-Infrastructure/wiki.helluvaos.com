"use strict";(self.webpackChunkhentaiwiki=self.webpackChunkhentaiwiki||[]).push([[897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3},l="Release Compliance",o={unversionedId:"technical-data/release-compliance",id:"technical-data/release-compliance",title:"Release Compliance",description:"To make sure helluvaOS/hentaiOS have a standard for Quality Assurance for every build pushed, we have a set of Release Compliance Code of Conduct as follows:",source:"@site/docs/technical-data/release-compliance.md",sourceDirName:"technical-data",slug:"/technical-data/release-compliance",permalink:"/docs/technical-data/release-compliance",draft:!1,editUrl:"https://github.com/hentaiOS-Infrastructure/wiki-frontpage-develop/edit/master/docs/technical-data/release-compliance.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Maintaining Device",permalink:"/docs/technical-data/maintainers-coc"},next:{title:"Device Requirements",permalink:"/docs/technical-data/device-requirements"}},s={},c=[{value:"Release tagging",id:"release-tagging",level:2},{value:"Internal",id:"internal",level:3},{value:"Internal Beta",id:"internal-beta",level:3},{value:"Open Beta",id:"open-beta",level:3},{value:"Golden Master",id:"golden-master",level:3},{value:"Release",id:"release",level:3},{value:"Known Issue Definitions",id:"known-issue-definitions",level:2},{value:"STOPSHIP",id:"stopship",level:3},{value:"TEMPBLOCKSHIP",id:"tempblockship",level:3},{value:"BLOCKSHIP",id:"blockship",level:3},{value:"Non-Blocking Known Issues",id:"non-blocking-known-issues",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-compliance"},"Release Compliance"),(0,i.kt)("p",null,"To make sure helluvaOS/hentaiOS have a standard for Quality Assurance for every build pushed, we have a set of Release Compliance Code of Conduct as follows:"),(0,i.kt)("h2",{id:"release-tagging"},"Release tagging"),(0,i.kt)("h3",{id:"internal"},"Internal"),(0,i.kt)("p",null,"The build is considered initial (e.g Under bringups) and requires a extensive testing."),(0,i.kt)("h3",{id:"internal-beta"},"Internal Beta"),(0,i.kt)("p",null,"Builds that's under initial stage and already stabilized enough with more or less than 5 known issues."),(0,i.kt)("h3",{id:"open-beta"},"Open Beta"),(0,i.kt)("p",null,"Builds that's ready for Open Testing with more or less than 3 known issues."),(0,i.kt)("h3",{id:"golden-master"},"Golden Master"),(0,i.kt)("p",null,"Builds that's ready for Production with no more than 1 known issues."),(0,i.kt)("h3",{id:"release"},"Release"),(0,i.kt)("p",null,"Build is ready for Production with no blocking known issues."),(0,i.kt)("h2",{id:"known-issue-definitions"},"Known Issue Definitions"),(0,i.kt)("h3",{id:"stopship"},"STOPSHIP"),(0,i.kt)("p",null,"A feature that is known to be broken and can't be shipped temporairly."),(0,i.kt)("h3",{id:"tempblockship"},"TEMPBLOCKSHIP"),(0,i.kt)("p",null,"A feature or changes that will not be shipped temporairly for defined reasons."),(0,i.kt)("h3",{id:"blockship"},"BLOCKSHIP"),(0,i.kt)("p",null,"A feature or changes that will not be shipped."),(0,i.kt)("h3",{id:"non-blocking-known-issues"},"Non-Blocking Known Issues"),(0,i.kt)("p",null,"Issues that wasn't arrived from helluvaOS/hentaiOS, this includes Upstream Issue that's unable to fixed from our side, Application-specific issues, known Hardware issues, and Unsupported modifications (e.g. Rooting, Magisk incl. Modules, Substratum)"))}d.isMDXComponent=!0}}]);