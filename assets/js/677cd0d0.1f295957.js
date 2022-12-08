"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44],{3905:function(e,r,n){n.r(r),n.d(r,{MDXContext:function(){return l},MDXProvider:function(){return m},mdx:function(){return v},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),p=function(e){return function(r){var n=u(r.components);return t.createElement(e,o({},r,{components:n}))}},u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},m=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||c[m]||o;return n?t.createElement(g,s(s({ref:r},l),{},{components:n})):t.createElement(g,s({ref:r},l))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3416:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"intro",title:"Introduction",sidebar_label:"Introduction"},d=void 0,l={unversionedId:"upgrades/intro",id:"version-1.2/upgrades/intro",title:"Introduction",description:"Upgrading to a new Hydra version is usually an easy process.",source:"@site/versioned_docs/version-1.2/upgrades/intro.md",sourceDirName:"upgrades",slug:"/upgrades/intro",permalink:"/docs/1.2/upgrades/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/upgrades/intro.md",tags:[],version:"1.2",lastUpdatedBy:"Jasha",lastUpdatedAt:1670537910,formattedLastUpdatedAt:"12/8/2022",frontMatter:{id:"intro",title:"Introduction",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Release process",permalink:"/docs/1.2/development/release"},next:{title:"version_base",permalink:"/docs/1.2/upgrades/version_base"}},p=[{value:"Major version upgrades",id:"major-version-upgrades",children:[],level:2},{value:"Patch version upgrades",id:"patch-version-upgrades",children:[],level:2},{value:"Dev release upgrades",id:"dev-release-upgrades",children:[],level:2}],u={toc:p};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Upgrading to a new Hydra version is usually an easy process.\nAlso since Hydra version 1.2, backwards compatibility is improved\nby giving the user more control over appropriate defaults\nthrough the use of the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.2/upgrades/version_base"},"version_base parameter"),"."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Hydra versioning has only major versions and patch versions. A bump of the first two version digits is considered a major release.\nA major release may have multiple followup patch releases that will fix bugs without introducing new functionality."))),(0,o.mdx)("h2",{id:"major-version-upgrades"},"Major version upgrades"),(0,o.mdx)("p",null,"Hydra will typically provide helpful warnings about required changes, sometimes pointing to an upgrade page that provides more details about the required changes."),(0,o.mdx)("p",null,"For a smooth upgrade experience, please follow these simple rules:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Upgrade to the latest patch version first"),".\ne.g: If you are upgrading from 1.0 to 1.1, be sure to upgrade to the latest 1.0 version first (1.0.6)."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Address ALL runtime warnings issued by Hydra."),(0,o.mdx)("br",{parentName:"li"}),"A warning in one version is likely to become a far less friendly error in the next major version."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Do not skip major versions"),".",(0,o.mdx)("br",{parentName:"li"}),"e.g: If you are upgrading from Hydra 1.0 to Hydra 1.2 - Do it by",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Upgrading from 1.0 to 1.1, addressing all the warnings."),(0,o.mdx)("li",{parentName:"ul"},"Upgrading from 1.1 to 1.2, addressing all the warnings.")))),(0,o.mdx)("h2",{id:"patch-version-upgrades"},"Patch version upgrades"),(0,o.mdx)("p",null,"Patch releases normally contains only bug fixes and are thus safe and easy to upgrade (e.g. ",(0,o.mdx)("strong",{parentName:"p"},"1.0.3")," to ",(0,o.mdx)("strong",{parentName:"p"},"1.0.6"),").",(0,o.mdx)("br",{parentName:"p"}),"\n","In rare cases, patch releases will introduce new warnings. Be sure to address them before upgrading to the next major version."),(0,o.mdx)("h2",{id:"dev-release-upgrades"},"Dev release upgrades"),(0,o.mdx)("p",null,"Development releases are subject to breaking changes without notice. Please be aware that upgrading to a new development release\nis more likely to introduce some breakage. No attempt will be made to make upgrading between development releases easy."))}m.isMDXComponent=!0}}]);