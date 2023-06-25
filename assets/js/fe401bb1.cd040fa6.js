"use strict";(self.webpackChunkhentaiwiki=self.webpackChunkhentaiwiki||[]).push([[261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},o="Planned Maintenance FAQ",l={unversionedId:"infra/scheduled-maint-faq",id:"infra/scheduled-maint-faq",title:"Planned Maintenance FAQ",description:"Because of the changing nature of technology, the continual appearance of new security threats, and compliance requirements, environments must be updated with all critical security and quality updates. hentaiOS has built the framework for performing all maintenance activities, such as operating system patching, deployment of security hotfixes, and deployment of quality updates.",source:"@site/docs/infra/scheduled-maint-faq.md",sourceDirName:"infra",slug:"/infra/scheduled-maint-faq",permalink:"/docs/infra/scheduled-maint-faq",draft:!1,editUrl:"https://github.com/hentaiOS-Infrastructure/wiki-frontpage-develop/edit/master/docs/infra/scheduled-maint-faq.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Security",permalink:"/docs/technical-data/security"}},c={},s=[{value:"What types of planned maintenance activities are performed?",id:"what-types-of-planned-maintenance-activities-are-performed",level:2},{value:"Why can&#39;t these updates be applied in zero downtime?",id:"why-cant-these-updates-be-applied-in-zero-downtime",level:2},{value:"How long is the maintenance window?",id:"how-long-is-the-maintenance-window",level:2},{value:"Where can I track progress of the update?",id:"where-can-i-track-progress-of-the-update",level:2},{value:"Will I be notified when the maintenance is completed?",id:"will-i-be-notified-when-the-maintenance-is-completed",level:2},{value:"Will the maintenance require any uptake?",id:"will-the-maintenance-require-any-uptake",level:2},{value:"What can we do during the maintenance window?",id:"what-can-we-do-during-the-maintenance-window",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"planned-maintenance-faq"},"Planned Maintenance FAQ"),(0,i.kt)("p",null,"Because of the changing nature of technology, the continual appearance of new security threats, and compliance requirements, environments must be updated with all critical security and quality updates. hentaiOS has built the framework for performing all maintenance activities, such as operating system patching, deployment of security hotfixes, and deployment of quality updates."),(0,i.kt)("p",null,"To minimize downtime, upgrades will occur in batches (A/B Staged Enrollment). Therefore, most capacity is always online, and only a subset is upgraded at a time. This approach enables service to involve a small window of service degradation instead of complete downtime."),(0,i.kt)("h2",{id:"what-types-of-planned-maintenance-activities-are-performed"},"What types of planned maintenance activities are performed?"),(0,i.kt)("p",null,"Some of the ordinary planned maintenance activities are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operating system (OS) security updates"),(0,i.kt)("li",{parentName:"ul"},"Security hotfixes"),(0,i.kt)("li",{parentName:"ul"},"Quality of Life updates")),(0,i.kt)("h2",{id:"why-cant-these-updates-be-applied-in-zero-downtime"},"Why can't these updates be applied in zero downtime?"),(0,i.kt)("p",null,"Our furries continually work to reduce the necessity of downtime for the service, and many regular maintenance tasks don't incur downtime. However, to help guarantee the most predictability, we can't yet do all patching in zero downtime."),(0,i.kt)("h2",{id:"how-long-is-the-maintenance-window"},"How long is the maintenance window?"),(0,i.kt)("p",null,"Most operating system\u2013level updates are completed in approximately one hour. However, we ask for a three-hour, so there is time to handle any failures and bring the system back to a healthy state."),(0,i.kt)("p",null,"The exact downtime for all updates will be included in the maintenance post published to our main channels before the start of the maintenance window."),(0,i.kt)("h2",{id:"where-can-i-track-progress-of-the-update"},"Where can I track progress of the update?"),(0,i.kt)("p",null,"During maintenance, the service doesn't currently indicate that any patching is in progress."),(0,i.kt)("h2",{id:"will-i-be-notified-when-the-maintenance-is-completed"},"Will I be notified when the maintenance is completed?"),(0,i.kt)("p",null,"If the maintenance is completed within the defined maintenance window, you won't generally receive any notification when the maintenance is completed. However, we may publish the maintenance completion in our main channels."),(0,i.kt)("h2",{id:"will-the-maintenance-require-any-uptake"},"Will the maintenance require any uptake?"),(0,i.kt)("p",null,"Most of the maintenance operations require no action on your end. If there is a potential disruption, we will notify that."),(0,i.kt)("h2",{id:"what-can-we-do-during-the-maintenance-window"},"What can we do during the maintenance window?"),(0,i.kt)("p",null,"I don't know, cry about it until we have done, I guess."))}u.isMDXComponent=!0}}]);