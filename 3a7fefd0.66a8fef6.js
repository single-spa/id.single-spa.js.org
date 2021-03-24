(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{183:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||o;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(183)),i={id:"ecosystem-html-web-components",title:"single-spa-html",sidebar_label:"HTML / Web Components"},l={unversionedId:"ecosystem-html-web-components",id:"version-5.x/ecosystem-html-web-components",isDocsHomePage:!1,title:"single-spa-html",description:"single-spa-html is a helper library for mounting raw HTML and web components as",source:"@site/versioned_docs/version-5.x/ecosystem-html-web-components.md",slug:"/ecosystem-html-web-components",permalink:"/docs/ecosystem-html-web-components",editUrl:"https://github.com/single-spa/id.single-spa.js.org/blob/master/website/versioned_docs/version-5.x/ecosystem-html-web-components.md",version:"5.x",sidebar_label:"HTML / Web Components",sidebar:"version-5.x/docs",previous:{title:"single-spa-backbone",permalink:"/docs/ecosystem-backbone"},next:{title:"single-spa-leaked-globals",permalink:"/docs/ecosystem-leaked-globals"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Via npm",id:"via-npm",children:[]},{value:"Via cdn",id:"via-cdn",children:[]}]},{value:"API / Options",id:"api--options",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-html"}),"single-spa-html")," is a helper library for mounting raw HTML and web components as\nsingle-spa applications or parcels."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-html\n\n# or\nyarn add single-spa-html\n")),Object(o.b)("p",null,"Alternatively, you can use single-spa-html from a CDN as a global variable:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://cdn.jsdelivr.net/npm/single-spa-html"><\/script>\n')),Object(o.b)("p",null,"Note that you might want to lock down the package to a specific version. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/npm/single-spa-html"}),"here")," for\nhow to do that."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"via-npm"},"Via npm"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaHtml from 'single-spa-html';\n\nconst htmlLifecycles = singleSpaHtml({\n  template: '<x-my-web-component></x-my-web-component>',\n})\n\nexport const bootstrap = htmlLifecycles.bootstrap;\nexport const mount = htmlLifecycles.mount;\nexport const unmount = htmlLifecycles.unmount;\n")),Object(o.b)("h3",{id:"via-cdn"},"Via cdn"),Object(o.b)("p",null,"Example usage when installed via CDN:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const webComponentApp = window.singleSpaHtml.default({\n  template: props => `<x-my-web-component attr=\"${props.attr}\"></x-my-web-component>`,\n})\n\nsingleSpa.registerApplication({\n  name: 'name',\n  app: webComponentApp,\n  activeWhen: () => true\n})\n")),Object(o.b)("h2",{id:"api--options"},"API / Options"),Object(o.b)("p",null,"single-spa-html is called with an object that has the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"template")," (required): An HTML string or a function that returns a string or promise that resolves a string. The function will be called with the single-spa custom props. The returned string is injected into the DOM during the single-spa mount lifecycle."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"domElementGetter")," (optional): A function that is given the single-spa props and returns the dom element container into which the HTML will be injected. If omitted,\na default implementation is provided that wraps the template in a ",Object(o.b)("inlineCode",{parentName:"li"},"<div>")," that is appended to ",Object(o.b)("inlineCode",{parentName:"li"},"document.body"),".")))}p.isMDXComponent=!0}}]);