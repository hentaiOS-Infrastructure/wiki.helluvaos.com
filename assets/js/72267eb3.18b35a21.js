"use strict";(self.webpackChunkhentaiwiki=self.webpackChunkhentaiwiki||[]).push([[89],{7188:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=i(123),a=i(147);const s={sidebar_position:5},t="Performance",c={id:"technical-data/performance",title:"Performance",description:"Some minimum performance criteria are critical to the user experience and impact the baseline assumptions users would have when running an app.",source:"@site/docs/technical-data/performance.md",sourceDirName:"technical-data",slug:"/technical-data/performance",permalink:"/docs/technical-data/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/hentaiOS-Infrastructure/wiki-frontpage-develop/edit/master/docs/technical-data/performance.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mainSidebar",previous:{title:"Device Requirements",permalink:"/docs/technical-data/device-requirements"},next:{title:"Security",permalink:"/docs/technical-data/security"}},o={},l=[{value:"User Experience Consistency",id:"user-experience-consistency",level:2},{value:"Scheduler",id:"scheduler",level:2},{value:"General Linux Kernel",id:"general-linux-kernel",level:2},{value:"ZRAM",id:"zram",level:3},{value:"The use of compilation flags",id:"the-use-of-compilation-flags",level:3},{value:"Kernel Default Configurations",id:"kernel-default-configurations",level:3},{value:"IRQ",id:"irq",level:2},{value:"MSM-IRQBalance",id:"msm-irqbalance",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"performance",children:"Performance"}),"\n",(0,r.jsx)(n.p,{children:"Some minimum performance criteria are critical to the user experience and impact the baseline assumptions users would have when running an app."}),"\n",(0,r.jsx)(n.h2,{id:"user-experience-consistency",children:"User Experience Consistency"}),"\n",(0,r.jsx)(n.p,{children:"A smooth user interface can be provided to the end user if there are certain minimum requirements to ensure a consistent frame rate and response time for applications and games. Builds, depending on device type, MAY have measurable requirements for user interface latency and task switching."}),"\n",(0,r.jsx)(n.h2,{id:"scheduler",children:"Scheduler"}),"\n",(0,r.jsx)(n.p,{children:"Performance can fluctuate dramatically for high-performance long-running apps, either because of the other apps running in the background or the CPU throttling due to scheduler."}),"\n",(0,r.jsx)(n.p,{children:"Maintainers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[C-0-0] MUST NOT using Touch Boosting and instead, use libperf and uclamp."}),"\n",(0,r.jsx)(n.li,{children:"[C-0-1] MUST implement efficient frequency into libperf through Power Hints.\nWe suggest that you avoid assigning CPU 0 and 1 to tasks other than TA (Top-App) as that it's generally utilizing CPU 0 and 1 extensively."}),"\n",(0,r.jsxs)(n.li,{children:["[C-0-2] MUST NOT overly boosting everything, because ",(0,r.jsx)(n.strong,{children:'Performance is not "all-about-boosting".'})," Efficiency is all that matters in this case, for getting efficient frequencies, you can use ",(0,r.jsx)(n.a,{href:"https://github.com/kdrag0n/freqbench",children:"freqbench"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"[D-SR] STRONGLY RECOMMENDED to tune your CPUSet according to your SoC, every SoC has its specific CPUSet tuning, so make sure you correctly tune it according to your SoC."}),"\n",(0,r.jsx)(n.li,{children:"[C-SR] STRONGLY RECOMMENDED to ship efficient frequency data inside kernel."}),"\n",(0,r.jsxs)(n.li,{children:["[C-SR] STRONGLY RECOMMENDED to ship ",(0,r.jsx)(n.a,{href:"https://lwn.net/Articles/531853/",children:"PELT"})," instead of ",(0,r.jsx)(n.a,{href:"https://wiki.codeaurora.org/xwiki/bin/QKERNEL/Window%20Assisted%20Load%20Tracking/",children:"WALT"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["[C-SR] STRONGLY RECOMMENDED to ship PELT Util Halflife by picking or forward-porting (for Linux 4.19.y upwards) ",(0,r.jsx)(n.a,{href:"https://android.googlesource.com/kernel/common/+/cb22d9159761cb32c35a5f9399b8011fcdae654b",children:"kernel/common/cb22d9159761cb32c35a5f9399b8011fcdae654b"})," and ",(0,r.jsx)(n.a,{href:"https://android.googlesource.com/kernel/common/+/3c207c880674e5d29aa1c9b7e94d812383c442ee",children:"kernel/common/3c207c880674e5d29aa1c9b7e94d812383c442ee"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["[C-SR] STRONGLY RECOMMENDED to ship Google's workaround for Unity Engine CPU Affinity by picking ",(0,r.jsx)(n.a,{href:"https://android.googlesource.com/device/google/redbull/+/69a034bb62b8841c1774617fb9b7af0ccf475b1e",children:"google/redbull/69a034bb62b8841c1774617fb9b7af0ccf475b1e"})," and ",(0,r.jsx)(n.a,{href:"https://android.googlesource.com/device/google/redbull/+/a5137c1c9150e6617d2d62575789455bedcfd27d",children:"google/redbull/a5137c1c9150e6617d2d62575789455bedcfd27d"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"general-linux-kernel",children:"General Linux Kernel"}),"\n",(0,r.jsx)(n.h3,{id:"zram",children:"ZRAM"}),"\n",(0,r.jsx)(n.p,{children:"If Maintainers include ZRAM, they:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[C-SR] STRONGLY RECOMMENDED ship ZRAM depending on your device RAM size."}),"\n",(0,r.jsx)(n.li,{children:"[C-SR] STRONGLY RECOMMENDED to keep compression backend up-to-date as possible with Mainline."}),"\n",(0,r.jsxs)(n.li,{children:["[C-1-0] MUST NOT keeping the ZRAM compression backend in LZO. We recommend you to use Zstandard (zstd) as default ZRAM and ZSWAP (if your devices use this, Smugsungs?) compression backend as it'll be beneficial for the compression ratio and faster compared to LZO, you also can use lz4 for the compression backend if you favoring performance over compression ratio by picking ",(0,r.jsx)(n.a,{href:"https://github.com/torvalds/linux/commit/3d711a382735d2c34d3ba2075a5aa83a894f4a57",children:"linus/torvalds/3d711a382735d2c34d3ba2075a5aa83a894f4a57"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"the-use-of-compilation-flags",children:"The use of compilation flags"}),"\n",(0,r.jsx)(n.p,{children:"Maintainers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[C-0-1] MUST NOT generically build your builds with generic CPU variant. Use your SoC-specific optimization flags instead."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"kernel-default-configurations",children:"Kernel Default Configurations"}),"\n",(0,r.jsx)(n.p,{children:"Maintainers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'[D-0-1] MUST ship kernel default configuration (known as "defconfig") as-is without any masking.'}),"\n",(0,r.jsxs)(n.li,{children:["[D-SR] STRONGLY RECOMMENDED to follows ",(0,r.jsx)(n.a,{href:"https://android.googlesource.com/kernel/configs/",children:"kernel/configs"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"irq",children:"IRQ"}),"\n",(0,r.jsx)(n.h3,{id:"msm-irqbalance",children:"MSM-IRQBalance"}),"\n",(0,r.jsx)(n.p,{children:"Qualcomm includes support for balancing IRQ to help balance the CPU load generated by interrupts across all of a systems CPUs, to configuring MSM-IRQBalance, Maintainers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[C-SR] STRONGLY RECOMMENDED to Divide the IRQ's affinity, ",(0,r.jsx)(n.a,{href:"https://github.com/AOSPA/android_device_oneplus_sdm845-common/commit/e317060e5e03b11787ad727a6e08c204f7b39d13",children:"Example commit from AOSPA OnePlus-sdm845"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["[C-SR] STRONGLY RECOMMENDED to blacklist msm_drm and kgsl_3d0 IRQs, ",(0,r.jsx)(n.a,{href:"https://github.com/AOSPA/android_device_oneplus_sdm845-common/commit/7e590e891ac9b3b83d95543b88a1516a016038f5",children:"Example commit from AOSPA OnePlus-sdm845"}),", keep in mind that changes may vary between all devices, so make sure you blacklisted the correct IRQ."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},147:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var r=i(1467);const a={},s=r.createContext(a);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);