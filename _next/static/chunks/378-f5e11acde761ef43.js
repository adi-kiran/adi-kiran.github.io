(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{1026:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=t(4232);function n(e,r){let t=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=t.current;e&&(t.current=null,e());let r=n.current;r&&(n.current=null,r())}else e&&(t.current=l(e,o)),r&&(n.current=l(r,o))},[e,r])}function l(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},1639:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return v}});let o=t(4252),n=t(7876),l=o._(t(4232)),s=t(6658),a=t(1851),i=t(6225),d=t(8407),c=t(2696),u=t(8265),p=t(2343),f=t(8940),b=t(7469),g=t(1026),m=new Set;function h(e,r,t,o){if((0,a.isLocalURL)(r)){if(!o.bypassPrefetchedCheck){let n=r+"%"+t+"%"+(void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0);if(m.has(n))return;m.add(n)}e.prefetch(r,t,o).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let v=l.default.forwardRef(function(e,r){let t,o;let{href:i,as:m,children:v,prefetch:x=null,passHref:w,replace:k,shallow:z,scroll:j,locale:M,onClick:_,onMouseEnter:P,onTouchStart:C,legacyBehavior:O=!1,...E}=e;t=v,O&&("string"==typeof t||"number"==typeof t)&&(t=(0,n.jsx)("a",{children:t}));let I=l.default.useContext(u.RouterContext),S=!1!==x,{href:N,as:R}=l.default.useMemo(()=>{if(!I){let e=y(i);return{href:e,as:m?y(m):e}}let[e,r]=(0,s.resolveHref)(I,i,!0);return{href:e,as:m?(0,s.resolveHref)(I,m):r||e}},[I,i,m]),G=l.default.useRef(N),L=l.default.useRef(R);O&&(o=l.default.Children.only(t));let T=O?o&&"object"==typeof o&&o.ref:r,[$,A,U]=(0,p.useIntersection)({rootMargin:"200px"}),D=l.default.useCallback(e=>{(L.current!==R||G.current!==N)&&(U(),L.current=R,G.current=N),$(e)},[R,N,U,$]),K=(0,g.useMergedRef)(D,T);l.default.useEffect(()=>{I&&A&&S&&h(I,N,R,{locale:M})},[R,N,A,M,S,null==I?void 0:I.locale,I]);let W={ref:K,onClick(e){O||"function"!=typeof _||_(e),O&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),I&&!e.defaultPrevented&&!function(e,r,t,o,n,l,s,i){let{nodeName:d}=e.currentTarget;!("A"===d.toUpperCase()&&(function(e){let r=e.currentTarget.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,a.isLocalURL)(t)))&&(e.preventDefault(),(()=>{let e=null==s||s;"beforePopState"in r?r[n?"replace":"push"](t,o,{shallow:l,locale:i,scroll:e}):r[n?"replace":"push"](o||t,{scroll:e})})())}(e,I,N,R,k,z,j,M)},onMouseEnter(e){O||"function"!=typeof P||P(e),O&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&h(I,N,R,{locale:M,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){O||"function"!=typeof C||C(e),O&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&h(I,N,R,{locale:M,priority:!0,bypassPrefetchedCheck:!0})}};if((0,d.isAbsoluteUrl)(R))W.href=R;else if(!O||w||"a"===o.type&&!("href"in o.props)){let e=void 0!==M?M:null==I?void 0:I.locale;W.href=(null==I?void 0:I.isLocaleDomain)&&(0,f.getDomainLocale)(R,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales)||(0,b.addBasePath)((0,c.addLocale)(R,e,null==I?void 0:I.defaultLocale))}return O?l.default.cloneElement(o,W):(0,n.jsx)("a",{...E,...W,children:t})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},2343:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useIntersection",{enumerable:!0,get:function(){return i}});let o=t(4232),n=t(4754),l="function"==typeof IntersectionObserver,s=new Map,a=[];function i(e){let{rootRef:r,rootMargin:t,disabled:i}=e,d=i||!l,[c,u]=(0,o.useState)(!1),p=(0,o.useRef)(null),f=(0,o.useCallback)(e=>{p.current=e},[]);return(0,o.useEffect)(()=>{if(l){if(d||c)return;let e=p.current;if(e&&e.tagName)return function(e,r,t){let{id:o,observer:n,elements:l}=function(e){let r;let t={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===t.root&&e.margin===t.margin);if(o&&(r=s.get(o)))return r;let n=new Map;return r={id:t,observer:new IntersectionObserver(e=>{e.forEach(e=>{let r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)})},e),elements:n},a.push(t),s.set(t,r),r}(t);return l.set(e,r),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),s.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&u(e),{root:null==r?void 0:r.current,rootMargin:t})}else if(!c){let e=(0,n.requestIdleCallback)(()=>u(!0));return()=>(0,n.cancelIdleCallback)(e)}},[d,t,r,c,p.current]),[f,c,(0,o.useCallback)(()=>{u(!1)},[])]}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},8230:(e,r,t)=>{e.exports=t(1639)},8940:(e,r,t)=>{"use strict";function o(e,r,t,o){return!1}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getDomainLocale",{enumerable:!0,get:function(){return o}}),t(7810),("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},9241:(e,r,t)=>{"use strict";function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{$:()=>o})},9573:(e,r,t)=>{"use strict";t.d(r,{QP:()=>eu});let o=e=>{let r=a(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},a=e=>{let{theme:r,classGroups:t}=e,o={nextPart:new Map,validators:[]};for(let e in t)i(t[e],o,e,r);return o},i=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=t;return}if("function"==typeof e){if(c(e)){i(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{i(n,d(r,e),t,o)})})},d=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},c=e=>e.isThemeGetter,u=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},p=e=>{let{prefix:r,experimentalParseClassName:t}=e,o=e=>{let r;let t=[],o=0,n=0,l=0;for(let s=0;s<e.length;s++){let a=e[s];if(0===o&&0===n){if(":"===a){t.push(e.slice(l,s)),l=s+1;continue}if("/"===a){r=s;continue}}"["===a?o++:"]"===a?o--:"("===a?n++:")"===a&&n--}let s=0===t.length?e:e.substring(l),a=f(s);return{modifiers:t,hasImportantModifier:a!==s,baseClassName:a,maybePostfixModifierPosition:r&&r>l?r-l:void 0}};if(r){let e=r+":",t=o;o=r=>r.startsWith(e)?t(r.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:r,maybePostfixModifierPosition:void 0}}if(t){let e=o;o=r=>t({className:r,parseClassName:e})}return o},f=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,b=e=>{let r=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let t=[],o=[];return e.forEach(e=>{"["===e[0]||r[e]?(t.push(...o.sort(),e),o=[]):o.push(e)}),t.push(...o.sort()),t}},g=e=>({cache:u(e.cacheSize),parseClassName:p(e),sortModifiers:b(e),...o(e)}),m=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n,sortModifiers:l}=r,s=[],a=e.trim().split(m),i="";for(let e=a.length-1;e>=0;e-=1){let r=a[e],{isExternal:d,modifiers:c,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:f}=t(r);if(d){i=r+(i.length>0?" "+i:i);continue}let b=!!f,g=o(b?p.substring(0,f):p);if(!g){if(!b||!(g=o(p))){i=r+(i.length>0?" "+i:i);continue}b=!1}let m=l(c).join(":"),h=u?m+"!":m,y=h+g;if(s.includes(y))continue;s.push(y);let v=n(g,b);for(let e=0;e<v.length;++e){let r=v[e];s.push(h+r)}i=r+(i.length>0?" "+i:i)}return i};function y(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=v(e))&&(o&&(o+=" "),o+=r);return o}let v=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=v(e[o]))&&(t&&(t+=" "),t+=r);return t},x=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},w=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,k=/^\((?:(\w[\w-]*):)?(.+)\)$/i,z=/^\d+\/\d+$/,j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,M=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,P=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,C=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,O=e=>z.test(e),E=e=>!!e&&!Number.isNaN(Number(e)),I=e=>!!e&&Number.isInteger(Number(e)),S=e=>e.endsWith("%")&&E(e.slice(0,-1)),N=e=>j.test(e),R=()=>!0,G=e=>M.test(e)&&!_.test(e),L=()=>!1,T=e=>P.test(e),$=e=>C.test(e),A=e=>!D(e)&&!Q(e),U=e=>ee(e,es,L),D=e=>w.test(e),K=e=>ee(e,ea,G),W=e=>ee(e,ei,E),q=e=>ee(e,et,L),H=e=>ee(e,en,$),B=e=>ee(e,L,T),Q=e=>k.test(e),F=e=>er(e,ea),J=e=>er(e,ed),V=e=>er(e,et),X=e=>er(e,es),Y=e=>er(e,en),Z=e=>er(e,ec,!0),ee=(e,r,t)=>{let o=w.exec(e);return!!o&&(o[1]?r(o[1]):t(o[2]))},er=(e,r,t=!1)=>{let o=k.exec(e);return!!o&&(o[1]?r(o[1]):t)},et=e=>"position"===e,eo=new Set(["image","url"]),en=e=>eo.has(e),el=new Set(["length","size","percentage"]),es=e=>el.has(e),ea=e=>"length"===e,ei=e=>"number"===e,ed=e=>"family-name"===e,ec=e=>"shadow"===e;Symbol.toStringTag;let eu=function(e,...r){let t,o,n;let l=function(a){return o=(t=g(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=s,s(a)};function s(e){let r=o(e);if(r)return r;let l=h(e,t);return n(e,l),l}return function(){return l(y.apply(null,arguments))}}(()=>{let e=x("color"),r=x("font"),t=x("text"),o=x("font-weight"),n=x("tracking"),l=x("leading"),s=x("breakpoint"),a=x("container"),i=x("spacing"),d=x("radius"),c=x("shadow"),u=x("inset-shadow"),p=x("drop-shadow"),f=x("blur"),b=x("perspective"),g=x("aspect"),m=x("ease"),h=x("animate"),y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],v=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],w=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],z=()=>[Q,D,i],j=()=>[O,"full","auto",...z()],M=()=>[I,"none","subgrid",Q,D],_=()=>["auto",{span:["full",I,Q,D]},Q,D],P=()=>[I,"auto",Q,D],C=()=>["auto","min","max","fr",Q,D],G=()=>["start","end","center","between","around","evenly","stretch","baseline"],L=()=>["start","end","center","stretch"],T=()=>["auto",...z()],$=()=>[O,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...z()],ee=()=>[e,Q,D],er=()=>[S,K],et=()=>["","none","full",d,Q,D],eo=()=>["",E,F,K],en=()=>["solid","dashed","dotted","double"],el=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],es=()=>["","none",f,Q,D],ea=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Q,D],ei=()=>["none",E,Q,D],ed=()=>["none",E,Q,D],ec=()=>[E,Q,D],eu=()=>[O,"full",...z()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[N],breakpoint:[N],color:[R],container:[N],"drop-shadow":[N],ease:["in","out","in-out"],font:[A],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[N],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[N],shadow:[N],spacing:["px",E],text:[N],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",O,D,Q,g]}],container:["container"],columns:[{columns:[E,D,Q,a]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...v(),D,Q]}],overflow:[{overflow:w()}],"overflow-x":[{"overflow-x":w()}],"overflow-y":[{"overflow-y":w()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:j()}],"inset-x":[{"inset-x":j()}],"inset-y":[{"inset-y":j()}],start:[{start:j()}],end:[{end:j()}],top:[{top:j()}],right:[{right:j()}],bottom:[{bottom:j()}],left:[{left:j()}],visibility:["visible","invisible","collapse"],z:[{z:[I,"auto",Q,D]}],basis:[{basis:[O,"full","auto",a,...z()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[E,O,"auto","initial","none",D]}],grow:[{grow:["",E,Q,D]}],shrink:[{shrink:["",E,Q,D]}],order:[{order:[I,"first","last","none",Q,D]}],"grid-cols":[{"grid-cols":M()}],"col-start-end":[{col:_()}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":M()}],"row-start-end":[{row:_()}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":C()}],"auto-rows":[{"auto-rows":C()}],gap:[{gap:z()}],"gap-x":[{"gap-x":z()}],"gap-y":[{"gap-y":z()}],"justify-content":[{justify:[...G(),"normal"]}],"justify-items":[{"justify-items":[...L(),"normal"]}],"justify-self":[{"justify-self":["auto",...L()]}],"align-content":[{content:["normal",...G()]}],"align-items":[{items:[...L(),"baseline"]}],"align-self":[{self:["auto",...L(),"baseline"]}],"place-content":[{"place-content":G()}],"place-items":[{"place-items":[...L(),"baseline"]}],"place-self":[{"place-self":["auto",...L()]}],p:[{p:z()}],px:[{px:z()}],py:[{py:z()}],ps:[{ps:z()}],pe:[{pe:z()}],pt:[{pt:z()}],pr:[{pr:z()}],pb:[{pb:z()}],pl:[{pl:z()}],m:[{m:T()}],mx:[{mx:T()}],my:[{my:T()}],ms:[{ms:T()}],me:[{me:T()}],mt:[{mt:T()}],mr:[{mr:T()}],mb:[{mb:T()}],ml:[{ml:T()}],"space-x":[{"space-x":z()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":z()}],"space-y-reverse":["space-y-reverse"],size:[{size:$()}],w:[{w:[a,"screen",...$()]}],"min-w":[{"min-w":[a,"screen","none",...$()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[s]},...$()]}],h:[{h:["screen",...$()]}],"min-h":[{"min-h":["screen","none",...$()]}],"max-h":[{"max-h":["screen",...$()]}],"font-size":[{text:["base",t,F,K]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,Q,W]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",S,D]}],"font-family":[{font:[J,D,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,Q,D]}],"line-clamp":[{"line-clamp":[E,"none",Q,W]}],leading:[{leading:[l,...z()]}],"list-image":[{"list-image":["none",Q,D]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Q,D]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:ee()}],"text-color":[{text:ee()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...en(),"wavy"]}],"text-decoration-thickness":[{decoration:[E,"from-font","auto",Q,K]}],"text-decoration-color":[{decoration:ee()}],"underline-offset":[{"underline-offset":[E,"auto",Q,D]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Q,D]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Q,D]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...v(),V,q]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",X,U]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},I,Q,D],radial:["",Q,D],conic:[I,Q,D]},Y,H]}],"bg-color":[{bg:ee()}],"gradient-from-pos":[{from:er()}],"gradient-via-pos":[{via:er()}],"gradient-to-pos":[{to:er()}],"gradient-from":[{from:ee()}],"gradient-via":[{via:ee()}],"gradient-to":[{to:ee()}],rounded:[{rounded:et()}],"rounded-s":[{"rounded-s":et()}],"rounded-e":[{"rounded-e":et()}],"rounded-t":[{"rounded-t":et()}],"rounded-r":[{"rounded-r":et()}],"rounded-b":[{"rounded-b":et()}],"rounded-l":[{"rounded-l":et()}],"rounded-ss":[{"rounded-ss":et()}],"rounded-se":[{"rounded-se":et()}],"rounded-ee":[{"rounded-ee":et()}],"rounded-es":[{"rounded-es":et()}],"rounded-tl":[{"rounded-tl":et()}],"rounded-tr":[{"rounded-tr":et()}],"rounded-br":[{"rounded-br":et()}],"rounded-bl":[{"rounded-bl":et()}],"border-w":[{border:eo()}],"border-w-x":[{"border-x":eo()}],"border-w-y":[{"border-y":eo()}],"border-w-s":[{"border-s":eo()}],"border-w-e":[{"border-e":eo()}],"border-w-t":[{"border-t":eo()}],"border-w-r":[{"border-r":eo()}],"border-w-b":[{"border-b":eo()}],"border-w-l":[{"border-l":eo()}],"divide-x":[{"divide-x":eo()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":eo()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...en(),"hidden","none"]}],"divide-style":[{divide:[...en(),"hidden","none"]}],"border-color":[{border:ee()}],"border-color-x":[{"border-x":ee()}],"border-color-y":[{"border-y":ee()}],"border-color-s":[{"border-s":ee()}],"border-color-e":[{"border-e":ee()}],"border-color-t":[{"border-t":ee()}],"border-color-r":[{"border-r":ee()}],"border-color-b":[{"border-b":ee()}],"border-color-l":[{"border-l":ee()}],"divide-color":[{divide:ee()}],"outline-style":[{outline:[...en(),"none","hidden"]}],"outline-offset":[{"outline-offset":[E,Q,D]}],"outline-w":[{outline:["",E,F,K]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",c,Z,B]}],"shadow-color":[{shadow:ee()}],"inset-shadow":[{"inset-shadow":["none",Q,D,u]}],"inset-shadow-color":[{"inset-shadow":ee()}],"ring-w":[{ring:eo()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:ee()}],"ring-offset-w":[{"ring-offset":[E,K]}],"ring-offset-color":[{"ring-offset":ee()}],"inset-ring-w":[{"inset-ring":eo()}],"inset-ring-color":[{"inset-ring":ee()}],opacity:[{opacity:[E,Q,D]}],"mix-blend":[{"mix-blend":[...el(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":el()}],filter:[{filter:["","none",Q,D]}],blur:[{blur:es()}],brightness:[{brightness:[E,Q,D]}],contrast:[{contrast:[E,Q,D]}],"drop-shadow":[{"drop-shadow":["","none",p,Q,D]}],grayscale:[{grayscale:["",E,Q,D]}],"hue-rotate":[{"hue-rotate":[E,Q,D]}],invert:[{invert:["",E,Q,D]}],saturate:[{saturate:[E,Q,D]}],sepia:[{sepia:["",E,Q,D]}],"backdrop-filter":[{"backdrop-filter":["","none",Q,D]}],"backdrop-blur":[{"backdrop-blur":es()}],"backdrop-brightness":[{"backdrop-brightness":[E,Q,D]}],"backdrop-contrast":[{"backdrop-contrast":[E,Q,D]}],"backdrop-grayscale":[{"backdrop-grayscale":["",E,Q,D]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[E,Q,D]}],"backdrop-invert":[{"backdrop-invert":["",E,Q,D]}],"backdrop-opacity":[{"backdrop-opacity":[E,Q,D]}],"backdrop-saturate":[{"backdrop-saturate":[E,Q,D]}],"backdrop-sepia":[{"backdrop-sepia":["",E,Q,D]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":z()}],"border-spacing-x":[{"border-spacing-x":z()}],"border-spacing-y":[{"border-spacing-y":z()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Q,D]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[E,"initial",Q,D]}],ease:[{ease:["linear","initial",m,Q,D]}],delay:[{delay:[E,Q,D]}],animate:[{animate:["none",h,Q,D]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,Q,D]}],"perspective-origin":[{"perspective-origin":ea()}],rotate:[{rotate:ei()}],"rotate-x":[{"rotate-x":ei()}],"rotate-y":[{"rotate-y":ei()}],"rotate-z":[{"rotate-z":ei()}],scale:[{scale:ed()}],"scale-x":[{"scale-x":ed()}],"scale-y":[{"scale-y":ed()}],"scale-z":[{"scale-z":ed()}],"scale-3d":["scale-3d"],skew:[{skew:ec()}],"skew-x":[{"skew-x":ec()}],"skew-y":[{"skew-y":ec()}],transform:[{transform:[Q,D,"","none","gpu","cpu"]}],"transform-origin":[{origin:ea()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eu()}],"translate-x":[{"translate-x":eu()}],"translate-y":[{"translate-y":eu()}],"translate-z":[{"translate-z":eu()}],"translate-none":["translate-none"],accent:[{accent:ee()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:ee()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Q,D]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Q,D]}],fill:[{fill:["none",...ee()]}],"stroke-w":[{stroke:[E,F,K,W]}],stroke:[{stroke:["none",...ee()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}})}}]);