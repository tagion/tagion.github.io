(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{5329:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return k},default:function(){return N}});var r={};n.r(r),n.d(r,{MDXContext:function(){return l},MDXProvider:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var o=n(9499),i=n(682),c=n(5934),a=n(7294),s=n(2746);const l=a.createContext({});function u(e){return function(t){const n=d(t.components);return a.createElement(e,{...t,allComponents:n})}}function d(e){const t=a.useContext(l);return a.useMemo((()=>"function"===typeof e?e(t):{...t,...e}),[t,e])}const m={};function h({components:e,children:t,disableParentContext:n}){let r=d(e);return n&&(r=e||m),a.createElement(l.Provider,{value:r},t)}function p({compiledSource:e,frontmatter:t,scope:n,components:o={},lazy:i}){const[c,l]=(0,a.useState)(!i||"undefined"===typeof window);(0,a.useEffect)((()=>{if(i){const e=window.requestIdleCallback((()=>{l(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const u=(0,a.useMemo)((()=>{const o=Object.assign({opts:{...r,...s.c}},{frontmatter:t},n),i=Object.keys(o),c=Object.values(o),a=Reflect.construct(Function,i.concat(`${e}`));return a.apply(a,c).default}),[n,e]);if(!c)return a.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const d=a.createElement(h,{components:o},a.createElement(u,null));return i?a.createElement("div",null,d):d}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var f=n(6441),b=n(6446),g=n(9521),w=n(3431),x={HeroContainer:g.ZP.div.attrs((function(){return{className:"position-relative border-primary border-bottom"}})).withConfig({displayName:"HeroContainer",componentId:"sc-byxdu3-0"})(["min-height:320px;overflow:hidden;img{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);width:auto;height:auto;max-height:100%;min-height:100%;}"]),Content:g.ZP.div.attrs((function(){return{className:"content"}})).withConfig({displayName:"Content",componentId:"sc-byxdu3-1"})(["h1,h2,h3,h4,h5{margin-bottom:1.5rem;:not(:first-child){margin-top:3rem;}}h2{font-size:1.25rem;line-height:1.5rem;color:",";}a,strong{color:",";}table{display:block;overflow:auto;width:100%;max-width:100%;margin-bottom:1rem;th{background:",";color:",";strong{color:",";}}tr{border-bottom:1px solid ",";border-left:1px solid ",";border-right:1px solid ",";}td,th{padding:0.75rem 1.5rem;}}img{max-width:100%;border:1px solid;}"],w.cR,w.cR,w.c$,w.VR,w.VR,w.c$,w.c$,w.c$)},j=n(3306),v=n(4304),y=n(5893);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={Anchor:function(e){var t=e.id,n=e.children;return(0,y.jsx)("h4",{id:t,children:n})},ArticleImage:j.Se},k=!0,N=function(e){var t=e.post;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b.pm,{title:"".concat(t.title," | Tagion Blog"),description:t.excerpt,keywords:t.seo.keywords,author:t.author,imageSrc:t.image,canonicalLink:"https://".concat(f.M5).concat(t.url)}),(0,y.jsxs)(b.gp,{title:t.title,breadcrumbs:["/","/blog",t.title],className:"overflow-hidden border-bottom-0 border-primary border-end border-start",contentWithPaddings:!1,isSidebarFixed:!0,sidebarChildren:t.navigation.length?(0,y.jsx)(j.W_,{children:t.navigation.map((function(e){var t=e.title,n=e.id;return(0,y.jsx)(v.rU,{href:"#".concat(n),children:t},(0,c.Z)())}))}):null,children:[(0,y.jsx)(x.HeroContainer,{children:(0,y.jsx)(v.Ee,{src:t.image,alt:t.title})}),(0,y.jsxs)(i.Z,{className:"px-3 pt-4 pb-3 px-md-425",children:[(0,y.jsx)("h1",{className:"mb-2",children:t.title}),t.author&&(0,y.jsxs)("div",{className:"mb-1",children:["Author: ",(0,y.jsx)("span",{className:"text-aqua",children:t.author})]}),t.published&&(0,y.jsxs)("div",{className:"mb-5",children:["Published: ",(0,y.jsx)("span",{className:"text-aqua",children:t.published})]}),(0,y.jsx)(x.Content,{children:(0,y.jsx)(p,O(O({},t.content),{},{components:_}))})]})]})]})}},1127:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(5329)}])},2746:function(e,t,n){const r=n(5893);e.exports.c=r}},function(e){e.O(0,[774,888,179],(function(){return t=1127,e(e.s=t);var t}));var t=e.O();_N_E=t}]);