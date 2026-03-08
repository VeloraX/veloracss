(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49778,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return l}});let l=e=>{}},63640,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l={assign:function(){return n},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return s}};for(var o in l)Object.defineProperty(r,o,{enumerable:!0,get:l[o]});function i(e){let t={};for(let[r,l]of e.entries()){let e=t[r];void 0===e?t[r]=l:Array.isArray(e)?e.push(l):t[r]=[e,l]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,l]of Object.entries(e))if(Array.isArray(l))for(let e of l)t.append(r,a(e));else t.set(r,a(l));return t}function n(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,l]of r.entries())e.append(t,l)}return e}},60026,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return n}};for(var o in l)Object.defineProperty(r,o,{enumerable:!0,get:l[o]});let i=e.r(19926)._(e.r(63640)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,l=e.protocol||"",o=e.pathname||"",s=e.hash||"",n=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),n&&"object"==typeof n&&(n=String(i.urlQueryToSearchParams(n)));let c=e.search||n&&`?${n}`||"";return l&&!l.endsWith(":")&&(l+=":"),e.slashes||(!l||a.test(l))&&!1!==d?(d="//"+(d||""),o&&"/"!==o[0]&&(o="/"+o)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${l}${d}${o}${c}${s}`}let n=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},94493,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let l=e.r(34726);function o(e,t){let r=(0,l.useRef)(null),o=(0,l.useRef)(null);return(0,l.useCallback)(l=>{if(null===l){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,l)),t&&(o.current=i(t,l))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},46574,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l={DecodeError:function(){return h},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return y},NormalizeError:function(){return g},PageNotFoundError:function(){return b},SP:function(){return f},ST:function(){return x},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return v},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return n},isResSent:function(){return m},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return j}};for(var o in l)Object.defineProperty(r,o,{enumerable:!0,get:l[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...l)=>(r||(r=!0,t=e(...l)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,n=e=>s.test(e);function d(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function v(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function m(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function p(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let l=await e.getInitialProps(t);if(r&&m(r))return l;if(!l)throw Object.defineProperty(Error(`"${v(e)}.getInitialProps()" should resolve to an object. But found "${l}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return l}let f="u">typeof performance,x=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class g extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},99309,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let l=e.r(46574),o=e.r(81953);function i(e){if(!(0,l.isAbsoluteUrl)(e))return!0;try{let t=(0,l.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},14328,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return l}});let l=e=>{}},15457,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l={default:function(){return h},useLinkStatus:function(){return b}};for(var o in l)Object.defineProperty(r,o,{enumerable:!0,get:l[o]});let i=e.r(19926),a=e.r(92944),s=i._(e.r(34726)),n=e.r(60026),d=e.r(27507),c=e.r(94493),v=e.r(46574),m=e.r(22030);e.r(49778);let u=e.r(42161),p=e.r(99309),f=e.r(73271);function x(e){return"string"==typeof e?e:(0,n.formatUrl)(e)}function h(t){var r;let l,o,i,[n,h]=(0,s.useOptimistic)(u.IDLE_LINK_STATUS),b=(0,s.useRef)(null),{href:y,as:k,children:j,prefetch:w=null,passHref:S,replace:C,shallow:P,scroll:z,onClick:_,onMouseEnter:E,onTouchStart:T,legacyBehavior:N=!1,onNavigate:O,ref:A,unstable_dynamicOnHover:R,...F}=t;l=j,N&&("string"==typeof l||"number"==typeof l)&&(l=(0,a.jsx)("a",{children:l}));let L=s.default.useContext(d.AppRouterContext),I=!1!==w,M=!1!==w?null===(r=w)||"auto"===r?f.FetchStrategy.PPR:f.FetchStrategy.Full:f.FetchStrategy.PPR,{href:U,as:B}=s.default.useMemo(()=>{let e=x(y);return{href:e,as:k?x(k):e}},[y,k]);if(N){if(l?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(l)}let $=N?o&&"object"==typeof o&&o.ref:A,V=s.default.useCallback(e=>(null!==L&&(b.current=(0,u.mountLinkInstance)(e,U,L,M,I,h)),()=>{b.current&&((0,u.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,u.unmountPrefetchableInstance)(e)}),[I,U,L,M,h]),X={ref:(0,c.useMergedRef)(V,$),onClick(t){N||"function"!=typeof _||_(t),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!L||t.defaultPrevented||function(t,r,l,o,i,a,n){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,p.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),n){let e=!1;if(n({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:v}=e.r(28020);s.default.startTransition(()=>{v(l||r,i?"replace":"push",a??!0,o.current)})}}(t,U,B,b,C,z,O)},onMouseEnter(e){N||"function"!=typeof E||E(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&I&&(0,u.onNavigationIntent)(e.currentTarget,!0===R)},onTouchStart:function(e){N||"function"!=typeof T||T(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&I&&(0,u.onNavigationIntent)(e.currentTarget,!0===R)}};return(0,v.isAbsoluteUrl)(B)?X.href=B:N&&!S&&("a"!==o.type||"href"in o.props)||(X.href=(0,m.addBasePath)(B)),i=N?s.default.cloneElement(o,X):(0,a.jsx)("a",{...F,...X,children:l}),(0,a.jsx)(g.Provider,{value:n,children:i})}e.r(14328);let g=(0,s.createContext)(u.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},97622,(e,t,r)=>{t.exports=e.r(19355)},93612,e=>{"use strict";var t=e.i(92944),r=e.i(34726);function l(){let[e,l]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{"light"===localStorage.getItem("vel-mode")&&(l(!0),document.documentElement.setAttribute("data-vel-mode","light"))},[]),(0,t.jsxs)("button",{onClick:()=>{let t=!e;l(t),t?(document.documentElement.setAttribute("data-vel-mode","light"),localStorage.setItem("vel-mode","light")):(document.documentElement.removeAttribute("data-vel-mode"),localStorage.setItem("vel-mode","dark"))},title:e?"Switch to dark mode":"Switch to light mode",style:{background:"none",border:"1px solid var(--vel-border-base)",borderRadius:"0.5rem",padding:"0.35rem 0.5rem",cursor:"pointer",color:"var(--vel-color-text)",display:"flex",alignItems:"center",gap:"0.375rem",fontSize:"0.75rem",fontWeight:500,transition:"background 0.15s, border-color 0.15s"},children:[e?(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}):(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,t.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),(0,t.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,t.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),(0,t.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),(0,t.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),(0,t.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),(0,t.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),(0,t.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),e?"Dark":"Light"]})}e.s(["default",()=>l])},85267,e=>{"use strict";var t=e.i(92944),r=e.i(34726);let l=[{id:"pricing-card",title:"Pricing Card",description:"A clean pricing card with feature list and CTA button.",author:"VeloraX",github:"VeloraX",category:"block",tags:["pricing","marketing","card"],html:`<div class="vel-card vel-p-6" style="max-width:320px">
  <div class="vel-text-xs vel-font-bold vel-text-primary vel-mb-1" style="text-transform:uppercase;letter-spacing:0.1em">Pro Plan</div>
  <div class="vel-flex vel-items-end vel-gap-1 vel-mb-4">
    <span style="font-size:2.5rem;font-weight:800;color:var(--vel-color-text);line-height:1">$49</span>
    <span class="vel-text-muted vel-text-sm vel-mb-1">/month</span>
  </div>
  <ul style="list-style:none;padding:0;margin:0 0 1.5rem;display:flex;flex-direction:column;gap:0.625rem">
    <li class="vel-flex vel-items-center vel-gap-2 vel-text-sm"><span style="color:var(--vel-color-success)">&#x2713;</span> Unlimited projects</li>
    <li class="vel-flex vel-items-center vel-gap-2 vel-text-sm"><span style="color:var(--vel-color-success)">&#x2713;</span> 50GB storage</li>
    <li class="vel-flex vel-items-center vel-gap-2 vel-text-sm"><span style="color:var(--vel-color-success)">&#x2713;</span> Priority support</li>
    <li class="vel-flex vel-items-center vel-gap-2 vel-text-sm"><span style="color:var(--vel-color-success)">&#x2713;</span> Custom domains</li>
    <li class="vel-flex vel-items-center vel-gap-2 vel-text-sm vel-text-muted"><span>&#x2717;</span> White-label</li>
  </ul>
  <button class="vel-btn vel-btn-primary vel-btn-block">Get Started</button>
</div>`},{id:"stat-dashboard",title:"Stat Dashboard Row",description:"Four KPI cards in a responsive grid — perfect for dashboards.",author:"VeloraX",github:"VeloraX",category:"block",tags:["dashboard","stats","grid","kpi"],html:`<div class="vel-grid vel-gap-4" style="grid-template-columns:repeat(auto-fit,minmax(160px,1fr))">
  <div class="vel-card vel-p-4">
    <div class="vel-text-xs vel-text-muted vel-mb-1">Total Revenue</div>
    <div style="font-size:1.75rem;font-weight:800;color:var(--vel-color-text);line-height:1">$84.2k</div>
    <div class="vel-text-xs vel-mt-1" style="color:var(--vel-color-success)">&#x2191; 12.5% this month</div>
  </div>
  <div class="vel-card vel-p-4">
    <div class="vel-text-xs vel-text-muted vel-mb-1">Active Users</div>
    <div style="font-size:1.75rem;font-weight:800;color:var(--vel-color-text);line-height:1">3,421</div>
    <div class="vel-text-xs vel-mt-1" style="color:var(--vel-color-success)">&#x2191; 8.1% this month</div>
  </div>
  <div class="vel-card vel-p-4">
    <div class="vel-text-xs vel-text-muted vel-mb-1">Conversion</div>
    <div style="font-size:1.75rem;font-weight:800;color:var(--vel-color-text);line-height:1">4.7%</div>
    <div class="vel-text-xs vel-mt-1" style="color:var(--vel-color-danger)">&#x2193; 0.3% this month</div>
  </div>
  <div class="vel-card vel-p-4">
    <div class="vel-text-xs vel-text-muted vel-mb-1">Churn Rate</div>
    <div style="font-size:1.75rem;font-weight:800;color:var(--vel-color-text);line-height:1">1.2%</div>
    <div class="vel-text-xs vel-mt-1" style="color:var(--vel-color-success)">&#x2193; 0.4% (good)</div>
  </div>
</div>`},{id:"testimonial-card",title:"Testimonial Card",description:"A quote card with avatar, name, and role. Great for social proof.",author:"VeloraX",github:"VeloraX",category:"component",tags:["testimonial","quote","social-proof"],html:`<div class="vel-card vel-p-6" style="max-width:380px">
  <div class="vel-flex vel-gap-1 vel-mb-4" style="color:oklch(72% 0.19 75)">
    &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
  </div>
  <p class="vel-text-sm vel-mb-4" style="line-height:1.7;color:var(--vel-color-text)">"VeloraCSS is exactly what I was looking for — full component library, smart color system, and zero JavaScript overhead. Migrated our design system in a weekend."</p>
  <div class="vel-flex vel-items-center vel-gap-3">
    <div class="vel-avatar vel-avatar-md">SJ</div>
    <div>
      <div class="vel-text-sm vel-font-bold">Sarah Johnson</div>
      <div class="vel-text-xs vel-text-muted">Lead Designer at Acme Corp</div>
    </div>
  </div>
</div>`},{id:"newsletter-signup",title:"Newsletter Signup",description:"Email capture block with validation state using vel-field system.",author:"VeloraX",github:"VeloraX",category:"block",tags:["newsletter","form","email","cta"],html:`<div class="vel-card vel-p-8" style="max-width:480px;text-align:center">
  <div style="font-size:2rem;margin-bottom:0.75rem">&#x2709;&#xFE0F;</div>
  <h2 class="vel-font-bold vel-mb-2" style="font-size:1.375rem;color:var(--vel-color-text)">Stay in the loop</h2>
  <p class="vel-text-sm vel-text-muted vel-mb-6">Get the latest VeloraCSS updates, component drops, and CSS tips &#x2014; no spam, ever.</p>
  <form class="vel-smart-form" style="display:flex;flex-direction:column;gap:0.75rem">
    <div class="vel-field">
      <input class="vel-field-input" type="email" required placeholder=" " />
      <span class="vel-field-error">Please enter a valid email address.</span>
      <span class="vel-field-ok">Looks good!</span>
    </div>
    <button class="vel-btn vel-btn-primary vel-btn-block vel-form-submit" type="submit">Subscribe &#x2192;</button>
  </form>
  <p class="vel-text-xs vel-text-muted vel-mt-4">Join 1,200+ developers. Unsubscribe anytime.</p>
</div>`},{id:"feature-grid",title:"Feature Grid",description:"Six-feature marketing grid with icons, titles, and descriptions.",author:"VeloraX",github:"VeloraX",category:"block",tags:["features","marketing","grid","landing"],html:`<div class="vel-grid vel-gap-4" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x26A1;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Instant Preview</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">See changes live as you type with zero build step required.</div>
  </div>
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x1F3A8;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Color Genetics</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">One hue token drives your entire palette via oklch().</div>
  </div>
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x1F4E6;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Zero JS</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">Tabs, toggles, and forms need no JavaScript at all.</div>
  </div>
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x1F527;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Configurable</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">Override any token via velora.config.js at build time.</div>
  </div>
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x1F4F1;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Responsive</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">vel-sm: vel-md: vel-lg: variants on every utility class.</div>
  </div>
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x1F319;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Dark + Light</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">data-vel-mode="light" flips your entire color system.</div>
  </div>
</div>`},{id:"profile-card",title:"Profile Card",description:"User profile card with avatar, bio, stats, and action buttons.",author:"VeloraX",github:"VeloraX",category:"component",tags:["profile","user","card","social"],html:`<div class="vel-card vel-p-6" style="max-width:300px;text-align:center">
  <div class="vel-avatar vel-avatar-xl vel-mx-auto vel-mb-3">AK</div>
  <div class="vel-font-bold vel-mb-0.5" style="font-size:1.125rem">Alex Kim</div>
  <div class="vel-text-xs vel-text-muted vel-mb-3">Frontend Engineer &#xB7; San Francisco</div>
  <div class="vel-flex vel-gap-3 vel-justify-center vel-mb-4">
    <span class="vel-badge vel-badge-primary">React</span>
    <span class="vel-badge vel-badge-secondary">CSS</span>
    <span class="vel-badge">TypeScript</span>
  </div>
  <div class="vel-flex vel-gap-0 vel-mb-5" style="border:1px solid var(--vel-border-base);border-radius:0.5rem;overflow:hidden">
    <div style="flex:1;padding:0.625rem;text-align:center;border-right:1px solid var(--vel-border-base)">
      <div class="vel-font-bold vel-text-sm">248</div>
      <div class="vel-text-xs vel-text-muted">Posts</div>
    </div>
    <div style="flex:1;padding:0.625rem;text-align:center;border-right:1px solid var(--vel-border-base)">
      <div class="vel-font-bold vel-text-sm">12.4k</div>
      <div class="vel-text-xs vel-text-muted">Followers</div>
    </div>
    <div style="flex:1;padding:0.625rem;text-align:center">
      <div class="vel-font-bold vel-text-sm">891</div>
      <div class="vel-text-xs vel-text-muted">Following</div>
    </div>
  </div>
  <div class="vel-flex vel-gap-2">
    <button class="vel-btn vel-btn-primary vel-btn-sm" style="flex:1">Follow</button>
    <button class="vel-btn vel-btn-secondary vel-btn-sm" style="flex:1">Message</button>
  </div>
</div>`},{id:"notification-stack",title:"Notification Stack",description:"Three alert variants stacked — info, success, and warning.",author:"VeloraX",github:"VeloraX",category:"component",tags:["alerts","notifications","feedback"],html:`<div class="vel-flex vel-flex-col vel-gap-3" style="max-width:420px">
  <div class="vel-alert vel-alert-info vel-flex vel-items-start vel-gap-3">
    <span style="font-size:1rem;flex-shrink:0;margin-top:1px">&#x2139;&#xFE0F;</span>
    <div>
      <div class="vel-font-bold vel-text-sm vel-mb-0.5">Heads up</div>
      <div class="vel-text-xs">Your trial ends in 3 days. Upgrade to keep access to all features.</div>
    </div>
  </div>
  <div class="vel-alert vel-alert-success vel-flex vel-items-start vel-gap-3">
    <span style="font-size:1rem;flex-shrink:0;margin-top:1px">&#x2705;</span>
    <div>
      <div class="vel-font-bold vel-text-sm vel-mb-0.5">Deployment complete</div>
      <div class="vel-text-xs">Your app was deployed to production in 12 seconds.</div>
    </div>
  </div>
  <div class="vel-alert vel-alert-warning vel-flex vel-items-start vel-gap-3">
    <span style="font-size:1rem;flex-shrink:0;margin-top:1px">&#x26A0;&#xFE0F;</span>
    <div>
      <div class="vel-font-bold vel-text-sm vel-mb-0.5">Storage at 87%</div>
      <div class="vel-text-xs">You are running low on storage. Delete unused assets or upgrade.</div>
    </div>
  </div>
</div>`},{id:"kanban-card",title:"Kanban Task Card",description:"A task card with priority badge, assignee avatar, and progress bar.",author:"VeloraX",github:"VeloraX",category:"component",tags:["kanban","task","project","dashboard"],html:`<div class="vel-card vel-p-4" style="max-width:300px">
  <div class="vel-flex vel-items-center vel-justify-between vel-mb-3">
    <span class="vel-badge vel-badge-danger" style="font-size:0.65rem">High Priority</span>
    <span class="vel-text-xs vel-text-muted">Due Mar 15</span>
  </div>
  <div class="vel-font-bold vel-text-sm vel-mb-1">Redesign onboarding flow</div>
  <div class="vel-text-xs vel-text-muted vel-mb-3" style="line-height:1.5">Update the first-run experience with the new design system tokens and component library.</div>
  <div class="vel-mb-3">
    <div class="vel-flex vel-justify-between vel-text-xs vel-mb-1">
      <span class="vel-text-muted">Progress</span>
      <span class="vel-font-bold">72%</span>
    </div>
    <div class="vel-progress"><div class="vel-progress-bar" style="width:72%"></div></div>
  </div>
  <div class="vel-flex vel-items-center vel-justify-between">
    <div class="vel-flex vel-gap-1">
      <div class="vel-avatar" style="width:24px;height:24px;font-size:0.6rem">AK</div>
      <div class="vel-avatar" style="width:24px;height:24px;font-size:0.6rem">SJ</div>
      <div class="vel-avatar" style="width:24px;height:24px;font-size:0.6rem">+2</div>
    </div>
    <div class="vel-flex vel-gap-2 vel-text-xs vel-text-muted">
      <span>&#x1F4AC; 4</span>
      <span>&#x1F4CE; 2</span>
    </div>
  </div>
</div>`}];e.i(1535);var o=e.i(15457),i=e.i(97622),a=e.i(93612);let s="https://velorax.github.io/veloracss/playground",n=`
  .vsite-header {
    position: sticky; top: 0; z-index: 50;
    height: 52px;
    background: var(--vel-surface-1);
    border-bottom: 1px solid var(--vel-border-base);
    display: flex; align-items: center;
    padding: 0 1.5rem; gap: 1.5rem;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }
  .vsite-header-logo {
    display: flex; align-items: center; gap: 0.5rem;
    text-decoration: none; flex-shrink: 0;
  }
  .vsite-header-logo img { height: 24px; width: auto; }
  .vsite-header-sep { flex: 1; }
  .vsite-header-link {
    font-size: 0.82rem; font-weight: 500; color: var(--vel-color-muted);
    text-decoration: none; transition: color 0.12s; white-space: nowrap;
  }
  .vsite-header-link:hover { color: var(--vel-color-text); }
  .vsite-header-link.active { color: var(--vel-color-primary); font-weight: 600; }
  .vsite-header-cta {
    font-size: 0.78rem; font-weight: 600; padding: 0.3rem 0.875rem;
    border-radius: 0.4rem; background: var(--vel-color-primary); color: #fff;
    text-decoration: none; transition: background 0.12s; white-space: nowrap; flex-shrink: 0;
  }
  .vsite-header-cta:hover { background: var(--vel-color-primary-hover); }
`;function d({variant:e="default"}){let r=(0,i.usePathname)(),l=e=>r===e||r.startsWith(e+"/");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:n}}),(0,t.jsxs)("header",{className:"vsite-header",style:"transparent"===e?{background:"transparent",borderBottom:"none"}:void 0,children:[(0,t.jsx)(o.default,{href:"/",className:"vsite-header-logo",children:(0,t.jsx)("img",{src:"/veloracss/icon.png",alt:"VeloraCSS"})}),(0,t.jsx)("div",{className:"vsite-header-sep"}),(0,t.jsx)(o.default,{href:"/docs",className:`vsite-header-link${l("/docs")?" active":""}`,children:"Docs"}),(0,t.jsx)(o.default,{href:"/community",className:`vsite-header-link${l("/community")?" active":""}`,children:"Community"}),(0,t.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"vsite-header-link",children:"Playground"}),(0,t.jsx)("a",{href:"https://github.com/VeloraX/veloracss",target:"_blank",rel:"noopener noreferrer",className:"vsite-header-link",children:"GitHub"}),(0,t.jsx)("a",{href:"https://discord.gg/RKmSyudqAv",target:"_blank",rel:"noopener noreferrer",className:"vsite-header-link",children:"Discord"}),(0,t.jsx)(a.default,{}),(0,t.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"vsite-header-cta",children:"Try it live →"})]})]})}let c=`
  .vcom-card {
    background: var(--vel-surface-1);
    border: 1px solid var(--vel-border-base);
    border-radius: 0.75rem;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .vcom-card:hover {
    border-color: var(--vel-color-primary);
    box-shadow: 0 0 0 1px var(--vel-color-primary);
  }
  .vcom-filter-btn {
    padding: 0.35rem 0.875rem;
    border-radius: 9999px;
    border: 1px solid var(--vel-border-base);
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
    background: transparent;
    color: var(--vel-color-muted);
  }
  .vcom-filter-btn:hover {
    border-color: var(--vel-color-primary);
    color: var(--vel-color-primary);
  }
  .vcom-filter-btn.active {
    background: var(--vel-color-primary);
    color: #fff;
    border-color: var(--vel-color-primary);
  }
  .vcom-copy-btn {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 0.375rem;
    cursor: pointer;
    border: 1px solid var(--vel-border-base);
    background: var(--vel-surface-2);
    color: var(--vel-color-muted);
    transition: all 0.15s;
  }
  .vcom-copy-btn:hover {
    border-color: var(--vel-color-primary);
    color: var(--vel-color-primary);
  }
  .vcom-search {
    padding: 0.375rem 0.875rem;
    border-radius: 0.5rem;
    background: var(--vel-surface-2);
    border: 1px solid var(--vel-border-base);
    color: var(--vel-color-text);
    font-size: 0.8rem;
    outline: none;
    min-width: 220px;
    transition: border-color 0.15s;
  }
  .vcom-search:focus {
    border-color: var(--vel-color-primary);
  }
  .vcom-modal-copy-btn {
    padding: 0.4rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    background: var(--vel-color-primary);
    color: #fff;
    border: none;
    font-weight: 600;
    font-size: 0.8rem;
    transition: all 0.15s;
  }
  .vcom-modal-copy-btn.copied {
    background: oklch(65% 0.18 160 / 0.15);
    color: oklch(65% 0.18 160);
  }
  .vcom-nav-link {
    font-size: 0.8125rem;
    color: var(--vel-color-muted);
    text-decoration: none;
    transition: color 0.15s;
  }
  .vcom-nav-link:hover { color: var(--vel-color-text); }
  .vcom-submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--vel-color-primary);
    color: #fff;
    padding: 0.5rem 1.25rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 0.875rem;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .vcom-submit-btn:hover { opacity: 0.88; }
  .vcom-tag {
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: 99px;
    background: var(--vel-surface-2);
    color: var(--vel-color-muted);
    border: 1px solid var(--vel-border-base);
  }
  .vcom-cat-badge {
    font-size: 0.65rem;
    font-weight: 600;
    padding: 1px 7px;
    border-radius: 99px;
    background: oklch(65% 0.21 258 / 0.12);
    color: var(--vel-color-primary);
    border: 1px solid oklch(65% 0.21 258 / 0.25);
    text-transform: capitalize;
    flex-shrink: 0;
  }
  .vcom-preview-wrap {
    height: 200px;
    overflow: hidden;
    position: relative;
    background: var(--vel-surface-0);
    border-bottom: 1px solid var(--vel-border-base);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .vcom-preview-inner {
    transform: scale(0.7);
    transform-origin: center center;
    width: 130%;
    text-align: center;
    pointer-events: none;
  }
`,v=["all","component","block","layout","template"],m={all:"All",component:"Components",block:"Blocks",layout:"Layouts",template:"Templates"};function u(){let[e,o]=(0,r.useState)(""),[i,a]=(0,r.useState)("all"),[s,n]=(0,r.useState)(null),[u,p]=(0,r.useState)(!1),f=l.filter(t=>{let r="all"===i||t.category===i,l=e.toLowerCase(),o=!l||t.title.toLowerCase().includes(l)||t.tags.some(e=>e.includes(l))||t.description.toLowerCase().includes(l);return r&&o}),x=e=>{navigator.clipboard.writeText(e).then(()=>{p(!0),setTimeout(()=>p(!1),2e3)})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:c}}),(0,t.jsxs)("div",{style:{minHeight:"100vh",background:"var(--vel-surface-0)",fontFamily:"system-ui, -apple-system, sans-serif",color:"var(--vel-color-text)"},children:[(0,t.jsx)(d,{}),(0,t.jsxs)("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"3rem 2rem"},children:[(0,t.jsxs)("div",{style:{marginBottom:"3rem"},children:[(0,t.jsx)("h1",{style:{fontSize:"2.25rem",fontWeight:800,color:"var(--vel-color-text)",margin:"0 0 0.75rem",letterSpacing:"-0.03em"},children:"Community Components"}),(0,t.jsx)("p",{style:{fontSize:"1.05rem",color:"var(--vel-color-muted)",margin:"0 0 1.5rem",lineHeight:1.6},children:"Ready-to-use blocks and components built with VeloraCSS by the community. Copy, paste, and customize."}),(0,t.jsx)("a",{href:"https://github.com/VeloraX/veloracss/blob/main/community/README.md",target:"_blank",rel:"noopener noreferrer",className:"vcom-submit-btn",children:"+ Submit yours"})]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"2rem",flexWrap:"wrap"},children:[(0,t.jsx)("div",{style:{display:"flex",gap:"0.375rem"},children:v.map(e=>(0,t.jsx)("button",{onClick:()=>a(e),className:`vcom-filter-btn${i===e?" active":""}`,children:m[e]},e))}),(0,t.jsx)("input",{type:"search",placeholder:"Search components...",value:e,onChange:e=>o(e.target.value),className:"vcom-search"}),(0,t.jsxs)("span",{style:{fontSize:"0.8rem",color:"var(--vel-color-muted)",marginLeft:"auto"},children:[f.length," ",1===f.length?"component":"components"]})]}),(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"1.25rem"},children:f.map(e=>(0,t.jsxs)("div",{className:"vcom-card",onClick:()=>n(e),children:[(0,t.jsx)("div",{className:"vcom-preview-wrap",children:(0,t.jsx)("div",{className:"vcom-preview-inner",dangerouslySetInnerHTML:{__html:e.html}})}),(0,t.jsxs)("div",{style:{padding:"1rem"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"0.5rem",marginBottom:"0.375rem"},children:[(0,t.jsx)("div",{style:{fontWeight:700,fontSize:"0.9rem",color:"var(--vel-color-text)"},children:e.title}),(0,t.jsx)("span",{className:"vcom-cat-badge",children:e.category})]}),(0,t.jsx)("div",{style:{fontSize:"0.78rem",color:"var(--vel-color-muted)",marginBottom:"0.875rem",lineHeight:1.5},children:e.description}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,t.jsxs)("a",{href:e.github?`https://github.com/${e.github}`:"#",target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),style:{fontSize:"0.75rem",color:"var(--vel-color-muted)",textDecoration:"none"},children:["@",e.author]}),(0,t.jsx)("button",{className:"vcom-copy-btn",onClick:t=>{t.stopPropagation(),x(e.html)},children:"Copy"})]})]})]},e.id))}),0===f.length&&(0,t.jsxs)("div",{style:{textAlign:"center",padding:"4rem 2rem",color:"var(--vel-color-muted)"},children:[(0,t.jsx)("div",{style:{fontSize:"2rem",marginBottom:"0.75rem"},children:"🔍"}),(0,t.jsx)("div",{style:{fontWeight:600,marginBottom:"0.5rem"},children:"No components found"}),(0,t.jsx)("div",{style:{fontSize:"0.875rem"},children:"Try a different search term or category."})]})]}),s&&(0,t.jsx)("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},onClick:()=>n(null),children:(0,t.jsxs)("div",{style:{background:"var(--vel-surface-1)",border:"1px solid var(--vel-border-base)",borderRadius:"1rem",width:"100%",maxWidth:"800px",maxHeight:"90vh",overflow:"auto"},onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)("div",{style:{padding:"1.25rem 1.5rem",borderBottom:"1px solid var(--vel-border-base)",display:"flex",alignItems:"center",gap:"1rem"},children:[(0,t.jsxs)("div",{style:{flex:1},children:[(0,t.jsx)("div",{style:{fontWeight:700,fontSize:"1.05rem",color:"var(--vel-color-text)"},children:s.title}),(0,t.jsx)("div",{style:{fontSize:"0.78rem",color:"var(--vel-color-muted)",marginTop:"0.125rem"},children:s.description})]}),(0,t.jsx)("button",{className:`vcom-modal-copy-btn${u?" copied":""}`,onClick:()=>x(s.html),children:u?"✓ Copied!":"Copy Code"}),(0,t.jsx)("button",{onClick:()=>n(null),style:{background:"none",border:"none",color:"var(--vel-color-muted)",cursor:"pointer",fontSize:"1.25rem",lineHeight:1,padding:"0.25rem"},children:"×"})]}),(0,t.jsx)("div",{style:{padding:"2rem",background:"var(--vel-surface-0)",borderBottom:"1px solid var(--vel-border-base)",display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"1rem"},dangerouslySetInnerHTML:{__html:s.html}}),(0,t.jsx)("div",{style:{padding:"1.25rem 1.5rem"},children:(0,t.jsx)("pre",{style:{margin:0,padding:"1rem 1.25rem",background:"#0C0C0C",borderRadius:"0.625rem",color:"#CCCCCC",fontSize:"0.775rem",lineHeight:1.75,fontFamily:"'Cascadia Code', Consolas, monospace",whiteSpace:"pre-wrap",wordBreak:"break-all",overflowX:"auto",maxHeight:"280px",overflowY:"auto"},children:(0,t.jsx)("code",{children:s.html})})}),(0,t.jsx)("div",{style:{padding:"0.75rem 1.5rem",borderTop:"1px solid var(--vel-border-base)",display:"flex",gap:"0.375rem",flexWrap:"wrap"},children:s.tags.map(e=>(0,t.jsx)("span",{className:"vcom-tag",children:e},e))})]})})]})]})}e.s(["default",()=>u],85267)}]);