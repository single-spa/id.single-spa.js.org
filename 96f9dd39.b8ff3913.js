(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(183)),i={id:"ecosystem-preact",title:"single-spa-preact",sidebar_label:"Preact"},c={unversionedId:"ecosystem-preact",id:"version-4.x/ecosystem-preact",isDocsHomePage:!1,title:"single-spa-preact",description:"single-spa-preact is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Preact. Check out the single-spa-preact github.",source:"@site/versioned_docs/version-4.x/ecosystem-preact.md",slug:"/ecosystem-preact",permalink:"/docs/4.x/ecosystem-preact",editUrl:"https://github.com/single-spa/id.single-spa.js.org/blob/master/website/versioned_docs/version-4.x/ecosystem-preact.md",version:"4.x",sidebar_label:"Preact",sidebar:"version-4.x/docs",previous:{title:"single-spa-inferno",permalink:"/docs/4.x/ecosystem-inferno"},next:{title:"single-spa-svelte",permalink:"/docs/4.x/ecosystem-svelte"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Quickstart",id:"quickstart",children:[]},{value:"Options",id:"options",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"single-spa-preact is a helper library that helps implement ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.x/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://preactjs.com/"}),"Preact"),". Check out the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-preact"}),"single-spa-preact github"),"."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save preact\n")),Object(o.b)("h2",{id:"quickstart"},"Quickstart"),Object(o.b)("p",null,"In your project's entry file, add the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import preact from 'preact';\nimport rootComponent from './path-to-root-component.js';\nimport singleSpaPreact from 'single-spa-preact';\n\nconst preactLifecycles = singleSpaPreact({\n  preact,\n  rootComponent,\n  domElementGetter: () => document.getElementById('main-content'),\n});\n\nexport const bootstrap = preactLifecycles.bootstrap;\nexport const mount = preactLifecycles.mount;\nexport const unmount = preactLifecycles.unmount;\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,"All options are passed to single-spa-preact via the ",Object(o.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(o.b)("inlineCode",{parentName:"p"},"singleSpaPreact(opts)"),". The following options are available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"preact"),": (required) The main Preact object, which is generally either exposed onto the window or is available via ",Object(o.b)("inlineCode",{parentName:"li"},"require('preact')")," or ",Object(o.b)("inlineCode",{parentName:"li"},"import preact from 'preact'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rootComponent"),": (required) The top level preact component which will be rendered"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (required) A function that takes in no arguments and returns a DOMElement. This dom element is where the Preact application will be bootstrapped, mounted, and unmounted.")))}s.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);