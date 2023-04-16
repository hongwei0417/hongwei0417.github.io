"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[9217],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),d=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(t),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return t?o.createElement(g,i(i({ref:n},s),{},{components:t})):o.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(7462),r=(t(7294),t(3905));const a={tags:["backend","database","mongodb"],last_update:{date:"2023/4/16",author:"Kevin Hu"}},i="MongoDB \u5c0d\u5916\u958b\u653e\u8a2d\u5b9a",l={unversionedId:"mongo/mongo-open-to-outside",id:"mongo/mongo-open-to-outside",title:"MongoDB \u5c0d\u5916\u958b\u653e\u8a2d\u5b9a",description:"\u6700\u8fd1\u5728\u672c\u5730\u7aef\u67b6\u4e86\u4e00\u53f0 Mongo\uff0c\u4f46\u662f\u9700\u8981\u7531\u5916\u90e8\u670d\u52d9\u4f86\u5b58\u53d6\u8cc7\u6599",source:"@site/docs/mongo/mongo-open-to-outside.md",sourceDirName:"mongo",slug:"/mongo/mongo-open-to-outside",permalink:"/mongo/mongo-open-to-outside",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mongo/mongo-open-to-outside.md",tags:[{label:"backend",permalink:"/tags/backend"},{label:"database",permalink:"/tags/database"},{label:"mongodb",permalink:"/tags/mongodb"}],version:"current",lastUpdatedBy:"Kevin Hu",lastUpdatedAt:1681603200,formattedLastUpdatedAt:"Apr 16, 2023",frontMatter:{tags:["backend","database","mongodb"],last_update:{date:"2023/4/16",author:"Kevin Hu"}},sidebar:"defaultSidebar",previous:{title:"MongoDB",permalink:"/category/mongodb"},next:{title:"Tailwind",permalink:"/category/tailwind"}},p={},d=[{value:"Step1. \u5b89\u88dd MongoDB",id:"step1-\u5b89\u88dd-mongodb",level:2},{value:"Step2. \u4fee\u6539 <code>mongod</code> \u8a2d\u5b9a\u6a94",id:"step2-\u4fee\u6539-mongod-\u8a2d\u5b9a\u6a94",level:2},{value:"Step3. \u65b0\u589e Mongo \u7ba1\u7406\u8005\u5e33\u865f",id:"step3-\u65b0\u589e-mongo-\u7ba1\u7406\u8005\u5e33\u865f",level:2},{value:"Step4. \u91cd\u555f Mongo \u670d\u52d9",id:"step4-\u91cd\u555f-mongo-\u670d\u52d9",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3}],s={toc:d},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mongodb-\u5c0d\u5916\u958b\u653e\u8a2d\u5b9a"},"MongoDB \u5c0d\u5916\u958b\u653e\u8a2d\u5b9a"),(0,r.kt)("admonition",{title:"\u52d5\u6a5f",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6700\u8fd1\u5728\u672c\u5730\u7aef\u67b6\u4e86\u4e00\u53f0 Mongo\uff0c\u4f46\u662f\u9700\u8981\u7531\u5916\u90e8\u670d\u52d9\u4f86\u5b58\u53d6\u8cc7\u6599\n\u4f46\u9810\u8a2d Mongo \u662f\u6c92\u6709\u5c0d\u5916\u958b\u653e\uff0c\u56e0\u6b64\u4f86\u7d00\u9304\u4e00\u4e0b\u6211\u8a2d\u5b9a\u7684\u6b65\u9a5f")),(0,r.kt)("h2",{id:"step1-\u5b89\u88dd-mongodb"},"Step1. \u5b89\u88dd MongoDB"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/administration/install-community/"},"\u5f9e\u5b98\u7db2\u5b89\u88dd MongoDB Community Edition")),(0,r.kt)("h2",{id:"step2-\u4fee\u6539-mongod-\u8a2d\u5b9a\u6a94"},"Step2. \u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"h2"},"mongod")," \u8a2d\u5b9a\u6a94"),(0,r.kt)("admonition",{title:"\u6a94\u6848\u4f4d\u7f6e",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Windows: ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\MongoDB\\Server\\5.0\\bin")),(0,r.kt)("p",{parentName:"admonition"},"Linux: ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/mongod.conf"))),(0,r.kt)("p",null,"\u4fee\u6539\u4ee5\u4e0b\u5340\u57df"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{4,8} showLineNumbers","{4,8}":!0,showLineNumbers:!0},'# network interface \u5340\u57df\nnet:\n    port: 27017\n    bindIp: 0.0.0.0\n\n# security \u5340\u57df\nsecurity:\n  authorization: "enabled"\n')),(0,r.kt)("h2",{id:"step3-\u65b0\u589e-mongo-\u7ba1\u7406\u8005\u5e33\u865f"},"Step3. \u65b0\u589e Mongo \u7ba1\u7406\u8005\u5e33\u865f"),(0,r.kt)("p",null,"\u5728 terminal \u8f38\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"mongo")," \u9032\u5165 Mongo CLI\n\u63a5\u8457\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'use admin\ndb.createUser(\n    {\n        user: "Admin",\n        pwd: "myNewPassword",\n        roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]\n    }\n)\n')),(0,r.kt)("h2",{id:"step4-\u91cd\u555f-mongo-\u670d\u52d9"},"Step4. \u91cd\u555f Mongo \u670d\u52d9"),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,"\u6253\u958b\u5de5\u4f5c\u7ba1\u7406\u54e1 => \u9078\u64c7\u670d\u52d9\u627e\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," => \u53f3\u9375\u91cd\u65b0\u555f\u52d5"),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo service mongod restart")))}u.isMDXComponent=!0}}]);