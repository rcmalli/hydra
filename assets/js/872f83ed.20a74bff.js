"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1058],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return u},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return c}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){return function(n){var t=s(n.components);return r.createElement(e,i({},n,{components:t}))}},s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),c=s(t),d=o,p=c["".concat(a,".").concat(d)]||c[d]||m[d]||i;return t?r.createElement(p,l(l({ref:n},u),{},{components:t})):r.createElement(p,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},52278:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return g},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"logging",title:"Customizing logging",sidebar_label:"Customizing logging"},g=void 0,u={unversionedId:"configure_hydra/logging",id:"version-0.11/configure_hydra/logging",title:"Customizing logging",description:"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it here.",source:"@site/versioned_docs/version-0.11/configure_hydra/logging.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/logging",permalink:"/docs/0.11/configure_hydra/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/configure_hydra/logging.md",tags:[],version:"0.11",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1644889279,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"logging",title:"Customizing logging",sidebar_label:"Customizing logging"},sidebar:"version-0.11/docs",previous:{title:"Introduction",permalink:"/docs/0.11/configure_hydra/intro"},next:{title:"Customizing working directory pattern",permalink:"/docs/0.11/configure_hydra/workdir"}},c=[],s={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/howto/logging.html"},"here"),".\nThere are two logging configurations, one for Hydra itself and one for the executed jobs."),(0,i.mdx)("p",null,"This example demonstrates how to to customize the logging behavior of your Hydra app, by making the following changes\nto the default logging behavior:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Outputs only to stdout (no log file)"),(0,i.mdx)("li",{parentName:"ul"},"Output a simpler log line pattern")),(0,i.mdx)("p",null,"Project structure:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ tree\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 hydra\n\u2502\xa0\xa0     \u2514\u2500\u2500 job_logging\n\u2502\xa0\xa0         \u2514\u2500\u2500 custom.yaml\n\u2514\u2500\u2500 main.py\n")),(0,i.mdx)("p",null,"config.yaml defaults the application to the custom logging."),(0,i.mdx)("p",null,"Config file: ",(0,i.mdx)("inlineCode",{parentName:"p"},"config.yaml")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging : custom\n")),(0,i.mdx)("p",null,"Config file: ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/job_logging/custom.yaml")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job_logging:\n    formatters:\n      simple:\n        format: '[%(levelname)s] - %(message)s'\n    root:\n      handlers: [console]\n")),(0,i.mdx)("p",null,"This is what the the default logging looks like:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ python main.py hydra/job_logging=default\n[2019-09-26 18:58:05,477][__main__][INFO] - Info level message\n")),(0,i.mdx)("p",null,"And this is what the custom logging looks like:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ python main.py\n[INFO] - Info level message\n")))}d.isMDXComponent=!0}}]);