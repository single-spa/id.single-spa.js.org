(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(183)),i={id:"ecosystem-angularjs",title:"single-spa-angularjs",sidebar_label:"AngularJS"},o={unversionedId:"ecosystem-angularjs",id:"version-4.x/ecosystem-angularjs",isDocsHomePage:!1,title:"single-spa-angularjs",description:"single-spa-angularjs is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with AngularJS. Check out the single-spa-angularjs github.",source:"@site/versioned_docs/version-4.x/ecosystem-angularjs.md",slug:"/ecosystem-angularjs",permalink:"/docs/4.x/ecosystem-angularjs",editUrl:"https://github.com/single-spa/id.single-spa.js.org/blob/master/website/versioned_docs/version-4.x/ecosystem-angularjs.md",version:"4.x",sidebar_label:"AngularJS",sidebar:"version-4.x/docs",previous:{title:"single-spa-angular",permalink:"/docs/4.x/ecosystem-angular"},next:{title:"single-spa-cycle",permalink:"/docs/4.x/ecosystem-cycle"}},s=[{value:"Installation",id:"installation",children:[]},{value:"With a bundler",id:"with-a-bundler",children:[]},{value:"Without a bundler",id:"without-a-bundler",children:[{value:"As a SystemJS module",id:"as-a-systemjs-module",children:[]},{value:"As a global variable",id:"as-a-global-variable",children:[]}]},{value:"Options",id:"options",children:[]},{value:"ES5 Example",id:"es5-example",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"single-spa-angularjs is a helper library that helps implement ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://angularjs.org/"}),"AngularJS"),". Check out the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-angularjs"}),"single-spa-angularjs github"),"."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-angularjs\n")),Object(l.b)("p",null,"Note that you can alternatively ",Object(l.b)("inlineCode",{parentName:"p"},'<script src="https://unpkg.com/single-spa-angularjs"><\/script>')," and access the library\nvia the ",Object(l.b)("inlineCode",{parentName:"p"},"singleSpaAngularjs")," global variable if that is easier for you."),Object(l.b)("h2",{id:"with-a-bundler"},"With a bundler"),Object(l.b)("p",null,"If you're using a bundler such as webpack, add the following to your entry file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaAngularJS from 'single-spa-angularjs';\nimport angular from 'angular';\n\nconst ngLifecycles = singleSpaAngularJS({\n  angular: angular,\n  mainAngularModule: 'app',\n  uiRouter: true,\n  preserveGlobal: false,\n  template: '<my-component />',\n});\n\nexport const bootstrap = ngLifecycles.bootstrap;\nexport const mount = ngLifecycles.mount;\nexport const unmount = ngLifecycles.unmount;\n")),Object(l.b)("h2",{id:"without-a-bundler"},"Without a bundler"),Object(l.b)("p",null,"If you're not using a bundler, you'll need to make your angularjs application a SystemJS module or a global variable. The SystemJS\nmodule is preferred, and you can read about it more in the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/faq.html#is-there-a-recommended-setup"}),"recommended single-spa setup"),"."),Object(l.b)("h3",{id:"as-a-systemjs-module"},"As a SystemJS module"),Object(l.b)("p",null,"Add the following to your AngularJS application. If you're using gulp/grunt to concatenate files together, just create a new file called\n",Object(l.b)("inlineCode",{parentName:"p"},"single-spa-application.js")," and make sure it's included in your final build file."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"System.register([], function(_export) {\n  return {\n    execute: function() {\n      _export(singleSpaAngularJS({\n        angular: angular,\n        mainAngularModule: 'app',\n        uiRouter: true,\n        preserveGlobal: false,\n        template: '<my-component />',\n      }))\n    }\n  }\n})\n")),Object(l.b)("p",null,"Once you do this, you can ",Object(l.b)("inlineCode",{parentName:"p"},"System.import()")," the bundle file and SystemJS + single-spa will know what to do with your module. Your\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration.html#loading-function-or-application"}),"loading function")," should be ",Object(l.b)("inlineCode",{parentName:"p"},"System.import('name-of-app')"),". Make sure to\nadd ",Object(l.b)("inlineCode",{parentName:"p"},"name-of-app")," to your ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://single-spa-playground.org/playground/import-map"}),"import map"),"."),Object(l.b)("h3",{id:"as-a-global-variable"},"As a global variable"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.myAngularApp = singleSpaAngularJS({\n  angular: angular,\n  mainAngularModule: 'app',\n  uiRouter: true,\n  preserveGlobal: false,\n  template: '<my-component />',\n})\n")),Object(l.b)("p",null,"Your ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration.html#loading-function-or-application"}),"loading function")," should just be the global variable itself. For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.registerApplication('my-angular-app', myAngularApp, () => true);\n")),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("p",null,"All options are passed to single-spa-angularjs via the ",Object(l.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(l.b)("inlineCode",{parentName:"p"},"singleSpaAngularJS(opts)"),". The following options are available:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"angular"),": (required) The main angular object, which is generally either exposed onto the window or is available via ",Object(l.b)("inlineCode",{parentName:"li"},"require('angular')")," or ",Object(l.b)("inlineCode",{parentName:"li"},"import angular from 'angular'"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (optional) A function that takes in no arguments and returns a DOMElement. This dom element is where the angular\napplication will be bootstrapped, mounted, and unmounted. If not provided, the default is to create a div and append it to ",Object(l.b)("inlineCode",{parentName:"li"},"document.body"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mainAngularModule"),": (required) A string that is the name of the angular module that will be bootstrapped by angular. See ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.angularjs.org/api/ng/function/angular.bootstrap"}),"angular docs")," for ",Object(l.b)("inlineCode",{parentName:"li"},"angular.bootstrap()"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"uiRouter"),": (optional) If you are using angular-ui-router, set this option to either ",Object(l.b)("inlineCode",{parentName:"li"},"true")," or to a string value. The string value will be the value of the ui-view HTML attribute. For example, ",Object(l.b)("inlineCode",{parentName:"li"},"uiRouter: 'core'")," will be ",Object(l.b)("inlineCode",{parentName:"li"},'<div ui-view="core" />')," whereas ",Object(l.b)("inlineCode",{parentName:"li"},"uiRouter: true")," turns into ",Object(l.b)("inlineCode",{parentName:"li"},"<div ui-view />"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"preserveGlobal"),": (optional) A boolean that defaults to false. Set if you want to keep angular on the global even after an app unmounts."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"elementId"),": (optional) A string which will be used to identify the element appended to the DOM and bootstrapped by Angular."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"strictDi"),": (optional - part of the bootstrap ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.angularjs.org/api/ng/function/angular.bootstrap#usage"}),"config object"),") A boolean that defaults to false. Set if you want to enable StrictDi mode"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"template"),": (optional) An HTML string that will be inserted into the DOM when the app is mounted. The template goes inside of the element returned by domElementGetter. If not provided, no template will be inserted. When using angular-ui-router, you often do not need to use this since ui-router will be putting a template onto the dom for you.")),Object(l.b)("h2",{id:"es5-example"},"ES5 Example"),Object(l.b)("p",null,"Check out ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/joeldenning/single-spa-es5-angularjs"}),"this example repo")))}p.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(i,".").concat(d)]||c[d]||b[d]||l;return n?r.a.createElement(m,o(o({ref:t},u),{},{components:n})):r.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);