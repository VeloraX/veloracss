(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,70784,(e,t,l)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:l,blurHeight:n,blurDataURL:r,objectFit:s}){let i=l?40*l:e,a=n?40*n:t,o=i&&a?`viewBox='0 0 ${i} ${a}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${o}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${o?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${r}'/%3E%3C/svg%3E`}Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},82937,(e,t,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return s},imageConfigDefault:function(){return i}};for(var r in n)Object.defineProperty(l,r,{enumerable:!0,get:n[r]});let s=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},6445,(e,t,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(49778);let n=e.r(19658),r=e.r(70784),s=e.r(82937),i=["-moz-initial","fill","none","scale-down",void 0];function a(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:l=!1,priority:d=!1,preload:c=!1,loading:v,className:u,quality:p,width:x,height:f,fill:m=!1,style:b,overrideSrc:g,onLoad:h,onLoadingComplete:y,placeholder:j="empty",blurDataURL:w,fetchPriority:S,decoding:_="async",layout:C,objectFit:P,objectPosition:k,lazyBoundary:O,lazyRoot:N,...z},E){var R;let $,M,I,{imgConf:D,showAltText:T,blurComplete:B,defaultLoader:A}=E,L=D||s.imageConfigDefault;if("allSizes"in L)$=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t),l=L.qualities?.sort((e,t)=>e-t);$={...L,allSizes:e,deviceSizes:t,qualities:l}}if(void 0===A)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let W=z.loader||A;delete z.loader,delete z.srcSet;let H="__next_img_default"in W;if(H){if("custom"===$.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=W;W=t=>{let{config:l,...n}=t;return e(n)}}if(C){"fill"===C&&(m=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(b={...b,...e});let l={responsive:"100vw",fill:"100vw"}[C];l&&!t&&(t=l)}let F="",q=o(x),G=o(f);if((R=e)&&"object"==typeof R&&(a(R)||void 0!==R.src)){let t=a(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(M=t.blurWidth,I=t.blurHeight,w=w||t.blurDataURL,F=t.src,!m)if(q||G){if(q&&!G){let e=q/t.width;G=Math.round(t.height*e)}else if(!q&&G){let e=G/t.height;q=Math.round(t.width*e)}}else q=t.width,G=t.height}let U=!d&&!c&&("lazy"===v||void 0===v);(!(e="string"==typeof e?e:F)||e.startsWith("data:")||e.startsWith("blob:"))&&(l=!0,U=!1),$.unoptimized&&(l=!0),H&&!$.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(l=!0);let V=o(p),X=Object.assign(m?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:k}:{},T?{}:{color:"transparent"},b),Y=B||"empty"===j?null:"blur"===j?`url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:q,heightInt:G,blurWidth:M,blurHeight:I,blurDataURL:w||"",objectFit:X.objectFit})}")`:`url("${j}")`,J=i.includes(X.objectFit)?"fill"===X.objectFit?"100% 100%":"cover":X.objectFit,K=Y?{backgroundSize:J,backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},Q=function({config:e,src:t,unoptimized:l,width:r,quality:s,sizes:i,loader:a}){if(l){let e=(0,n.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let l=t.includes("?")?"&":"?";t=`${t}${l}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:o,kind:d}=function({deviceSizes:e,allSizes:t},l,n){if(n){let l=/(^|\s)(1?\d?\d)vw/g,r=[];for(let e;e=l.exec(n);)r.push(parseInt(e[2]));if(r.length){let l=.01*Math.min(...r);return{widths:t.filter(t=>t>=e[0]*l),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof l?{widths:e,kind:"w"}:{widths:[...new Set([l,2*l].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,r,i),c=o.length-1;return{sizes:i||"w"!==d?i:"100vw",srcSet:o.map((l,n)=>`${a({config:e,src:t,quality:s,width:l})} ${"w"===d?l:n+1}${d}`).join(", "),src:a({config:e,src:t,quality:s,width:o[c]})}}({config:$,src:e,unoptimized:l,width:q,quality:V,sizes:t,loader:W}),Z=U?"lazy":v;return{props:{...z,loading:Z,fetchPriority:S,width:q,height:G,decoding:_,className:u,style:{...X,...K},sizes:Q.sizes,srcSet:Q.srcSet,src:g||Q.src},meta:{unoptimized:l,preload:c||d,placeholder:j,fill:m}}}},77438,(e,t,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return a}});let n=e.r(34726),r="u"<typeof window,s=r?()=>{}:n.useLayoutEffect,i=r?()=>{}:n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:l}=e;function a(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(l(e))}}return r&&(t?.mountedInstances?.add(e.children),a()),s(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),s(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},55577,(e,t,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});var n={default:function(){return f},defaultHead:function(){return v}};for(var r in n)Object.defineProperty(l,r,{enumerable:!0,get:n[r]});let s=e.r(45457),i=e.r(19926),a=e.r(92944),o=i._(e.r(34726)),d=s._(e.r(77438)),c=e.r(58707);function v(){return[(0,a.jsx)("meta",{charSet:"utf-8"},"charset"),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(49778);let p=["name","httpEquiv","charSet","itemProp"];function x(e){let t,l,n,r;return e.reduce(u,[]).reverse().concat(v().reverse()).filter((t=new Set,l=new Set,n=new Set,r={},e=>{let s=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let l=e.key.slice(e.key.indexOf("$")+1);t.has(l)?s=!1:t.add(l)}switch(e.type){case"title":case"base":l.has(e.type)?s=!1:l.add(e.type);break;case"meta":for(let t=0,l=p.length;t<l;t++){let l=p[t];if(e.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?s=!1:n.add(l);else{let t=e.props[l],n=r[l]||new Set;("name"!==l||!i)&&n.has(t)?s=!1:(n.add(t),r[l]=n)}}}return s})).reverse().map((e,t)=>{let l=e.key||t;return o.default.cloneElement(e,{key:l})})}let f=function({children:e}){let t=(0,o.useContext)(c.HeadManagerContext);return(0,a.jsx)(d.default,{reduceComponentsToState:x,headManager:t,children:e})};("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),t.exports=l.default)},68956,(e,t,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"ImageConfigContext",{enumerable:!0,get:function(){return s}});let n=e.r(45457)._(e.r(34726)),r=e.r(82937),s=n.default.createContext(r.imageConfigDefault)},19398,(e,t,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(45457)._(e.r(34726)).default.createContext(null)},26151,(e,t,l)=>{"use strict";function n(e,t){let l=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-l)<Math.abs(e-l)?t:e,0):l}Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"findClosestQuality",{enumerable:!0,get:function(){return n}})},15069,(e,t,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return i}});let n=e.r(26151),r=e.r(19658);function s({config:e,src:t,width:l,quality:s}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let i=(0,n.findClosestQuality)(s,e),a=(0,r.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${l}&q=${i}${t.startsWith("/")&&a?`&dpl=${a}`:""}`}s.__next_img_default=!0;let i=s},94493,(e,t,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"useMergedRef",{enumerable:!0,get:function(){return r}});let n=e.r(34726);function r(e,t){let l=(0,n.useRef)(null),r=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=l.current;e&&(l.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(l.current=s(e,n)),t&&(r.current=s(t,n))},[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let l=e(t);return"function"==typeof l?l:()=>e(null)}}("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),t.exports=l.default)},68621,(e,t,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"Image",{enumerable:!0,get:function(){return y}});let n=e.r(45457),r=e.r(19926),s=e.r(92944),i=r._(e.r(34726)),a=n._(e.r(72833)),o=n._(e.r(55577)),d=e.r(6445),c=e.r(82937),v=e.r(68956);e.r(49778);let u=e.r(19398),p=n._(e.r(15069)),x=e.r(94493),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/veloracss/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,l,n,r,s,i){let a=e?.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),l?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,r=!1;l.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function b(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let g=(0,i.forwardRef)(({src:e,srcSet:t,sizes:l,height:n,width:r,decoding:a,className:o,style:d,fetchPriority:c,placeholder:v,loading:u,unoptimized:p,fill:f,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:j,sizesInput:w,onLoad:S,onError:_,...C},P)=>{let k=(0,i.useCallback)(e=>{e&&(_&&(e.src=e.src),e.complete&&m(e,v,g,h,y,p,w))},[e,v,g,h,y,_,p,w]),O=(0,x.useMergedRef)(P,k);return(0,s.jsx)("img",{...C,...b(c),loading:u,width:r,height:n,decoding:a,"data-nimg":f?"fill":"1",className:o,style:d,sizes:l,srcSet:t,src:e,ref:O,onLoad:e=>{m(e.currentTarget,v,g,h,y,p,w)},onError:e=>{j(!0),"empty"!==v&&y(!0),_&&_(e)}})});function h({isAppRouter:e,imgAttributes:t}){let l={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&a.default.preload?(a.default.preload(t.src,l),null):(0,s.jsx)(o.default,{children:(0,s.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...l},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,i.forwardRef)((e,t)=>{let l=(0,i.useContext)(u.RouterContext),n=(0,i.useContext)(v.ImageConfigContext),r=(0,i.useMemo)(()=>{let e=f||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),l=e.deviceSizes.sort((e,t)=>e-t),r=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:l,qualities:r,localPatterns:"u"<typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:a,onLoadingComplete:o}=e,x=(0,i.useRef)(a);(0,i.useEffect)(()=>{x.current=a},[a]);let m=(0,i.useRef)(o);(0,i.useEffect)(()=>{m.current=o},[o]);let[b,y]=(0,i.useState)(!1),[j,w]=(0,i.useState)(!1),{props:S,meta:_}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:r,blurComplete:b,showAltText:j});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{...S,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:x,onLoadingCompleteRef:m,setBlurComplete:y,setShowAltText:w,sizesInput:e.sizes,ref:t}),_.preload?(0,s.jsx)(h,{isAppRouter:!l,imgAttributes:S}):null]})});("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),t.exports=l.default)},37688,(e,t,l)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});var n={default:function(){return c},getImageProps:function(){return d}};for(var r in n)Object.defineProperty(l,r,{enumerable:!0,get:n[r]});let s=e.r(45457),i=e.r(6445),a=e.r(68621),o=s._(e.r(15069));function d(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/veloracss/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,l]of Object.entries(t))void 0===l&&delete t[e];return{props:t}}let c=a.Image},43328,(e,t,l)=>{t.exports=e.r(37688)},49308,e=>{"use strict";var t=e.i(92944),l=e.i(34726),n=e.i(43328);function r(){let{hostname:e,origin:t}=window.location;return"localhost"===e?"http://localhost:5173":`${t}/veloracss/playground`}let s="#060b17",i="#111827",a="#1e2d45",o="#e2e8f0",d="#64748b",c="#6366f1",v="#818cf8";function u({code:e}){let n,[o,c]=(0,l.useState)(!1),u=(0,l.useCallback)(()=>{navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),2e3)},[e]);return(0,t.jsxs)("div",{style:{border:`1px solid ${a}`,borderRadius:"12px",overflow:"hidden",marginTop:"12px"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",background:"#0d1422",borderBottom:`1px solid ${a}`},children:[(0,t.jsx)("span",{style:{fontSize:"11px",fontWeight:500,color:d,letterSpacing:"0.05em",textTransform:"uppercase"},children:"HTML"}),(0,t.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,t.jsx)("button",{onClick:u,style:{fontSize:"11px",fontWeight:500,padding:"4px 10px",borderRadius:"6px",cursor:"pointer",background:o?"#22c55e20":i,color:o?"#22c55e":"#94a3b8",border:`1px solid ${o?"#22c55e40":a}`,transition:"all .15s"},children:o?"✓ Copied":"Copy"}),(0,t.jsx)("a",{href:(n=btoa(new TextEncoder().encode(e).reduce((e,t)=>e+String.fromCharCode(t),"")),`${r()}/#code=${n}`),target:"_blank",rel:"noopener noreferrer",style:{fontSize:"11px",fontWeight:500,padding:"4px 10px",borderRadius:"6px",background:"#6366f120",color:v,border:"1px solid #6366f140",textDecoration:"none",transition:"all .15s"},children:"Try in Playground →"})]})]}),(0,t.jsx)("pre",{style:{margin:0,padding:"16px",background:s,color:"#94a3b8",fontSize:"12px",lineHeight:"1.7",whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:"280px",overflowY:"auto",fontFamily:"'Fira Code', 'Cascadia Code', Consolas, monospace"},children:(0,t.jsx)("code",{children:e})})]})}function p({children:e}){return(0,t.jsx)("p",{style:{fontSize:"11px",fontWeight:600,color:d,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"16px"},children:e})}function x({children:e}){return(0,t.jsx)("div",{style:{background:i,borderRadius:"12px",padding:"28px",border:`1px solid ${a}`},children:e})}let f=`<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-3xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Buttons</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Solid</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-primary">Primary</button>
        <button class="vel-btn vel-btn-secondary">Secondary</button>
        <button class="vel-btn vel-btn-success">Success</button>
        <button class="vel-btn vel-btn-danger">Danger</button>
        <button class="vel-btn vel-btn-warning">Warning</button>
        <button class="vel-btn vel-btn-info">Info</button>
      </div>
    </section>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Outline &amp; Ghost</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-outline-primary">Outline</button>
        <button class="vel-btn vel-btn-ghost">Ghost</button>
        <button class="vel-btn vel-btn-link">Link</button>
        <button class="vel-btn vel-btn-primary" disabled>Disabled</button>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Sizes</h2>
      <div class="vel-flex vel-flex-wrap vel-items-center vel-gap-3">
        <button class="vel-btn vel-btn-primary vel-btn-xs">XSmall</button>
        <button class="vel-btn vel-btn-primary vel-btn-sm">Small</button>
        <button class="vel-btn vel-btn-primary">Default</button>
        <button class="vel-btn vel-btn-primary vel-btn-lg">Large</button>
        <button class="vel-btn vel-btn-primary vel-btn-xl">XLarge</button>
      </div>
    </section>

  </div>
</div>`,m=`<div class="vel-min-h-screen vel-bg-neutral-50 vel-p-10">
  <div class="vel-max-w-4xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Cards</h1>

    <div class="vel-grid vel-grid-cols-3 vel-gap-6 vel-mb-6">
      <div class="vel-card vel-card-hover">
        <div class="vel-card-header">Hover Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">Shadow lifts on hover.</p>
          <button class="vel-btn vel-btn-primary vel-btn-sm">Action</button>
        </div>
        <div class="vel-card-footer">
          <span class="vel-text-xs vel-text-neutral-400">vel-card-hover</span>
        </div>
      </div>
      <div class="vel-card vel-card-elevated">
        <div class="vel-card-header">Elevated</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">No border, large shadow.</p>
          <button class="vel-btn vel-btn-outline-primary vel-btn-sm">Action</button>
        </div>
        <div class="vel-card-footer">
          <span class="vel-text-xs vel-text-neutral-400">vel-card-elevated</span>
        </div>
      </div>
      <div class="vel-card vel-card-filled">
        <div class="vel-card-header">Filled</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-500 vel-text-sm vel-mb-4">Neutral background.</p>
          <button class="vel-btn vel-btn-ghost vel-btn-sm">Action</button>
        </div>
        <div class="vel-card-footer">
          <span class="vel-text-xs vel-text-neutral-400">vel-card-filled</span>
        </div>
      </div>
    </div>

    <div class="vel-grid vel-grid-cols-2 vel-gap-6">
      <div class="vel-card vel-card-flat">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-neutral-900 vel-mb-2">Flat Card</h3>
          <p class="vel-text-neutral-500 vel-text-sm">No shadow, no border. Minimal.</p>
        </div>
      </div>
      <div class="vel-card vel-card-primary">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-white vel-mb-2">Primary Card</h3>
          <p class="vel-text-sm" style="color:rgba(255,255,255,.75)">Bold brand-colored card.</p>
        </div>
      </div>
    </div>

  </div>
</div>`,b=`<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-4xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Colors</h1>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Semantic</h2>
      <div class="vel-grid vel-grid-cols-6 vel-gap-3">
        <div class="vel-bg-primary vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">primary</div>
        <div class="vel-bg-secondary vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">secondary</div>
        <div class="vel-bg-success vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">success</div>
        <div class="vel-bg-danger vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">danger</div>
        <div class="vel-bg-warning vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">warning</div>
        <div class="vel-bg-info vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">info</div>
      </div>
    </section>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Light variants</h2>
      <div class="vel-grid vel-grid-cols-5 vel-gap-3">
        <div class="vel-bg-primary-light vel-text-primary vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">primary</div>
        <div class="vel-bg-success-light vel-text-success vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">success</div>
        <div class="vel-bg-danger-light vel-text-danger vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">danger</div>
        <div class="vel-bg-warning-light vel-text-neutral-700 vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">warning</div>
        <div class="vel-bg-info-light vel-text-info vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium">info</div>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Neutral scale</h2>
      <div class="vel-flex vel-gap-2">
        <div class="vel-bg-neutral-50  vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#334155">50</div>
        <div class="vel-bg-neutral-100 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#334155">100</div>
        <div class="vel-bg-neutral-200 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#334155">200</div>
        <div class="vel-bg-neutral-300 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#334155">300</div>
        <div class="vel-bg-neutral-400 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">400</div>
        <div class="vel-bg-neutral-500 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">500</div>
        <div class="vel-bg-neutral-600 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">600</div>
        <div class="vel-bg-neutral-700 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">700</div>
        <div class="vel-bg-neutral-800 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">800</div>
        <div class="vel-bg-neutral-900 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">900</div>
        <div class="vel-bg-neutral-950 vel-flex-1 vel-py-4 vel-rounded-lg vel-text-center" style="font-size:10px;color:#fff">950</div>
      </div>
    </section>

  </div>
</div>`,g=`<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-2xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Typography</h1>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-5">Type scale</h2>
      <div class="vel-space-y-3">
        <p class="vel-text-5xl vel-font-black vel-text-neutral-900 vel-leading-none">Display — vel-text-5xl</p>
        <p class="vel-text-3xl vel-font-bold vel-text-neutral-900">Heading 1 — vel-text-3xl</p>
        <p class="vel-text-2xl vel-font-semibold vel-text-neutral-800">Heading 2 — vel-text-2xl</p>
        <p class="vel-text-xl vel-font-medium vel-text-neutral-700">Heading 3 — vel-text-xl</p>
        <p class="vel-text-base vel-text-neutral-600">Body — the quick brown fox jumps over the lazy dog.</p>
        <p class="vel-text-sm vel-text-neutral-500">Small — secondary information and captions.</p>
        <p class="vel-text-xs vel-text-neutral-400 vel-uppercase vel-tracking-wider vel-font-semibold">Label / Eyebrow — vel-text-xs</p>
      </div>
    </section>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-5">Font weights</h2>
      <div class="vel-space-y-2">
        <p class="vel-text-xl vel-font-thin vel-text-neutral-800">Thin — vel-font-thin</p>
        <p class="vel-text-xl vel-font-light vel-text-neutral-800">Light — vel-font-light</p>
        <p class="vel-text-xl vel-font-normal vel-text-neutral-800">Normal — vel-font-normal</p>
        <p class="vel-text-xl vel-font-medium vel-text-neutral-800">Medium — vel-font-medium</p>
        <p class="vel-text-xl vel-font-semibold vel-text-neutral-800">Semibold — vel-font-semibold</p>
        <p class="vel-text-xl vel-font-bold vel-text-neutral-800">Bold — vel-font-bold</p>
        <p class="vel-text-xl vel-font-extrabold vel-text-neutral-800">Extrabold — vel-font-extrabold</p>
        <p class="vel-text-xl vel-font-black vel-text-neutral-800">Black — vel-font-black</p>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-5">Text colors</h2>
      <div class="vel-space-y-1">
        <p class="vel-text-xl vel-font-medium vel-text-primary">vel-text-primary</p>
        <p class="vel-text-xl vel-font-medium vel-text-success">vel-text-success</p>
        <p class="vel-text-xl vel-font-medium vel-text-danger">vel-text-danger</p>
        <p class="vel-text-xl vel-font-medium vel-text-warning">vel-text-warning</p>
        <p class="vel-text-xl vel-font-medium vel-text-info">vel-text-info</p>
      </div>
    </section>

  </div>
</div>`;function h(){return(0,t.jsxs)("main",{style:{minHeight:"100vh",background:s,color:o,fontFamily:"system-ui, sans-serif"},children:[(0,t.jsxs)("header",{style:{position:"sticky",top:0,zIndex:50,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 32px",height:"56px",background:"#060b17",borderBottom:`1px solid ${a}`,backdropFilter:"blur(8px)"},children:[(0,t.jsx)(n.default,{src:"/velora_actual.png",alt:"VeloraCSS",width:122,height:28,priority:!0}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,t.jsx)("span",{style:{fontSize:"11px",color:d,background:i,padding:"2px 8px",borderRadius:"4px",border:`1px solid ${a}`},children:"v0.1.0"}),(0,t.jsx)("a",{href:r(),target:"_blank",rel:"noopener noreferrer",style:{fontSize:"12px",fontWeight:500,padding:"5px 14px",borderRadius:"7px",background:c,color:"#fff",textDecoration:"none",border:`1px solid ${c}`},children:"Open Playground →"})]})]}),(0,t.jsxs)("div",{style:{textAlign:"center",padding:"80px 32px 64px",borderBottom:`1px solid ${a}`},children:[(0,t.jsx)("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",marginBottom:"24px"},children:(0,t.jsx)("span",{style:{fontSize:"11px",fontWeight:600,color:v,background:"#6366f115",padding:"4px 12px",borderRadius:"99px",border:"1px solid #6366f130"},children:"Now in v0.1 — utility-first CSS"})}),(0,t.jsxs)("h1",{style:{fontSize:"3rem",fontWeight:900,color:o,letterSpacing:"-0.03em",margin:"0 0 16px",lineHeight:1.1},children:["Build fast.",(0,t.jsx)("br",{}),"Look great."]}),(0,t.jsx)("p",{style:{fontSize:"1.125rem",color:d,maxWidth:"520px",margin:"0 auto 36px",lineHeight:1.7},children:"VeloraCSS is a fully original utility-first CSS framework with rich components, zero dependencies, and a consistent design system — running live in Next.js."}),(0,t.jsxs)("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[(0,t.jsx)("a",{href:r(),target:"_blank",rel:"noopener noreferrer",style:{fontSize:"14px",fontWeight:600,padding:"10px 24px",borderRadius:"8px",background:c,color:"#fff",textDecoration:"none"},children:"Open Playground"}),(0,t.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"14px",fontWeight:600,padding:"10px 24px",borderRadius:"8px",background:i,color:o,textDecoration:"none",border:`1px solid ${a}`},children:"GitHub"})]})]}),(0,t.jsxs)("div",{style:{maxWidth:"900px",margin:"0 auto",padding:"64px 32px"},children:[(0,t.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,t.jsx)(p,{children:"Buttons"}),(0,t.jsxs)(x,{children:[(0,t.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-3 vel-mb-4",children:[(0,t.jsx)("button",{className:"vel-btn vel-btn-primary",children:"Primary"}),(0,t.jsx)("button",{className:"vel-btn vel-btn-secondary",children:"Secondary"}),(0,t.jsx)("button",{className:"vel-btn vel-btn-success",children:"Success"}),(0,t.jsx)("button",{className:"vel-btn vel-btn-danger",children:"Danger"}),(0,t.jsx)("button",{className:"vel-btn vel-btn-warning",children:"Warning"}),(0,t.jsx)("button",{className:"vel-btn vel-btn-info",children:"Info"})]}),(0,t.jsxs)("div",{className:"vel-flex vel-flex-wrap vel-gap-3",children:[(0,t.jsx)("button",{className:"vel-btn vel-btn-outline-primary",children:"Outline"}),(0,t.jsx)("button",{className:"vel-btn vel-btn-ghost",children:"Ghost"}),(0,t.jsx)("button",{className:"vel-btn vel-btn-link",children:"Link"}),(0,t.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-sm",children:"Small"}),(0,t.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-lg",children:"Large"}),(0,t.jsx)("button",{className:"vel-btn vel-btn-primary",disabled:!0,children:"Disabled"})]})]}),(0,t.jsx)(u,{code:f})]}),(0,t.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,t.jsx)(p,{children:"Cards"}),(0,t.jsx)(x,{children:(0,t.jsxs)("div",{className:"vel-grid vel-grid-cols-3 vel-gap-4",children:[(0,t.jsxs)("div",{className:"vel-card vel-card-hover",children:[(0,t.jsx)("div",{className:"vel-card-header",children:"Hover Card"}),(0,t.jsxs)("div",{className:"vel-card-body",children:[(0,t.jsx)("p",{className:"vel-text-neutral-500 vel-text-sm vel-mb-3",children:"Shadow lifts on hover."}),(0,t.jsx)("button",{className:"vel-btn vel-btn-primary vel-btn-sm",children:"Action"})]})]}),(0,t.jsxs)("div",{className:"vel-card vel-card-elevated",children:[(0,t.jsx)("div",{className:"vel-card-header",children:"Elevated"}),(0,t.jsxs)("div",{className:"vel-card-body",children:[(0,t.jsx)("p",{className:"vel-text-neutral-500 vel-text-sm vel-mb-3",children:"No border, large shadow."}),(0,t.jsx)("button",{className:"vel-btn vel-btn-outline-primary vel-btn-sm",children:"Action"})]})]}),(0,t.jsx)("div",{className:"vel-card vel-card-primary",children:(0,t.jsxs)("div",{className:"vel-card-body",children:[(0,t.jsx)("h3",{className:"vel-text-base vel-font-semibold vel-text-white vel-mb-2",children:"Primary"}),(0,t.jsx)("p",{className:"vel-text-sm",style:{color:"rgba(255,255,255,.75)"},children:"Brand-colored card."})]})})]})}),(0,t.jsx)(u,{code:m})]}),(0,t.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,t.jsx)(p,{children:"Colors"}),(0,t.jsxs)(x,{children:[(0,t.jsx)("div",{className:"vel-grid vel-grid-cols-6 vel-gap-3 vel-mb-4",children:["primary","secondary","success","danger","warning","info"].map(e=>(0,t.jsx)("div",{className:`vel-bg-${e} vel-text-white vel-p-4 vel-rounded-xl vel-text-center vel-text-sm vel-font-medium`,children:e},e))}),(0,t.jsx)("div",{className:"vel-grid vel-grid-cols-11 vel-gap-1",children:[50,100,200,300,400,500,600,700,800,900,950].map(e=>(0,t.jsx)("div",{className:`vel-bg-neutral-${e} vel-py-3 vel-rounded-lg vel-text-center`,style:{fontSize:"10px",color:e>=500?"#fff":"#334155"},children:e},e))})]}),(0,t.jsx)(u,{code:b})]}),(0,t.jsxs)("section",{style:{marginBottom:"64px"},children:[(0,t.jsx)(p,{children:"Typography"}),(0,t.jsx)(x,{children:(0,t.jsxs)("div",{className:"vel-space-y-2",children:[(0,t.jsx)("p",{className:"vel-text-5xl vel-font-black vel-text-neutral-900 vel-leading-none",children:"Display"}),(0,t.jsx)("p",{className:"vel-text-3xl vel-font-bold vel-text-neutral-900",children:"Heading 1"}),(0,t.jsx)("p",{className:"vel-text-2xl vel-font-semibold vel-text-neutral-800",children:"Heading 2"}),(0,t.jsx)("p",{className:"vel-text-xl vel-font-medium vel-text-neutral-700",children:"Heading 3"}),(0,t.jsx)("p",{className:"vel-text-base vel-text-neutral-600",children:"Body — the quick brown fox jumps over the lazy dog."}),(0,t.jsx)("p",{className:"vel-text-sm vel-text-neutral-500",children:"Small — secondary information and captions."}),(0,t.jsx)("p",{className:"vel-text-xs vel-text-neutral-400 vel-uppercase vel-tracking-wider vel-font-semibold",children:"Label / Eyebrow"})]})}),(0,t.jsx)(u,{code:g})]})]}),(0,t.jsxs)("footer",{style:{textAlign:"center",padding:"32px",borderTop:`1px solid ${a}`,fontSize:"13px",color:d},children:["VeloraCSS v0.1.0 — Next.js Demo ·"," ",(0,t.jsx)("a",{href:r(),style:{color:v,textDecoration:"none"},children:"Open Playground"})]})]})}e.s(["default",()=>h])}]);