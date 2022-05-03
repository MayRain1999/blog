"use strict";(self.webpackChunkmy_festudy=self.webpackChunkmy_festudy||[]).push([[2194],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=o(t),k=l,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||r;return t?a.createElement(d,p(p({ref:n},c),{},{components:t})):a.createElement(d,p({ref:n},c))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7221:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return m}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),p=["components"],i={},s="webpack \u642d\u5efa\u811a\u624b\u67b6",o={unversionedId:"webpack/webpack\u914d\u7f6e",id:"webpack/webpack\u914d\u7f6e",title:"webpack \u642d\u5efa\u811a\u624b\u67b6",description:"webpack4 + antd4 + react-router-dom5+eslint",source:"@site/docs/08-webpack/02-webpack\u914d\u7f6e.md",sourceDirName:"08-webpack",slug:"/webpack/webpack\u914d\u7f6e",permalink:"/webpack/webpack\u914d\u7f6e",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/08-webpack/02-webpack\u914d\u7f6e.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"webpack-loader \u548c plugin \u533a\u522b",permalink:"/webpack/loader\u548cplugin\u533a\u522b"}},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u6253\u5305\u8f93\u51fa js",id:"\u6253\u5305\u8f93\u51fa-js",children:[],level:2},{value:"\u7f16\u8bd1 ES6",id:"\u7f16\u8bd1-es6",children:[],level:2},{value:"html \u6a21\u677f",id:"html-\u6a21\u677f",children:[],level:2},{value:"css",id:"css",children:[],level:2},{value:"react",id:"react",children:[],level:2},{value:"antd",id:"antd",children:[],level:2},{value:"dev \u5f00\u53d1\u73af\u5883",id:"dev-\u5f00\u53d1\u73af\u5883",children:[],level:2},{value:"react-router",id:"react-router",children:[],level:2},{value:"\u72b6\u6001\u7ba1\u7406",id:"\u72b6\u6001\u7ba1\u7406",children:[],level:2},{value:"eslint + prettier",id:"eslint--prettier",children:[{value:"\u5b89\u88c5<code>Commitizen</code>",id:"\u5b89\u88c5commitizen",children:[],level:3}],level:2},{value:"\u5206\u5305\u4f18\u5316",id:"\u5206\u5305\u4f18\u5316",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webpack-\u642d\u5efa\u811a\u624b\u67b6"},"webpack \u642d\u5efa\u811a\u624b\u67b6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"webpack4")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"antd4")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom5"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"eslint")),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u7248\u672c",(0,r.kt)("inlineCode",{parentName:"p"},"webpack@4.42.1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm init\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev webpack\n\nnpm install --save-dev webpack-cli\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u63d0\u793a webpack-cli \u6709\u95ee\u9898\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5168\u5c40\u5b89\u88c5\u8fd9\u4e24\u4e2a\u6a21\u5757")),(0,r.kt)("h2",{id:"\u6253\u5305\u8f93\u51fa-js"},"\u6253\u5305\u8f93\u51fa js"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u662f\u4e00\u4e2a\u73b0\u4ee3 ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u5e94\u7528\u7a0b\u5e8f\u7684\u9759\u6001\u6a21\u5757\u6253\u5305\u5668(",(0,r.kt)("inlineCode",{parentName:"p"},"module bundler"),")"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/index.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let name = "2222";\n\nfunction getMame(name) {\n  console.log(name);\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "webpack-start",\n  "version": "1.0.0",\n  "description": "webpack \u914d\u7f6e \u811a\u624b\u67b6",\n  "main": "index.js",\n  "scripts": {\n    "dev": "webpack --config  webpack.config.dev.js"\n  },\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "webpack": "^4.42.1",\n    "webpack-cli": "^3.3.11"\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u8fd0\u884c\u7ed3\u679c yarn dev\n$ webpack --config  webpack.config.dev.js\nHash: 0fb9d2f81be92f8377d9\nVersion: webpack 4.42.1\nTime: 71ms\nBuilt at: 2020-04-04 17:01:30\n    Asset      Size  Chunks             Chunk Names\nbundle.js  3.84 KiB    main  [emitted]  main\nEntrypoint main = bundle.js\n[./src/index.js] 68 bytes {main} [built]\n\u2728  Done in 0.88s.\n")),(0,r.kt)("p",null,"\u5f53\u524d\u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 dist\n\u2502   \u2514\u2500\u2500 bundle.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 index.js\n\u2514\u2500\u2500 webpack.config.dev.js\n")),(0,r.kt)("h2",{id:"\u7f16\u8bd1-es6"},"\u7f16\u8bd1 ES6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"module.rules")," \u5141\u8bb8\u4f60\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u914d\u7f6e\u4e2d\u6307\u5b9a\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"loader"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ECMAScript6")," \u5b9e\u73b0\u4e86\u5f88\u591a\u5f3a\u5927\u7684\u65b0\u7279\u6027\uff0c\u501f\u52a9 ",(0,r.kt)("inlineCode",{parentName:"p"},"ES6")," \u6211\u4eec\u80fd\u7528\u66f4\u52a0\u4f18\u96c5\u7684\u65b9\u5f0f\u5b8c\u6210\u8bb8\u591a\u5f3a\u5927\u7684\u529f\u80fd\u3002\u53ea\u662f\u9274\u4e8e\u8bb8\u591a\u8001\u7248\u672c\u7684\u6d4f\u89c8\u5668\u5c1a\u672a\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"ES6")," \u8bed\u6cd5\uff0c\u9700\u8981\u5728\u4f7f\u7528\u4e4b\u524d\u8f6c\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ES5")," \u8bed\u6cd5\uff0c\u4ee5\u4f7f\u5176\u517c\u5bb9\u66f4\u591a\u7684\u6d4f\u89c8\u5668.\u8fd9\u4e2a\u8fc7\u7a0b\u9700\u8981\u501f\u52a9",(0,r.kt)("inlineCode",{parentName:"p"},"Babel")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u672c\u8d28\u5c31\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u7f16\u8bd1\u5668."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.babeljs.cn/"},"https://www.babeljs.cn/"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D babel-loader @babel/core @babel/preset-env\n")),(0,r.kt)("p",null,"\u652f\u6301\u9759\u6001\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @babel/plugin-proposal-class-properties\n")),(0,r.kt)("p",null,"\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},".babelrc")," \u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": ["@babel/preset-env"],\n  "plugins": ["@babel/plugin-proposal-class-properties"]\n}\n')),(0,r.kt)("h2",{id:"html-\u6a21\u677f"},"html \u6a21\u677f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/jantimon/html-webpack-plugin"},"https://github.com/jantimon/html-webpack-plugin"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev html-webpack-plugin\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\nconst HtmlWebpackPlugin = require("html-webpack-plugin");\nmodule.exports = {\n  //webpack\u6a21\u5f0f\n  mode: "development",\n  //\u5165\u53e3\n  entry: "./src/index.js",\n\n  //\u51fa\u53e3\n  output: {\n    filename: "bundle.js",\n    path: path.resolve(__dirname, "dist"),\n  },\n  //\u914d\u7f6eloader\n  module: {\n    rules: [\n      {\n        test: /\\.(js|jsx)$/,\n        exclude: /(node_modules|bower_components)/,\n        use: {\n          loader: "babel-loader",\n        },\n      },\n    ],\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      title: "webpack-start",\n      filename: "index.html",\n      inject: true,\n      favicon: "",\n      minify: false,\n      hash: true,\n    }),\n  ],\n};\n')),(0,r.kt)("h2",{id:"css"},"css"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"style-loader")," \u662f\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"css-loader")," \u6253\u5305\u597d\u7684 css \u4ee3\u7801\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"<style>"),"\u6807\u7b7e\u7684\u5f62\u5f0f\u63d2\u5165\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," \u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"css-loade")," \u52a0\u8f7d\u5668\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"import/require\uff08"),"\uff09\u4e00\u6837\u89e3\u91ca",(0,r.kt)("inlineCode",{parentName:"p"},"@import"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"url\uff08\uff09"),"\uff0c\u5e76\u5c06\u89e3\u6790\u5b83\u4eec\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev style-loader css-loader\n")),(0,r.kt)("h2",{id:"react"},"react"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save react react-dom\n\nnpm install --save-dev @babel/preset-react\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".babelrc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": ["@babel/preset-env", "@babel/preset-react"],\n  "plugins": ["@babel/plugin-proposal-class-properties"]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path");\nconst HtmlWebpackPlugin = require("html-webpack-plugin");\n\nmodule.exports = {\n  //webpack\u6a21\u5f0f\n  mode: "development",\n  //\u5165\u53e3\n  entry: "./src/index.js",\n\n  //\u51fa\u53e3\n  output: {\n    filename: "bundle.js",\n    path: path.resolve(__dirname, "dist"),\n  },\n  resolve: {\n    extensions: [".jsx", ".js", ".json"],\n    // \u8bbe\u7f6e\u522b\u540d\n    alias: {\n      "@components": path.resolve(__dirname, "src/components"),\n    },\n  },\n  //\u914d\u7f6eloader\n  module: {\n    rules: [\n      {\n        test: /\\.(js|jsx)$/,\n        exclude: /(node_modules|bower_components)/,\n        use: {\n          loader: "babel-loader",\n        },\n      },\n      {\n        test: /\\.css$/,\n        use: ["style-loader", "css-loader"],\n      },\n    ],\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      title: "webpack-start",\n      filename: "index.html",\n      inject: true,\n      favicon: "",\n      minify: false,\n      hash: true,\n    }),\n  ],\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\n\u251c\u2500\u2500 dist\n\u2502   \u251c\u2500\u2500 bundle.js\n\u2502   \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 App.jsx\n\u2502   \u2502   \u2514\u2500\u2500 Counter\n\u2502   \u2502       \u251c\u2500\u2500 Counter.css\n\u2502   \u2502       \u2514\u2500\u2500 Counter.jsx\n\u2502   \u2514\u2500\u2500 index.js\n\u2514\u2500\u2500 webpack.config.dev.js\n")),(0,r.kt)("h2",{id:"antd"},"antd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://ant.design/docs/react/use-with-create-react-app-cn"},"https://ant.design/docs/react/use-with-create-react-app-cn"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install antd\n\nnpm install babel-plugin-import --save-dev\nnpm install --save @ant-design/icons\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": ["@babel/preset-env", "@babel/preset-react"],\n  "plugins": [\n    "@babel/plugin-proposal-class-properties",\n    [\n      "import",\n      { "libraryName": "antd", "libraryDirectory": "lib", "style": "css" },\n      "antd"\n    ]\n  ]\n}\n')),(0,r.kt)("h2",{id:"dev-\u5f00\u53d1\u73af\u5883"},"dev \u5f00\u53d1\u73af\u5883"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install webpack-dev-server --save-dev\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  devServer: {\n    contentBase: path.join(__dirname, "dist"),\n    compress: false,\n    port: 9000,\n    open: true,\n  }\n')),(0,r.kt)("h2",{id:"react-router"},"react-router"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/ReactTraining/react-router#readme"},"https://github.com/ReactTraining/react-router#readme"))),(0,r.kt)("p",null,"\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install react-router-dom\n")),(0,r.kt)("h2",{id:"\u72b6\u6001\u7ba1\u7406"},"\u72b6\u6001\u7ba1\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"redux"),(0,r.kt)("li",{parentName:"ul"},"mobx"),(0,r.kt)("li",{parentName:"ul"},"dva")),(0,r.kt)("p",null,"\u8fd9\u8fb9\u5c31\u4e0d\u52a0\u4e86"),(0,r.kt)("h2",{id:"eslint--prettier"},"eslint + prettier"),(0,r.kt)("p",null,"\u5168\u5c40\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint")),(0,r.kt)("p",null,"\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"eslint --init"),"\u5373\u53ef"),(0,r.kt)("p",null,"\u6ce8\u610f",(0,r.kt)("inlineCode",{parentName:"p"},"node")," \u7684\u7248\u672c.",(0,r.kt)("inlineCode",{parentName:"p"},"node>=10")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "babel-eslint": "^10.1.0",\n    "eslint": "^6.8.0",\n    "eslint-config-airbnb": "^18.1.0",\n    "eslint-config-prettier": "^6.10.1",\n    "eslint-import-resolver-webpack": "^0.12.1",\n    "eslint-plugin-import": "^2.20.2",\n    "eslint-plugin-jsx-a11y": "^6.2.3",\n    "eslint-plugin-prettier": "^3.1.2",\n    "eslint-plugin-react": "^7.19.0",\n    "eslint-plugin-react-hooks": "^3.0.0",\n     "husky": "^4.2.3",\n    "prettier": "^2.0.2",\n    "prettier-eslint": "^9.0.1",\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"commit \u89c4\u8303")),(0,r.kt)("h3",{id:"\u5b89\u88c5commitizen"},"\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"h3"},"Commitizen")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install -g commitizen")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"https://github.com/commitizen/cz-cli"))),(0,r.kt)("p",null,"\u51e1\u662f\u7528\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"git commit"),"\u547d\u4ee4\uff0c\u4e00\u5f8b\u6539\u4e3a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"git cz")),(0,r.kt)("p",null,"\u8fd9\u65f6\uff0c\u5c31\u4f1a\u51fa\u73b0\u9009\u9879\uff0c\u7528\u6765\u751f\u6210\u7b26\u5408\u683c\u5f0f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Commit message")),(0,r.kt)("h2",{id:"\u5206\u5305\u4f18\u5316"},"\u5206\u5305\u4f18\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  optimization: {\n    splitChunks: {\n      chunks: 'async',\n      minSize: 30000,\n      minChunks: 1,\n      maxAsyncRequests: 5,\n      maxInitialRequests: 3,\n      automaticNameDelimiter: '~',\n      name: true,\n      cacheGroups: {},\n    },\n  },\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"chunks: \u8868\u793a\u54ea\u4e9b\u4ee3\u7801\u9700\u8981\u4f18\u5316\uff0c\u6709\u4e09\u4e2a\u53ef\u9009\u503c\uff1ainitial(\u521d\u59cb\u5757)\u3001async(\u6309\u9700\u52a0\u8f7d\u5757)\u3001all(\u5168\u90e8\u5757)\uff0c\u9ed8\u8ba4\u4e3a async")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"minSize: \u8868\u793a\u5728\u538b\u7f29\u524d\u7684\u6700\u5c0f\u6a21\u5757\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a 30000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"minChunks: \u8868\u793a\u88ab\u5f15\u7528\u6b21\u6570\uff0c\u9ed8\u8ba4\u4e3a 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"maxAsyncRequests: \u6309\u9700\u52a0\u8f7d\u65f6\u5019\u6700\u5927\u7684\u5e76\u884c\u8bf7\u6c42\u6570\uff0c\u9ed8\u8ba4\u4e3a 5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"maxInitialRequests: \u4e00\u4e2a\u5165\u53e3\u6700\u5927\u7684\u5e76\u884c\u8bf7\u6c42\u6570\uff0c\u9ed8\u8ba4\u4e3a 3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"automaticNameDelimiter: \u547d\u540d\u8fde\u63a5\u7b26")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"name: \u62c6\u5206\u51fa\u6765\u5757\u7684\u540d\u5b57\uff0c\u9ed8\u8ba4\u7531\u5757\u540d\u548c hash \u503c\u81ea\u52a8\u751f\u6210")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cacheGroups: \u7f13\u5b58\u7ec4\u3002\u7f13\u5b58\u7ec4\u7684\u5c5e\u6027\u9664\u4e0a\u9762\u6240\u6709\u5c5e\u6027\u5916\uff0c\u8fd8\u6709 test, priority, reuseExistingChunk"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"test: \u7528\u4e8e\u63a7\u5236\u54ea\u4e9b\u6a21\u5757\u88ab\u8fd9\u4e2a\u7f13\u5b58\u7ec4\u5339\u914d\u5230"),(0,r.kt)("li",{parentName:"ul"},"priority: \u7f13\u5b58\u7ec4\u6253\u5305\u7684\u5148\u540e\u4f18\u5148\u7ea7"),(0,r.kt)("li",{parentName:"ul"},"reuseExistingChunk: \u5982\u679c\u5f53\u524d\u4ee3\u7801\u5757\u5305\u542b\u7684\u6a21\u5757\u5df2\u7ecf\u6709\u4e86\uff0c\u5c31\u4e0d\u5728\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u4ee3\u7801\u5757")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366"},"https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/xiaoping027/webpack4-react-redux-router-antd"},"https://github.com/xiaoping027/webpack4-react-redux-router-antd"))))}m.isMDXComponent=!0}}]);