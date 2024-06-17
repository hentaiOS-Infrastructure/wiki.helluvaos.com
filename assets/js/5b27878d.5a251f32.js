"use strict";(self.webpackChunkhentaiwiki=self.webpackChunkhentaiwiki||[]).push([[584],{3175:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=n(123),a=n(147);const r={sidebar_position:2},o="Maintaining Device",s={id:"technical-data/maintainers-coc",title:"Maintaining Device",description:"Code Of Conduct",source:"@site/docs/technical-data/maintainers-coc.md",sourceDirName:"technical-data",slug:"/technical-data/maintainers-coc",permalink:"/docs/technical-data/maintainers-coc",draft:!1,unlisted:!1,editUrl:"https://github.com/hentaiOS-Infrastructure/wiki-frontpage-develop/edit/master/docs/technical-data/maintainers-coc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/docs/technical-data/intro"},next:{title:"Release Compliance",permalink:"/docs/technical-data/release-compliance"}},l={},c=[{value:"Code Of Conduct",id:"code-of-conduct",level:2},{value:"You (as Maintainer)",id:"you-as-maintainer",level:3},{value:"Maintainers Requirements",id:"maintainers-requirements",level:2},{value:"Design Requirements",id:"design-requirements",level:2},{value:"Optionals",id:"optionals",level:3},{value:"Important",id:"important",level:3}];function d(e){const i={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"maintaining-device",children:"Maintaining Device"}),"\n",(0,t.jsx)(i.h2,{id:"code-of-conduct",children:"Code Of Conduct"}),"\n",(0,t.jsx)(i.h3,{id:"you-as-maintainer",children:"You (as Maintainer)"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"[C-0-0] You MUST NOT ship TWRP prebuilt, it MUST ship AOSP Recovery."}),"\n",(0,t.jsx)(i.li,{children:"[C-0-1] You MUST have checked that your Public Device Tree does not include any BLOB with Copyright, for example, Megvii."}),"\n",(0,t.jsx)(i.li,{children:"[C-0-2] MUST maintain authorship of Git commits that are pushed. These are mandatory requirements for ALL repositories, Force-pushes are acceptable."}),"\n",(0,t.jsx)(i.li,{children:"[C-0-3] You MUST NOT including proprietary and copyrighted dependencies into Public Device Tree except if it distributed as a BLOB (Binary Large OBject)."}),"\n",(0,t.jsx)(i.li,{children:"[C-0-4] In the event of any disagreements between maintainers, sort them via Direct Messages, don't take any of that into chats or threads, approach the Internal Boards if you want something sorted out quickly."}),"\n",(0,t.jsx)(i.li,{children:"[C-0-5] MUST have conducted internal tests before pushing OTA or Updates to users. Each build has to be thoroughly checked by the maintainer and all hardware and software functionality MUST be tested before the build is pushed to production."}),"\n",(0,t.jsx)(i.li,{children:"[C-0-6] MUST Upload All device sources are used for building the image on the hentaiOS-Devices Organization. these should be fully buildable. Using external repositories isn't allowed (exception for Sony Open Devices Project (SODP) repositories)."}),"\n",(0,t.jsx)(i.li,{children:"[C-0-7] MUST Upload Changelogs for each build. These RECOMMENDED be user-friendly. simplifying the changelog for the average user who doesn't know technical jargon like SafetyNet, but still illustrates what changes have been made since the last update."}),"\n",(0,t.jsxs)(i.li,{children:["[C-0-8] MUST NOT add any of the following:","\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Any features in their device-specific packages, e.g XiaomiParts, KCAL, Camera API2 Enforcement, etcetera, in an exception if that feature is available on stock firmware, e.g Alert Slider and Offscreen Gestures for OnePlus Devices, Fingerprint Gestures, Dirac Sound, or any Audio Enhancer that's part of stock firmware (with exception of any Dolby products), otherwise, it can't be shipped."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"If any of these rules are violated, The Management Board will take direct action against the maintainer with or without prior warning."})}),"\n",(0,t.jsx)(i.h2,{id:"maintainers-requirements",children:"Maintainers Requirements"}),"\n",(0,t.jsx)(i.p,{children:"Before you apply to add your device into Official Devices"}),"\n",(0,t.jsx)(i.p,{children:"If you were unable to follow any of these following requirements, you're unfit for the maintainer status. No question, and You (as Maintainer):"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"[C-0-0] MUST have a good knowledge of Git and Repo."}),"\n",(0,t.jsx)(i.li,{children:"[C-0-1] MUST have your device sources commits properly authorshipped."}),"\n",(0,t.jsxs)(i.li,{children:["[C-0-2] MUST following the ",(0,t.jsx)(i.a,{href:"device-requirements",children:"Device Requirements"}),"."]}),"\n",(0,t.jsx)(i.li,{children:"[C-0-3] MUST amending the former requirement, the source of the device you have to publish is the one the REAL one that's used to build the image."}),"\n",(0,t.jsx)(i.li,{children:"[C-0-4] MUST own the device. Blind and untested builds is not allowed. Devices that have minimal hardware difference are allowed to be maintained, as long you are still maintaining the root device."}),"\n",(0,t.jsx)(i.li,{children:"[C-0-5] MUST have a fully functional build that tested by at least 3 different entities."}),"\n",(0,t.jsx)(i.li,{children:"[C-SR] STRONGLY RECOMMENDED for the tree to be clean of any third-party distributions (e.g. Lineage) components that are not part of standard Android and/or AOSP or components that may violating Android CDD specifications."}),"\n",(0,t.jsx)(i.li,{children:"[C-SR] STRONGLY RECOMMENDED have your device sources public."}),"\n",(0,t.jsx)(i.li,{children:"[C-SR] STRONGLY RECOMMENDED to include BUG ticket for changes if available."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"After applying and your application is accepted, you'll receive an E-mail or Direct Message from the recruitment and device board committee about the acceptance of your application."}),"\n",(0,t.jsx)(i.h2,{id:"design-requirements",children:"Design Requirements"}),"\n",(0,t.jsx)(i.p,{children:"For unifying the user experience across devices, You (as Maintainer):"}),"\n",(0,t.jsx)(i.h3,{id:"optionals",children:"Optionals"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"[C-SR] STRONGLY RECOMMENDED to be able to work with Splash Screen."}),"\n",(0,t.jsx)(i.li,{children:"[C-0-0] MUST Following our branding guidelines for your publishing of production builds."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"important",children:"Important"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"[C-0-1] MUST NOT Modify any of our standardized design and branding guidelines."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},147:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>s});var t=n(1467);const a={},r=t.createContext(a);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);