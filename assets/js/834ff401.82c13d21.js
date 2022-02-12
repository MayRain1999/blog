"use strict";(self.webpackChunkmy_festudy=self.webpackChunkmy_festudy||[]).push([[458],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9448:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},c="Object.is",p={unversionedId:"JavaScript\u6570\u636e\u7ed3\u6784/Object.is",id:"JavaScript\u6570\u636e\u7ed3\u6784/Object.is",title:"Object.is",description:"Object.is()\u65b9\u6cd5\u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u662f\u76f8\u540c\u7684\u503c\u3002",source:"@site/docs/01-JavaScript\u6570\u636e\u7ed3\u6784/15-Object.is.md",sourceDirName:"01-JavaScript\u6570\u636e\u7ed3\u6784",slug:"/JavaScript\u6570\u636e\u7ed3\u6784/Object.is",permalink:"/JavaScript\u6570\u636e\u7ed3\u6784/Object.is",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-JavaScript\u6570\u636e\u7ed3\u6784/15-Object.is.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\u578b\u8f6c\u6362",permalink:"/JavaScript\u6570\u636e\u7ed3\u6784/\u7c7b\u578b\u8f6c\u6362"},next:{title:"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b",permalink:"/JavaScript\u6570\u636e\u7ed3\u6784/\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b"}},u=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",children:[],level:2},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"objectis"},"Object.is"),(0,i.kt)("p",null,"Object.is()\u65b9\u6cd5\u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u662f\u76f8\u540c\u7684\u503c\u3002"),(0,i.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Object.is(value1, value2);\n")),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("p",null,"Object.is() \u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u76f8\u540c\u3002\u5982\u679c\u4e0b\u5217\u4efb\u4f55\u4e00\u9879\u6210\u7acb\uff0c\u5219\u4e24\u4e2a\u503c\u76f8\u540c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u503c\u90fd\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u503c\u90fd\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u503c\u90fd\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," \u6216\u8005\u90fd\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u503c\u662f\u7531\u76f8\u540c\u4e2a\u6570\u7684\u5b57\u7b26\u6309\u7167\u76f8\u540c\u7684\u987a\u5e8f\u7ec4\u6210\u7684\u5b57\u7b26\u4e32"),(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u503c\u6307\u5411\u540c\u4e00\u4e2a\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u503c\u90fd\u662f\u6570\u5b57\u5e76\u4e14",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u90fd\u662f\u6b63\u96f6 ",(0,i.kt)("inlineCode",{parentName:"li"},"+0")),(0,i.kt)("li",{parentName:"ul"},"\u90fd\u662f\u8d1f\u96f6 ",(0,i.kt)("inlineCode",{parentName:"li"},"-0")),(0,i.kt)("li",{parentName:"ul"},"\u90fd\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"NaN")),(0,i.kt)("li",{parentName:"ul"},"\u90fd\u662f\u9664\u96f6\u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"NaN")," \u5916\u7684\u5176\u5b83\u540c\u4e00\u4e2a\u6570\u5b57")))),(0,i.kt)("p",null,"\u8fd9\u79cd\u76f8\u7b49\u6027\u5224\u65ad\u903b\u8f91\u548c\u4f20\u7edf\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"==")," \u8fd0\u7b97\u4e0d\u540c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"==")," \u8fd0\u7b97\u7b26\u4f1a\u5bf9\u5b83\u4e24\u8fb9\u7684\u64cd\u4f5c\u6570\u505a\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\uff08\u5982\u679c\u5b83\u4eec\u7c7b\u578b\u4e0d\u540c\uff09\uff0c\u7136\u540e\u624d\u8fdb\u884c\u76f8\u7b49\u6027\u6bd4\u8f83\uff0c\uff08\u6240\u4ee5\u624d\u4f1a\u6709\u7c7b\u4f3c ",(0,i.kt)("inlineCode",{parentName:"p"},'"" == false')," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u7684\u73b0\u8c61\uff09\n\u4f46 ",(0,i.kt)("inlineCode",{parentName:"p"},"Object.is"),"\u4e0d\u4f1a\u505a\u8fd9\u79cd\u7c7b\u578b\u8f6c\u6362\u3002\u8fd9\u4e0e\n",(0,i.kt)("inlineCode",{parentName:"p"},"==="),"\u8fd0\u7b97\u7b26\u4e5f\u4e0d\u4e00\u6837\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"==="),"\u8fd0\u7b97\u7b26\uff08\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"=="),"\u8fd0\u7b97\u7b26\uff09\u5c06\u6570\u5b57\u503c",(0,i.kt)("inlineCode",{parentName:"p"},"-0"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"+0"),"\u89c6\u4e3a\u76f8\u7b49\uff0c\u5e76\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Number.NaN")," \u4e0d\u7b49\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),"\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Object.is("foo", "foo"); // true\nObject.is(window, window); // true\n\nObject.is("foo", "bar"); // false\nObject.is([], []); // false\n\nvar test = { a: 1 };\nObject.is(test, test); // true\n\nObject.is(null, null); // true\n\n// \u7279\u4f8b\nObject.is(0, -0); // false\nObject.is(-0, -0); // true\nObject.is(NaN, 0 / 0); // true\n')))}m.isMDXComponent=!0}}]);