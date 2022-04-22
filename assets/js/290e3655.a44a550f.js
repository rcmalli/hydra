"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4599],{3905:function(e,r,n){n.r(r),n.d(r,{MDXContext:function(){return l},MDXProvider:function(){return s},mdx:function(){return g},useMDXComponents:function(){return c},withMDXComponents:function(){return p}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){return function(r){var n=c(r.components);return t.createElement(e,i({},r,{components:n}))}},c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),s=o,y=p["".concat(a,".").concat(s)]||p[s]||m[s]||i;return n?t.createElement(y,d(d({ref:r},l),{},{components:n})):t.createElement(y,d({ref:r},l))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var d={};for(var u in r)hasOwnProperty.call(r,u)&&(d[u]=r[u]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},93899:function(e,r,n){n.d(r,{Z:function(){return u},T:function(){return l}});var t=n(87462),o=n(67294),i=n(39960),a=n(52263),d=n(80907);function u(e){return o.createElement(i.default,(0,t.Z)({},e,{to:(r=e.to,u=(0,d.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==u?void 0:u.name)?n:"current"]+r),target:"_blank"}));var r,n,u}function l(e){var r,n=null!=(r=e.text)?r:"Example (Click Here)";return o.createElement(u,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},92746:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=n(93899),d=["components"],u={id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},l=void 0,p={unversionedId:"tutorials/basic/running_your_app/working_directory",id:"tutorials/basic/running_your_app/working_directory",title:"Output/Working directory",description:"Hydra solves the problem of your needing to specify a new output directory for each run, by",source:"@site/docs/tutorials/basic/running_your_app/3_working_directory.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/working_directory",permalink:"/docs/next/tutorials/basic/running_your_app/working_directory",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/tutorials/basic/running_your_app/3_working_directory.md",tags:[],version:"current",lastUpdatedBy:"Jasha",lastUpdatedAt:1650645910,formattedLastUpdatedAt:"4/22/2022",sidebarPosition:3,frontMatter:{id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},sidebar:"docs",previous:{title:"Multi-run",permalink:"/docs/next/tutorials/basic/running_your_app/multi-run"},next:{title:"Logging",permalink:"/docs/next/tutorials/basic/running_your_app/logging"}},c=[{value:"Disable changing current working dir to job&#39;s output dir",id:"disable-changing-current-working-dir-to-jobs-output-dir",children:[],level:3},{value:"Changing or disabling Hydra&#39;s output subdir",id:"changing-or-disabling-hydras-output-subdir",children:[],level:3},{value:"Accessing the original working directory in your application",id:"accessing-the-original-working-directory-in-your-application",children:[],level:3}],s={toc:c};function m(e){var r=e.components,n=(0,o.Z)(e,d);return(0,i.mdx)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)(a.T,{to:"examples/tutorials/basic/running_your_hydra_app/3_working_directory",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"Hydra solves the problem of your needing to specify a new output directory for each run, by\ncreating a directory for each run and executing your code within that working directory."),(0,i.mdx)("p",null,"The working directory is used to:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Store the output for the application (For example, a database dump file)"),(0,i.mdx)("li",{parentName:"ul"},"Store the Hydra output for the run (Configuration, Logs etc)")),(0,i.mdx)("p",null,"Every time you run the app, a new working directory is created:"),(0,i.mdx)("p",null,"Python file: ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_app.py")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import os\nfrom omegaconf import DictConfig\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print("Working directory : {}".format(os.getcwd()))\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-17\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-19\n')),(0,i.mdx)("p",null,"Let's take a look at one of the working directories:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ tree outputs/2019-09-25/15-16-17\noutputs/2019-09-25/15-16-17\n\u251c\u2500\u2500 .hydra\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 hydra.yaml\n\u2502   \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),(0,i.mdx)("p",null,"We have the Hydra output directory (",(0,i.mdx)("inlineCode",{parentName:"p"},".hydra")," by default), and the application log file.\nInside the Hydra output directory we have:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"config.yaml"),": A dump of the user specified configuration"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.yaml"),": A dump of the Hydra configuration"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"overrides.yaml"),": The command line overrides used")),(0,i.mdx)("p",null,"And in the main output directory:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"my_app.log"),": A log file created for this run")),(0,i.mdx)("h3",{id:"disable-changing-current-working-dir-to-jobs-output-dir"},"Disable changing current working dir to job's output dir"),(0,i.mdx)("p",null,"By default, Hydra's ",(0,i.mdx)("inlineCode",{parentName:"p"},"@hydra.main")," decorator makes a call to ",(0,i.mdx)("inlineCode",{parentName:"p"},"os.chdir")," before passing control to the user's decorated main function.\nSet ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.chdir=False")," to disable this behavior."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"# check current working dir\n$ pwd  \n/home/omry/dev/hydra\n\n# working dir remains the same\n$ python my_app.py hydra.job.chdir=False\nWorking directory : /home/omry/dev/hydra\n\n# output dir and files are still created, even if `chdir` is disabled:\n$ tree -a outputs/2021-10-25/09-46-26/\noutputs/2021-10-25/09-46-26/\n\u251c\u2500\u2500 .hydra\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 hydra.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),(0,i.mdx)("h3",{id:"changing-or-disabling-hydras-output-subdir"},"Changing or disabling Hydra's output subdir"),(0,i.mdx)("p",null,"You can change the ",(0,i.mdx)("inlineCode",{parentName:"p"},".hydra")," subdirectory name by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.output_subdir"),".\nYou can disable its creation by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.output_subdir")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"null"),". "),(0,i.mdx)("h3",{id:"accessing-the-original-working-directory-in-your-application"},"Accessing the original working directory in your application"),(0,i.mdx)("p",null,"With ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.chdir=True"),", you can still access the original working directory by importing ",(0,i.mdx)("inlineCode",{parentName:"p"},"get_original_cwd()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"to_absolute_path()")," in ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.utils"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'from hydra.utils import get_original_cwd, to_absolute_path\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    print(f"Current working directory : {os.getcwd()}")\n    print(f"Orig working directory    : {get_original_cwd()}")\n    print(f"to_absolute_path(\'foo\')   : {to_absolute_path(\'foo\')}")\n    print(f"to_absolute_path(\'/foo\')  : {to_absolute_path(\'/foo\')}")\n\nif __name__ == "__main__":\n    my_app()\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python examples/tutorial/8_working_directory/original_cwd.py"',title:'"$',python:!0,'examples/tutorial/8_working_directory/original_cwd.py"':!0},"Current working directory  : /Users/omry/dev/hydra/outputs/2019-10-23/10-53-03\nOriginal working directory : /Users/omry/dev/hydra\nto_absolute_path('foo')    : /Users/omry/dev/hydra/foo\nto_absolute_path('/foo')   : /foo\n")),(0,i.mdx)("p",null,"The name of the generated working directories can be ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/configure_hydra/workdir"},"customized"),"."))}m.isMDXComponent=!0}}]);