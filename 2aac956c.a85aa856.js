(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{183:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return g}));var l=n(0),t=n.n(l);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=t.a.createContext({}),b=function(e){var a=t.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=b(e.components);return t.a.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},u=t.a.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=b(n),u=l,g=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return n?t.a.createElement(g,i(i({ref:a},c),{},{components:n})):t.a.createElement(g,i({ref:a},c))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var r in a)hasOwnProperty.call(a,r)&&(i[r]=a[r]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"metadata",(function(){return i})),n.d(a,"toc",(function(){return r})),n.d(a,"default",(function(){return b}));var l=n(3),t=n(7),o=(n(0),n(183)),s={id:"ecosystem-leaked-globals",title:"single-spa-leaked-globals",sidebar_label:"Leaked globals"},i={unversionedId:"ecosystem-leaked-globals",id:"version-5.x/ecosystem-leaked-globals",isDocsHomePage:!1,title:"single-spa-leaked-globals",description:"single-spa-leaked-globals is a helper library for dealing with single-spa-applications",source:"@site/versioned_docs/version-5.x/ecosystem-leaked-globals.md",slug:"/ecosystem-leaked-globals",permalink:"/docs/ecosystem-leaked-globals",editUrl:"https://github.com/single-spa/id.single-spa.js.org/blob/master/website/versioned_docs/version-5.x/ecosystem-leaked-globals.md",version:"5.x",sidebar_label:"Leaked globals",sidebar:"version-5.x/docs",previous:{title:"single-spa-html",permalink:"/docs/ecosystem-html-web-components"},next:{title:"single-spa-dojo",permalink:"/docs/ecosystem-dojo"}},r=[{value:"What single-spa-leaked-globals does",id:"what-single-spa-leaked-globals-does",children:[]},{value:"Before using single-spa-leaked-globals",id:"before-using-single-spa-leaked-globals",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Installation",id:"installation",children:[{value:"Via npm",id:"via-npm",children:[]},{value:"Via cdn",id:"via-cdn",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"API / Options",id:"api--options",children:[]}],c={toc:r};function b(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-leaked-globals"}),"single-spa-leaked-globals")," is a helper library for dealing with single-spa-applications\nthat depend on global variables. Such applications are usually applications that use AngularJS, Backbone, or other older frameworks\nthat were popular when ES modules were not yet available."),Object(o.b)("h2",{id:"what-single-spa-leaked-globals-does"},"What single-spa-leaked-globals does"),Object(o.b)("p",null,"single-spa-leaked-globals will remove specific global variables from ",Object(o.b)("inlineCode",{parentName:"p"},"window")," during your application's\n",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/building-applications.html#unmount"}),"unmount lifecycle"),", and add them back to ",Object(o.b)("inlineCode",{parentName:"p"},"window")," during your application's\n",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/building-applications.html#mount"}),"mount lifecycle"),"."),Object(o.b)("h2",{id:"before-using-single-spa-leaked-globals"},"Before using single-spa-leaked-globals"),Object(o.b)("p",null,"It might be okay for single-spa applications to leak some global variables. Those leaked global variables could be harmless. Below are some\nsituations where using single-spa-leaked-globals could be useful. If your situation is not listed, consider not using single-spa-leaked-globals."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Your applications are accidentally sharing global variables and the order in which they are mounted matters. For example, the jQuery ",Object(o.b)("inlineCode",{parentName:"li"},"$")," variable\nis available at the start, but app1 installs a jQuery plugin that app2 assumes is there. If app2 is mounted\nbefore app1, you might get an error because the jQuery plugin is not installed. In that situation, the best solution is maybe to install\nthe jQuery plugin inside of your ",Object(o.b)("a",Object(l.a)({parentName:"li"},{href:"/docs/configuration.html"}),"single-spa config"),". But if that's not desireable, you can use single-spa-leaked-globals\nto manage two separate versions of jQuery -- one for app1 and one for app2."),Object(o.b)("li",{parentName:"ol"},"Your applications require different versions of the same global variable. For example, consider when app1 depends on\nan ",Object(o.b)("a",Object(l.a)({parentName:"li"},{href:"https://underscorejs.org/"}),"underscorejs")," ",Object(o.b)("inlineCode",{parentName:"li"},"_")," global variable and app2 depends on a ",Object(o.b)("a",Object(l.a)({parentName:"li"},{href:"https://lodash.com/"}),"lodash")," ",Object(o.b)("inlineCode",{parentName:"li"},"_")," global variable.\nThey both need a global ",Object(o.b)("inlineCode",{parentName:"li"},"_")," variable, but expect different functions to be available on it. The same could be true for different versions of the\nsame library, such as lodash 3 vs lodash 4. In those situations, you can use single-spa-leaked-globals to make sure the ",Object(o.b)("inlineCode",{parentName:"li"},"_")," that is available\nfor app1 and app2 is the correct one.")),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"single-spa-leaked-globals cannot change the global nature of global dependencies. Only one instance of the global variable can be on the\n",Object(o.b)("inlineCode",{parentName:"p"},"window")," at a time. ",Object(o.b)("strong",{parentName:"p"},"This means that you probably can only have one application mounted at a time that depends on that global variable."),"\nIf two applications depend on the same global variable and are ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"docs/configuration.html#activity-function"}),"active")," at the same time,\nsingle-spa-leaked-globals won't work for you."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("h3",{id:"via-npm"},"Via npm"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-leaked-globals\n\n# or\nyarn add single-spa-leaked-globals\n")),Object(o.b)("h3",{id:"via-cdn"},"Via cdn"),Object(o.b)("p",null,"You can also use single-spa-leaked-globals via CDN, ironically as a global variable itself:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://cdn.jsdelivr.net/npm/single-spa-leaked-globals"><\/script>\n')),Object(o.b)("p",null,"Note that you should probably lock down the version of the library to avoid accidentally upgrading. See\n",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/npm/single-spa-leaked-globals/"}),"https://cdn.jsdelivr.net/npm/single-spa-leaked-globals/")," to find the latest version."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The single-spa-leaked-globals library is often used in conjunction with another helper library, such as\nsingle-spa-angularjs or single-spa-backbone. As such, you'll want to\n",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/building-applications.html#registered-application-lifecycle"}),"export an array")," for your lifecycle functions\ninstead of exporting just a function."),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaLeakedGlobals from 'single-spa-leaked-globals';\n\n// Use single-spa-angularjs, single-spa-backbone, etc to get your framework specific lifecycles\nconst frameworkLifecycles = ...\n\nconst leakedGlobalsLifecycles = singleSpaLeakedGlobals({\n  globalVariableNames: ['$', 'jQuery', '_'],\n})\n\nexport const bootstrap = [\n  leakedGlobalsLifecycles.bootstrap,\n  frameworkLifecycles.bootstrap,\n]\n\nexport const mount = [\n  // Make sure leaked globals lifecycles' mount function is **before** other lifecycles' mount\n  // This is so the global vars are available when the framework mounts\n  leakedGlobalsLifecycles.mount,\n  frameworkLifecycles.mount,\n]\n\nexport const unmount = [\n  leakedGlobalsLifecycles.unmount,\n  // Make sure leaked globals lifecycles' unmount function is **after** other lifecycles' unmount\n  // This is so the global vars are still available during the framework unmount lifecycle function.\n  frameworkLifecycles.unmount,\n]\n")),Object(o.b)("p",null,"If you're using single-spa-leaked-globals as a global variable itself:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js"}),"const leakedGlobalsLifecycles = window.singleSpaLeakedGlobals.default({\n  globalVariableNames: ['_'],\n})\n")),Object(o.b)("h2",{id:"api--options"},"API / Options"),Object(o.b)("p",null,"single-spa-leaked-globals is called with an object with the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"globalVariableNames")," (required): An array of strings. Each string is the name of a global variable that should\nbe removed when the application is unmounted, and added back when the application is mounted.")))}b.isMDXComponent=!0}}]);