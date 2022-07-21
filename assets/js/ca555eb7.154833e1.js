"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6663],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return m},MDXProvider:function(){return p},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return s}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=t.createContext({}),s=function(e){return function(n){var r=u(n.components);return t.createElement(e,i({},n,{components:r}))}},u=function(e){var n=t.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(r),p=a,g=s["".concat(o,".").concat(p)]||s[p]||c[p]||i;return r?t.createElement(g,d(d({ref:n},m),{},{components:r})):t.createElement(g,d({ref:n},m))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var m=2;m<i;m++)o[m]=r[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93899:function(e,n,r){r.d(n,{Z:function(){return l},T:function(){return m}});var t=r(87462),a=r(67294),i=r(39960),o=r(52263),d=r(80907);function l(e){return a.createElement(i.default,(0,t.Z)({},e,{to:(n=e.to,l=(0,d.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==l?void 0:l.name)?r:"current"]+n),target:"_blank"}));var n,r,l}function m(e){var n,r=null!=(n=e.text)?n:"Example (Click Here)";return a.createElement(l,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example (Click Here)"}))}},29200:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=r(93899),d=["components"],l={id:"intro",title:"Overview",sidebar_label:"Introduction"},m=void 0,s={unversionedId:"configure_hydra/intro",id:"configure_hydra/intro",title:"Overview",description:"Hydra is highly configurable. Many of its aspects and subsystems can be configured, including:",source:"@site/docs/configure_hydra/Intro.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/intro",permalink:"/docs/next/configure_hydra/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/configure_hydra/Intro.md",tags:[],version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1658420436,formattedLastUpdatedAt:"7/21/2022",frontMatter:{id:"intro",title:"Overview",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Read-only config",permalink:"/docs/next/patterns/write_protect_config_node"},next:{title:"Job Configuration",permalink:"/docs/next/configure_hydra/job"}},u=[{value:"Accessing the Hydra config",id:"accessing-the-hydra-config",children:[{value:"In your config, using the <code>hydra</code> resolver:",id:"in-your-config-using-the-hydra-resolver",children:[],level:4},{value:"In your code, using the HydraConfig singleton.",id:"in-your-code-using-the-hydraconfig-singleton",children:[],level:4},{value:"hydra.job:",id:"hydrajob",children:[],level:3},{value:"hydra.run:",id:"hydrarun",children:[],level:3},{value:"hydra.sweep:",id:"hydrasweep",children:[],level:3},{value:"hydra.runtime:",id:"hydraruntime",children:[],level:3},{value:"hydra.overrides",id:"hydraoverrides",children:[],level:3},{value:"hydra.mode",id:"hydramode",children:[],level:3},{value:"Other Hydra settings",id:"other-hydra-settings",children:[],level:3},{value:"Resolvers provided by Hydra",id:"resolvers-provided-by-hydra",children:[],level:3}],level:2}],p={toc:u};function c(e){var n=e.components,r=(0,a.Z)(e,d);return(0,i.mdx)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra is highly configurable. Many of its aspects and subsystems can be configured, including:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The Launcher"),(0,i.mdx)("li",{parentName:"ul"},"The Sweeper"),(0,i.mdx)("li",{parentName:"ul"},"Logging"),(0,i.mdx)("li",{parentName:"ul"},"Output directory patterns"),(0,i.mdx)("li",{parentName:"ul"},"Application help (--help and --hydra-help)")),(0,i.mdx)("p",null,"The Hydra config can be customized using the same methods you are already familiar with from the tutorial.\nYou can include some Hydra config snippet in your own config to override it directly, or compose in different\nconfigurations provided by plugins or by your own code. You can also override everything in Hydra from the command\nline just like with your own configuration."),(0,i.mdx)("p",null,"The Hydra configuration itself is composed from multiple config files. here is a partial list:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/config"',title:'"hydra/config"'},"defaults:\n  - job_logging : default     # Job's logging config\n  - launcher: basic           # Launcher config\n  - sweeper: basic            # Sweeper config\n  - output: default           # Output directory\n")),(0,i.mdx)("p",null,"You can view the Hydra config structure ",(0,i.mdx)(o.Z,{to:"hydra/conf/__init__.py",mdxType:"GithubLink"},"here"),"."),(0,i.mdx)("p",null,"You can view the Hydra config using ",(0,i.mdx)("inlineCode",{parentName:"p"},"--cfg hydra"),":"),(0,i.mdx)("details",null,(0,i.mdx)("summary",null," $ python my_app.p ",(0,i.mdx)("b",null,"--cfg hydra")," (Click to expand)"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n  sweep:\n    dir: multirun/${now:%Y-%m-%d}/${now:%H-%M-%S}\n    subdir: ${hydra.job.num}\n  launcher:\n    _target_: hydra._internal.core_plugins.basic_launcher.BasicLauncher\n  sweeper:\n    _target_: hydra._internal.core_plugins.basic_sweeper.BasicSweeper\n    max_batch_size: null\n  hydra_logging:\n    version: 1\n    formatters:\n    ...\n"))),(0,i.mdx)("h2",{id:"accessing-the-hydra-config"},"Accessing the Hydra config"),(0,i.mdx)("p",null,"The Hydra config is large. To reduce clutter in your own config it's being deleted from the config object\nHydra is passing to the function annotated by ",(0,i.mdx)("inlineCode",{parentName:"p"},"@hydra.main()"),"."),(0,i.mdx)("p",null,"There are two ways to access the Hydra config:"),(0,i.mdx)("h4",{id:"in-your-config-using-the-hydra-resolver"},"In your config, using the ",(0,i.mdx)("inlineCode",{parentName:"h4"},"hydra")," resolver:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"config_name: ${hydra:job.name}\n")),(0,i.mdx)("p",null,"Pay close attention to the syntax: The resolver name is ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra"),", and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"key")," is passed after the colon."),(0,i.mdx)("h4",{id:"in-your-code-using-the-hydraconfig-singleton"},"In your code, using the HydraConfig singleton."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"from hydra.core.hydra_config import HydraConfig\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print(HydraConfig.get().job.name)\n")),(0,i.mdx)("p",null,"The following variables are populated at runtime.  "),(0,i.mdx)("h3",{id:"hydrajob"},"hydra.job:"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("strong",{parentName:"p"},"hydra.job")," node is used for configuring some aspects of your job.\nBelow is a short summary of the fields in ",(0,i.mdx)("strong",{parentName:"p"},"hydra.job"),".\nYou can find more details in the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/configure_hydra/job"},"Job Configuration")," page."),(0,i.mdx)("p",null,"Fields under ",(0,i.mdx)("strong",{parentName:"p"},"hydra.job"),":"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"name")," : Job name, defaults to the Python file name without the suffix. can be overridden."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"override_dirname")," : Pathname derived from the overrides for this job"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"chdir"),": If ",(0,i.mdx)("inlineCode",{parentName:"li"},"True"),", Hydra calls ",(0,i.mdx)("inlineCode",{parentName:"li"},"os.chdir(output_dir)")," before calling back to the user's main function."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"id")," : Job ID in the underlying jobs system (SLURM etc)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"num")," : job serial number in sweep"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"config_name")," : The name of the config used by the job (Output only)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"env_set"),": Environment variable to set for the launched job"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"env_copy"),": Environment variable to copy from the launching machine"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"config"),": fine-grained configuration for job")),(0,i.mdx)("h3",{id:"hydrarun"},"hydra.run:"),(0,i.mdx)("p",null,"Used in single-run mode (i.e. when the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--multirun")," command-line flag is omitted).\nSee ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/configure_hydra/workdir#configuration-for-run"},"configuration for run"),"."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"dir"),": used to specify the output directory.")),(0,i.mdx)("h3",{id:"hydrasweep"},"hydra.sweep:"),(0,i.mdx)("p",null,"Used in multi-run mode (i.e. when the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--multirun")," command-line flag is given)\nSee ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/configure_hydra/workdir#configuration-for-multirun"},"configuration for multirun"),"."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"dir"),": used to specify the output directory common to all jobs in the multirun sweep"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"subdir"),": used to specify the a pattern for creation of job-specific subdirectory")),(0,i.mdx)("h3",{id:"hydraruntime"},"hydra.runtime:"),(0,i.mdx)("p",null,"Fields under ",(0,i.mdx)("strong",{parentName:"p"},"hydra.runtime")," are populated automatically and should not be overridden."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"version"),": Hydra's version"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"cwd"),": Original working directory the app was executed from"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"output_dir"),": This is the directory created by Hydra for saving logs and\nyaml config files, as configured by ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/configure_hydra/workdir"},"customizing the working directory pattern"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"choices"),": A dictionary containing the final config group choices."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"config_sources"),": The final list of config sources used to compose the config.")),(0,i.mdx)("h3",{id:"hydraoverrides"},"hydra.overrides"),(0,i.mdx)("p",null,"Fields under ",(0,i.mdx)("strong",{parentName:"p"},"hydra.overrides")," are populated automatically and should not be overridden."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"task"),": Contains a list of the command-line overrides used, except ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra")," config overrides.\nContains the same information as the ",(0,i.mdx)("inlineCode",{parentName:"li"},".hydra/overrides.yaml")," file.\nSee ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/working_directory"},"Output/Working directory"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"hydra"),": Contains a list of the command-line ",(0,i.mdx)("inlineCode",{parentName:"li"},"hydra")," config overrides used.")),(0,i.mdx)("h3",{id:"hydramode"},"hydra.mode"),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/tutorials/basic/running_your_app/multi-run"},"multirun")," for more info."),(0,i.mdx)("h3",{id:"other-hydra-settings"},"Other Hydra settings"),(0,i.mdx)("p",null,"The following fields are present at the top level of the Hydra Config."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"searchpath"),": A list of paths that Hydra searches in order to find configs.\nSee ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/advanced/search_path#overriding-hydrasearchpath-config"},"overriding ",(0,i.mdx)("inlineCode",{parentName:"a"},"hydra.searchpath"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"job_logging")," and ",(0,i.mdx)("strong",{parentName:"li"},"hydra_logging"),": Configure logging settings.\nSee ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/logging"},"logging")," and ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/configure_hydra/logging"},"customizing logging"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"sweeper"),": ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/multi-run#sweeper"},"Sweeper")," plugin settings. Defaults to basic sweeper."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"launcher"),": ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/multi-run#launcher"},"Launcher")," plugin settings. Defaults to basic launcher."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"callbacks"),": ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/experimental/callbacks"},"Experimental callback support"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"help"),": Configures your app's ",(0,i.mdx)("inlineCode",{parentName:"li"},"--help")," CLI flag. See ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/configure_hydra/app_help"},"customizing application's help"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"hydra_help"),": Configures the ",(0,i.mdx)("inlineCode",{parentName:"li"},"--hydra-help")," CLI flag."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"output_subdir"),": Configures the ",(0,i.mdx)("inlineCode",{parentName:"li"},".hydra")," subdirectory name.\nSee ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/working_directory#changing-or-disabling-hydras-output-subdir"},"changing or disabling the output subdir"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"verbose"),": Configures per-file DEBUG-level logging.\nSee ",(0,i.mdx)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/logging"},"logging"),".")),(0,i.mdx)("h3",{id:"resolvers-provided-by-hydra"},"Resolvers provided by Hydra"),(0,i.mdx)("p",null,"Hydra provides the following ",(0,i.mdx)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#resolvers"},"OmegaConf resolvers")," by default."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"hydra"),": Interpolates into the ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra")," config node. e.g. Use ",(0,i.mdx)("inlineCode",{parentName:"p"},"${hydra:job.name}")," to get the Hydra job name."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"now"),": Creates a string representing the current time using\n",(0,i.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior"},"strftime"),".\ne.g. for formatting the time you can use something like",(0,i.mdx)("inlineCode",{parentName:"p"},"${now:%H-%M-%S}"),"."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"python_version"),": Return a string representing the runtime python version by calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"sys.version_info"),".\nTakes an optional argument of a string with the values major, minor or macro.\ne.g:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"default: ${python_version:}          # 3.8\nmajor:   ${python_version:major}     # 3\nminor:   ${python_version:minor}     # 3.8\nmicro:   ${python_version:micro}     # 3.8.2\n")),(0,i.mdx)("p",null,"You can learn more about OmegaConf ",(0,i.mdx)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation",target:"_blank"},"here"),"."))}c.isMDXComponent=!0}}]);