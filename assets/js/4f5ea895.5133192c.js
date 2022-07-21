"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6595],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return c},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){return function(n){var r=u(n.components);return t.createElement(e,a({},n,{components:r}))}},u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},d=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return r?t.createElement(f,p(p({ref:n},c),{},{components:r})):t.createElement(f,p({ref:n},c))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93899:function(e,n,r){r.d(n,{Z:function(){return l},T:function(){return c}});var t=r(87462),o=r(67294),a=r(39960),i=r(52263),p=r(80907);function l(e){return o.createElement(a.default,(0,t.Z)({},e,{to:(n=e.to,l=(0,p.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==l?void 0:l.name)?r:"current"]+n),target:"_blank"}));var n,r,l}function c(e){var n,r=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(l,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example (Click Here)"}))}},99745:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(93899),p=["components"],l={id:"app_help",title:"Customizing Application's help",sidebar_label:"Customizing Application's help"},c=void 0,s={unversionedId:"configure_hydra/app_help",id:"configure_hydra/app_help",title:"Customizing Application's help",description:"Hydra provides two different help options:",source:"@site/docs/configure_hydra/app_help.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/app_help",permalink:"/docs/next/configure_hydra/app_help",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/configure_hydra/app_help.md",tags:[],version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1658420436,formattedLastUpdatedAt:"7/21/2022",frontMatter:{id:"app_help",title:"Customizing Application's help",sidebar_label:"Customizing Application's help"},sidebar:"docs",previous:{title:"Customizing working directory pattern",permalink:"/docs/next/configure_hydra/workdir"},next:{title:"Colorlog plugin",permalink:"/docs/next/plugins/colorlog"}},u=[],d={toc:u};function m(e){var n=e.components,r=(0,o.Z)(e,p);return(0,a.mdx)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(i.T,{text:"Example application",to:"examples/configure_hydra/custom_help",mdxType:"ExampleGithubLink"}),(0,a.mdx)("p",null,"Hydra provides two different help options:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"--help")," : Application specific help"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"--hydra-help")," Hydra specific help. ")),(0,a.mdx)("p",null,"Example output of ",(0,a.mdx)("inlineCode",{parentName:"p"},"--help"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --help\n== AwesomeApp ==\n\nThis is AwesomeApp!\nYou can choose a db driver by appending\n== Configuration groups ==\nCompose your configuration from those groups (db=mysql)\n\ndb: mysql, postgresql\n\n\n== Config ==\nThis is the config generated for this run.\nYou can override everything, for example:\npython my_app.py db.user=foo db.pass=bar\n-------\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\n\n-------\n\nPowered by Hydra (https://hydra.cc)\nUse --hydra-help to view Hydra specific help\n")),(0,a.mdx)("p",null,"This output is generated from the following config group option (selected in ",(0,a.mdx)("inlineCode",{parentName:"p"},"config.yaml")," to be used by default): "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/help/my_app_help.yaml"',title:'"hydra/help/my_app_help.yaml"'},"# App name, override to match the name your app is known by\napp_name: AwesomeApp\n\n# Help header, customize to describe your app to your users\nheader: == ${hydra.help.app_name} ==\n\nfooter: |-\n  Powered by Hydra (https://hydra.cc)\n  Use --hydra-help to view Hydra specific help\n\n# Basic Hydra flags:\n#   $FLAGS_HELP\n#\n# Config groups, choose one of:\n#   $APP_CONFIG_GROUPS: All config groups that does not start with hydra/.\n#   $HYDRA_CONFIG_GROUPS: All the Hydra config groups (starts with hydra/)\n#\n# Configuration generated with overrides:\n#   $CONFIG : Generated config\n#\ntemplate: |-\n  ${hydra.help.header}\n\n  This is ${hydra.help.app_name}!\n  You can choose a db driver by appending\n  == Configuration groups ==\n  Compose your configuration from those groups (db=mysql)\n\n  $APP_CONFIG_GROUPS\n\n  == Config ==\n  This is the config generated for this run.\n  You can override everything, for example:\n  python my_app.py db.user=foo db.pass=bar\n  -------\n  $CONFIG\n  -------\n  \n  ${hydra.help.footer}\n")))}m.isMDXComponent=!0}}]);