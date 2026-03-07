(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();function Fc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gv={exports:{}},hr={},hv={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vt=Symbol.for("react.element"),Uc=Symbol.for("react.portal"),$c=Symbol.for("react.fragment"),Vc=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Hc=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Yc=Symbol.for("react.memo"),Kc=Symbol.for("react.lazy"),Za=Symbol.iterator;function Xc(e){return e===null||typeof e!="object"?null:(e=Za&&e[Za]||e["@@iterator"],typeof e=="function"?e:null)}var xv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wv=Object.assign,bv={};function xl(e,n,l){this.props=e,this.context=n,this.refs=bv,this.updater=l||xv}xl.prototype.isReactComponent={};xl.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};xl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yv(){}yv.prototype=xl.prototype;function ta(e,n,l){this.props=e,this.context=n,this.refs=bv,this.updater=l||xv}var ra=ta.prototype=new yv;ra.constructor=ta;wv(ra,xl.prototype);ra.isPureReactComponent=!0;var Ja=Array.isArray,kv=Object.prototype.hasOwnProperty,oa={current:null},zv={key:!0,ref:!0,__self:!0,__source:!0};function Sv(e,n,l){var t,r={},o=null,a=null;if(n!=null)for(t in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)kv.call(n,t)&&!zv.hasOwnProperty(t)&&(r[t]=n[t]);var i=arguments.length-2;if(i===1)r.children=l;else if(1<i){for(var v=Array(i),c=0;c<i;c++)v[c]=arguments[c+2];r.children=v}if(e&&e.defaultProps)for(t in i=e.defaultProps,i)r[t]===void 0&&(r[t]=i[t]);return{$$typeof:vt,type:e,key:o,ref:a,props:r,_owner:oa.current}}function Gc(e,n){return{$$typeof:vt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function aa(e){return typeof e=="object"&&e!==null&&e.$$typeof===vt}function Zc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(l){return n[l]})}var qa=/\/+/g;function Mr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Zc(""+e.key):n.toString(36)}function Mt(e,n,l,t,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case vt:case Uc:a=!0}}if(a)return a=e,r=r(a),e=t===""?"."+Mr(a,0):t,Ja(r)?(l="",e!=null&&(l=e.replace(qa,"$&/")+"/"),Mt(r,n,l,"",function(c){return c})):r!=null&&(aa(r)&&(r=Gc(r,l+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(qa,"$&/")+"/")+e)),n.push(r)),1;if(a=0,t=t===""?".":t+":",Ja(e))for(var i=0;i<e.length;i++){o=e[i];var v=t+Mr(o,i);a+=Mt(o,n,l,v,r)}else if(v=Xc(e),typeof v=="function")for(e=v.call(e),i=0;!(o=e.next()).done;)o=o.value,v=t+Mr(o,i++),a+=Mt(o,n,l,v,r);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function ft(e,n,l){if(e==null)return e;var t=[],r=0;return Mt(e,t,"","",function(o){return n.call(l,o,r++)}),t}function Jc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l)},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Rt={transition:null},qc={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Rt,ReactCurrentOwner:oa};function jv(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:ft,forEach:function(e,n,l){ft(e,function(){n.apply(this,arguments)},l)},count:function(e){var n=0;return ft(e,function(){n++}),n},toArray:function(e){return ft(e,function(n){return n})||[]},only:function(e){if(!aa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=xl;I.Fragment=$c;I.Profiler=Ac;I.PureComponent=ta;I.StrictMode=Vc;I.Suspense=Qc;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qc;I.act=jv;I.cloneElement=function(e,n,l){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=wv({},e.props),r=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=oa.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(v in n)kv.call(n,v)&&!zv.hasOwnProperty(v)&&(t[v]=n[v]===void 0&&i!==void 0?i[v]:n[v])}var v=arguments.length-2;if(v===1)t.children=l;else if(1<v){i=Array(v);for(var c=0;c<v;c++)i[c]=arguments[c+2];t.children=i}return{$$typeof:vt,type:e.type,key:r,ref:o,props:t,_owner:a}};I.createContext=function(e){return e={$$typeof:Hc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bc,_context:e},e.Consumer=e};I.createElement=Sv;I.createFactory=function(e){var n=Sv.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Wc,render:e}};I.isValidElement=aa;I.lazy=function(e){return{$$typeof:Kc,_payload:{_status:-1,_result:e},_init:Jc}};I.memo=function(e,n){return{$$typeof:Yc,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=Rt.transition;Rt.transition={};try{e()}finally{Rt.transition=n}};I.unstable_act=jv;I.useCallback=function(e,n){return pe.current.useCallback(e,n)};I.useContext=function(e){return pe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};I.useEffect=function(e,n){return pe.current.useEffect(e,n)};I.useId=function(){return pe.current.useId()};I.useImperativeHandle=function(e,n,l){return pe.current.useImperativeHandle(e,n,l)};I.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return pe.current.useMemo(e,n)};I.useReducer=function(e,n,l){return pe.current.useReducer(e,n,l)};I.useRef=function(e){return pe.current.useRef(e)};I.useState=function(e){return pe.current.useState(e)};I.useSyncExternalStore=function(e,n,l){return pe.current.useSyncExternalStore(e,n,l)};I.useTransition=function(){return pe.current.useTransition()};I.version="18.3.1";hv.exports=I;var _=hv.exports;const rl=Fc(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eu=_,nu=Symbol.for("react.element"),lu=Symbol.for("react.fragment"),tu=Object.prototype.hasOwnProperty,ru=eu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ou={key:!0,ref:!0,__self:!0,__source:!0};function Cv(e,n,l){var t,r={},o=null,a=null;l!==void 0&&(o=""+l),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(t in n)tu.call(n,t)&&!ou.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)r[t]===void 0&&(r[t]=n[t]);return{$$typeof:nu,type:e,key:o,ref:a,props:r,_owner:ru.current}}hr.Fragment=lu;hr.jsx=Cv;hr.jsxs=Cv;gv.exports=hr;var D=gv.exports,Ev={exports:{}},Ce={},_v={exports:{}},Pv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(S,T){var O=S.length;S.push(T);e:for(;0<O;){var P=O-1>>>1,L=S[P];if(0<r(L,T))S[P]=T,S[O]=L,O=P;else break e}}function l(S){return S.length===0?null:S[0]}function t(S){if(S.length===0)return null;var T=S[0],O=S.pop();if(O!==T){S[0]=O;e:for(var P=0,L=S.length,ne=L>>>1;P<ne;){var be=2*(P+1)-1,He=S[be],Pn=be+1,mt=S[Pn];if(0>r(He,O))Pn<L&&0>r(mt,He)?(S[P]=mt,S[Pn]=O,P=Pn):(S[P]=He,S[be]=O,P=be);else if(Pn<L&&0>r(mt,O))S[P]=mt,S[Pn]=O,P=Pn;else break e}}return T}function r(S,T){var O=S.sortIndex-T.sortIndex;return O!==0?O:S.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,i=a.now();e.unstable_now=function(){return a.now()-i}}var v=[],c=[],g=1,m=null,p=3,w=!1,b=!1,z=!1,U=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(S){for(var T=l(c);T!==null;){if(T.callback===null)t(c);else if(T.startTime<=S)t(c),T.sortIndex=T.expirationTime,n(v,T);else break;T=l(c)}}function h(S){if(z=!1,d(S),!b)if(l(v)!==null)b=!0,V(f);else{var T=l(c);T!==null&&_e(h,T.startTime-S)}}function f(S,T){b=!1,z&&(z=!1,u(E),E=-1),w=!0;var O=p;try{for(d(T),m=l(v);m!==null&&(!(m.expirationTime>T)||S&&!ee());){var P=m.callback;if(typeof P=="function"){m.callback=null,p=m.priorityLevel;var L=P(m.expirationTime<=T);T=e.unstable_now(),typeof L=="function"?m.callback=L:m===l(v)&&t(v),d(T)}else t(v);m=l(v)}if(m!==null)var ne=!0;else{var be=l(c);be!==null&&_e(h,be.startTime-T),ne=!1}return ne}finally{m=null,p=O,w=!1}}var k=!1,y=null,E=-1,R=5,C=-1;function ee(){return!(e.unstable_now()-C<R)}function Ae(){if(y!==null){var S=e.unstable_now();C=S;var T=!0;try{T=y(!0,S)}finally{T?Be():(k=!1,y=null)}}else k=!1}var Be;if(typeof s=="function")Be=function(){s(Ae)};else if(typeof MessageChannel<"u"){var an=new MessageChannel,N=an.port2;an.port1.onmessage=Ae,Be=function(){N.postMessage(null)}}else Be=function(){U(Ae,0)};function V(S){y=S,k||(k=!0,Be())}function _e(S,T){E=U(function(){S(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,V(f))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return l(v)},e.unstable_next=function(S){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var O=p;p=T;try{return S()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,T){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var O=p;p=S;try{return T()}finally{p=O}},e.unstable_scheduleCallback=function(S,T,O){var P=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?P+O:P):O=P,S){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=O+L,S={id:g++,callback:T,priorityLevel:S,startTime:O,expirationTime:L,sortIndex:-1},O>P?(S.sortIndex=O,n(c,S),l(v)===null&&S===l(c)&&(z?(u(E),E=-1):z=!0,_e(h,O-P))):(S.sortIndex=L,n(v,S),b||w||(b=!0,V(f))),S},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(S){var T=p;return function(){var O=p;p=T;try{return S.apply(this,arguments)}finally{p=O}}}})(Pv);_v.exports=Pv;var au=_v.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu=_,je=au;function x(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,l=1;l<arguments.length;l++)n+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tv=new Set,Hl={};function An(e,n){ul(e,n),ul(e+"Capture",n)}function ul(e,n){for(Hl[e]=n,e=0;e<n.length;e++)Tv.add(n[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),so=Object.prototype.hasOwnProperty,vu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ei={},ni={};function su(e){return so.call(ni,e)?!0:so.call(ei,e)?!1:vu.test(e)?ni[e]=!0:(ei[e]=!0,!1)}function cu(e,n,l,t){if(l!==null&&l.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:l!==null?!l.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function uu(e,n,l,t){if(n===null||typeof n>"u"||cu(e,n,l,t))return!0;if(t)return!1;if(l!==null)switch(l.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function me(e,n,l,t,r,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=r,this.mustUseProperty=l,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ae[n]=new me(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ia,va);ae[n]=new me(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ia,va);ae[n]=new me(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ia,va);ae[n]=new me(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,n,l,t){var r=ae.hasOwnProperty(n)?ae[n]:null;(r!==null?r.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(uu(n,l,r,t)&&(l=null),t||r===null?su(n)&&(l===null?e.removeAttribute(n):e.setAttribute(n,""+l)):r.mustUseProperty?e[r.propertyName]=l===null?r.type===3?!1:"":l:(n=r.attributeName,t=r.attributeNamespace,l===null?e.removeAttribute(n):(r=r.type,l=r===3||r===4&&l===!0?"":""+l,t?e.setAttributeNS(t,n,l):e.setAttribute(n,l))))}var on=iu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gt=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),ca=Symbol.for("react.strict_mode"),co=Symbol.for("react.profiler"),Nv=Symbol.for("react.provider"),Lv=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),uo=Symbol.for("react.suspense"),po=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Ov=Symbol.for("react.offscreen"),li=Symbol.iterator;function yl(e){return e===null||typeof e!="object"?null:(e=li&&e[li]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Rr;function Pl(e){if(Rr===void 0)try{throw Error()}catch(l){var n=l.stack.trim().match(/\n( *(at )?)/);Rr=n&&n[1]||""}return`
`+Rr+e}var Dr=!1;function Ir(e,n){if(!e||Dr)return"";Dr=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var t=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){t=c}e.call(n.prototype)}else{try{throw Error()}catch(c){t=c}e()}}catch(c){if(c&&t&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=t.stack.split(`
`),a=r.length-1,i=o.length-1;1<=a&&0<=i&&r[a]!==o[i];)i--;for(;1<=a&&0<=i;a--,i--)if(r[a]!==o[i]){if(a!==1||i!==1)do if(a--,i--,0>i||r[a]!==o[i]){var v=`
`+r[a].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=a&&0<=i);break}}}finally{Dr=!1,Error.prepareStackTrace=l}return(e=e?e.displayName||e.name:"")?Pl(e):""}function du(e){switch(e.tag){case 5:return Pl(e.type);case 16:return Pl("Lazy");case 13:return Pl("Suspense");case 19:return Pl("SuspenseList");case 0:case 2:case 15:return e=Ir(e.type,!1),e;case 11:return e=Ir(e.type.render,!1),e;case 1:return e=Ir(e.type,!0),e;default:return""}}function mo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Wn:return"Portal";case co:return"Profiler";case ca:return"StrictMode";case uo:return"Suspense";case po:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lv:return(e.displayName||"Context")+".Consumer";case Nv:return(e._context.displayName||"Context")+".Provider";case ua:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return n=e.displayName||null,n!==null?n:mo(e.type)||"Memo";case sn:n=e._payload,e=e._init;try{return mo(e(n))}catch{}}return null}function pu(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mo(n);case 8:return n===ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mv(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function mu(e){var n=Mv(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,o=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(a){t=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(a){t=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ht(e){e._valueTracker||(e._valueTracker=mu(e))}function Rv(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var l=n.getValue(),t="";return e&&(t=Mv(e)?e.checked?"true":"false":e.value),e=t,e!==l?(n.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,n){var l=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??e._wrapperState.initialChecked})}function ti(e,n){var l=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;l=Sn(n.value!=null?n.value:l),e._wrapperState={initialChecked:t,initialValue:l,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Dv(e,n){n=n.checked,n!=null&&sa(e,"checked",n,!1)}function go(e,n){Dv(e,n);var l=Sn(n.value),t=n.type;if(l!=null)t==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+l):e.value!==""+l&&(e.value=""+l);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ho(e,n.type,l):n.hasOwnProperty("defaultValue")&&ho(e,n.type,Sn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ri(e,n,l){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,l||n===e.value||(e.value=n),e.defaultValue=n}l=e.name,l!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,l!==""&&(e.name=l)}function ho(e,n,l){(n!=="number"||Qt(e.ownerDocument)!==e)&&(l==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+l&&(e.defaultValue=""+l))}var Tl=Array.isArray;function ol(e,n,l,t){if(e=e.options,n){n={};for(var r=0;r<l.length;r++)n["$"+l[r]]=!0;for(l=0;l<e.length;l++)r=n.hasOwnProperty("$"+e[l].value),e[l].selected!==r&&(e[l].selected=r),r&&t&&(e[l].defaultSelected=!0)}else{for(l=""+Sn(l),n=null,r=0;r<e.length;r++){if(e[r].value===l){e[r].selected=!0,t&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function xo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(x(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oi(e,n){var l=n.value;if(l==null){if(l=n.children,n=n.defaultValue,l!=null){if(n!=null)throw Error(x(92));if(Tl(l)){if(1<l.length)throw Error(x(93));l=l[0]}n=l}n==null&&(n=""),l=n}e._wrapperState={initialValue:Sn(l)}}function Iv(e,n){var l=Sn(n.value),t=Sn(n.defaultValue);l!=null&&(l=""+l,l!==e.value&&(e.value=l),n.defaultValue==null&&e.defaultValue!==l&&(e.defaultValue=l)),t!=null&&(e.defaultValue=""+t)}function ai(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Fv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Fv(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xt,Uv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,l,t,r){MSApp.execUnsafeLocalFunction(function(){return e(n,l,t,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xt=xt||document.createElement("div"),xt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Wl(e,n){if(n){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=n;return}}e.textContent=n}var Ml={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fu=["Webkit","ms","Moz","O"];Object.keys(Ml).forEach(function(e){fu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ml[n]=Ml[e]})});function $v(e,n,l){return n==null||typeof n=="boolean"||n===""?"":l||typeof n!="number"||n===0||Ml.hasOwnProperty(e)&&Ml[e]?(""+n).trim():n+"px"}function Vv(e,n){e=e.style;for(var l in n)if(n.hasOwnProperty(l)){var t=l.indexOf("--")===0,r=$v(l,n[l],t);l==="float"&&(l="cssFloat"),t?e.setProperty(l,r):e[l]=r}}var gu=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bo(e,n){if(n){if(gu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(x(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(x(61))}if(n.style!=null&&typeof n.style!="object")throw Error(x(62))}}function yo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ko=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zo=null,al=null,il=null;function ii(e){if(e=ut(e)){if(typeof zo!="function")throw Error(x(280));var n=e.stateNode;n&&(n=kr(n),zo(e.stateNode,e.type,n))}}function Av(e){al?il?il.push(e):il=[e]:al=e}function Bv(){if(al){var e=al,n=il;if(il=al=null,ii(e),n)for(e=0;e<n.length;e++)ii(n[e])}}function Hv(e,n){return e(n)}function Wv(){}var Fr=!1;function Qv(e,n,l){if(Fr)return e(n,l);Fr=!0;try{return Hv(e,n,l)}finally{Fr=!1,(al!==null||il!==null)&&(Wv(),Bv())}}function Ql(e,n){var l=e.stateNode;if(l===null)return null;var t=kr(l);if(t===null)return null;l=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(x(231,n,typeof l));return l}var So=!1;if(nn)try{var kl={};Object.defineProperty(kl,"passive",{get:function(){So=!0}}),window.addEventListener("test",kl,kl),window.removeEventListener("test",kl,kl)}catch{So=!1}function hu(e,n,l,t,r,o,a,i,v){var c=Array.prototype.slice.call(arguments,3);try{n.apply(l,c)}catch(g){this.onError(g)}}var Rl=!1,Yt=null,Kt=!1,jo=null,xu={onError:function(e){Rl=!0,Yt=e}};function wu(e,n,l,t,r,o,a,i,v){Rl=!1,Yt=null,hu.apply(xu,arguments)}function bu(e,n,l,t,r,o,a,i,v){if(wu.apply(this,arguments),Rl){if(Rl){var c=Yt;Rl=!1,Yt=null}else throw Error(x(198));Kt||(Kt=!0,jo=c)}}function Bn(e){var n=e,l=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(l=n.return),e=n.return;while(e)}return n.tag===3?l:null}function Yv(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function vi(e){if(Bn(e)!==e)throw Error(x(188))}function yu(e){var n=e.alternate;if(!n){if(n=Bn(e),n===null)throw Error(x(188));return n!==e?null:e}for(var l=e,t=n;;){var r=l.return;if(r===null)break;var o=r.alternate;if(o===null){if(t=r.return,t!==null){l=t;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===l)return vi(r),e;if(o===t)return vi(r),n;o=o.sibling}throw Error(x(188))}if(l.return!==t.return)l=r,t=o;else{for(var a=!1,i=r.child;i;){if(i===l){a=!0,l=r,t=o;break}if(i===t){a=!0,t=r,l=o;break}i=i.sibling}if(!a){for(i=o.child;i;){if(i===l){a=!0,l=o,t=r;break}if(i===t){a=!0,t=o,l=r;break}i=i.sibling}if(!a)throw Error(x(189))}}if(l.alternate!==t)throw Error(x(190))}if(l.tag!==3)throw Error(x(188));return l.stateNode.current===l?e:n}function Kv(e){return e=yu(e),e!==null?Xv(e):null}function Xv(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Xv(e);if(n!==null)return n;e=e.sibling}return null}var Gv=je.unstable_scheduleCallback,si=je.unstable_cancelCallback,ku=je.unstable_shouldYield,zu=je.unstable_requestPaint,G=je.unstable_now,Su=je.unstable_getCurrentPriorityLevel,ma=je.unstable_ImmediatePriority,Zv=je.unstable_UserBlockingPriority,Xt=je.unstable_NormalPriority,ju=je.unstable_LowPriority,Jv=je.unstable_IdlePriority,xr=null,Ke=null;function Cu(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(xr,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Pu,Eu=Math.log,_u=Math.LN2;function Pu(e){return e>>>=0,e===0?32:31-(Eu(e)/_u|0)|0}var wt=64,bt=4194304;function Nl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gt(e,n){var l=e.pendingLanes;if(l===0)return 0;var t=0,r=e.suspendedLanes,o=e.pingedLanes,a=l&268435455;if(a!==0){var i=a&~r;i!==0?t=Nl(i):(o&=a,o!==0&&(t=Nl(o)))}else a=l&~r,a!==0?t=Nl(a):o!==0&&(t=Nl(o));if(t===0)return 0;if(n!==0&&n!==t&&!(n&r)&&(r=t&-t,o=n&-n,r>=o||r===16&&(o&4194240)!==0))return n;if(t&4&&(t|=l&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)l=31-Ue(n),r=1<<l,t|=e[l],n&=~r;return t}function Tu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nu(e,n){for(var l=e.suspendedLanes,t=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ue(o),i=1<<a,v=r[a];v===-1?(!(i&l)||i&t)&&(r[a]=Tu(i,n)):v<=n&&(e.expiredLanes|=i),o&=~i}}function Co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qv(){var e=wt;return wt<<=1,!(wt&4194240)&&(wt=64),e}function Ur(e){for(var n=[],l=0;31>l;l++)n.push(e);return n}function st(e,n,l){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ue(n),e[n]=l}function Lu(e,n){var l=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<l;){var r=31-Ue(l),o=1<<r;n[r]=0,t[r]=-1,e[r]=-1,l&=~o}}function fa(e,n){var l=e.entangledLanes|=n;for(e=e.entanglements;l;){var t=31-Ue(l),r=1<<t;r&n|e[t]&n&&(e[t]|=n),l&=~r}}var $=0;function es(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ns,ga,ls,ts,rs,Eo=!1,yt=[],fn=null,gn=null,hn=null,Yl=new Map,Kl=new Map,un=[],Ou="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ci(e,n){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Yl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(n.pointerId)}}function zl(e,n,l,t,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:l,eventSystemFlags:t,nativeEvent:o,targetContainers:[r]},n!==null&&(n=ut(n),n!==null&&ga(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Mu(e,n,l,t,r){switch(n){case"focusin":return fn=zl(fn,e,n,l,t,r),!0;case"dragenter":return gn=zl(gn,e,n,l,t,r),!0;case"mouseover":return hn=zl(hn,e,n,l,t,r),!0;case"pointerover":var o=r.pointerId;return Yl.set(o,zl(Yl.get(o)||null,e,n,l,t,r)),!0;case"gotpointercapture":return o=r.pointerId,Kl.set(o,zl(Kl.get(o)||null,e,n,l,t,r)),!0}return!1}function os(e){var n=Ln(e.target);if(n!==null){var l=Bn(n);if(l!==null){if(n=l.tag,n===13){if(n=Yv(l),n!==null){e.blockedOn=n,rs(e.priority,function(){ls(l)});return}}else if(n===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dt(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var l=_o(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(l===null){l=e.nativeEvent;var t=new l.constructor(l.type,l);ko=t,l.target.dispatchEvent(t),ko=null}else return n=ut(l),n!==null&&ga(n),e.blockedOn=l,!1;n.shift()}return!0}function ui(e,n,l){Dt(e)&&l.delete(n)}function Ru(){Eo=!1,fn!==null&&Dt(fn)&&(fn=null),gn!==null&&Dt(gn)&&(gn=null),hn!==null&&Dt(hn)&&(hn=null),Yl.forEach(ui),Kl.forEach(ui)}function Sl(e,n){e.blockedOn===n&&(e.blockedOn=null,Eo||(Eo=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Ru)))}function Xl(e){function n(r){return Sl(r,e)}if(0<yt.length){Sl(yt[0],e);for(var l=1;l<yt.length;l++){var t=yt[l];t.blockedOn===e&&(t.blockedOn=null)}}for(fn!==null&&Sl(fn,e),gn!==null&&Sl(gn,e),hn!==null&&Sl(hn,e),Yl.forEach(n),Kl.forEach(n),l=0;l<un.length;l++)t=un[l],t.blockedOn===e&&(t.blockedOn=null);for(;0<un.length&&(l=un[0],l.blockedOn===null);)os(l),l.blockedOn===null&&un.shift()}var vl=on.ReactCurrentBatchConfig,Zt=!0;function Du(e,n,l,t){var r=$,o=vl.transition;vl.transition=null;try{$=1,ha(e,n,l,t)}finally{$=r,vl.transition=o}}function Iu(e,n,l,t){var r=$,o=vl.transition;vl.transition=null;try{$=4,ha(e,n,l,t)}finally{$=r,vl.transition=o}}function ha(e,n,l,t){if(Zt){var r=_o(e,n,l,t);if(r===null)Xr(e,n,t,Jt,l),ci(e,t);else if(Mu(r,e,n,l,t))t.stopPropagation();else if(ci(e,t),n&4&&-1<Ou.indexOf(e)){for(;r!==null;){var o=ut(r);if(o!==null&&ns(o),o=_o(e,n,l,t),o===null&&Xr(e,n,t,Jt,l),o===r)break;r=o}r!==null&&t.stopPropagation()}else Xr(e,n,t,null,l)}}var Jt=null;function _o(e,n,l,t){if(Jt=null,e=pa(t),e=Ln(e),e!==null)if(n=Bn(e),n===null)e=null;else if(l=n.tag,l===13){if(e=Yv(n),e!==null)return e;e=null}else if(l===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Jt=e,null}function as(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Su()){case ma:return 1;case Zv:return 4;case Xt:case ju:return 16;case Jv:return 536870912;default:return 16}default:return 16}}var pn=null,xa=null,It=null;function is(){if(It)return It;var e,n=xa,l=n.length,t,r="value"in pn?pn.value:pn.textContent,o=r.length;for(e=0;e<l&&n[e]===r[e];e++);var a=l-e;for(t=1;t<=a&&n[l-t]===r[o-t];t++);return It=r.slice(e,1<t?1-t:void 0)}function Ft(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kt(){return!0}function di(){return!1}function Ee(e){function n(l,t,r,o,a){this._reactName=l,this._targetInst=r,this.type=t,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(l=e[i],this[i]=l?l(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?kt:di,this.isPropagationStopped=di,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=kt)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=kt)},persist:function(){},isPersistent:kt}),n}var wl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wa=Ee(wl),ct=K({},wl,{view:0,detail:0}),Fu=Ee(ct),$r,Vr,jl,wr=K({},ct,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ba,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jl&&(jl&&e.type==="mousemove"?($r=e.screenX-jl.screenX,Vr=e.screenY-jl.screenY):Vr=$r=0,jl=e),$r)},movementY:function(e){return"movementY"in e?e.movementY:Vr}}),pi=Ee(wr),Uu=K({},wr,{dataTransfer:0}),$u=Ee(Uu),Vu=K({},ct,{relatedTarget:0}),Ar=Ee(Vu),Au=K({},wl,{animationName:0,elapsedTime:0,pseudoElement:0}),Bu=Ee(Au),Hu=K({},wl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wu=Ee(Hu),Qu=K({},wl,{data:0}),mi=Ee(Qu),Yu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ku={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xu[e])?!!n[e]:!1}function ba(){return Gu}var Zu=K({},ct,{key:function(e){if(e.key){var n=Yu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ft(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ku[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ba,charCode:function(e){return e.type==="keypress"?Ft(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ft(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ju=Ee(Zu),qu=K({},wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fi=Ee(qu),ed=K({},ct,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ba}),nd=Ee(ed),ld=K({},wl,{propertyName:0,elapsedTime:0,pseudoElement:0}),td=Ee(ld),rd=K({},wr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),od=Ee(rd),ad=[9,13,27,32],ya=nn&&"CompositionEvent"in window,Dl=null;nn&&"documentMode"in document&&(Dl=document.documentMode);var id=nn&&"TextEvent"in window&&!Dl,vs=nn&&(!ya||Dl&&8<Dl&&11>=Dl),gi=" ",hi=!1;function ss(e,n){switch(e){case"keyup":return ad.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function vd(e,n){switch(e){case"compositionend":return cs(n);case"keypress":return n.which!==32?null:(hi=!0,gi);case"textInput":return e=n.data,e===gi&&hi?null:e;default:return null}}function sd(e,n){if(Yn)return e==="compositionend"||!ya&&ss(e,n)?(e=is(),It=xa=pn=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vs&&n.locale!=="ko"?null:n.data;default:return null}}var cd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cd[e.type]:n==="textarea"}function us(e,n,l,t){Av(t),n=qt(n,"onChange"),0<n.length&&(l=new wa("onChange","change",null,l,t),e.push({event:l,listeners:n}))}var Il=null,Gl=null;function ud(e){ks(e,0)}function br(e){var n=Gn(e);if(Rv(n))return e}function dd(e,n){if(e==="change")return n}var ds=!1;if(nn){var Br;if(nn){var Hr="oninput"in document;if(!Hr){var wi=document.createElement("div");wi.setAttribute("oninput","return;"),Hr=typeof wi.oninput=="function"}Br=Hr}else Br=!1;ds=Br&&(!document.documentMode||9<document.documentMode)}function bi(){Il&&(Il.detachEvent("onpropertychange",ps),Gl=Il=null)}function ps(e){if(e.propertyName==="value"&&br(Gl)){var n=[];us(n,Gl,e,pa(e)),Qv(ud,n)}}function pd(e,n,l){e==="focusin"?(bi(),Il=n,Gl=l,Il.attachEvent("onpropertychange",ps)):e==="focusout"&&bi()}function md(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return br(Gl)}function fd(e,n){if(e==="click")return br(n)}function gd(e,n){if(e==="input"||e==="change")return br(n)}function hd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ve=typeof Object.is=="function"?Object.is:hd;function Zl(e,n){if(Ve(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var l=Object.keys(e),t=Object.keys(n);if(l.length!==t.length)return!1;for(t=0;t<l.length;t++){var r=l[t];if(!so.call(n,r)||!Ve(e[r],n[r]))return!1}return!0}function yi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ki(e,n){var l=yi(e);e=0;for(var t;l;){if(l.nodeType===3){if(t=e+l.textContent.length,e<=n&&t>=n)return{node:l,offset:n-e};e=t}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=yi(l)}}function ms(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ms(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function fs(){for(var e=window,n=Qt();n instanceof e.HTMLIFrameElement;){try{var l=typeof n.contentWindow.location.href=="string"}catch{l=!1}if(l)e=n.contentWindow;else break;n=Qt(e.document)}return n}function ka(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function xd(e){var n=fs(),l=e.focusedElem,t=e.selectionRange;if(n!==l&&l&&l.ownerDocument&&ms(l.ownerDocument.documentElement,l)){if(t!==null&&ka(l)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in l)l.selectionStart=n,l.selectionEnd=Math.min(e,l.value.length);else if(e=(n=l.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=l.textContent.length,o=Math.min(t.start,r);t=t.end===void 0?o:Math.min(t.end,r),!e.extend&&o>t&&(r=t,t=o,o=r),r=ki(l,o);var a=ki(l,t);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),o>t?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=l;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<n.length;l++)e=n[l],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wd=nn&&"documentMode"in document&&11>=document.documentMode,Kn=null,Po=null,Fl=null,To=!1;function zi(e,n,l){var t=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;To||Kn==null||Kn!==Qt(t)||(t=Kn,"selectionStart"in t&&ka(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Fl&&Zl(Fl,t)||(Fl=t,t=qt(Po,"onSelect"),0<t.length&&(n=new wa("onSelect","select",null,n,l),e.push({event:n,listeners:t}),n.target=Kn)))}function zt(e,n){var l={};return l[e.toLowerCase()]=n.toLowerCase(),l["Webkit"+e]="webkit"+n,l["Moz"+e]="moz"+n,l}var Xn={animationend:zt("Animation","AnimationEnd"),animationiteration:zt("Animation","AnimationIteration"),animationstart:zt("Animation","AnimationStart"),transitionend:zt("Transition","TransitionEnd")},Wr={},gs={};nn&&(gs=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function yr(e){if(Wr[e])return Wr[e];if(!Xn[e])return e;var n=Xn[e],l;for(l in n)if(n.hasOwnProperty(l)&&l in gs)return Wr[e]=n[l];return e}var hs=yr("animationend"),xs=yr("animationiteration"),ws=yr("animationstart"),bs=yr("transitionend"),ys=new Map,Si="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,n){ys.set(e,n),An(n,[e])}for(var Qr=0;Qr<Si.length;Qr++){var Yr=Si[Qr],bd=Yr.toLowerCase(),yd=Yr[0].toUpperCase()+Yr.slice(1);Cn(bd,"on"+yd)}Cn(hs,"onAnimationEnd");Cn(xs,"onAnimationIteration");Cn(ws,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(bs,"onTransitionEnd");ul("onMouseEnter",["mouseout","mouseover"]);ul("onMouseLeave",["mouseout","mouseover"]);ul("onPointerEnter",["pointerout","pointerover"]);ul("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ll));function ji(e,n,l){var t=e.type||"unknown-event";e.currentTarget=l,bu(t,n,void 0,e),e.currentTarget=null}function ks(e,n){n=(n&4)!==0;for(var l=0;l<e.length;l++){var t=e[l],r=t.event;t=t.listeners;e:{var o=void 0;if(n)for(var a=t.length-1;0<=a;a--){var i=t[a],v=i.instance,c=i.currentTarget;if(i=i.listener,v!==o&&r.isPropagationStopped())break e;ji(r,i,c),o=v}else for(a=0;a<t.length;a++){if(i=t[a],v=i.instance,c=i.currentTarget,i=i.listener,v!==o&&r.isPropagationStopped())break e;ji(r,i,c),o=v}}}if(Kt)throw e=jo,Kt=!1,jo=null,e}function B(e,n){var l=n[Ro];l===void 0&&(l=n[Ro]=new Set);var t=e+"__bubble";l.has(t)||(zs(n,e,2,!1),l.add(t))}function Kr(e,n,l){var t=0;n&&(t|=4),zs(l,e,t,n)}var St="_reactListening"+Math.random().toString(36).slice(2);function Jl(e){if(!e[St]){e[St]=!0,Tv.forEach(function(l){l!=="selectionchange"&&(kd.has(l)||Kr(l,!1,e),Kr(l,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[St]||(n[St]=!0,Kr("selectionchange",!1,n))}}function zs(e,n,l,t){switch(as(n)){case 1:var r=Du;break;case 4:r=Iu;break;default:r=ha}l=r.bind(null,n,l,e),r=void 0,!So||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),t?r!==void 0?e.addEventListener(n,l,{capture:!0,passive:r}):e.addEventListener(n,l,!0):r!==void 0?e.addEventListener(n,l,{passive:r}):e.addEventListener(n,l,!1)}function Xr(e,n,l,t,r){var o=t;if(!(n&1)&&!(n&2)&&t!==null)e:for(;;){if(t===null)return;var a=t.tag;if(a===3||a===4){var i=t.stateNode.containerInfo;if(i===r||i.nodeType===8&&i.parentNode===r)break;if(a===4)for(a=t.return;a!==null;){var v=a.tag;if((v===3||v===4)&&(v=a.stateNode.containerInfo,v===r||v.nodeType===8&&v.parentNode===r))return;a=a.return}for(;i!==null;){if(a=Ln(i),a===null)return;if(v=a.tag,v===5||v===6){t=o=a;continue e}i=i.parentNode}}t=t.return}Qv(function(){var c=o,g=pa(l),m=[];e:{var p=ys.get(e);if(p!==void 0){var w=wa,b=e;switch(e){case"keypress":if(Ft(l)===0)break e;case"keydown":case"keyup":w=Ju;break;case"focusin":b="focus",w=Ar;break;case"focusout":b="blur",w=Ar;break;case"beforeblur":case"afterblur":w=Ar;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=pi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=$u;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=nd;break;case hs:case xs:case ws:w=Bu;break;case bs:w=td;break;case"scroll":w=Fu;break;case"wheel":w=od;break;case"copy":case"cut":case"paste":w=Wu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=fi}var z=(n&4)!==0,U=!z&&e==="scroll",u=z?p!==null?p+"Capture":null:p;z=[];for(var s=c,d;s!==null;){d=s;var h=d.stateNode;if(d.tag===5&&h!==null&&(d=h,u!==null&&(h=Ql(s,u),h!=null&&z.push(ql(s,h,d)))),U)break;s=s.return}0<z.length&&(p=new w(p,b,null,l,g),m.push({event:p,listeners:z}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&l!==ko&&(b=l.relatedTarget||l.fromElement)&&(Ln(b)||b[ln]))break e;if((w||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,w?(b=l.relatedTarget||l.toElement,w=c,b=b?Ln(b):null,b!==null&&(U=Bn(b),b!==U||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=c),w!==b)){if(z=pi,h="onMouseLeave",u="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(z=fi,h="onPointerLeave",u="onPointerEnter",s="pointer"),U=w==null?p:Gn(w),d=b==null?p:Gn(b),p=new z(h,s+"leave",w,l,g),p.target=U,p.relatedTarget=d,h=null,Ln(g)===c&&(z=new z(u,s+"enter",b,l,g),z.target=d,z.relatedTarget=U,h=z),U=h,w&&b)n:{for(z=w,u=b,s=0,d=z;d;d=Hn(d))s++;for(d=0,h=u;h;h=Hn(h))d++;for(;0<s-d;)z=Hn(z),s--;for(;0<d-s;)u=Hn(u),d--;for(;s--;){if(z===u||u!==null&&z===u.alternate)break n;z=Hn(z),u=Hn(u)}z=null}else z=null;w!==null&&Ci(m,p,w,z,!1),b!==null&&U!==null&&Ci(m,U,b,z,!0)}}e:{if(p=c?Gn(c):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var f=dd;else if(xi(p))if(ds)f=gd;else{f=md;var k=pd}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(f=fd);if(f&&(f=f(e,c))){us(m,f,l,g);break e}k&&k(e,p,c),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&ho(p,"number",p.value)}switch(k=c?Gn(c):window,e){case"focusin":(xi(k)||k.contentEditable==="true")&&(Kn=k,Po=c,Fl=null);break;case"focusout":Fl=Po=Kn=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,zi(m,l,g);break;case"selectionchange":if(wd)break;case"keydown":case"keyup":zi(m,l,g)}var y;if(ya)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Yn?ss(e,l)&&(E="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(E="onCompositionStart");E&&(vs&&l.locale!=="ko"&&(Yn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Yn&&(y=is()):(pn=g,xa="value"in pn?pn.value:pn.textContent,Yn=!0)),k=qt(c,E),0<k.length&&(E=new mi(E,e,null,l,g),m.push({event:E,listeners:k}),y?E.data=y:(y=cs(l),y!==null&&(E.data=y)))),(y=id?vd(e,l):sd(e,l))&&(c=qt(c,"onBeforeInput"),0<c.length&&(g=new mi("onBeforeInput","beforeinput",null,l,g),m.push({event:g,listeners:c}),g.data=y))}ks(m,n)})}function ql(e,n,l){return{instance:e,listener:n,currentTarget:l}}function qt(e,n){for(var l=n+"Capture",t=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ql(e,l),o!=null&&t.unshift(ql(e,o,r)),o=Ql(e,n),o!=null&&t.push(ql(e,o,r))),e=e.return}return t}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ci(e,n,l,t,r){for(var o=n._reactName,a=[];l!==null&&l!==t;){var i=l,v=i.alternate,c=i.stateNode;if(v!==null&&v===t)break;i.tag===5&&c!==null&&(i=c,r?(v=Ql(l,o),v!=null&&a.unshift(ql(l,v,i))):r||(v=Ql(l,o),v!=null&&a.push(ql(l,v,i)))),l=l.return}a.length!==0&&e.push({event:n,listeners:a})}var zd=/\r\n?/g,Sd=/\u0000|\uFFFD/g;function Ei(e){return(typeof e=="string"?e:""+e).replace(zd,`
`).replace(Sd,"")}function jt(e,n,l){if(n=Ei(n),Ei(e)!==n&&l)throw Error(x(425))}function er(){}var No=null,Lo=null;function Oo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mo=typeof setTimeout=="function"?setTimeout:void 0,jd=typeof clearTimeout=="function"?clearTimeout:void 0,_i=typeof Promise=="function"?Promise:void 0,Cd=typeof queueMicrotask=="function"?queueMicrotask:typeof _i<"u"?function(e){return _i.resolve(null).then(e).catch(Ed)}:Mo;function Ed(e){setTimeout(function(){throw e})}function Gr(e,n){var l=n,t=0;do{var r=l.nextSibling;if(e.removeChild(l),r&&r.nodeType===8)if(l=r.data,l==="/$"){if(t===0){e.removeChild(r),Xl(n);return}t--}else l!=="$"&&l!=="$?"&&l!=="$!"||t++;l=r}while(l);Xl(n)}function xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Pi(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(n===0)return e;n--}else l==="/$"&&n++}e=e.previousSibling}return null}var bl=Math.random().toString(36).slice(2),Ye="__reactFiber$"+bl,et="__reactProps$"+bl,ln="__reactContainer$"+bl,Ro="__reactEvents$"+bl,_d="__reactListeners$"+bl,Pd="__reactHandles$"+bl;function Ln(e){var n=e[Ye];if(n)return n;for(var l=e.parentNode;l;){if(n=l[ln]||l[Ye]){if(l=n.alternate,n.child!==null||l!==null&&l.child!==null)for(e=Pi(e);e!==null;){if(l=e[Ye])return l;e=Pi(e)}return n}e=l,l=e.parentNode}return null}function ut(e){return e=e[Ye]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function kr(e){return e[et]||null}var Do=[],Zn=-1;function En(e){return{current:e}}function H(e){0>Zn||(e.current=Do[Zn],Do[Zn]=null,Zn--)}function A(e,n){Zn++,Do[Zn]=e.current,e.current=n}var jn={},ce=En(jn),he=En(!1),In=jn;function dl(e,n){var l=e.type.contextTypes;if(!l)return jn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in l)r[o]=n[o];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function xe(e){return e=e.childContextTypes,e!=null}function nr(){H(he),H(ce)}function Ti(e,n,l){if(ce.current!==jn)throw Error(x(168));A(ce,n),A(he,l)}function Ss(e,n,l){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return l;t=t.getChildContext();for(var r in t)if(!(r in n))throw Error(x(108,pu(e)||"Unknown",r));return K({},l,t)}function lr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,In=ce.current,A(ce,e),A(he,he.current),!0}function Ni(e,n,l){var t=e.stateNode;if(!t)throw Error(x(169));l?(e=Ss(e,n,In),t.__reactInternalMemoizedMergedChildContext=e,H(he),H(ce),A(ce,e)):H(he),A(he,l)}var Ze=null,zr=!1,Zr=!1;function js(e){Ze===null?Ze=[e]:Ze.push(e)}function Td(e){zr=!0,js(e)}function _n(){if(!Zr&&Ze!==null){Zr=!0;var e=0,n=$;try{var l=Ze;for($=1;e<l.length;e++){var t=l[e];do t=t(!0);while(t!==null)}Ze=null,zr=!1}catch(r){throw Ze!==null&&(Ze=Ze.slice(e+1)),Gv(ma,_n),r}finally{$=n,Zr=!1}}return null}var Jn=[],qn=0,tr=null,rr=0,Pe=[],Te=0,Fn=null,Je=1,qe="";function Tn(e,n){Jn[qn++]=rr,Jn[qn++]=tr,tr=e,rr=n}function Cs(e,n,l){Pe[Te++]=Je,Pe[Te++]=qe,Pe[Te++]=Fn,Fn=e;var t=Je;e=qe;var r=32-Ue(t)-1;t&=~(1<<r),l+=1;var o=32-Ue(n)+r;if(30<o){var a=r-r%5;o=(t&(1<<a)-1).toString(32),t>>=a,r-=a,Je=1<<32-Ue(n)+r|l<<r|t,qe=o+e}else Je=1<<o|l<<r|t,qe=e}function za(e){e.return!==null&&(Tn(e,1),Cs(e,1,0))}function Sa(e){for(;e===tr;)tr=Jn[--qn],Jn[qn]=null,rr=Jn[--qn],Jn[qn]=null;for(;e===Fn;)Fn=Pe[--Te],Pe[Te]=null,qe=Pe[--Te],Pe[Te]=null,Je=Pe[--Te],Pe[Te]=null}var Se=null,ze=null,W=!1,Fe=null;function Es(e,n){var l=Ne(5,null,null,0);l.elementType="DELETED",l.stateNode=n,l.return=e,n=e.deletions,n===null?(e.deletions=[l],e.flags|=16):n.push(l)}function Li(e,n){switch(e.tag){case 5:var l=e.type;return n=n.nodeType!==1||l.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,ze=xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,ze=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(l=Fn!==null?{id:Je,overflow:qe}:null,e.memoizedState={dehydrated:n,treeContext:l,retryLane:1073741824},l=Ne(18,null,null,0),l.stateNode=n,l.return=e,e.child=l,Se=e,ze=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fo(e){if(W){var n=ze;if(n){var l=n;if(!Li(e,n)){if(Io(e))throw Error(x(418));n=xn(l.nextSibling);var t=Se;n&&Li(e,n)?Es(t,l):(e.flags=e.flags&-4097|2,W=!1,Se=e)}}else{if(Io(e))throw Error(x(418));e.flags=e.flags&-4097|2,W=!1,Se=e}}}function Oi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Ct(e){if(e!==Se)return!1;if(!W)return Oi(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Oo(e.type,e.memoizedProps)),n&&(n=ze)){if(Io(e))throw _s(),Error(x(418));for(;n;)Es(e,n),n=xn(n.nextSibling)}if(Oi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"){if(n===0){ze=xn(e.nextSibling);break e}n--}else l!=="$"&&l!=="$!"&&l!=="$?"||n++}e=e.nextSibling}ze=null}}else ze=Se?xn(e.stateNode.nextSibling):null;return!0}function _s(){for(var e=ze;e;)e=xn(e.nextSibling)}function pl(){ze=Se=null,W=!1}function ja(e){Fe===null?Fe=[e]:Fe.push(e)}var Nd=on.ReactCurrentBatchConfig;function Cl(e,n,l){if(e=l.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(x(309));var t=l.stateNode}if(!t)throw Error(x(147,e));var r=t,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var i=r.refs;a===null?delete i[o]:i[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(x(284));if(!l._owner)throw Error(x(290,e))}return e}function Et(e,n){throw e=Object.prototype.toString.call(n),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Mi(e){var n=e._init;return n(e._payload)}function Ps(e){function n(u,s){if(e){var d=u.deletions;d===null?(u.deletions=[s],u.flags|=16):d.push(s)}}function l(u,s){if(!e)return null;for(;s!==null;)n(u,s),s=s.sibling;return null}function t(u,s){for(u=new Map;s!==null;)s.key!==null?u.set(s.key,s):u.set(s.index,s),s=s.sibling;return u}function r(u,s){return u=kn(u,s),u.index=0,u.sibling=null,u}function o(u,s,d){return u.index=d,e?(d=u.alternate,d!==null?(d=d.index,d<s?(u.flags|=2,s):d):(u.flags|=2,s)):(u.flags|=1048576,s)}function a(u){return e&&u.alternate===null&&(u.flags|=2),u}function i(u,s,d,h){return s===null||s.tag!==6?(s=ro(d,u.mode,h),s.return=u,s):(s=r(s,d),s.return=u,s)}function v(u,s,d,h){var f=d.type;return f===Qn?g(u,s,d.props.children,h,d.key):s!==null&&(s.elementType===f||typeof f=="object"&&f!==null&&f.$$typeof===sn&&Mi(f)===s.type)?(h=r(s,d.props),h.ref=Cl(u,s,d),h.return=u,h):(h=Wt(d.type,d.key,d.props,null,u.mode,h),h.ref=Cl(u,s,d),h.return=u,h)}function c(u,s,d,h){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=oo(d,u.mode,h),s.return=u,s):(s=r(s,d.children||[]),s.return=u,s)}function g(u,s,d,h,f){return s===null||s.tag!==7?(s=Dn(d,u.mode,h,f),s.return=u,s):(s=r(s,d),s.return=u,s)}function m(u,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=ro(""+s,u.mode,d),s.return=u,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case gt:return d=Wt(s.type,s.key,s.props,null,u.mode,d),d.ref=Cl(u,null,s),d.return=u,d;case Wn:return s=oo(s,u.mode,d),s.return=u,s;case sn:var h=s._init;return m(u,h(s._payload),d)}if(Tl(s)||yl(s))return s=Dn(s,u.mode,d,null),s.return=u,s;Et(u,s)}return null}function p(u,s,d,h){var f=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return f!==null?null:i(u,s,""+d,h);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gt:return d.key===f?v(u,s,d,h):null;case Wn:return d.key===f?c(u,s,d,h):null;case sn:return f=d._init,p(u,s,f(d._payload),h)}if(Tl(d)||yl(d))return f!==null?null:g(u,s,d,h,null);Et(u,d)}return null}function w(u,s,d,h,f){if(typeof h=="string"&&h!==""||typeof h=="number")return u=u.get(d)||null,i(s,u,""+h,f);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gt:return u=u.get(h.key===null?d:h.key)||null,v(s,u,h,f);case Wn:return u=u.get(h.key===null?d:h.key)||null,c(s,u,h,f);case sn:var k=h._init;return w(u,s,d,k(h._payload),f)}if(Tl(h)||yl(h))return u=u.get(d)||null,g(s,u,h,f,null);Et(s,h)}return null}function b(u,s,d,h){for(var f=null,k=null,y=s,E=s=0,R=null;y!==null&&E<d.length;E++){y.index>E?(R=y,y=null):R=y.sibling;var C=p(u,y,d[E],h);if(C===null){y===null&&(y=R);break}e&&y&&C.alternate===null&&n(u,y),s=o(C,s,E),k===null?f=C:k.sibling=C,k=C,y=R}if(E===d.length)return l(u,y),W&&Tn(u,E),f;if(y===null){for(;E<d.length;E++)y=m(u,d[E],h),y!==null&&(s=o(y,s,E),k===null?f=y:k.sibling=y,k=y);return W&&Tn(u,E),f}for(y=t(u,y);E<d.length;E++)R=w(y,u,E,d[E],h),R!==null&&(e&&R.alternate!==null&&y.delete(R.key===null?E:R.key),s=o(R,s,E),k===null?f=R:k.sibling=R,k=R);return e&&y.forEach(function(ee){return n(u,ee)}),W&&Tn(u,E),f}function z(u,s,d,h){var f=yl(d);if(typeof f!="function")throw Error(x(150));if(d=f.call(d),d==null)throw Error(x(151));for(var k=f=null,y=s,E=s=0,R=null,C=d.next();y!==null&&!C.done;E++,C=d.next()){y.index>E?(R=y,y=null):R=y.sibling;var ee=p(u,y,C.value,h);if(ee===null){y===null&&(y=R);break}e&&y&&ee.alternate===null&&n(u,y),s=o(ee,s,E),k===null?f=ee:k.sibling=ee,k=ee,y=R}if(C.done)return l(u,y),W&&Tn(u,E),f;if(y===null){for(;!C.done;E++,C=d.next())C=m(u,C.value,h),C!==null&&(s=o(C,s,E),k===null?f=C:k.sibling=C,k=C);return W&&Tn(u,E),f}for(y=t(u,y);!C.done;E++,C=d.next())C=w(y,u,E,C.value,h),C!==null&&(e&&C.alternate!==null&&y.delete(C.key===null?E:C.key),s=o(C,s,E),k===null?f=C:k.sibling=C,k=C);return e&&y.forEach(function(Ae){return n(u,Ae)}),W&&Tn(u,E),f}function U(u,s,d,h){if(typeof d=="object"&&d!==null&&d.type===Qn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case gt:e:{for(var f=d.key,k=s;k!==null;){if(k.key===f){if(f=d.type,f===Qn){if(k.tag===7){l(u,k.sibling),s=r(k,d.props.children),s.return=u,u=s;break e}}else if(k.elementType===f||typeof f=="object"&&f!==null&&f.$$typeof===sn&&Mi(f)===k.type){l(u,k.sibling),s=r(k,d.props),s.ref=Cl(u,k,d),s.return=u,u=s;break e}l(u,k);break}else n(u,k);k=k.sibling}d.type===Qn?(s=Dn(d.props.children,u.mode,h,d.key),s.return=u,u=s):(h=Wt(d.type,d.key,d.props,null,u.mode,h),h.ref=Cl(u,s,d),h.return=u,u=h)}return a(u);case Wn:e:{for(k=d.key;s!==null;){if(s.key===k)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){l(u,s.sibling),s=r(s,d.children||[]),s.return=u,u=s;break e}else{l(u,s);break}else n(u,s);s=s.sibling}s=oo(d,u.mode,h),s.return=u,u=s}return a(u);case sn:return k=d._init,U(u,s,k(d._payload),h)}if(Tl(d))return b(u,s,d,h);if(yl(d))return z(u,s,d,h);Et(u,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(l(u,s.sibling),s=r(s,d),s.return=u,u=s):(l(u,s),s=ro(d,u.mode,h),s.return=u,u=s),a(u)):l(u,s)}return U}var ml=Ps(!0),Ts=Ps(!1),or=En(null),ar=null,el=null,Ca=null;function Ea(){Ca=el=ar=null}function _a(e){var n=or.current;H(or),e._currentValue=n}function Uo(e,n,l){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===l)break;e=e.return}}function sl(e,n){ar=e,Ca=el=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ge=!0),e.firstContext=null)}function Oe(e){var n=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:n,next:null},el===null){if(ar===null)throw Error(x(308));el=e,ar.dependencies={lanes:0,firstContext:e}}else el=el.next=e;return n}var On=null;function Pa(e){On===null?On=[e]:On.push(e)}function Ns(e,n,l,t){var r=n.interleaved;return r===null?(l.next=l,Pa(n)):(l.next=r.next,r.next=l),n.interleaved=l,tn(e,t)}function tn(e,n){e.lanes|=n;var l=e.alternate;for(l!==null&&(l.lanes|=n),l=e,e=e.return;e!==null;)e.childLanes|=n,l=e.alternate,l!==null&&(l.childLanes|=n),l=e,e=e.return;return l.tag===3?l.stateNode:null}var cn=!1;function Ta(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ls(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function wn(e,n,l){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,F&2){var r=t.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n,tn(e,l)}return r=t.interleaved,r===null?(n.next=n,Pa(t)):(n.next=r.next,r.next=n),t.interleaved=n,tn(e,l)}function Ut(e,n,l){if(n=n.updateQueue,n!==null&&(n=n.shared,(l&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,l|=t,n.lanes=l,fa(e,l)}}function Ri(e,n){var l=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,l===t)){var r=null,o=null;if(l=l.firstBaseUpdate,l!==null){do{var a={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};o===null?r=o=a:o=o.next=a,l=l.next}while(l!==null);o===null?r=o=n:o=o.next=n}else r=o=n;l={baseState:t.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:t.shared,effects:t.effects},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=n:e.next=n,l.lastBaseUpdate=n}function ir(e,n,l,t){var r=e.updateQueue;cn=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,i=r.shared.pending;if(i!==null){r.shared.pending=null;var v=i,c=v.next;v.next=null,a===null?o=c:a.next=c,a=v;var g=e.alternate;g!==null&&(g=g.updateQueue,i=g.lastBaseUpdate,i!==a&&(i===null?g.firstBaseUpdate=c:i.next=c,g.lastBaseUpdate=v))}if(o!==null){var m=r.baseState;a=0,g=c=v=null,i=o;do{var p=i.lane,w=i.eventTime;if((t&p)===p){g!==null&&(g=g.next={eventTime:w,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,z=i;switch(p=n,w=l,z.tag){case 1:if(b=z.payload,typeof b=="function"){m=b.call(w,m,p);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=z.payload,p=typeof b=="function"?b.call(w,m,p):b,p==null)break e;m=K({},m,p);break e;case 2:cn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[i]:p.push(i))}else w={eventTime:w,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},g===null?(c=g=w,v=m):g=g.next=w,a|=p;if(i=i.next,i===null){if(i=r.shared.pending,i===null)break;p=i,i=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(g===null&&(v=m),r.baseState=v,r.firstBaseUpdate=c,r.lastBaseUpdate=g,n=r.shared.interleaved,n!==null){r=n;do a|=r.lane,r=r.next;while(r!==n)}else o===null&&(r.shared.lanes=0);$n|=a,e.lanes=a,e.memoizedState=m}}function Di(e,n,l){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],r=t.callback;if(r!==null){if(t.callback=null,t=l,typeof r!="function")throw Error(x(191,r));r.call(t)}}}var dt={},Xe=En(dt),nt=En(dt),lt=En(dt);function Mn(e){if(e===dt)throw Error(x(174));return e}function Na(e,n){switch(A(lt,n),A(nt,e),A(Xe,dt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:wo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=wo(n,e)}H(Xe),A(Xe,n)}function fl(){H(Xe),H(nt),H(lt)}function Os(e){Mn(lt.current);var n=Mn(Xe.current),l=wo(n,e.type);n!==l&&(A(nt,e),A(Xe,l))}function La(e){nt.current===e&&(H(Xe),H(nt))}var Q=En(0);function vr(e){for(var n=e;n!==null;){if(n.tag===13){var l=n.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Jr=[];function Oa(){for(var e=0;e<Jr.length;e++)Jr[e]._workInProgressVersionPrimary=null;Jr.length=0}var $t=on.ReactCurrentDispatcher,qr=on.ReactCurrentBatchConfig,Un=0,Y=null,J=null,le=null,sr=!1,Ul=!1,tt=0,Ld=0;function ie(){throw Error(x(321))}function Ma(e,n){if(n===null)return!1;for(var l=0;l<n.length&&l<e.length;l++)if(!Ve(e[l],n[l]))return!1;return!0}function Ra(e,n,l,t,r,o){if(Un=o,Y=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,$t.current=e===null||e.memoizedState===null?Dd:Id,e=l(t,r),Ul){o=0;do{if(Ul=!1,tt=0,25<=o)throw Error(x(301));o+=1,le=J=null,n.updateQueue=null,$t.current=Fd,e=l(t,r)}while(Ul)}if($t.current=cr,n=J!==null&&J.next!==null,Un=0,le=J=Y=null,sr=!1,n)throw Error(x(300));return e}function Da(){var e=tt!==0;return tt=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Me(){if(J===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=le===null?Y.memoizedState:le.next;if(n!==null)le=n,J=e;else{if(e===null)throw Error(x(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function rt(e,n){return typeof n=="function"?n(e):n}function eo(e){var n=Me(),l=n.queue;if(l===null)throw Error(x(311));l.lastRenderedReducer=e;var t=J,r=t.baseQueue,o=l.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}t.baseQueue=r=o,l.pending=null}if(r!==null){o=r.next,t=t.baseState;var i=a=null,v=null,c=o;do{var g=c.lane;if((Un&g)===g)v!==null&&(v=v.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),t=c.hasEagerState?c.eagerState:e(t,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};v===null?(i=v=m,a=t):v=v.next=m,Y.lanes|=g,$n|=g}c=c.next}while(c!==null&&c!==o);v===null?a=t:v.next=i,Ve(t,n.memoizedState)||(ge=!0),n.memoizedState=t,n.baseState=a,n.baseQueue=v,l.lastRenderedState=t}if(e=l.interleaved,e!==null){r=e;do o=r.lane,Y.lanes|=o,$n|=o,r=r.next;while(r!==e)}else r===null&&(l.lanes=0);return[n.memoizedState,l.dispatch]}function no(e){var n=Me(),l=n.queue;if(l===null)throw Error(x(311));l.lastRenderedReducer=e;var t=l.dispatch,r=l.pending,o=n.memoizedState;if(r!==null){l.pending=null;var a=r=r.next;do o=e(o,a.action),a=a.next;while(a!==r);Ve(o,n.memoizedState)||(ge=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),l.lastRenderedState=o}return[o,t]}function Ms(){}function Rs(e,n){var l=Y,t=Me(),r=n(),o=!Ve(t.memoizedState,r);if(o&&(t.memoizedState=r,ge=!0),t=t.queue,Ia(Fs.bind(null,l,t,e),[e]),t.getSnapshot!==n||o||le!==null&&le.memoizedState.tag&1){if(l.flags|=2048,ot(9,Is.bind(null,l,t,r,n),void 0,null),te===null)throw Error(x(349));Un&30||Ds(l,n,r)}return r}function Ds(e,n,l){e.flags|=16384,e={getSnapshot:n,value:l},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.stores=[e]):(l=n.stores,l===null?n.stores=[e]:l.push(e))}function Is(e,n,l,t){n.value=l,n.getSnapshot=t,Us(n)&&$s(e)}function Fs(e,n,l){return l(function(){Us(n)&&$s(e)})}function Us(e){var n=e.getSnapshot;e=e.value;try{var l=n();return!Ve(e,l)}catch{return!0}}function $s(e){var n=tn(e,1);n!==null&&$e(n,e,1,-1)}function Ii(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rt,lastRenderedState:e},n.queue=e,e=e.dispatch=Rd.bind(null,Y,e),[n.memoizedState,e]}function ot(e,n,l,t){return e={tag:e,create:n,destroy:l,deps:t,next:null},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.lastEffect=e.next=e):(l=n.lastEffect,l===null?n.lastEffect=e.next=e:(t=l.next,l.next=e,e.next=t,n.lastEffect=e)),e}function Vs(){return Me().memoizedState}function Vt(e,n,l,t){var r=Qe();Y.flags|=e,r.memoizedState=ot(1|n,l,void 0,t===void 0?null:t)}function Sr(e,n,l,t){var r=Me();t=t===void 0?null:t;var o=void 0;if(J!==null){var a=J.memoizedState;if(o=a.destroy,t!==null&&Ma(t,a.deps)){r.memoizedState=ot(n,l,o,t);return}}Y.flags|=e,r.memoizedState=ot(1|n,l,o,t)}function Fi(e,n){return Vt(8390656,8,e,n)}function Ia(e,n){return Sr(2048,8,e,n)}function As(e,n){return Sr(4,2,e,n)}function Bs(e,n){return Sr(4,4,e,n)}function Hs(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ws(e,n,l){return l=l!=null?l.concat([e]):null,Sr(4,4,Hs.bind(null,n,e),l)}function Fa(){}function Qs(e,n){var l=Me();n=n===void 0?null:n;var t=l.memoizedState;return t!==null&&n!==null&&Ma(n,t[1])?t[0]:(l.memoizedState=[e,n],e)}function Ys(e,n){var l=Me();n=n===void 0?null:n;var t=l.memoizedState;return t!==null&&n!==null&&Ma(n,t[1])?t[0]:(e=e(),l.memoizedState=[e,n],e)}function Ks(e,n,l){return Un&21?(Ve(l,n)||(l=qv(),Y.lanes|=l,$n|=l,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=l)}function Od(e,n){var l=$;$=l!==0&&4>l?l:4,e(!0);var t=qr.transition;qr.transition={};try{e(!1),n()}finally{$=l,qr.transition=t}}function Xs(){return Me().memoizedState}function Md(e,n,l){var t=yn(e);if(l={lane:t,action:l,hasEagerState:!1,eagerState:null,next:null},Gs(e))Zs(n,l);else if(l=Ns(e,n,l,t),l!==null){var r=de();$e(l,e,t,r),Js(l,n,t)}}function Rd(e,n,l){var t=yn(e),r={lane:t,action:l,hasEagerState:!1,eagerState:null,next:null};if(Gs(e))Zs(n,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,i=o(a,l);if(r.hasEagerState=!0,r.eagerState=i,Ve(i,a)){var v=n.interleaved;v===null?(r.next=r,Pa(n)):(r.next=v.next,v.next=r),n.interleaved=r;return}}catch{}finally{}l=Ns(e,n,r,t),l!==null&&(r=de(),$e(l,e,t,r),Js(l,n,t))}}function Gs(e){var n=e.alternate;return e===Y||n!==null&&n===Y}function Zs(e,n){Ul=sr=!0;var l=e.pending;l===null?n.next=n:(n.next=l.next,l.next=n),e.pending=n}function Js(e,n,l){if(l&4194240){var t=n.lanes;t&=e.pendingLanes,l|=t,n.lanes=l,fa(e,l)}}var cr={readContext:Oe,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Dd={readContext:Oe,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:Oe,useEffect:Fi,useImperativeHandle:function(e,n,l){return l=l!=null?l.concat([e]):null,Vt(4194308,4,Hs.bind(null,n,e),l)},useLayoutEffect:function(e,n){return Vt(4194308,4,e,n)},useInsertionEffect:function(e,n){return Vt(4,2,e,n)},useMemo:function(e,n){var l=Qe();return n=n===void 0?null:n,e=e(),l.memoizedState=[e,n],e},useReducer:function(e,n,l){var t=Qe();return n=l!==void 0?l(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=Md.bind(null,Y,e),[t.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:Ii,useDebugValue:Fa,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Ii(!1),n=e[0];return e=Od.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,l){var t=Y,r=Qe();if(W){if(l===void 0)throw Error(x(407));l=l()}else{if(l=n(),te===null)throw Error(x(349));Un&30||Ds(t,n,l)}r.memoizedState=l;var o={value:l,getSnapshot:n};return r.queue=o,Fi(Fs.bind(null,t,o,e),[e]),t.flags|=2048,ot(9,Is.bind(null,t,o,l,n),void 0,null),l},useId:function(){var e=Qe(),n=te.identifierPrefix;if(W){var l=qe,t=Je;l=(t&~(1<<32-Ue(t)-1)).toString(32)+l,n=":"+n+"R"+l,l=tt++,0<l&&(n+="H"+l.toString(32)),n+=":"}else l=Ld++,n=":"+n+"r"+l.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Id={readContext:Oe,useCallback:Qs,useContext:Oe,useEffect:Ia,useImperativeHandle:Ws,useInsertionEffect:As,useLayoutEffect:Bs,useMemo:Ys,useReducer:eo,useRef:Vs,useState:function(){return eo(rt)},useDebugValue:Fa,useDeferredValue:function(e){var n=Me();return Ks(n,J.memoizedState,e)},useTransition:function(){var e=eo(rt)[0],n=Me().memoizedState;return[e,n]},useMutableSource:Ms,useSyncExternalStore:Rs,useId:Xs,unstable_isNewReconciler:!1},Fd={readContext:Oe,useCallback:Qs,useContext:Oe,useEffect:Ia,useImperativeHandle:Ws,useInsertionEffect:As,useLayoutEffect:Bs,useMemo:Ys,useReducer:no,useRef:Vs,useState:function(){return no(rt)},useDebugValue:Fa,useDeferredValue:function(e){var n=Me();return J===null?n.memoizedState=e:Ks(n,J.memoizedState,e)},useTransition:function(){var e=no(rt)[0],n=Me().memoizedState;return[e,n]},useMutableSource:Ms,useSyncExternalStore:Rs,useId:Xs,unstable_isNewReconciler:!1};function De(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var l in e)n[l]===void 0&&(n[l]=e[l]);return n}return n}function $o(e,n,l,t){n=e.memoizedState,l=l(t,n),l=l==null?n:K({},n,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var jr={isMounted:function(e){return(e=e._reactInternals)?Bn(e)===e:!1},enqueueSetState:function(e,n,l){e=e._reactInternals;var t=de(),r=yn(e),o=en(t,r);o.payload=n,l!=null&&(o.callback=l),n=wn(e,o,r),n!==null&&($e(n,e,r,t),Ut(n,e,r))},enqueueReplaceState:function(e,n,l){e=e._reactInternals;var t=de(),r=yn(e),o=en(t,r);o.tag=1,o.payload=n,l!=null&&(o.callback=l),n=wn(e,o,r),n!==null&&($e(n,e,r,t),Ut(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var l=de(),t=yn(e),r=en(l,t);r.tag=2,n!=null&&(r.callback=n),n=wn(e,r,t),n!==null&&($e(n,e,t,l),Ut(n,e,t))}};function Ui(e,n,l,t,r,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,o,a):n.prototype&&n.prototype.isPureReactComponent?!Zl(l,t)||!Zl(r,o):!0}function qs(e,n,l){var t=!1,r=jn,o=n.contextType;return typeof o=="object"&&o!==null?o=Oe(o):(r=xe(n)?In:ce.current,t=n.contextTypes,o=(t=t!=null)?dl(e,r):jn),n=new n(l,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=jr,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),n}function $i(e,n,l,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(l,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(l,t),n.state!==e&&jr.enqueueReplaceState(n,n.state,null)}function Vo(e,n,l,t){var r=e.stateNode;r.props=l,r.state=e.memoizedState,r.refs={},Ta(e);var o=n.contextType;typeof o=="object"&&o!==null?r.context=Oe(o):(o=xe(n)?In:ce.current,r.context=dl(e,o)),r.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&($o(e,n,o,l),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&jr.enqueueReplaceState(r,r.state,null),ir(e,l,r,t),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function gl(e,n){try{var l="",t=n;do l+=du(t),t=t.return;while(t);var r=l}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:r,digest:null}}function lo(e,n,l){return{value:e,source:null,stack:l??null,digest:n??null}}function Ao(e,n){try{console.error(n.value)}catch(l){setTimeout(function(){throw l})}}var Ud=typeof WeakMap=="function"?WeakMap:Map;function ec(e,n,l){l=en(-1,l),l.tag=3,l.payload={element:null};var t=n.value;return l.callback=function(){dr||(dr=!0,Jo=t),Ao(e,n)},l}function nc(e,n,l){l=en(-1,l),l.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var r=n.value;l.payload=function(){return t(r)},l.callback=function(){Ao(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(l.callback=function(){Ao(e,n),typeof t!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),l}function Vi(e,n,l){var t=e.pingCache;if(t===null){t=e.pingCache=new Ud;var r=new Set;t.set(n,r)}else r=t.get(n),r===void 0&&(r=new Set,t.set(n,r));r.has(l)||(r.add(l),e=qd.bind(null,e,n,l),n.then(e,e))}function Ai(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Bi(e,n,l,t,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(n=en(-1,1),n.tag=2,wn(l,n,1))),l.lanes|=1),e)}var $d=on.ReactCurrentOwner,ge=!1;function ue(e,n,l,t){n.child=e===null?Ts(n,null,l,t):ml(n,e.child,l,t)}function Hi(e,n,l,t,r){l=l.render;var o=n.ref;return sl(n,r),t=Ra(e,n,l,t,o,r),l=Da(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,rn(e,n,r)):(W&&l&&za(n),n.flags|=1,ue(e,n,t,r),n.child)}function Wi(e,n,l,t,r){if(e===null){var o=l.type;return typeof o=="function"&&!Qa(o)&&o.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(n.tag=15,n.type=o,lc(e,n,o,t,r)):(e=Wt(l.type,null,t,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&r)){var a=o.memoizedProps;if(l=l.compare,l=l!==null?l:Zl,l(a,t)&&e.ref===n.ref)return rn(e,n,r)}return n.flags|=1,e=kn(o,t),e.ref=n.ref,e.return=n,n.child=e}function lc(e,n,l,t,r){if(e!==null){var o=e.memoizedProps;if(Zl(o,t)&&e.ref===n.ref)if(ge=!1,n.pendingProps=t=o,(e.lanes&r)!==0)e.flags&131072&&(ge=!0);else return n.lanes=e.lanes,rn(e,n,r)}return Bo(e,n,l,t,r)}function tc(e,n,l){var t=n.pendingProps,r=t.children,o=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(ll,ye),ye|=l;else{if(!(l&1073741824))return e=o!==null?o.baseLanes|l:l,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,A(ll,ye),ye|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:l,A(ll,ye),ye|=t}else o!==null?(t=o.baseLanes|l,n.memoizedState=null):t=l,A(ll,ye),ye|=t;return ue(e,n,r,l),n.child}function rc(e,n){var l=n.ref;(e===null&&l!==null||e!==null&&e.ref!==l)&&(n.flags|=512,n.flags|=2097152)}function Bo(e,n,l,t,r){var o=xe(l)?In:ce.current;return o=dl(n,o),sl(n,r),l=Ra(e,n,l,t,o,r),t=Da(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,rn(e,n,r)):(W&&t&&za(n),n.flags|=1,ue(e,n,l,r),n.child)}function Qi(e,n,l,t,r){if(xe(l)){var o=!0;lr(n)}else o=!1;if(sl(n,r),n.stateNode===null)At(e,n),qs(n,l,t),Vo(n,l,t,r),t=!0;else if(e===null){var a=n.stateNode,i=n.memoizedProps;a.props=i;var v=a.context,c=l.contextType;typeof c=="object"&&c!==null?c=Oe(c):(c=xe(l)?In:ce.current,c=dl(n,c));var g=l.getDerivedStateFromProps,m=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==t||v!==c)&&$i(n,a,t,c),cn=!1;var p=n.memoizedState;a.state=p,ir(n,t,a,r),v=n.memoizedState,i!==t||p!==v||he.current||cn?(typeof g=="function"&&($o(n,l,g,t),v=n.memoizedState),(i=cn||Ui(n,l,i,t,p,v,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=v),a.props=t,a.state=v,a.context=c,t=i):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{a=n.stateNode,Ls(e,n),i=n.memoizedProps,c=n.type===n.elementType?i:De(n.type,i),a.props=c,m=n.pendingProps,p=a.context,v=l.contextType,typeof v=="object"&&v!==null?v=Oe(v):(v=xe(l)?In:ce.current,v=dl(n,v));var w=l.getDerivedStateFromProps;(g=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==m||p!==v)&&$i(n,a,t,v),cn=!1,p=n.memoizedState,a.state=p,ir(n,t,a,r);var b=n.memoizedState;i!==m||p!==b||he.current||cn?(typeof w=="function"&&($o(n,l,w,t),b=n.memoizedState),(c=cn||Ui(n,l,c,t,p,b,v)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(t,b,v),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(t,b,v)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=b),a.props=t,a.state=b,a.context=v,t=c):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),t=!1)}return Ho(e,n,l,t,o,r)}function Ho(e,n,l,t,r,o){rc(e,n);var a=(n.flags&128)!==0;if(!t&&!a)return r&&Ni(n,l,!1),rn(e,n,o);t=n.stateNode,$d.current=n;var i=a&&typeof l.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&a?(n.child=ml(n,e.child,null,o),n.child=ml(n,null,i,o)):ue(e,n,i,o),n.memoizedState=t.state,r&&Ni(n,l,!0),n.child}function oc(e){var n=e.stateNode;n.pendingContext?Ti(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ti(e,n.context,!1),Na(e,n.containerInfo)}function Yi(e,n,l,t,r){return pl(),ja(r),n.flags|=256,ue(e,n,l,t),n.child}var Wo={dehydrated:null,treeContext:null,retryLane:0};function Qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ac(e,n,l){var t=n.pendingProps,r=Q.current,o=!1,a=(n.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(r&2)!==0),i?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),A(Q,r&1),e===null)return Fo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=t.children,e=t.fallback,o?(t=n.mode,o=n.child,a={mode:"hidden",children:a},!(t&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=_r(a,t,0,null),e=Dn(e,t,l,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Qo(l),n.memoizedState=Wo,e):Ua(n,a));if(r=e.memoizedState,r!==null&&(i=r.dehydrated,i!==null))return Vd(e,n,a,t,i,r,l);if(o){o=t.fallback,a=n.mode,r=e.child,i=r.sibling;var v={mode:"hidden",children:t.children};return!(a&1)&&n.child!==r?(t=n.child,t.childLanes=0,t.pendingProps=v,n.deletions=null):(t=kn(r,v),t.subtreeFlags=r.subtreeFlags&14680064),i!==null?o=kn(i,o):(o=Dn(o,a,l,null),o.flags|=2),o.return=n,t.return=n,t.sibling=o,n.child=t,t=o,o=n.child,a=e.child.memoizedState,a=a===null?Qo(l):{baseLanes:a.baseLanes|l,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~l,n.memoizedState=Wo,t}return o=e.child,e=o.sibling,t=kn(o,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=l),t.return=n,t.sibling=null,e!==null&&(l=n.deletions,l===null?(n.deletions=[e],n.flags|=16):l.push(e)),n.child=t,n.memoizedState=null,t}function Ua(e,n){return n=_r({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function _t(e,n,l,t){return t!==null&&ja(t),ml(n,e.child,null,l),e=Ua(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Vd(e,n,l,t,r,o,a){if(l)return n.flags&256?(n.flags&=-257,t=lo(Error(x(422))),_t(e,n,a,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=t.fallback,r=n.mode,t=_r({mode:"visible",children:t.children},r,0,null),o=Dn(o,r,a,null),o.flags|=2,t.return=n,o.return=n,t.sibling=o,n.child=t,n.mode&1&&ml(n,e.child,null,a),n.child.memoizedState=Qo(a),n.memoizedState=Wo,o);if(!(n.mode&1))return _t(e,n,a,null);if(r.data==="$!"){if(t=r.nextSibling&&r.nextSibling.dataset,t)var i=t.dgst;return t=i,o=Error(x(419)),t=lo(o,t,void 0),_t(e,n,a,t)}if(i=(a&e.childLanes)!==0,ge||i){if(t=te,t!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(t.suspendedLanes|a)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,tn(e,r),$e(t,e,r,-1))}return Wa(),t=lo(Error(x(421))),_t(e,n,a,t)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=ep.bind(null,e),r._reactRetry=n,null):(e=o.treeContext,ze=xn(r.nextSibling),Se=n,W=!0,Fe=null,e!==null&&(Pe[Te++]=Je,Pe[Te++]=qe,Pe[Te++]=Fn,Je=e.id,qe=e.overflow,Fn=n),n=Ua(n,t.children),n.flags|=4096,n)}function Ki(e,n,l){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),Uo(e.return,n,l)}function to(e,n,l,t,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:l,tailMode:r}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=l,o.tailMode=r)}function ic(e,n,l){var t=n.pendingProps,r=t.revealOrder,o=t.tail;if(ue(e,n,t.children,l),t=Q.current,t&2)t=t&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ki(e,l,n);else if(e.tag===19)Ki(e,l,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(A(Q,t),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(l=n.child,r=null;l!==null;)e=l.alternate,e!==null&&vr(e)===null&&(r=l),l=l.sibling;l=r,l===null?(r=n.child,n.child=null):(r=l.sibling,l.sibling=null),to(n,!1,r,l,o);break;case"backwards":for(l=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&vr(e)===null){n.child=r;break}e=r.sibling,r.sibling=l,l=r,r=e}to(n,!0,l,null,o);break;case"together":to(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function At(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function rn(e,n,l){if(e!==null&&(n.dependencies=e.dependencies),$n|=n.lanes,!(l&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(x(153));if(n.child!==null){for(e=n.child,l=kn(e,e.pendingProps),n.child=l,l.return=n;e.sibling!==null;)e=e.sibling,l=l.sibling=kn(e,e.pendingProps),l.return=n;l.sibling=null}return n.child}function Ad(e,n,l){switch(n.tag){case 3:oc(n),pl();break;case 5:Os(n);break;case 1:xe(n.type)&&lr(n);break;case 4:Na(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,r=n.memoizedProps.value;A(or,t._currentValue),t._currentValue=r;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(A(Q,Q.current&1),n.flags|=128,null):l&n.child.childLanes?ac(e,n,l):(A(Q,Q.current&1),e=rn(e,n,l),e!==null?e.sibling:null);A(Q,Q.current&1);break;case 19:if(t=(l&n.childLanes)!==0,e.flags&128){if(t)return ic(e,n,l);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),A(Q,Q.current),t)break;return null;case 22:case 23:return n.lanes=0,tc(e,n,l)}return rn(e,n,l)}var vc,Yo,sc,cc;vc=function(e,n){for(var l=n.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break;for(;l.sibling===null;){if(l.return===null||l.return===n)return;l=l.return}l.sibling.return=l.return,l=l.sibling}};Yo=function(){};sc=function(e,n,l,t){var r=e.memoizedProps;if(r!==t){e=n.stateNode,Mn(Xe.current);var o=null;switch(l){case"input":r=fo(e,r),t=fo(e,t),o=[];break;case"select":r=K({},r,{value:void 0}),t=K({},t,{value:void 0}),o=[];break;case"textarea":r=xo(e,r),t=xo(e,t),o=[];break;default:typeof r.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=er)}bo(l,t);var a;l=null;for(c in r)if(!t.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var i=r[c];for(a in i)i.hasOwnProperty(a)&&(l||(l={}),l[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hl.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in t){var v=t[c];if(i=r!=null?r[c]:void 0,t.hasOwnProperty(c)&&v!==i&&(v!=null||i!=null))if(c==="style")if(i){for(a in i)!i.hasOwnProperty(a)||v&&v.hasOwnProperty(a)||(l||(l={}),l[a]="");for(a in v)v.hasOwnProperty(a)&&i[a]!==v[a]&&(l||(l={}),l[a]=v[a])}else l||(o||(o=[]),o.push(c,l)),l=v;else c==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,i=i?i.__html:void 0,v!=null&&i!==v&&(o=o||[]).push(c,v)):c==="children"?typeof v!="string"&&typeof v!="number"||(o=o||[]).push(c,""+v):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hl.hasOwnProperty(c)?(v!=null&&c==="onScroll"&&B("scroll",e),o||i===v||(o=[])):(o=o||[]).push(c,v))}l&&(o=o||[]).push("style",l);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};cc=function(e,n,l,t){l!==t&&(n.flags|=4)};function El(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var t=null;l!==null;)l.alternate!==null&&(t=l),l=l.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,l=0,t=0;if(n)for(var r=e.child;r!==null;)l|=r.lanes|r.childLanes,t|=r.subtreeFlags&14680064,t|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)l|=r.lanes|r.childLanes,t|=r.subtreeFlags,t|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=t,e.childLanes=l,n}function Bd(e,n,l){var t=n.pendingProps;switch(Sa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(n),null;case 1:return xe(n.type)&&nr(),ve(n),null;case 3:return t=n.stateNode,fl(),H(he),H(ce),Oa(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Ct(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(na(Fe),Fe=null))),Yo(e,n),ve(n),null;case 5:La(n);var r=Mn(lt.current);if(l=n.type,e!==null&&n.stateNode!=null)sc(e,n,l,t,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(x(166));return ve(n),null}if(e=Mn(Xe.current),Ct(n)){t=n.stateNode,l=n.type;var o=n.memoizedProps;switch(t[Ye]=n,t[et]=o,e=(n.mode&1)!==0,l){case"dialog":B("cancel",t),B("close",t);break;case"iframe":case"object":case"embed":B("load",t);break;case"video":case"audio":for(r=0;r<Ll.length;r++)B(Ll[r],t);break;case"source":B("error",t);break;case"img":case"image":case"link":B("error",t),B("load",t);break;case"details":B("toggle",t);break;case"input":ti(t,o),B("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},B("invalid",t);break;case"textarea":oi(t,o),B("invalid",t)}bo(l,o),r=null;for(var a in o)if(o.hasOwnProperty(a)){var i=o[a];a==="children"?typeof i=="string"?t.textContent!==i&&(o.suppressHydrationWarning!==!0&&jt(t.textContent,i,e),r=["children",i]):typeof i=="number"&&t.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&jt(t.textContent,i,e),r=["children",""+i]):Hl.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&B("scroll",t)}switch(l){case"input":ht(t),ri(t,o,!0);break;case"textarea":ht(t),ai(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=er)}t=r,n.updateQueue=t,t!==null&&(n.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fv(l)),e==="http://www.w3.org/1999/xhtml"?l==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=a.createElement(l,{is:t.is}):(e=a.createElement(l),l==="select"&&(a=e,t.multiple?a.multiple=!0:t.size&&(a.size=t.size))):e=a.createElementNS(e,l),e[Ye]=n,e[et]=t,vc(e,n,!1,!1),n.stateNode=e;e:{switch(a=yo(l,t),l){case"dialog":B("cancel",e),B("close",e),r=t;break;case"iframe":case"object":case"embed":B("load",e),r=t;break;case"video":case"audio":for(r=0;r<Ll.length;r++)B(Ll[r],e);r=t;break;case"source":B("error",e),r=t;break;case"img":case"image":case"link":B("error",e),B("load",e),r=t;break;case"details":B("toggle",e),r=t;break;case"input":ti(e,t),r=fo(e,t),B("invalid",e);break;case"option":r=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},r=K({},t,{value:void 0}),B("invalid",e);break;case"textarea":oi(e,t),r=xo(e,t),B("invalid",e);break;default:r=t}bo(l,r),i=r;for(o in i)if(i.hasOwnProperty(o)){var v=i[o];o==="style"?Vv(e,v):o==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Uv(e,v)):o==="children"?typeof v=="string"?(l!=="textarea"||v!=="")&&Wl(e,v):typeof v=="number"&&Wl(e,""+v):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hl.hasOwnProperty(o)?v!=null&&o==="onScroll"&&B("scroll",e):v!=null&&sa(e,o,v,a))}switch(l){case"input":ht(e),ri(e,t,!1);break;case"textarea":ht(e),ai(e);break;case"option":t.value!=null&&e.setAttribute("value",""+Sn(t.value));break;case"select":e.multiple=!!t.multiple,o=t.value,o!=null?ol(e,!!t.multiple,o,!1):t.defaultValue!=null&&ol(e,!!t.multiple,t.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=er)}switch(l){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ve(n),null;case 6:if(e&&n.stateNode!=null)cc(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(x(166));if(l=Mn(lt.current),Mn(Xe.current),Ct(n)){if(t=n.stateNode,l=n.memoizedProps,t[Ye]=n,(o=t.nodeValue!==l)&&(e=Se,e!==null))switch(e.tag){case 3:jt(t.nodeValue,l,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jt(t.nodeValue,l,(e.mode&1)!==0)}o&&(n.flags|=4)}else t=(l.nodeType===9?l:l.ownerDocument).createTextNode(t),t[Ye]=n,n.stateNode=t}return ve(n),null;case 13:if(H(Q),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&ze!==null&&n.mode&1&&!(n.flags&128))_s(),pl(),n.flags|=98560,o=!1;else if(o=Ct(n),t!==null&&t.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[Ye]=n}else pl(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ve(n),o=!1}else Fe!==null&&(na(Fe),Fe=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=l,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(e===null||Q.current&1?q===0&&(q=3):Wa())),n.updateQueue!==null&&(n.flags|=4),ve(n),null);case 4:return fl(),Yo(e,n),e===null&&Jl(n.stateNode.containerInfo),ve(n),null;case 10:return _a(n.type._context),ve(n),null;case 17:return xe(n.type)&&nr(),ve(n),null;case 19:if(H(Q),o=n.memoizedState,o===null)return ve(n),null;if(t=(n.flags&128)!==0,a=o.rendering,a===null)if(t)El(o,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=vr(e),a!==null){for(n.flags|=128,El(o,!1),t=a.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=l,l=n.child;l!==null;)o=l,e=t,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),l=l.sibling;return A(Q,Q.current&1|2),n.child}e=e.sibling}o.tail!==null&&G()>hl&&(n.flags|=128,t=!0,El(o,!1),n.lanes=4194304)}else{if(!t)if(e=vr(a),e!==null){if(n.flags|=128,t=!0,l=e.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),El(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!W)return ve(n),null}else 2*G()-o.renderingStartTime>hl&&l!==1073741824&&(n.flags|=128,t=!0,El(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(l=o.last,l!==null?l.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=G(),n.sibling=null,l=Q.current,A(Q,t?l&1|2:l&1),n):(ve(n),null);case 22:case 23:return Ha(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?ye&1073741824&&(ve(n),n.subtreeFlags&6&&(n.flags|=8192)):ve(n),null;case 24:return null;case 25:return null}throw Error(x(156,n.tag))}function Hd(e,n){switch(Sa(n),n.tag){case 1:return xe(n.type)&&nr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return fl(),H(he),H(ce),Oa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return La(n),null;case 13:if(H(Q),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(x(340));pl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(Q),null;case 4:return fl(),null;case 10:return _a(n.type._context),null;case 22:case 23:return Ha(),null;case 24:return null;default:return null}}var Pt=!1,se=!1,Wd=typeof WeakSet=="function"?WeakSet:Set,j=null;function nl(e,n){var l=e.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(t){X(e,n,t)}else l.current=null}function Ko(e,n,l){try{l()}catch(t){X(e,n,t)}}var Xi=!1;function Qd(e,n){if(No=Zt,e=fs(),ka(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var t=l.getSelection&&l.getSelection();if(t&&t.rangeCount!==0){l=t.anchorNode;var r=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{l.nodeType,o.nodeType}catch{l=null;break e}var a=0,i=-1,v=-1,c=0,g=0,m=e,p=null;n:for(;;){for(var w;m!==l||r!==0&&m.nodeType!==3||(i=a+r),m!==o||t!==0&&m.nodeType!==3||(v=a+t),m.nodeType===3&&(a+=m.nodeValue.length),(w=m.firstChild)!==null;)p=m,m=w;for(;;){if(m===e)break n;if(p===l&&++c===r&&(i=a),p===o&&++g===t&&(v=a),(w=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=w}l=i===-1||v===-1?null:{start:i,end:v}}else l=null}l=l||{start:0,end:0}}else l=null;for(Lo={focusedElem:e,selectionRange:l},Zt=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var b=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var z=b.memoizedProps,U=b.memoizedState,u=n.stateNode,s=u.getSnapshotBeforeUpdate(n.elementType===n.type?z:De(n.type,z),U);u.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(h){X(n,n.return,h)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return b=Xi,Xi=!1,b}function $l(e,n,l){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&Ko(n,l,o)}r=r.next}while(r!==t)}}function Cr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var t=l.create;l.destroy=t()}l=l.next}while(l!==n)}}function Xo(e){var n=e.ref;if(n!==null){var l=e.stateNode;switch(e.tag){case 5:e=l;break;default:e=l}typeof n=="function"?n(e):n.current=e}}function uc(e){var n=e.alternate;n!==null&&(e.alternate=null,uc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ye],delete n[et],delete n[Ro],delete n[_d],delete n[Pd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dc(e){return e.tag===5||e.tag===3||e.tag===4}function Gi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Go(e,n,l){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?l.nodeType===8?l.parentNode.insertBefore(e,n):l.insertBefore(e,n):(l.nodeType===8?(n=l.parentNode,n.insertBefore(e,l)):(n=l,n.appendChild(e)),l=l._reactRootContainer,l!=null||n.onclick!==null||(n.onclick=er));else if(t!==4&&(e=e.child,e!==null))for(Go(e,n,l),e=e.sibling;e!==null;)Go(e,n,l),e=e.sibling}function Zo(e,n,l){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?l.insertBefore(e,n):l.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Zo(e,n,l),e=e.sibling;e!==null;)Zo(e,n,l),e=e.sibling}var re=null,Ie=!1;function vn(e,n,l){for(l=l.child;l!==null;)pc(e,n,l),l=l.sibling}function pc(e,n,l){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(xr,l)}catch{}switch(l.tag){case 5:se||nl(l,n);case 6:var t=re,r=Ie;re=null,vn(e,n,l),re=t,Ie=r,re!==null&&(Ie?(e=re,l=l.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)):re.removeChild(l.stateNode));break;case 18:re!==null&&(Ie?(e=re,l=l.stateNode,e.nodeType===8?Gr(e.parentNode,l):e.nodeType===1&&Gr(e,l),Xl(e)):Gr(re,l.stateNode));break;case 4:t=re,r=Ie,re=l.stateNode.containerInfo,Ie=!0,vn(e,n,l),re=t,Ie=r;break;case 0:case 11:case 14:case 15:if(!se&&(t=l.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){r=t=t.next;do{var o=r,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ko(l,n,a),r=r.next}while(r!==t)}vn(e,n,l);break;case 1:if(!se&&(nl(l,n),t=l.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=l.memoizedProps,t.state=l.memoizedState,t.componentWillUnmount()}catch(i){X(l,n,i)}vn(e,n,l);break;case 21:vn(e,n,l);break;case 22:l.mode&1?(se=(t=se)||l.memoizedState!==null,vn(e,n,l),se=t):vn(e,n,l);break;default:vn(e,n,l)}}function Zi(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var l=e.stateNode;l===null&&(l=e.stateNode=new Wd),n.forEach(function(t){var r=np.bind(null,e,t);l.has(t)||(l.add(t),t.then(r,r))})}}function Re(e,n){var l=n.deletions;if(l!==null)for(var t=0;t<l.length;t++){var r=l[t];try{var o=e,a=n,i=a;e:for(;i!==null;){switch(i.tag){case 5:re=i.stateNode,Ie=!1;break e;case 3:re=i.stateNode.containerInfo,Ie=!0;break e;case 4:re=i.stateNode.containerInfo,Ie=!0;break e}i=i.return}if(re===null)throw Error(x(160));pc(o,a,r),re=null,Ie=!1;var v=r.alternate;v!==null&&(v.return=null),r.return=null}catch(c){X(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mc(n,e),n=n.sibling}function mc(e,n){var l=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),We(e),t&4){try{$l(3,e,e.return),Cr(3,e)}catch(z){X(e,e.return,z)}try{$l(5,e,e.return)}catch(z){X(e,e.return,z)}}break;case 1:Re(n,e),We(e),t&512&&l!==null&&nl(l,l.return);break;case 5:if(Re(n,e),We(e),t&512&&l!==null&&nl(l,l.return),e.flags&32){var r=e.stateNode;try{Wl(r,"")}catch(z){X(e,e.return,z)}}if(t&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,a=l!==null?l.memoizedProps:o,i=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Dv(r,o),yo(i,a);var c=yo(i,o);for(a=0;a<v.length;a+=2){var g=v[a],m=v[a+1];g==="style"?Vv(r,m):g==="dangerouslySetInnerHTML"?Uv(r,m):g==="children"?Wl(r,m):sa(r,g,m,c)}switch(i){case"input":go(r,o);break;case"textarea":Iv(r,o);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?ol(r,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?ol(r,!!o.multiple,o.defaultValue,!0):ol(r,!!o.multiple,o.multiple?[]:"",!1))}r[et]=o}catch(z){X(e,e.return,z)}}break;case 6:if(Re(n,e),We(e),t&4){if(e.stateNode===null)throw Error(x(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(z){X(e,e.return,z)}}break;case 3:if(Re(n,e),We(e),t&4&&l!==null&&l.memoizedState.isDehydrated)try{Xl(n.containerInfo)}catch(z){X(e,e.return,z)}break;case 4:Re(n,e),We(e);break;case 13:Re(n,e),We(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Aa=G())),t&4&&Zi(e);break;case 22:if(g=l!==null&&l.memoizedState!==null,e.mode&1?(se=(c=se)||g,Re(n,e),se=c):Re(n,e),We(e),t&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(j=e,g=e.child;g!==null;){for(m=j=g;j!==null;){switch(p=j,w=p.child,p.tag){case 0:case 11:case 14:case 15:$l(4,p,p.return);break;case 1:nl(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){t=p,l=p.return;try{n=t,b.props=n.memoizedProps,b.state=n.memoizedState,b.componentWillUnmount()}catch(z){X(t,l,z)}}break;case 5:nl(p,p.return);break;case 22:if(p.memoizedState!==null){qi(m);continue}}w!==null?(w.return=p,j=w):qi(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{r=m.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=m.stateNode,v=m.memoizedProps.style,a=v!=null&&v.hasOwnProperty("display")?v.display:null,i.style.display=$v("display",a))}catch(z){X(e,e.return,z)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(z){X(e,e.return,z)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(n,e),We(e),t&4&&Zi(e);break;case 21:break;default:Re(n,e),We(e)}}function We(e){var n=e.flags;if(n&2){try{e:{for(var l=e.return;l!==null;){if(dc(l)){var t=l;break e}l=l.return}throw Error(x(160))}switch(t.tag){case 5:var r=t.stateNode;t.flags&32&&(Wl(r,""),t.flags&=-33);var o=Gi(e);Zo(e,o,r);break;case 3:case 4:var a=t.stateNode.containerInfo,i=Gi(e);Go(e,i,a);break;default:throw Error(x(161))}}catch(v){X(e,e.return,v)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Yd(e,n,l){j=e,fc(e)}function fc(e,n,l){for(var t=(e.mode&1)!==0;j!==null;){var r=j,o=r.child;if(r.tag===22&&t){var a=r.memoizedState!==null||Pt;if(!a){var i=r.alternate,v=i!==null&&i.memoizedState!==null||se;i=Pt;var c=se;if(Pt=a,(se=v)&&!c)for(j=r;j!==null;)a=j,v=a.child,a.tag===22&&a.memoizedState!==null?ev(r):v!==null?(v.return=a,j=v):ev(r);for(;o!==null;)j=o,fc(o),o=o.sibling;j=r,Pt=i,se=c}Ji(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,j=o):Ji(e)}}function Ji(e){for(;j!==null;){var n=j;if(n.flags&8772){var l=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:se||Cr(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!se)if(l===null)t.componentDidMount();else{var r=n.elementType===n.type?l.memoizedProps:De(n.type,l.memoizedProps);t.componentDidUpdate(r,l.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Di(n,o,t);break;case 3:var a=n.updateQueue;if(a!==null){if(l=null,n.child!==null)switch(n.child.tag){case 5:l=n.child.stateNode;break;case 1:l=n.child.stateNode}Di(n,a,l)}break;case 5:var i=n.stateNode;if(l===null&&n.flags&4){l=i;var v=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&l.focus();break;case"img":v.src&&(l.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Xl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}se||n.flags&512&&Xo(n)}catch(p){X(n,n.return,p)}}if(n===e){j=null;break}if(l=n.sibling,l!==null){l.return=n.return,j=l;break}j=n.return}}function qi(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var l=n.sibling;if(l!==null){l.return=n.return,j=l;break}j=n.return}}function ev(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var l=n.return;try{Cr(4,n)}catch(v){X(n,l,v)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var r=n.return;try{t.componentDidMount()}catch(v){X(n,r,v)}}var o=n.return;try{Xo(n)}catch(v){X(n,o,v)}break;case 5:var a=n.return;try{Xo(n)}catch(v){X(n,a,v)}}}catch(v){X(n,n.return,v)}if(n===e){j=null;break}var i=n.sibling;if(i!==null){i.return=n.return,j=i;break}j=n.return}}var Kd=Math.ceil,ur=on.ReactCurrentDispatcher,$a=on.ReactCurrentOwner,Le=on.ReactCurrentBatchConfig,F=0,te=null,Z=null,oe=0,ye=0,ll=En(0),q=0,at=null,$n=0,Er=0,Va=0,Vl=null,fe=null,Aa=0,hl=1/0,Ge=null,dr=!1,Jo=null,bn=null,Tt=!1,mn=null,pr=0,Al=0,qo=null,Bt=-1,Ht=0;function de(){return F&6?G():Bt!==-1?Bt:Bt=G()}function yn(e){return e.mode&1?F&2&&oe!==0?oe&-oe:Nd.transition!==null?(Ht===0&&(Ht=qv()),Ht):(e=$,e!==0||(e=window.event,e=e===void 0?16:as(e.type)),e):1}function $e(e,n,l,t){if(50<Al)throw Al=0,qo=null,Error(x(185));st(e,l,t),(!(F&2)||e!==te)&&(e===te&&(!(F&2)&&(Er|=l),q===4&&dn(e,oe)),we(e,t),l===1&&F===0&&!(n.mode&1)&&(hl=G()+500,zr&&_n()))}function we(e,n){var l=e.callbackNode;Nu(e,n);var t=Gt(e,e===te?oe:0);if(t===0)l!==null&&si(l),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(l!=null&&si(l),n===1)e.tag===0?Td(nv.bind(null,e)):js(nv.bind(null,e)),Cd(function(){!(F&6)&&_n()}),l=null;else{switch(es(t)){case 1:l=ma;break;case 4:l=Zv;break;case 16:l=Xt;break;case 536870912:l=Jv;break;default:l=Xt}l=zc(l,gc.bind(null,e))}e.callbackPriority=n,e.callbackNode=l}}function gc(e,n){if(Bt=-1,Ht=0,F&6)throw Error(x(327));var l=e.callbackNode;if(cl()&&e.callbackNode!==l)return null;var t=Gt(e,e===te?oe:0);if(t===0)return null;if(t&30||t&e.expiredLanes||n)n=mr(e,t);else{n=t;var r=F;F|=2;var o=xc();(te!==e||oe!==n)&&(Ge=null,hl=G()+500,Rn(e,n));do try{Zd();break}catch(i){hc(e,i)}while(!0);Ea(),ur.current=o,F=r,Z!==null?n=0:(te=null,oe=0,n=q)}if(n!==0){if(n===2&&(r=Co(e),r!==0&&(t=r,n=ea(e,r))),n===1)throw l=at,Rn(e,0),dn(e,t),we(e,G()),l;if(n===6)dn(e,t);else{if(r=e.current.alternate,!(t&30)&&!Xd(r)&&(n=mr(e,t),n===2&&(o=Co(e),o!==0&&(t=o,n=ea(e,o))),n===1))throw l=at,Rn(e,0),dn(e,t),we(e,G()),l;switch(e.finishedWork=r,e.finishedLanes=t,n){case 0:case 1:throw Error(x(345));case 2:Nn(e,fe,Ge);break;case 3:if(dn(e,t),(t&130023424)===t&&(n=Aa+500-G(),10<n)){if(Gt(e,0)!==0)break;if(r=e.suspendedLanes,(r&t)!==t){de(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Mo(Nn.bind(null,e,fe,Ge),n);break}Nn(e,fe,Ge);break;case 4:if(dn(e,t),(t&4194240)===t)break;for(n=e.eventTimes,r=-1;0<t;){var a=31-Ue(t);o=1<<a,a=n[a],a>r&&(r=a),t&=~o}if(t=r,t=G()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Kd(t/1960))-t,10<t){e.timeoutHandle=Mo(Nn.bind(null,e,fe,Ge),t);break}Nn(e,fe,Ge);break;case 5:Nn(e,fe,Ge);break;default:throw Error(x(329))}}}return we(e,G()),e.callbackNode===l?gc.bind(null,e):null}function ea(e,n){var l=Vl;return e.current.memoizedState.isDehydrated&&(Rn(e,n).flags|=256),e=mr(e,n),e!==2&&(n=fe,fe=l,n!==null&&na(n)),e}function na(e){fe===null?fe=e:fe.push.apply(fe,e)}function Xd(e){for(var n=e;;){if(n.flags&16384){var l=n.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var t=0;t<l.length;t++){var r=l[t],o=r.getSnapshot;r=r.value;try{if(!Ve(o(),r))return!1}catch{return!1}}}if(l=n.child,n.subtreeFlags&16384&&l!==null)l.return=n,n=l;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function dn(e,n){for(n&=~Va,n&=~Er,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var l=31-Ue(n),t=1<<l;e[l]=-1,n&=~t}}function nv(e){if(F&6)throw Error(x(327));cl();var n=Gt(e,0);if(!(n&1))return we(e,G()),null;var l=mr(e,n);if(e.tag!==0&&l===2){var t=Co(e);t!==0&&(n=t,l=ea(e,t))}if(l===1)throw l=at,Rn(e,0),dn(e,n),we(e,G()),l;if(l===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nn(e,fe,Ge),we(e,G()),null}function Ba(e,n){var l=F;F|=1;try{return e(n)}finally{F=l,F===0&&(hl=G()+500,zr&&_n())}}function Vn(e){mn!==null&&mn.tag===0&&!(F&6)&&cl();var n=F;F|=1;var l=Le.transition,t=$;try{if(Le.transition=null,$=1,e)return e()}finally{$=t,Le.transition=l,F=n,!(F&6)&&_n()}}function Ha(){ye=ll.current,H(ll)}function Rn(e,n){e.finishedWork=null,e.finishedLanes=0;var l=e.timeoutHandle;if(l!==-1&&(e.timeoutHandle=-1,jd(l)),Z!==null)for(l=Z.return;l!==null;){var t=l;switch(Sa(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&nr();break;case 3:fl(),H(he),H(ce),Oa();break;case 5:La(t);break;case 4:fl();break;case 13:H(Q);break;case 19:H(Q);break;case 10:_a(t.type._context);break;case 22:case 23:Ha()}l=l.return}if(te=e,Z=e=kn(e.current,null),oe=ye=n,q=0,at=null,Va=Er=$n=0,fe=Vl=null,On!==null){for(n=0;n<On.length;n++)if(l=On[n],t=l.interleaved,t!==null){l.interleaved=null;var r=t.next,o=l.pending;if(o!==null){var a=o.next;o.next=r,t.next=a}l.pending=t}On=null}return e}function hc(e,n){do{var l=Z;try{if(Ea(),$t.current=cr,sr){for(var t=Y.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}sr=!1}if(Un=0,le=J=Y=null,Ul=!1,tt=0,$a.current=null,l===null||l.return===null){q=1,at=n,Z=null;break}e:{var o=e,a=l.return,i=l,v=n;if(n=oe,i.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var c=v,g=i,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=Ai(a);if(w!==null){w.flags&=-257,Bi(w,a,i,o,n),w.mode&1&&Vi(o,c,n),n=w,v=c;var b=n.updateQueue;if(b===null){var z=new Set;z.add(v),n.updateQueue=z}else b.add(v);break e}else{if(!(n&1)){Vi(o,c,n),Wa();break e}v=Error(x(426))}}else if(W&&i.mode&1){var U=Ai(a);if(U!==null){!(U.flags&65536)&&(U.flags|=256),Bi(U,a,i,o,n),ja(gl(v,i));break e}}o=v=gl(v,i),q!==4&&(q=2),Vl===null?Vl=[o]:Vl.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var u=ec(o,v,n);Ri(o,u);break e;case 1:i=v;var s=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(bn===null||!bn.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var h=nc(o,i,n);Ri(o,h);break e}}o=o.return}while(o!==null)}bc(l)}catch(f){n=f,Z===l&&l!==null&&(Z=l=l.return);continue}break}while(!0)}function xc(){var e=ur.current;return ur.current=cr,e===null?cr:e}function Wa(){(q===0||q===3||q===2)&&(q=4),te===null||!($n&268435455)&&!(Er&268435455)||dn(te,oe)}function mr(e,n){var l=F;F|=2;var t=xc();(te!==e||oe!==n)&&(Ge=null,Rn(e,n));do try{Gd();break}catch(r){hc(e,r)}while(!0);if(Ea(),F=l,ur.current=t,Z!==null)throw Error(x(261));return te=null,oe=0,q}function Gd(){for(;Z!==null;)wc(Z)}function Zd(){for(;Z!==null&&!ku();)wc(Z)}function wc(e){var n=kc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,n===null?bc(e):Z=n,$a.current=null}function bc(e){var n=e;do{var l=n.alternate;if(e=n.return,n.flags&32768){if(l=Hd(l,n),l!==null){l.flags&=32767,Z=l;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Z=null;return}}else if(l=Bd(l,n,ye),l!==null){Z=l;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);q===0&&(q=5)}function Nn(e,n,l){var t=$,r=Le.transition;try{Le.transition=null,$=1,Jd(e,n,l,t)}finally{Le.transition=r,$=t}return null}function Jd(e,n,l,t){do cl();while(mn!==null);if(F&6)throw Error(x(327));l=e.finishedWork;var r=e.finishedLanes;if(l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=l.lanes|l.childLanes;if(Lu(e,o),e===te&&(Z=te=null,oe=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Tt||(Tt=!0,zc(Xt,function(){return cl(),null})),o=(l.flags&15990)!==0,l.subtreeFlags&15990||o){o=Le.transition,Le.transition=null;var a=$;$=1;var i=F;F|=4,$a.current=null,Qd(e,l),mc(l,e),xd(Lo),Zt=!!No,Lo=No=null,e.current=l,Yd(l),zu(),F=i,$=a,Le.transition=o}else e.current=l;if(Tt&&(Tt=!1,mn=e,pr=r),o=e.pendingLanes,o===0&&(bn=null),Cu(l.stateNode),we(e,G()),n!==null)for(t=e.onRecoverableError,l=0;l<n.length;l++)r=n[l],t(r.value,{componentStack:r.stack,digest:r.digest});if(dr)throw dr=!1,e=Jo,Jo=null,e;return pr&1&&e.tag!==0&&cl(),o=e.pendingLanes,o&1?e===qo?Al++:(Al=0,qo=e):Al=0,_n(),null}function cl(){if(mn!==null){var e=es(pr),n=Le.transition,l=$;try{if(Le.transition=null,$=16>e?16:e,mn===null)var t=!1;else{if(e=mn,mn=null,pr=0,F&6)throw Error(x(331));var r=F;for(F|=4,j=e.current;j!==null;){var o=j,a=o.child;if(j.flags&16){var i=o.deletions;if(i!==null){for(var v=0;v<i.length;v++){var c=i[v];for(j=c;j!==null;){var g=j;switch(g.tag){case 0:case 11:case 15:$l(8,g,o)}var m=g.child;if(m!==null)m.return=g,j=m;else for(;j!==null;){g=j;var p=g.sibling,w=g.return;if(uc(g),g===c){j=null;break}if(p!==null){p.return=w,j=p;break}j=w}}}var b=o.alternate;if(b!==null){var z=b.child;if(z!==null){b.child=null;do{var U=z.sibling;z.sibling=null,z=U}while(z!==null)}}j=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,j=a;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$l(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,j=u;break e}j=o.return}}var s=e.current;for(j=s;j!==null;){a=j;var d=a.child;if(a.subtreeFlags&2064&&d!==null)d.return=a,j=d;else e:for(a=s;j!==null;){if(i=j,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Cr(9,i)}}catch(f){X(i,i.return,f)}if(i===a){j=null;break e}var h=i.sibling;if(h!==null){h.return=i.return,j=h;break e}j=i.return}}if(F=r,_n(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(xr,e)}catch{}t=!0}return t}finally{$=l,Le.transition=n}}return!1}function lv(e,n,l){n=gl(l,n),n=ec(e,n,1),e=wn(e,n,1),n=de(),e!==null&&(st(e,1,n),we(e,n))}function X(e,n,l){if(e.tag===3)lv(e,e,l);else for(;n!==null;){if(n.tag===3){lv(n,e,l);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(bn===null||!bn.has(t))){e=gl(l,e),e=nc(n,e,1),n=wn(n,e,1),e=de(),n!==null&&(st(n,1,e),we(n,e));break}}n=n.return}}function qd(e,n,l){var t=e.pingCache;t!==null&&t.delete(n),n=de(),e.pingedLanes|=e.suspendedLanes&l,te===e&&(oe&l)===l&&(q===4||q===3&&(oe&130023424)===oe&&500>G()-Aa?Rn(e,0):Va|=l),we(e,n)}function yc(e,n){n===0&&(e.mode&1?(n=bt,bt<<=1,!(bt&130023424)&&(bt=4194304)):n=1);var l=de();e=tn(e,n),e!==null&&(st(e,n,l),we(e,l))}function ep(e){var n=e.memoizedState,l=0;n!==null&&(l=n.retryLane),yc(e,l)}function np(e,n){var l=0;switch(e.tag){case 13:var t=e.stateNode,r=e.memoizedState;r!==null&&(l=r.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(x(314))}t!==null&&t.delete(n),yc(e,l)}var kc;kc=function(e,n,l){if(e!==null)if(e.memoizedProps!==n.pendingProps||he.current)ge=!0;else{if(!(e.lanes&l)&&!(n.flags&128))return ge=!1,Ad(e,n,l);ge=!!(e.flags&131072)}else ge=!1,W&&n.flags&1048576&&Cs(n,rr,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;At(e,n),e=n.pendingProps;var r=dl(n,ce.current);sl(n,l),r=Ra(null,n,t,e,r,l);var o=Da();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,xe(t)?(o=!0,lr(n)):o=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ta(n),r.updater=jr,n.stateNode=r,r._reactInternals=n,Vo(n,t,e,l),n=Ho(null,n,t,!0,o,l)):(n.tag=0,W&&o&&za(n),ue(null,n,r,l),n=n.child),n;case 16:t=n.elementType;e:{switch(At(e,n),e=n.pendingProps,r=t._init,t=r(t._payload),n.type=t,r=n.tag=tp(t),e=De(t,e),r){case 0:n=Bo(null,n,t,e,l);break e;case 1:n=Qi(null,n,t,e,l);break e;case 11:n=Hi(null,n,t,e,l);break e;case 14:n=Wi(null,n,t,De(t.type,e),l);break e}throw Error(x(306,t,""))}return n;case 0:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:De(t,r),Bo(e,n,t,r,l);case 1:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:De(t,r),Qi(e,n,t,r,l);case 3:e:{if(oc(n),e===null)throw Error(x(387));t=n.pendingProps,o=n.memoizedState,r=o.element,Ls(e,n),ir(n,t,null,l);var a=n.memoizedState;if(t=a.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){r=gl(Error(x(423)),n),n=Yi(e,n,t,l,r);break e}else if(t!==r){r=gl(Error(x(424)),n),n=Yi(e,n,t,l,r);break e}else for(ze=xn(n.stateNode.containerInfo.firstChild),Se=n,W=!0,Fe=null,l=Ts(n,null,t,l),n.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(pl(),t===r){n=rn(e,n,l);break e}ue(e,n,t,l)}n=n.child}return n;case 5:return Os(n),e===null&&Fo(n),t=n.type,r=n.pendingProps,o=e!==null?e.memoizedProps:null,a=r.children,Oo(t,r)?a=null:o!==null&&Oo(t,o)&&(n.flags|=32),rc(e,n),ue(e,n,a,l),n.child;case 6:return e===null&&Fo(n),null;case 13:return ac(e,n,l);case 4:return Na(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=ml(n,null,t,l):ue(e,n,t,l),n.child;case 11:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:De(t,r),Hi(e,n,t,r,l);case 7:return ue(e,n,n.pendingProps,l),n.child;case 8:return ue(e,n,n.pendingProps.children,l),n.child;case 12:return ue(e,n,n.pendingProps.children,l),n.child;case 10:e:{if(t=n.type._context,r=n.pendingProps,o=n.memoizedProps,a=r.value,A(or,t._currentValue),t._currentValue=a,o!==null)if(Ve(o.value,a)){if(o.children===r.children&&!he.current){n=rn(e,n,l);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var i=o.dependencies;if(i!==null){a=o.child;for(var v=i.firstContext;v!==null;){if(v.context===t){if(o.tag===1){v=en(-1,l&-l),v.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?v.next=v:(v.next=g.next,g.next=v),c.pending=v}}o.lanes|=l,v=o.alternate,v!==null&&(v.lanes|=l),Uo(o.return,l,n),i.lanes|=l;break}v=v.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(x(341));a.lanes|=l,i=a.alternate,i!==null&&(i.lanes|=l),Uo(a,l,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ue(e,n,r.children,l),n=n.child}return n;case 9:return r=n.type,t=n.pendingProps.children,sl(n,l),r=Oe(r),t=t(r),n.flags|=1,ue(e,n,t,l),n.child;case 14:return t=n.type,r=De(t,n.pendingProps),r=De(t.type,r),Wi(e,n,t,r,l);case 15:return lc(e,n,n.type,n.pendingProps,l);case 17:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:De(t,r),At(e,n),n.tag=1,xe(t)?(e=!0,lr(n)):e=!1,sl(n,l),qs(n,t,r),Vo(n,t,r,l),Ho(null,n,t,!0,e,l);case 19:return ic(e,n,l);case 22:return tc(e,n,l)}throw Error(x(156,n.tag))};function zc(e,n){return Gv(e,n)}function lp(e,n,l,t){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,n,l,t){return new lp(e,n,l,t)}function Qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tp(e){if(typeof e=="function")return Qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ua)return 11;if(e===da)return 14}return 2}function kn(e,n){var l=e.alternate;return l===null?(l=Ne(e.tag,n,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=n,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&14680064,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,n=e.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l}function Wt(e,n,l,t,r,o){var a=2;if(t=e,typeof e=="function")Qa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qn:return Dn(l.children,r,o,n);case ca:a=8,r|=8;break;case co:return e=Ne(12,l,n,r|2),e.elementType=co,e.lanes=o,e;case uo:return e=Ne(13,l,n,r),e.elementType=uo,e.lanes=o,e;case po:return e=Ne(19,l,n,r),e.elementType=po,e.lanes=o,e;case Ov:return _r(l,r,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nv:a=10;break e;case Lv:a=9;break e;case ua:a=11;break e;case da:a=14;break e;case sn:a=16,t=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return n=Ne(a,l,n,r),n.elementType=e,n.type=t,n.lanes=o,n}function Dn(e,n,l,t){return e=Ne(7,e,t,n),e.lanes=l,e}function _r(e,n,l,t){return e=Ne(22,e,t,n),e.elementType=Ov,e.lanes=l,e.stateNode={isHidden:!1},e}function ro(e,n,l){return e=Ne(6,e,null,n),e.lanes=l,e}function oo(e,n,l){return n=Ne(4,e.children!==null?e.children:[],e.key,n),n.lanes=l,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function rp(e,n,l,t,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ur(0),this.expirationTimes=Ur(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ur(0),this.identifierPrefix=t,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ya(e,n,l,t,r,o,a,i,v){return e=new rp(e,n,l,i,v),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ne(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:t,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ta(o),e}function op(e,n,l){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:t==null?null:""+t,children:e,containerInfo:n,implementation:l}}function Sc(e){if(!e)return jn;e=e._reactInternals;e:{if(Bn(e)!==e||e.tag!==1)throw Error(x(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(x(171))}if(e.tag===1){var l=e.type;if(xe(l))return Ss(e,l,n)}return n}function jc(e,n,l,t,r,o,a,i,v){return e=Ya(l,t,!0,e,r,o,a,i,v),e.context=Sc(null),l=e.current,t=de(),r=yn(l),o=en(t,r),o.callback=n??null,wn(l,o,r),e.current.lanes=r,st(e,r,t),we(e,t),e}function Pr(e,n,l,t){var r=n.current,o=de(),a=yn(r);return l=Sc(l),n.context===null?n.context=l:n.pendingContext=l,n=en(o,a),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=wn(r,n,a),e!==null&&($e(e,r,a,o),Ut(e,r,a)),a}function fr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<n?l:n}}function Ka(e,n){tv(e,n),(e=e.alternate)&&tv(e,n)}function ap(){return null}var Cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xa(e){this._internalRoot=e}Tr.prototype.render=Xa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(x(409));Pr(e,n,null,null)};Tr.prototype.unmount=Xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vn(function(){Pr(null,e,null,null)}),n[ln]=null}};function Tr(e){this._internalRoot=e}Tr.prototype.unstable_scheduleHydration=function(e){if(e){var n=ts();e={blockedOn:null,target:e,priority:n};for(var l=0;l<un.length&&n!==0&&n<un[l].priority;l++);un.splice(l,0,e),l===0&&os(e)}};function Ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rv(){}function ip(e,n,l,t,r){if(r){if(typeof t=="function"){var o=t;t=function(){var c=fr(a);o.call(c)}}var a=jc(n,t,e,0,null,!1,!1,"",rv);return e._reactRootContainer=a,e[ln]=a.current,Jl(e.nodeType===8?e.parentNode:e),Vn(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof t=="function"){var i=t;t=function(){var c=fr(v);i.call(c)}}var v=Ya(e,0,!1,null,null,!1,!1,"",rv);return e._reactRootContainer=v,e[ln]=v.current,Jl(e.nodeType===8?e.parentNode:e),Vn(function(){Pr(n,v,l,t)}),v}function Lr(e,n,l,t,r){var o=l._reactRootContainer;if(o){var a=o;if(typeof r=="function"){var i=r;r=function(){var v=fr(a);i.call(v)}}Pr(n,a,e,r)}else a=ip(l,n,e,r,t);return fr(a)}ns=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var l=Nl(n.pendingLanes);l!==0&&(fa(n,l|1),we(n,G()),!(F&6)&&(hl=G()+500,_n()))}break;case 13:Vn(function(){var t=tn(e,1);if(t!==null){var r=de();$e(t,e,1,r)}}),Ka(e,1)}};ga=function(e){if(e.tag===13){var n=tn(e,134217728);if(n!==null){var l=de();$e(n,e,134217728,l)}Ka(e,134217728)}};ls=function(e){if(e.tag===13){var n=yn(e),l=tn(e,n);if(l!==null){var t=de();$e(l,e,n,t)}Ka(e,n)}};ts=function(){return $};rs=function(e,n){var l=$;try{return $=e,n()}finally{$=l}};zo=function(e,n,l){switch(n){case"input":if(go(e,l),n=l.name,l.type==="radio"&&n!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<l.length;n++){var t=l[n];if(t!==e&&t.form===e.form){var r=kr(t);if(!r)throw Error(x(90));Rv(t),go(t,r)}}}break;case"textarea":Iv(e,l);break;case"select":n=l.value,n!=null&&ol(e,!!l.multiple,n,!1)}};Hv=Ba;Wv=Vn;var vp={usingClientEntryPoint:!1,Events:[ut,Gn,kr,Av,Bv,Ba]},_l={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sp={bundleType:_l.bundleType,version:_l.version,rendererPackageName:_l.rendererPackageName,rendererConfig:_l.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kv(e),e===null?null:e.stateNode},findFiberByHostInstance:_l.findFiberByHostInstance||ap,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nt.isDisabled&&Nt.supportsFiber)try{xr=Nt.inject(sp),Ke=Nt}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;Ce.createPortal=function(e,n){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ga(n))throw Error(x(200));return op(e,n,null,l)};Ce.createRoot=function(e,n){if(!Ga(e))throw Error(x(299));var l=!1,t="",r=Cc;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Ya(e,1,!1,null,null,l,!1,t,r),e[ln]=n.current,Jl(e.nodeType===8?e.parentNode:e),new Xa(n)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Kv(n),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Vn(e)};Ce.hydrate=function(e,n,l){if(!Nr(n))throw Error(x(200));return Lr(null,e,n,!0,l)};Ce.hydrateRoot=function(e,n,l){if(!Ga(e))throw Error(x(405));var t=l!=null&&l.hydratedSources||null,r=!1,o="",a=Cc;if(l!=null&&(l.unstable_strictMode===!0&&(r=!0),l.identifierPrefix!==void 0&&(o=l.identifierPrefix),l.onRecoverableError!==void 0&&(a=l.onRecoverableError)),n=jc(n,null,e,1,l??null,r,!1,o,a),e[ln]=n.current,Jl(e),t)for(e=0;e<t.length;e++)l=t[e],r=l._getVersion,r=r(l._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[l,r]:n.mutableSourceEagerHydrationData.push(l,r);return new Tr(n)};Ce.render=function(e,n,l){if(!Nr(n))throw Error(x(200));return Lr(null,e,n,!1,l)};Ce.unmountComponentAtNode=function(e){if(!Nr(e))throw Error(x(40));return e._reactRootContainer?(Vn(function(){Lr(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};Ce.unstable_batchedUpdates=Ba;Ce.unstable_renderSubtreeIntoContainer=function(e,n,l,t){if(!Nr(l))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Lr(e,n,l,!1,t)};Ce.version="18.3.1-next-f1338f8080-20240426";function Ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ec)}catch(e){console.error(e)}}Ec(),Ev.exports=Ce;var cp=Ev.exports,_c,ov=cp;_c=ov.createRoot,ov.hydrateRoot;function av(e,n){(n==null||n>e.length)&&(n=e.length);for(var l=0,t=Array(n);l<n;l++)t[l]=e[l];return t}function up(e){if(Array.isArray(e))return e}function dp(e,n,l){return(n=wp(n))in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function pp(e,n){var l=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(l!=null){var t,r,o,a,i=[],v=!0,c=!1;try{if(o=(l=l.call(e)).next,n!==0)for(;!(v=(t=o.call(l)).done)&&(i.push(t.value),i.length!==n);v=!0);}catch(g){c=!0,r=g}finally{try{if(!v&&l.return!=null&&(a=l.return(),Object(a)!==a))return}finally{if(c)throw r}}return i}}function mp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iv(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),l.push.apply(l,t)}return l}function vv(e){for(var n=1;n<arguments.length;n++){var l=arguments[n]!=null?arguments[n]:{};n%2?iv(Object(l),!0).forEach(function(t){dp(e,t,l[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):iv(Object(l)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}function fp(e,n){if(e==null)return{};var l,t,r=gp(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)===-1&&{}.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}function gp(e,n){if(e==null)return{};var l={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.indexOf(t)!==-1)continue;l[t]=e[t]}return l}function hp(e,n){return up(e)||pp(e,n)||bp(e,n)||mp()}function xp(e,n){if(typeof e!="object"||!e)return e;var l=e[Symbol.toPrimitive];if(l!==void 0){var t=l.call(e,n);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function wp(e){var n=xp(e,"string");return typeof n=="symbol"?n:n+""}function bp(e,n){if(e){if(typeof e=="string")return av(e,n);var l={}.toString.call(e).slice(8,-1);return l==="Object"&&e.constructor&&(l=e.constructor.name),l==="Map"||l==="Set"?Array.from(e):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?av(e,n):void 0}}function yp(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function sv(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),l.push.apply(l,t)}return l}function cv(e){for(var n=1;n<arguments.length;n++){var l=arguments[n]!=null?arguments[n]:{};n%2?sv(Object(l),!0).forEach(function(t){yp(e,t,l[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):sv(Object(l)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}function kp(){for(var e=arguments.length,n=new Array(e),l=0;l<e;l++)n[l]=arguments[l];return function(t){return n.reduceRight(function(r,o){return o(r)},t)}}function Ol(e){return function n(){for(var l=this,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r.length>=e.length?e.apply(this,r):function(){for(var a=arguments.length,i=new Array(a),v=0;v<a;v++)i[v]=arguments[v];return n.apply(l,[].concat(r,i))}}}function gr(e){return{}.toString.call(e).includes("Object")}function zp(e){return!Object.keys(e).length}function it(e){return typeof e=="function"}function Sp(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function jp(e,n){return gr(n)||zn("changeType"),Object.keys(n).some(function(l){return!Sp(e,l)})&&zn("changeField"),n}function Cp(e){it(e)||zn("selectorType")}function Ep(e){it(e)||gr(e)||zn("handlerType"),gr(e)&&Object.values(e).some(function(n){return!it(n)})&&zn("handlersType")}function _p(e){e||zn("initialIsRequired"),gr(e)||zn("initialType"),zp(e)&&zn("initialContent")}function Pp(e,n){throw new Error(e[n]||e.default)}var Tp={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},zn=Ol(Pp)(Tp),Lt={changes:jp,selector:Cp,handler:Ep,initial:_p};function Np(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Lt.initial(e),Lt.handler(n);var l={current:e},t=Ol(Mp)(l,n),r=Ol(Op)(l),o=Ol(Lt.changes)(e),a=Ol(Lp)(l);function i(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(g){return g};return Lt.selector(c),c(l.current)}function v(c){kp(t,r,o,a)(c)}return[i,v]}function Lp(e,n){return it(n)?n(e.current):n}function Op(e,n){return e.current=cv(cv({},e.current),n),n}function Mp(e,n,l){return it(n)?n(e.current):Object.keys(l).forEach(function(t){var r;return(r=n[t])===null||r===void 0?void 0:r.call(n,e.current[t])}),l}var Rp={create:Np},Dp={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Ip(e){return function n(){for(var l=this,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r.length>=e.length?e.apply(this,r):function(){for(var a=arguments.length,i=new Array(a),v=0;v<a;v++)i[v]=arguments[v];return n.apply(l,[].concat(r,i))}}}function Fp(e){return{}.toString.call(e).includes("Object")}function Up(e){return e||uv("configIsRequired"),Fp(e)||uv("configType"),e.urls?($p(),{paths:{vs:e.urls.monacoBase}}):e}function $p(){console.warn(Pc.deprecation)}function Vp(e,n){throw new Error(e[n]||e.default)}var Pc={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},uv=Ip(Vp)(Pc),Ap={config:Up},Bp=function(){for(var n=arguments.length,l=new Array(n),t=0;t<n;t++)l[t]=arguments[t];return function(r){return l.reduceRight(function(o,a){return a(o)},r)}};function Tc(e,n){return Object.keys(n).forEach(function(l){n[l]instanceof Object&&e[l]&&Object.assign(n[l],Tc(e[l],n[l]))}),vv(vv({},e),n)}var Hp={type:"cancelation",msg:"operation is manually canceled"};function ao(e){var n=!1,l=new Promise(function(t,r){e.then(function(o){return n?r(Hp):t(o)}),e.catch(r)});return l.cancel=function(){return n=!0},l}var Wp=["monaco"],Qp=Rp.create({config:Dp,isInitialized:!1,resolve:null,reject:null,monaco:null}),Nc=hp(Qp,2),pt=Nc[0],Or=Nc[1];function Yp(e){var n=Ap.config(e),l=n.monaco,t=fp(n,Wp);Or(function(r){return{config:Tc(r.config,t),monaco:l}})}function Kp(){var e=pt(function(n){var l=n.monaco,t=n.isInitialized,r=n.resolve;return{monaco:l,isInitialized:t,resolve:r}});if(!e.isInitialized){if(Or({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),ao(io);if(window.monaco&&window.monaco.editor)return Lc(window.monaco),e.resolve(window.monaco),ao(io);Bp(Xp,Zp)(Jp)}return ao(io)}function Xp(e){return document.body.appendChild(e)}function Gp(e){var n=document.createElement("script");return e&&(n.src=e),n}function Zp(e){var n=pt(function(t){var r=t.config,o=t.reject;return{config:r,reject:o}}),l=Gp("".concat(n.config.paths.vs,"/loader.js"));return l.onload=function(){return e()},l.onerror=n.reject,l}function Jp(){var e=pt(function(l){var t=l.config,r=l.resolve,o=l.reject;return{config:t,resolve:r,reject:o}}),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],function(l){var t=l.m||l;Lc(t),e.resolve(t)},function(l){e.reject(l)})}function Lc(e){pt().monaco||Or({monaco:e})}function qp(){return pt(function(e){var n=e.monaco;return n})}var io=new Promise(function(e,n){return Or({resolve:e,reject:n})}),Oc={config:Yp,init:Kp,__getMonacoInstance:qp},em={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},vo=em,nm={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},lm=nm;function tm({children:e}){return rl.createElement("div",{style:lm.container},e)}var rm=tm,om=rm;function am({width:e,height:n,isEditorReady:l,loading:t,_ref:r,className:o,wrapperProps:a}){return rl.createElement("section",{style:{...vo.wrapper,width:e,height:n},...a},!l&&rl.createElement(om,null,t),rl.createElement("div",{ref:r,style:{...vo.fullWidth,...!l&&vo.hide},className:o}))}var im=am,Mc=_.memo(im);function vm(e){_.useEffect(e,[])}var Rc=vm;function sm(e,n,l=!0){let t=_.useRef(!0);_.useEffect(t.current||!l?()=>{t.current=!1}:e,n)}var ke=sm;function Bl(){}function tl(e,n,l,t){return cm(e,t)||um(e,n,l,t)}function cm(e,n){return e.editor.getModel(Dc(e,n))}function um(e,n,l,t){return e.editor.createModel(n,l,t?Dc(e,t):void 0)}function Dc(e,n){return e.Uri.parse(n)}function dm({original:e,modified:n,language:l,originalLanguage:t,modifiedLanguage:r,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:i=!1,keepCurrentModifiedModel:v=!1,theme:c="light",loading:g="Loading...",options:m={},height:p="100%",width:w="100%",className:b,wrapperProps:z={},beforeMount:U=Bl,onMount:u=Bl}){let[s,d]=_.useState(!1),[h,f]=_.useState(!0),k=_.useRef(null),y=_.useRef(null),E=_.useRef(null),R=_.useRef(u),C=_.useRef(U),ee=_.useRef(!1);Rc(()=>{let N=Oc.init();return N.then(V=>(y.current=V)&&f(!1)).catch(V=>(V==null?void 0:V.type)!=="cancelation"&&console.error("Monaco initialization: error:",V)),()=>k.current?an():N.cancel()}),ke(()=>{if(k.current&&y.current){let N=k.current.getOriginalEditor(),V=tl(y.current,e||"",t||l||"text",o||"");V!==N.getModel()&&N.setModel(V)}},[o],s),ke(()=>{if(k.current&&y.current){let N=k.current.getModifiedEditor(),V=tl(y.current,n||"",r||l||"text",a||"");V!==N.getModel()&&N.setModel(V)}},[a],s),ke(()=>{let N=k.current.getModifiedEditor();N.getOption(y.current.editor.EditorOption.readOnly)?N.setValue(n||""):n!==N.getValue()&&(N.executeEdits("",[{range:N.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),N.pushUndoStop())},[n],s),ke(()=>{var N,V;(V=(N=k.current)==null?void 0:N.getModel())==null||V.original.setValue(e||"")},[e],s),ke(()=>{let{original:N,modified:V}=k.current.getModel();y.current.editor.setModelLanguage(N,t||l||"text"),y.current.editor.setModelLanguage(V,r||l||"text")},[l,t,r],s),ke(()=>{var N;(N=y.current)==null||N.editor.setTheme(c)},[c],s),ke(()=>{var N;(N=k.current)==null||N.updateOptions(m)},[m],s);let Ae=_.useCallback(()=>{var _e;if(!y.current)return;C.current(y.current);let N=tl(y.current,e||"",t||l||"text",o||""),V=tl(y.current,n||"",r||l||"text",a||"");(_e=k.current)==null||_e.setModel({original:N,modified:V})},[l,n,r,e,t,o,a]),Be=_.useCallback(()=>{var N;!ee.current&&E.current&&(k.current=y.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...m}),Ae(),(N=y.current)==null||N.editor.setTheme(c),d(!0),ee.current=!0)},[m,c,Ae]);_.useEffect(()=>{s&&R.current(k.current,y.current)},[s]),_.useEffect(()=>{!h&&!s&&Be()},[h,s,Be]);function an(){var V,_e,S,T;let N=(V=k.current)==null?void 0:V.getModel();i||((_e=N==null?void 0:N.original)==null||_e.dispose()),v||((S=N==null?void 0:N.modified)==null||S.dispose()),(T=k.current)==null||T.dispose()}return rl.createElement(Mc,{width:w,height:p,isEditorReady:s,loading:g,_ref:E,className:b,wrapperProps:z})}var pm=dm;_.memo(pm);function mm(e){let n=_.useRef();return _.useEffect(()=>{n.current=e},[e]),n.current}var fm=mm,Ot=new Map;function gm({defaultValue:e,defaultLanguage:n,defaultPath:l,value:t,language:r,path:o,theme:a="light",line:i,loading:v="Loading...",options:c={},overrideServices:g={},saveViewState:m=!0,keepCurrentModel:p=!1,width:w="100%",height:b="100%",className:z,wrapperProps:U={},beforeMount:u=Bl,onMount:s=Bl,onChange:d,onValidate:h=Bl}){let[f,k]=_.useState(!1),[y,E]=_.useState(!0),R=_.useRef(null),C=_.useRef(null),ee=_.useRef(null),Ae=_.useRef(s),Be=_.useRef(u),an=_.useRef(),N=_.useRef(t),V=fm(o),_e=_.useRef(!1),S=_.useRef(!1);Rc(()=>{let P=Oc.init();return P.then(L=>(R.current=L)&&E(!1)).catch(L=>(L==null?void 0:L.type)!=="cancelation"&&console.error("Monaco initialization: error:",L)),()=>C.current?O():P.cancel()}),ke(()=>{var L,ne,be,He;let P=tl(R.current,e||t||"",n||r||"",o||l||"");P!==((L=C.current)==null?void 0:L.getModel())&&(m&&Ot.set(V,(ne=C.current)==null?void 0:ne.saveViewState()),(be=C.current)==null||be.setModel(P),m&&((He=C.current)==null||He.restoreViewState(Ot.get(o))))},[o],f),ke(()=>{var P;(P=C.current)==null||P.updateOptions(c)},[c],f),ke(()=>{!C.current||t===void 0||(C.current.getOption(R.current.editor.EditorOption.readOnly)?C.current.setValue(t):t!==C.current.getValue()&&(S.current=!0,C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),C.current.pushUndoStop(),S.current=!1))},[t],f),ke(()=>{var L,ne;let P=(L=C.current)==null?void 0:L.getModel();P&&r&&((ne=R.current)==null||ne.editor.setModelLanguage(P,r))},[r],f),ke(()=>{var P;i!==void 0&&((P=C.current)==null||P.revealLine(i))},[i],f),ke(()=>{var P;(P=R.current)==null||P.editor.setTheme(a)},[a],f);let T=_.useCallback(()=>{var P;if(!(!ee.current||!R.current)&&!_e.current){Be.current(R.current);let L=o||l,ne=tl(R.current,t||e||"",n||r||"",L||"");C.current=(P=R.current)==null?void 0:P.editor.create(ee.current,{model:ne,automaticLayout:!0,...c},g),m&&C.current.restoreViewState(Ot.get(L)),R.current.editor.setTheme(a),i!==void 0&&C.current.revealLine(i),k(!0),_e.current=!0}},[e,n,l,t,r,o,c,g,m,a,i]);_.useEffect(()=>{f&&Ae.current(C.current,R.current)},[f]),_.useEffect(()=>{!y&&!f&&T()},[y,f,T]),N.current=t,_.useEffect(()=>{var P,L;f&&d&&((P=an.current)==null||P.dispose(),an.current=(L=C.current)==null?void 0:L.onDidChangeModelContent(ne=>{S.current||d(C.current.getValue(),ne)}))},[f,d]),_.useEffect(()=>{if(f){let P=R.current.editor.onDidChangeMarkers(L=>{var be;let ne=(be=C.current.getModel())==null?void 0:be.uri;if(ne&&L.find(He=>He.path===ne.path)){let He=R.current.editor.getModelMarkers({resource:ne});h==null||h(He)}});return()=>{P==null||P.dispose()}}return()=>{}},[f,h]);function O(){var P,L;(P=an.current)==null||P.dispose(),p?m&&Ot.set(o,C.current.saveViewState()):(L=C.current.getModel())==null||L.dispose(),C.current.dispose()}return rl.createElement(Mc,{width:w,height:b,isEditorReady:f,loading:v,_ref:ee,className:z,wrapperProps:U})}var hm=gm,xm=_.memo(hm),wm=xm;function dv({value:e,onChange:n,language:l}){return D.jsx(wm,{height:"100%",language:l,theme:"vs-dark",value:e,onChange:n,options:{minimap:{enabled:!1},fontSize:13,lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12,bottom:12},renderLineHighlight:"line",smoothScrolling:!0,cursorSmoothCaretAnimation:"on",folding:!0,formatOnPaste:!0,suggestOnTriggerCharacters:!0}})}const bm=`
  ::-webkit-scrollbar             { width: 8px; height: 8px; }
  ::-webkit-scrollbar-track       { background: #060b17; }
  ::-webkit-scrollbar-thumb       { background: #1e2d45; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #2d4060; }
  ::-webkit-scrollbar-corner      { background: #060b17; }
  * { scrollbar-width: thin; scrollbar-color: #1e2d45 #060b17; }
`;function ym({html:e,customCss:n,veloraCss:l}){const t=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${l}</style>
  <style>${bm}</style>
  <style>${n}</style>
</head>
<body>
${e}
</body>
</html>`;return D.jsx("iframe",{srcDoc:t,title:"VeloraCSS Preview",style:{width:"100%",height:"100%",border:"none",background:"#ffffff",display:"block"},sandbox:"allow-scripts allow-same-origin"})}const km=`/* ============================================
   VeloraCSS v0.1.0
   A modern utility-first CSS framework
   ============================================ */

/* VeloraCSS — Design Tokens */

:root {

  /* ─── Colors ───────────────────────────────── */
  --vel-color-primary:         #6366f1;
  --vel-color-primary-hover:   #4f46e5;
  --vel-color-primary-light:   #e0e7ff;
  --vel-color-primary-fg:      #ffffff;

  --vel-color-secondary:       #64748b;
  --vel-color-secondary-hover: #475569;
  --vel-color-secondary-light: #f1f5f9;
  --vel-color-secondary-fg:    #ffffff;

  --vel-color-success:         #22c55e;
  --vel-color-success-hover:   #16a34a;
  --vel-color-success-light:   #dcfce7;
  --vel-color-success-fg:      #ffffff;

  --vel-color-danger:          #ef4444;
  --vel-color-danger-hover:    #dc2626;
  --vel-color-danger-light:    #fee2e2;
  --vel-color-danger-fg:       #ffffff;

  --vel-color-warning:         #f59e0b;
  --vel-color-warning-hover:   #d97706;
  --vel-color-warning-light:   #fef3c7;
  --vel-color-warning-fg:      #1c1917;

  --vel-color-info:            #06b6d4;
  --vel-color-info-hover:      #0891b2;
  --vel-color-info-light:      #cffafe;
  --vel-color-info-fg:         #ffffff;

  /* ─── Surface / UI Tokens ───────────────────── */
  --vel-surface-bg:  #060b17;
  --vel-surface-0:   #060b17;
  --vel-surface-1:   #0d1422;
  --vel-surface-2:   #111827;
  --vel-surface-3:   #1a2236;
  --vel-border-base: #1e2d45;
  --vel-text-base:   #e2e8f0;
  --vel-text-muted:  #64748b;

  /* ─── Neutral Palette ───────────────────────── */
  --vel-neutral-50:  #f8fafc;
  --vel-neutral-100: #f1f5f9;
  --vel-neutral-200: #e2e8f0;
  --vel-neutral-300: #cbd5e1;
  --vel-neutral-400: #94a3b8;
  --vel-neutral-500: #64748b;
  --vel-neutral-600: #475569;
  --vel-neutral-700: #334155;
  --vel-neutral-800: #1e293b;
  --vel-neutral-900: #0f172a;
  --vel-neutral-950: #020617;

  /* ─── Spacing Scale ─────────────────────────── */
  --vel-space-px:  1px;
  --vel-space-0:   0rem;
  --vel-space-1:   0.25rem;
  --vel-space-2:   0.5rem;
  --vel-space-3:   0.75rem;
  --vel-space-4:   1rem;
  --vel-space-5:   1.25rem;
  --vel-space-6:   1.5rem;
  --vel-space-7:   1.75rem;
  --vel-space-8:   2rem;
  --vel-space-9:   2.25rem;
  --vel-space-10:  2.5rem;
  --vel-space-11:  2.75rem;
  --vel-space-12:  3rem;
  --vel-space-14:  3.5rem;
  --vel-space-16:  4rem;
  --vel-space-20:  5rem;
  --vel-space-24:  6rem;
  --vel-space-28:  7rem;
  --vel-space-32:  8rem;
  --vel-space-36:  9rem;
  --vel-space-40:  10rem;
  --vel-space-44:  11rem;
  --vel-space-48:  12rem;
  --vel-space-56:  14rem;
  --vel-space-64:  16rem;
  --vel-space-72:  18rem;
  --vel-space-80:  20rem;
  --vel-space-96:  24rem;

  /* ─── Font Sizes ─────────────────────────────── */
  --vel-text-xs:   0.75rem;
  --vel-text-sm:   0.875rem;
  --vel-text-base: 1rem;
  --vel-text-lg:   1.125rem;
  --vel-text-xl:   1.25rem;
  --vel-text-2xl:  1.5rem;
  --vel-text-3xl:  1.875rem;
  --vel-text-4xl:  2.25rem;
  --vel-text-5xl:  3rem;
  --vel-text-6xl:  3.75rem;
  --vel-text-7xl:  4.5rem;
  --vel-text-8xl:  6rem;
  --vel-text-9xl:  8rem;

  /* ─── Line Heights ───────────────────────────── */
  --vel-leading-none:    1;
  --vel-leading-tight:   1.25;
  --vel-leading-snug:    1.375;
  --vel-leading-normal:  1.5;
  --vel-leading-relaxed: 1.625;
  --vel-leading-loose:   2;

  /* ─── Font Families ──────────────────────────── */
  --vel-font-sans:  ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --vel-font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --vel-font-mono:  ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  /* ─── Border Radius ──────────────────────────── */
  --vel-radius-none: 0px;
  --vel-radius-sm:   0.125rem;
  --vel-radius:      0.25rem;
  --vel-radius-md:   0.375rem;
  --vel-radius-lg:   0.5rem;
  --vel-radius-xl:   0.75rem;
  --vel-radius-2xl:  1rem;
  --vel-radius-3xl:  1.5rem;
  --vel-radius-full: 9999px;

  /* ─── Shadows ─────────────────────────────────── */
  --vel-shadow-sm:    0 1px 2px 0 rgb(0 0 0 / 0.05);
  --vel-shadow:       0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --vel-shadow-md:    0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --vel-shadow-lg:    0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --vel-shadow-xl:    0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --vel-shadow-2xl:   0 25px 50px -12px rgb(0 0 0 / 0.25);
  --vel-shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --vel-shadow-none:  0 0 #0000;

  /* ─── Transitions ─────────────────────────────── */
  --vel-duration-75:   75ms;
  --vel-duration-100:  100ms;
  --vel-duration-150:  150ms;
  --vel-duration-200:  200ms;
  --vel-duration-300:  300ms;
  --vel-duration-500:  500ms;
  --vel-duration-700:  700ms;
  --vel-duration-1000: 1000ms;
  --vel-ease-linear:   linear;
  --vel-ease-in:       cubic-bezier(0.4, 0, 1, 1);
  --vel-ease-out:      cubic-bezier(0, 0, 0.2, 1);
  --vel-ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);

  /* ─── Z-Index ─────────────────────────────────── */
  --vel-z-0:    0;
  --vel-z-10:   10;
  --vel-z-20:   20;
  --vel-z-30:   30;
  --vel-z-40:   40;
  --vel-z-50:   50;
  --vel-z-auto: auto;
}

/* VeloraCSS — Base Reset */

*, *::before, *::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: var(--vel-border-base);
}

html {
  line-height: var(--vel-leading-normal);
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
    -o-tab-size: 4;
       tab-size: 4;
  font-family: var(--vel-font-sans);
  font-feature-settings: normal;
  font-variation-settings: normal;
}

body {
  margin: 0;
  line-height: inherit;
  background-color: var(--vel-surface-bg);
  color: var(--vel-text-base);
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

b, strong {
  font-weight: bolder;
}

code, kbd, samp, pre {
  font-family: var(--vel-font-mono);
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub { bottom: -0.25em; }

sup { top: -0.5em; }

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button, select {
  text-transform: none;
}

button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  color: var(--vel-neutral-400);
}

input::placeholder, textarea::placeholder {
  opacity: 1;
  color: var(--vel-neutral-400);
}

button, [role='button'] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}

img, video {
  max-width: 100%;
  height: auto;
}

/* ─── Themed scrollbars ───────────────────── */

::-webkit-scrollbar              { width: 8px; height: 8px; }

::-webkit-scrollbar-track        { background: var(--vel-surface-0); }

::-webkit-scrollbar-thumb        { background: var(--vel-border-base); border-radius: 4px; }

::-webkit-scrollbar-thumb:hover  { background: #2d4060; }

::-webkit-scrollbar-corner       { background: var(--vel-surface-0); }

* { scrollbar-width: thin; scrollbar-color: var(--vel-border-base) var(--vel-surface-0); }

/* Utilities */

/* VeloraCSS — Layout Utilities */

/* Display */

.vel-block        { display: block; }

.vel-inline-block { display: inline-block; }

.vel-inline       { display: inline; }

.vel-flex         { display: flex; }

.vel-inline-flex  { display: inline-flex; }

.vel-grid         { display: grid; }

.vel-inline-grid  { display: inline-grid; }

.vel-hidden       { display: none; }

.vel-table        { display: table; }

.vel-table-row    { display: table-row; }

.vel-table-cell   { display: table-cell; }

.vel-contents     { display: contents; }

/* Position */

.vel-static   { position: static; }

.vel-relative { position: relative; }

.vel-absolute { position: absolute; }

.vel-fixed    { position: fixed; }

.vel-sticky   { position: sticky; }

/* Inset */

.vel-inset-0    { inset: 0px; }

.vel-inset-auto { inset: auto; }

.vel-inset-x-0  { left: 0px; right: 0px; }

.vel-inset-y-0  { top: 0px; bottom: 0px; }

.vel-top-0      { top: 0px; }

.vel-top-auto   { top: auto; }

.vel-right-0    { right: 0px; }

.vel-right-auto { right: auto; }

.vel-bottom-0   { bottom: 0px; }

.vel-bottom-auto{ bottom: auto; }

.vel-left-0     { left: 0px; }

.vel-left-auto  { left: auto; }

/* Overflow */

.vel-overflow-auto    { overflow: auto; }

.vel-overflow-hidden  { overflow: hidden; }

.vel-overflow-visible { overflow: visible; }

.vel-overflow-scroll  { overflow: scroll; }

.vel-overflow-x-auto  { overflow-x: auto; }

.vel-overflow-x-hidden{ overflow-x: hidden; }

.vel-overflow-y-auto  { overflow-y: auto; }

.vel-overflow-y-hidden{ overflow-y: hidden; }

.vel-overflow-y-scroll{ overflow-y: scroll; }

/* Overscroll */

.vel-overscroll-auto    { overscroll-behavior: auto; }

.vel-overscroll-contain { overscroll-behavior: contain; }

.vel-overscroll-none    { overscroll-behavior: none; }

/* Visibility */

.vel-visible   { visibility: visible; }

.vel-invisible { visibility: hidden; }

.vel-collapse  { visibility: collapse; }

/* Z-index */

.vel-z-0    { z-index: var(--vel-z-0); }

.vel-z-10   { z-index: var(--vel-z-10); }

.vel-z-20   { z-index: var(--vel-z-20); }

.vel-z-30   { z-index: var(--vel-z-30); }

.vel-z-40   { z-index: var(--vel-z-40); }

.vel-z-50   { z-index: var(--vel-z-50); }

.vel-z-auto { z-index: var(--vel-z-auto); }

/* Float */

.vel-float-left  { float: left; }

.vel-float-right { float: right; }

.vel-float-none  { float: none; }

.vel-clearfix::after { content: ""; display: table; clear: both; }

/* Clear */

.vel-clear-left  { clear: left; }

.vel-clear-right { clear: right; }

.vel-clear-both  { clear: both; }

.vel-clear-none  { clear: none; }

/* Isolation */

.vel-isolate      { isolation: isolate; }

.vel-isolation-auto { isolation: auto; }

/* Object fit */

.vel-object-contain    { -o-object-fit: contain; object-fit: contain; }

.vel-object-cover      { -o-object-fit: cover; object-fit: cover; }

.vel-object-fill       { -o-object-fit: fill; object-fit: fill; }

.vel-object-none       { -o-object-fit: none; object-fit: none; }

.vel-object-scale-down { -o-object-fit: scale-down; object-fit: scale-down; }

/* Object position */

.vel-object-bottom       { -o-object-position: bottom; object-position: bottom; }

.vel-object-center       { -o-object-position: center; object-position: center; }

.vel-object-left         { -o-object-position: left; object-position: left; }

.vel-object-left-bottom  { -o-object-position: left bottom; object-position: left bottom; }

.vel-object-left-top     { -o-object-position: left top; object-position: left top; }

.vel-object-right        { -o-object-position: right; object-position: right; }

.vel-object-right-bottom { -o-object-position: right bottom; object-position: right bottom; }

.vel-object-right-top    { -o-object-position: right top; object-position: right top; }

.vel-object-top          { -o-object-position: top; object-position: top; }

/* Box sizing */

.vel-box-border  { box-sizing: border-box; }

.vel-box-content { box-sizing: content-box; }

/* Aspect ratio */

.vel-aspect-auto   { aspect-ratio: auto; }

.vel-aspect-square { aspect-ratio: 1 / 1; }

.vel-aspect-video  { aspect-ratio: 16 / 9; }

/* Columns */

.vel-columns-1  { -moz-columns: 1; columns: 1; }

.vel-columns-2  { -moz-columns: 2; columns: 2; }

.vel-columns-3  { -moz-columns: 3; columns: 3; }

.vel-columns-4  { -moz-columns: 4; columns: 4; }

.vel-columns-auto { -moz-columns: auto; columns: auto; }

/* Container */

.vel-container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--vel-space-4);
  padding-left: var(--vel-space-4);
}

@media (min-width: 640px)  { .vel-container { max-width: 640px; } }

@media (min-width: 768px)  { .vel-container { max-width: 768px; } }

@media (min-width: 1024px) { .vel-container { max-width: 1024px; } }

@media (min-width: 1280px) { .vel-container { max-width: 1280px; } }

@media (min-width: 1536px) { .vel-container { max-width: 1536px; } }

/* Screen reader only */

.vel-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* VeloraCSS — Flexbox Utilities */

/* Direction */

.vel-flex-row            { flex-direction: row; }

.vel-flex-row-reverse    { flex-direction: row-reverse; }

.vel-flex-col            { flex-direction: column; }

.vel-flex-col-reverse    { flex-direction: column-reverse; }

/* Wrap */

.vel-flex-wrap         { flex-wrap: wrap; }

.vel-flex-wrap-reverse { flex-wrap: wrap-reverse; }

.vel-flex-nowrap       { flex-wrap: nowrap; }

/* Flex shorthand */

.vel-flex-1      { flex: 1 1 0%; }

.vel-flex-auto   { flex: 1 1 auto; }

.vel-flex-initial{ flex: 0 1 auto; }

.vel-flex-none   { flex: none; }

/* Grow */

.vel-grow   { flex-grow: 1; }

.vel-grow-0 { flex-grow: 0; }

/* Shrink */

.vel-shrink   { flex-shrink: 1; }

.vel-shrink-0 { flex-shrink: 0; }

/* Basis */

.vel-basis-0       { flex-basis: 0px; }

.vel-basis-full    { flex-basis: 100%; }

.vel-basis-auto    { flex-basis: auto; }

.vel-basis-1\\/2    { flex-basis: 50%; }

.vel-basis-1\\/3    { flex-basis: 33.333333%; }

.vel-basis-2\\/3    { flex-basis: 66.666667%; }

.vel-basis-1\\/4    { flex-basis: 25%; }

.vel-basis-3\\/4    { flex-basis: 75%; }

.vel-basis-1\\/5    { flex-basis: 20%; }

.vel-basis-2\\/5    { flex-basis: 40%; }

.vel-basis-3\\/5    { flex-basis: 60%; }

.vel-basis-4\\/5    { flex-basis: 80%; }

/* Align items */

.vel-items-start    { align-items: flex-start; }

.vel-items-end      { align-items: flex-end; }

.vel-items-center   { align-items: center; }

.vel-items-baseline { align-items: baseline; }

.vel-items-stretch  { align-items: stretch; }

/* Align self */

.vel-self-auto     { align-self: auto; }

.vel-self-start    { align-self: flex-start; }

.vel-self-end      { align-self: flex-end; }

.vel-self-center   { align-self: center; }

.vel-self-baseline { align-self: baseline; }

.vel-self-stretch  { align-self: stretch; }

/* Justify content */

.vel-justify-start   { justify-content: flex-start; }

.vel-justify-end     { justify-content: flex-end; }

.vel-justify-center  { justify-content: center; }

.vel-justify-between { justify-content: space-between; }

.vel-justify-around  { justify-content: space-around; }

.vel-justify-evenly  { justify-content: space-evenly; }

.vel-justify-stretch { justify-content: stretch; }

/* Justify items */

.vel-justify-items-start   { justify-items: start; }

.vel-justify-items-end     { justify-items: end; }

.vel-justify-items-center  { justify-items: center; }

.vel-justify-items-stretch { justify-items: stretch; }

/* Justify self */

.vel-justify-self-auto    { justify-self: auto; }

.vel-justify-self-start   { justify-self: start; }

.vel-justify-self-end     { justify-self: end; }

.vel-justify-self-center  { justify-self: center; }

.vel-justify-self-stretch { justify-self: stretch; }

/* Align content */

.vel-content-normal  { align-content: normal; }

.vel-content-start   { align-content: flex-start; }

.vel-content-end     { align-content: flex-end; }

.vel-content-center  { align-content: center; }

.vel-content-between { align-content: space-between; }

.vel-content-around  { align-content: space-around; }

.vel-content-evenly  { align-content: space-evenly; }

.vel-content-stretch { align-content: stretch; }

/* Place content */

.vel-place-content-start   { place-content: start; }

.vel-place-content-end     { place-content: end; }

.vel-place-content-center  { place-content: center; }

.vel-place-content-between { place-content: space-between; }

.vel-place-content-around  { place-content: space-around; }

.vel-place-content-evenly  { place-content: space-evenly; }

.vel-place-content-stretch { place-content: stretch; }

/* Place items */

.vel-place-items-start   { place-items: start; }

.vel-place-items-end     { place-items: end; }

.vel-place-items-center  { place-items: center; }

.vel-place-items-stretch { place-items: stretch; }

/* Place self */

.vel-place-self-auto    { place-self: auto; }

.vel-place-self-start   { place-self: start; }

.vel-place-self-end     { place-self: end; }

.vel-place-self-center  { place-self: center; }

.vel-place-self-stretch { place-self: stretch; }

/* Order */

.vel-order-first { order: -9999; }

.vel-order-last  { order: 9999; }

.vel-order-none  { order: 0; }

.vel-order-1     { order: 1; }

.vel-order-2     { order: 2; }

.vel-order-3     { order: 3; }

.vel-order-4     { order: 4; }

.vel-order-5     { order: 5; }

/* Gap */

.vel-gap-0  { gap: 0px; }

.vel-gap-1  { gap: var(--vel-space-1); }

.vel-gap-2  { gap: var(--vel-space-2); }

.vel-gap-3  { gap: var(--vel-space-3); }

.vel-gap-4  { gap: var(--vel-space-4); }

.vel-gap-5  { gap: var(--vel-space-5); }

.vel-gap-6  { gap: var(--vel-space-6); }

.vel-gap-7  { gap: var(--vel-space-7); }

.vel-gap-8  { gap: var(--vel-space-8); }

.vel-gap-10 { gap: var(--vel-space-10); }

.vel-gap-12 { gap: var(--vel-space-12); }

.vel-gap-16 { gap: var(--vel-space-16); }

.vel-gap-px { gap: 1px; }

.vel-gap-x-0  { -moz-column-gap: 0px; column-gap: 0px; }

.vel-gap-x-1  { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1); }

.vel-gap-x-2  { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2); }

.vel-gap-x-3  { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3); }

.vel-gap-x-4  { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4); }

.vel-gap-x-5  { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5); }

.vel-gap-x-6  { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6); }

.vel-gap-x-8  { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8); }

.vel-gap-y-0  { row-gap: 0px; }

.vel-gap-y-1  { row-gap: var(--vel-space-1); }

.vel-gap-y-2  { row-gap: var(--vel-space-2); }

.vel-gap-y-3  { row-gap: var(--vel-space-3); }

.vel-gap-y-4  { row-gap: var(--vel-space-4); }

.vel-gap-y-5  { row-gap: var(--vel-space-5); }

.vel-gap-y-6  { row-gap: var(--vel-space-6); }

.vel-gap-y-8  { row-gap: var(--vel-space-8); }

/* VeloraCSS — Grid Utilities */

/* Template columns */

.vel-grid-cols-1  { grid-template-columns: repeat(1, minmax(0, 1fr)); }

.vel-grid-cols-2  { grid-template-columns: repeat(2, minmax(0, 1fr)); }

.vel-grid-cols-3  { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.vel-grid-cols-4  { grid-template-columns: repeat(4, minmax(0, 1fr)); }

.vel-grid-cols-5  { grid-template-columns: repeat(5, minmax(0, 1fr)); }

.vel-grid-cols-6  { grid-template-columns: repeat(6, minmax(0, 1fr)); }

.vel-grid-cols-7  { grid-template-columns: repeat(7, minmax(0, 1fr)); }

.vel-grid-cols-8  { grid-template-columns: repeat(8, minmax(0, 1fr)); }

.vel-grid-cols-9  { grid-template-columns: repeat(9, minmax(0, 1fr)); }

.vel-grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr)); }

.vel-grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr)); }

.vel-grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

.vel-grid-cols-none { grid-template-columns: none; }

/* Column span */

.vel-col-auto      { grid-column: auto; }

.vel-col-span-1    { grid-column: span 1 / span 1; }

.vel-col-span-2    { grid-column: span 2 / span 2; }

.vel-col-span-3    { grid-column: span 3 / span 3; }

.vel-col-span-4    { grid-column: span 4 / span 4; }

.vel-col-span-5    { grid-column: span 5 / span 5; }

.vel-col-span-6    { grid-column: span 6 / span 6; }

.vel-col-span-7    { grid-column: span 7 / span 7; }

.vel-col-span-8    { grid-column: span 8 / span 8; }

.vel-col-span-9    { grid-column: span 9 / span 9; }

.vel-col-span-10   { grid-column: span 10 / span 10; }

.vel-col-span-11   { grid-column: span 11 / span 11; }

.vel-col-span-12   { grid-column: span 12 / span 12; }

.vel-col-span-full { grid-column: 1 / -1; }

/* Column start/end */

.vel-col-start-1  { grid-column-start: 1; }

.vel-col-start-2  { grid-column-start: 2; }

.vel-col-start-3  { grid-column-start: 3; }

.vel-col-start-4  { grid-column-start: 4; }

.vel-col-start-auto { grid-column-start: auto; }

.vel-col-end-1    { grid-column-end: 1; }

.vel-col-end-2    { grid-column-end: 2; }

.vel-col-end-3    { grid-column-end: 3; }

.vel-col-end-4    { grid-column-end: 4; }

.vel-col-end-auto { grid-column-end: auto; }

/* Template rows */

.vel-grid-rows-1  { grid-template-rows: repeat(1, minmax(0, 1fr)); }

.vel-grid-rows-2  { grid-template-rows: repeat(2, minmax(0, 1fr)); }

.vel-grid-rows-3  { grid-template-rows: repeat(3, minmax(0, 1fr)); }

.vel-grid-rows-4  { grid-template-rows: repeat(4, minmax(0, 1fr)); }

.vel-grid-rows-5  { grid-template-rows: repeat(5, minmax(0, 1fr)); }

.vel-grid-rows-6  { grid-template-rows: repeat(6, minmax(0, 1fr)); }

.vel-grid-rows-none { grid-template-rows: none; }

/* Row span */

.vel-row-auto      { grid-row: auto; }

.vel-row-span-1    { grid-row: span 1 / span 1; }

.vel-row-span-2    { grid-row: span 2 / span 2; }

.vel-row-span-3    { grid-row: span 3 / span 3; }

.vel-row-span-4    { grid-row: span 4 / span 4; }

.vel-row-span-5    { grid-row: span 5 / span 5; }

.vel-row-span-6    { grid-row: span 6 / span 6; }

.vel-row-span-full { grid-row: 1 / -1; }

/* Row start/end */

.vel-row-start-1    { grid-row-start: 1; }

.vel-row-start-2    { grid-row-start: 2; }

.vel-row-start-3    { grid-row-start: 3; }

.vel-row-start-auto { grid-row-start: auto; }

.vel-row-end-1      { grid-row-end: 1; }

.vel-row-end-2      { grid-row-end: 2; }

.vel-row-end-3      { grid-row-end: 3; }

.vel-row-end-auto   { grid-row-end: auto; }

/* Auto flow */

.vel-grid-flow-row         { grid-auto-flow: row; }

.vel-grid-flow-col         { grid-auto-flow: column; }

.vel-grid-flow-dense       { grid-auto-flow: dense; }

.vel-grid-flow-row-dense   { grid-auto-flow: row dense; }

.vel-grid-flow-col-dense   { grid-auto-flow: column dense; }

/* Auto columns/rows */

.vel-auto-cols-auto { grid-auto-columns: auto; }

.vel-auto-cols-min  { grid-auto-columns: min-content; }

.vel-auto-cols-max  { grid-auto-columns: max-content; }

.vel-auto-cols-fr   { grid-auto-columns: minmax(0, 1fr); }

.vel-auto-rows-auto { grid-auto-rows: auto; }

.vel-auto-rows-min  { grid-auto-rows: min-content; }

.vel-auto-rows-max  { grid-auto-rows: max-content; }

.vel-auto-rows-fr   { grid-auto-rows: minmax(0, 1fr); }

/* VeloraCSS — Spacing Utilities (Padding & Margin) */

/* Padding — all sides */

.vel-p-0  { padding: 0px; }

.vel-p-px { padding: 1px; }

.vel-p-1  { padding: var(--vel-space-1); }

.vel-p-2  { padding: var(--vel-space-2); }

.vel-p-3  { padding: var(--vel-space-3); }

.vel-p-4  { padding: var(--vel-space-4); }

.vel-p-5  { padding: var(--vel-space-5); }

.vel-p-6  { padding: var(--vel-space-6); }

.vel-p-7  { padding: var(--vel-space-7); }

.vel-p-8  { padding: var(--vel-space-8); }

.vel-p-9  { padding: var(--vel-space-9); }

.vel-p-10 { padding: var(--vel-space-10); }

.vel-p-11 { padding: var(--vel-space-11); }

.vel-p-12 { padding: var(--vel-space-12); }

.vel-p-14 { padding: var(--vel-space-14); }

.vel-p-16 { padding: var(--vel-space-16); }

.vel-p-20 { padding: var(--vel-space-20); }

.vel-p-24 { padding: var(--vel-space-24); }

.vel-p-28 { padding: var(--vel-space-28); }

.vel-p-32 { padding: var(--vel-space-32); }

/* Padding — x axis */

.vel-px-0  { padding-left: 0px; padding-right: 0px; }

.vel-px-px { padding-left: 1px; padding-right: 1px; }

.vel-px-1  { padding-left: var(--vel-space-1); padding-right: var(--vel-space-1); }

.vel-px-2  { padding-left: var(--vel-space-2); padding-right: var(--vel-space-2); }

.vel-px-3  { padding-left: var(--vel-space-3); padding-right: var(--vel-space-3); }

.vel-px-4  { padding-left: var(--vel-space-4); padding-right: var(--vel-space-4); }

.vel-px-5  { padding-left: var(--vel-space-5); padding-right: var(--vel-space-5); }

.vel-px-6  { padding-left: var(--vel-space-6); padding-right: var(--vel-space-6); }

.vel-px-7  { padding-left: var(--vel-space-7); padding-right: var(--vel-space-7); }

.vel-px-8  { padding-left: var(--vel-space-8); padding-right: var(--vel-space-8); }

.vel-px-10 { padding-left: var(--vel-space-10); padding-right: var(--vel-space-10); }

.vel-px-12 { padding-left: var(--vel-space-12); padding-right: var(--vel-space-12); }

.vel-px-16 { padding-left: var(--vel-space-16); padding-right: var(--vel-space-16); }

/* Padding — y axis */

.vel-py-0  { padding-top: 0px; padding-bottom: 0px; }

.vel-py-px { padding-top: 1px; padding-bottom: 1px; }

.vel-py-1  { padding-top: var(--vel-space-1); padding-bottom: var(--vel-space-1); }

.vel-py-2  { padding-top: var(--vel-space-2); padding-bottom: var(--vel-space-2); }

.vel-py-3  { padding-top: var(--vel-space-3); padding-bottom: var(--vel-space-3); }

.vel-py-4  { padding-top: var(--vel-space-4); padding-bottom: var(--vel-space-4); }

.vel-py-5  { padding-top: var(--vel-space-5); padding-bottom: var(--vel-space-5); }

.vel-py-6  { padding-top: var(--vel-space-6); padding-bottom: var(--vel-space-6); }

.vel-py-7  { padding-top: var(--vel-space-7); padding-bottom: var(--vel-space-7); }

.vel-py-8  { padding-top: var(--vel-space-8); padding-bottom: var(--vel-space-8); }

.vel-py-10 { padding-top: var(--vel-space-10); padding-bottom: var(--vel-space-10); }

.vel-py-12 { padding-top: var(--vel-space-12); padding-bottom: var(--vel-space-12); }

.vel-py-16 { padding-top: var(--vel-space-16); padding-bottom: var(--vel-space-16); }

/* Padding — individual sides */

.vel-pt-0 { padding-top: 0px; }

.vel-pt-1 { padding-top: var(--vel-space-1); }

.vel-pt-2 { padding-top: var(--vel-space-2); }

.vel-pt-3 { padding-top: var(--vel-space-3); }

.vel-pt-4 { padding-top: var(--vel-space-4); }

.vel-pt-5 { padding-top: var(--vel-space-5); }

.vel-pt-6 { padding-top: var(--vel-space-6); }

.vel-pt-8 { padding-top: var(--vel-space-8); }

.vel-pt-10{ padding-top: var(--vel-space-10); }

.vel-pt-12{ padding-top: var(--vel-space-12); }

.vel-pt-16{ padding-top: var(--vel-space-16); }

.vel-pr-0 { padding-right: 0px; }

.vel-pr-1 { padding-right: var(--vel-space-1); }

.vel-pr-2 { padding-right: var(--vel-space-2); }

.vel-pr-3 { padding-right: var(--vel-space-3); }

.vel-pr-4 { padding-right: var(--vel-space-4); }

.vel-pr-5 { padding-right: var(--vel-space-5); }

.vel-pr-6 { padding-right: var(--vel-space-6); }

.vel-pr-8 { padding-right: var(--vel-space-8); }

.vel-pr-12{ padding-right: var(--vel-space-12); }

.vel-pb-0 { padding-bottom: 0px; }

.vel-pb-1 { padding-bottom: var(--vel-space-1); }

.vel-pb-2 { padding-bottom: var(--vel-space-2); }

.vel-pb-3 { padding-bottom: var(--vel-space-3); }

.vel-pb-4 { padding-bottom: var(--vel-space-4); }

.vel-pb-5 { padding-bottom: var(--vel-space-5); }

.vel-pb-6 { padding-bottom: var(--vel-space-6); }

.vel-pb-8 { padding-bottom: var(--vel-space-8); }

.vel-pb-12{ padding-bottom: var(--vel-space-12); }

.vel-pl-0 { padding-left: 0px; }

.vel-pl-1 { padding-left: var(--vel-space-1); }

.vel-pl-2 { padding-left: var(--vel-space-2); }

.vel-pl-3 { padding-left: var(--vel-space-3); }

.vel-pl-4 { padding-left: var(--vel-space-4); }

.vel-pl-5 { padding-left: var(--vel-space-5); }

.vel-pl-6 { padding-left: var(--vel-space-6); }

.vel-pl-8 { padding-left: var(--vel-space-8); }

.vel-pl-12{ padding-left: var(--vel-space-12); }

/* ─── Margin ─────────────────────────────────── */

/* Margin — all sides */

.vel-m-0    { margin: 0px; }

.vel-m-px   { margin: 1px; }

.vel-m-auto { margin: auto; }

.vel-m-1    { margin: var(--vel-space-1); }

.vel-m-2    { margin: var(--vel-space-2); }

.vel-m-3    { margin: var(--vel-space-3); }

.vel-m-4    { margin: var(--vel-space-4); }

.vel-m-5    { margin: var(--vel-space-5); }

.vel-m-6    { margin: var(--vel-space-6); }

.vel-m-7    { margin: var(--vel-space-7); }

.vel-m-8    { margin: var(--vel-space-8); }

.vel-m-10   { margin: var(--vel-space-10); }

.vel-m-12   { margin: var(--vel-space-12); }

.vel-m-16   { margin: var(--vel-space-16); }

/* Margin — x axis */

.vel-mx-0    { margin-left: 0px; margin-right: 0px; }

.vel-mx-auto { margin-left: auto; margin-right: auto; }

.vel-mx-1    { margin-left: var(--vel-space-1); margin-right: var(--vel-space-1); }

.vel-mx-2    { margin-left: var(--vel-space-2); margin-right: var(--vel-space-2); }

.vel-mx-3    { margin-left: var(--vel-space-3); margin-right: var(--vel-space-3); }

.vel-mx-4    { margin-left: var(--vel-space-4); margin-right: var(--vel-space-4); }

.vel-mx-6    { margin-left: var(--vel-space-6); margin-right: var(--vel-space-6); }

.vel-mx-8    { margin-left: var(--vel-space-8); margin-right: var(--vel-space-8); }

.vel-mx-12   { margin-left: var(--vel-space-12); margin-right: var(--vel-space-12); }

/* Margin — y axis */

.vel-my-0    { margin-top: 0px; margin-bottom: 0px; }

.vel-my-auto { margin-top: auto; margin-bottom: auto; }

.vel-my-1    { margin-top: var(--vel-space-1); margin-bottom: var(--vel-space-1); }

.vel-my-2    { margin-top: var(--vel-space-2); margin-bottom: var(--vel-space-2); }

.vel-my-3    { margin-top: var(--vel-space-3); margin-bottom: var(--vel-space-3); }

.vel-my-4    { margin-top: var(--vel-space-4); margin-bottom: var(--vel-space-4); }

.vel-my-6    { margin-top: var(--vel-space-6); margin-bottom: var(--vel-space-6); }

.vel-my-8    { margin-top: var(--vel-space-8); margin-bottom: var(--vel-space-8); }

.vel-my-12   { margin-top: var(--vel-space-12); margin-bottom: var(--vel-space-12); }

/* Margin — individual sides */

.vel-mt-0 { margin-top: 0px; }

.vel-mt-auto { margin-top: auto; }

.vel-mt-1 { margin-top: var(--vel-space-1); }

.vel-mt-2 { margin-top: var(--vel-space-2); }

.vel-mt-3 { margin-top: var(--vel-space-3); }

.vel-mt-4 { margin-top: var(--vel-space-4); }

.vel-mt-5 { margin-top: var(--vel-space-5); }

.vel-mt-6 { margin-top: var(--vel-space-6); }

.vel-mt-8 { margin-top: var(--vel-space-8); }

.vel-mt-10{ margin-top: var(--vel-space-10); }

.vel-mt-12{ margin-top: var(--vel-space-12); }

.vel-mt-16{ margin-top: var(--vel-space-16); }

.vel-mr-0 { margin-right: 0px; }

.vel-mr-auto { margin-right: auto; }

.vel-mr-1 { margin-right: var(--vel-space-1); }

.vel-mr-2 { margin-right: var(--vel-space-2); }

.vel-mr-3 { margin-right: var(--vel-space-3); }

.vel-mr-4 { margin-right: var(--vel-space-4); }

.vel-mr-6 { margin-right: var(--vel-space-6); }

.vel-mr-8 { margin-right: var(--vel-space-8); }

.vel-mb-0 { margin-bottom: 0px; }

.vel-mb-auto { margin-bottom: auto; }

.vel-mb-1 { margin-bottom: var(--vel-space-1); }

.vel-mb-2 { margin-bottom: var(--vel-space-2); }

.vel-mb-3 { margin-bottom: var(--vel-space-3); }

.vel-mb-4 { margin-bottom: var(--vel-space-4); }

.vel-mb-5 { margin-bottom: var(--vel-space-5); }

.vel-mb-6 { margin-bottom: var(--vel-space-6); }

.vel-mb-8 { margin-bottom: var(--vel-space-8); }

.vel-mb-10{ margin-bottom: var(--vel-space-10); }

.vel-mb-12{ margin-bottom: var(--vel-space-12); }

.vel-mb-16{ margin-bottom: var(--vel-space-16); }

.vel-ml-0 { margin-left: 0px; }

.vel-ml-auto { margin-left: auto; }

.vel-ml-1 { margin-left: var(--vel-space-1); }

.vel-ml-2 { margin-left: var(--vel-space-2); }

.vel-ml-3 { margin-left: var(--vel-space-3); }

.vel-ml-4 { margin-left: var(--vel-space-4); }

.vel-ml-6 { margin-left: var(--vel-space-6); }

.vel-ml-8 { margin-left: var(--vel-space-8); }

/* Space between (children) */

.vel-space-x-0 > * + * { margin-left: 0px; }

.vel-space-x-1 > * + * { margin-left: var(--vel-space-1); }

.vel-space-x-2 > * + * { margin-left: var(--vel-space-2); }

.vel-space-x-3 > * + * { margin-left: var(--vel-space-3); }

.vel-space-x-4 > * + * { margin-left: var(--vel-space-4); }

.vel-space-x-6 > * + * { margin-left: var(--vel-space-6); }

.vel-space-x-8 > * + * { margin-left: var(--vel-space-8); }

.vel-space-y-0 > * + * { margin-top: 0px; }

.vel-space-y-1 > * + * { margin-top: var(--vel-space-1); }

.vel-space-y-2 > * + * { margin-top: var(--vel-space-2); }

.vel-space-y-3 > * + * { margin-top: var(--vel-space-3); }

.vel-space-y-4 > * + * { margin-top: var(--vel-space-4); }

.vel-space-y-6 > * + * { margin-top: var(--vel-space-6); }

.vel-space-y-8 > * + * { margin-top: var(--vel-space-8); }

/* VeloraCSS — Sizing Utilities */

/* Width */

.vel-w-0     { width: 0px; }

.vel-w-px    { width: 1px; }

.vel-w-auto  { width: auto; }

.vel-w-full  { width: 100%; }

.vel-w-screen{ width: 100vw; }

.vel-w-svw   { width: 100svw; }

.vel-w-dvw   { width: 100dvw; }

.vel-w-min   { width: -moz-min-content; width: min-content; }

.vel-w-max   { width: -moz-max-content; width: max-content; }

.vel-w-fit   { width: -moz-fit-content; width: fit-content; }

.vel-w-1     { width: var(--vel-space-1); }

.vel-w-2     { width: var(--vel-space-2); }

.vel-w-3     { width: var(--vel-space-3); }

.vel-w-4     { width: var(--vel-space-4); }

.vel-w-5     { width: var(--vel-space-5); }

.vel-w-6     { width: var(--vel-space-6); }

.vel-w-7     { width: var(--vel-space-7); }

.vel-w-8     { width: var(--vel-space-8); }

.vel-w-9     { width: var(--vel-space-9); }

.vel-w-10    { width: var(--vel-space-10); }

.vel-w-11    { width: var(--vel-space-11); }

.vel-w-12    { width: var(--vel-space-12); }

.vel-w-14    { width: var(--vel-space-14); }

.vel-w-16    { width: var(--vel-space-16); }

.vel-w-20    { width: var(--vel-space-20); }

.vel-w-24    { width: var(--vel-space-24); }

.vel-w-28    { width: var(--vel-space-28); }

.vel-w-32    { width: var(--vel-space-32); }

.vel-w-36    { width: var(--vel-space-36); }

.vel-w-40    { width: var(--vel-space-40); }

.vel-w-48    { width: var(--vel-space-48); }

.vel-w-56    { width: var(--vel-space-56); }

.vel-w-64    { width: var(--vel-space-64); }

.vel-w-72    { width: var(--vel-space-72); }

.vel-w-80    { width: var(--vel-space-80); }

.vel-w-96    { width: var(--vel-space-96); }

.vel-w-1\\/2  { width: 50%; }

.vel-w-1\\/3  { width: 33.333333%; }

.vel-w-2\\/3  { width: 66.666667%; }

.vel-w-1\\/4  { width: 25%; }

.vel-w-3\\/4  { width: 75%; }

.vel-w-1\\/5  { width: 20%; }

.vel-w-2\\/5  { width: 40%; }

.vel-w-3\\/5  { width: 60%; }

.vel-w-4\\/5  { width: 80%; }

.vel-w-1\\/6  { width: 16.666667%; }

.vel-w-5\\/6  { width: 83.333333%; }

/* Min width */

.vel-min-w-0    { min-width: 0px; }

.vel-min-w-full { min-width: 100%; }

.vel-min-w-min  { min-width: -moz-min-content; min-width: min-content; }

.vel-min-w-max  { min-width: -moz-max-content; min-width: max-content; }

.vel-min-w-fit  { min-width: -moz-fit-content; min-width: fit-content; }

/* Max width */

.vel-max-w-none { max-width: none; }

.vel-max-w-xs   { max-width: 20rem; }

.vel-max-w-sm   { max-width: 24rem; }

.vel-max-w-md   { max-width: 28rem; }

.vel-max-w-lg   { max-width: 32rem; }

.vel-max-w-xl   { max-width: 36rem; }

.vel-max-w-2xl  { max-width: 42rem; }

.vel-max-w-3xl  { max-width: 48rem; }

.vel-max-w-4xl  { max-width: 56rem; }

.vel-max-w-5xl  { max-width: 64rem; }

.vel-max-w-6xl  { max-width: 72rem; }

.vel-max-w-7xl  { max-width: 80rem; }

.vel-max-w-full { max-width: 100%; }

.vel-max-w-min  { max-width: -moz-min-content; max-width: min-content; }

.vel-max-w-max  { max-width: -moz-max-content; max-width: max-content; }

.vel-max-w-fit  { max-width: -moz-fit-content; max-width: fit-content; }

.vel-max-w-prose{ max-width: 65ch; }

.vel-max-w-screen-sm  { max-width: 640px; }

.vel-max-w-screen-md  { max-width: 768px; }

.vel-max-w-screen-lg  { max-width: 1024px; }

.vel-max-w-screen-xl  { max-width: 1280px; }

.vel-max-w-screen-2xl { max-width: 1536px; }

/* Height */

.vel-h-0      { height: 0px; }

.vel-h-px     { height: 1px; }

.vel-h-auto   { height: auto; }

.vel-h-full   { height: 100%; }

.vel-h-screen { height: 100vh; }

.vel-h-svh    { height: 100svh; }

.vel-h-dvh    { height: 100dvh; }

.vel-h-min    { height: -moz-min-content; height: min-content; }

.vel-h-max    { height: -moz-max-content; height: max-content; }

.vel-h-fit    { height: -moz-fit-content; height: fit-content; }

.vel-h-1  { height: var(--vel-space-1); }

.vel-h-2  { height: var(--vel-space-2); }

.vel-h-3  { height: var(--vel-space-3); }

.vel-h-4  { height: var(--vel-space-4); }

.vel-h-5  { height: var(--vel-space-5); }

.vel-h-6  { height: var(--vel-space-6); }

.vel-h-7  { height: var(--vel-space-7); }

.vel-h-8  { height: var(--vel-space-8); }

.vel-h-9  { height: var(--vel-space-9); }

.vel-h-10 { height: var(--vel-space-10); }

.vel-h-11 { height: var(--vel-space-11); }

.vel-h-12 { height: var(--vel-space-12); }

.vel-h-14 { height: var(--vel-space-14); }

.vel-h-16 { height: var(--vel-space-16); }

.vel-h-20 { height: var(--vel-space-20); }

.vel-h-24 { height: var(--vel-space-24); }

.vel-h-28 { height: var(--vel-space-28); }

.vel-h-32 { height: var(--vel-space-32); }

.vel-h-36 { height: var(--vel-space-36); }

.vel-h-40 { height: var(--vel-space-40); }

.vel-h-48 { height: var(--vel-space-48); }

.vel-h-56 { height: var(--vel-space-56); }

.vel-h-64 { height: var(--vel-space-64); }

/* Min height */

.vel-min-h-0      { min-height: 0px; }

.vel-min-h-full   { min-height: 100%; }

.vel-min-h-screen { min-height: 100vh; }

.vel-min-h-svh    { min-height: 100svh; }

.vel-min-h-dvh    { min-height: 100dvh; }

.vel-min-h-min    { min-height: -moz-min-content; min-height: min-content; }

.vel-min-h-max    { min-height: -moz-max-content; min-height: max-content; }

.vel-min-h-fit    { min-height: -moz-fit-content; min-height: fit-content; }

/* Max height */

.vel-max-h-none   { max-height: none; }

.vel-max-h-full   { max-height: 100%; }

.vel-max-h-screen { max-height: 100vh; }

.vel-max-h-svh    { max-height: 100svh; }

.vel-max-h-dvh    { max-height: 100dvh; }

.vel-max-h-min    { max-height: -moz-min-content; max-height: min-content; }

.vel-max-h-max    { max-height: -moz-max-content; max-height: max-content; }

.vel-max-h-fit    { max-height: -moz-fit-content; max-height: fit-content; }

.vel-max-h-24  { max-height: var(--vel-space-24); }

.vel-max-h-48  { max-height: var(--vel-space-48); }

.vel-max-h-64  { max-height: var(--vel-space-64); }

.vel-max-h-96  { max-height: var(--vel-space-96); }

/* VeloraCSS — Typography Utilities */

/* Font family */

.vel-font-sans  { font-family: var(--vel-font-sans); }

.vel-font-serif { font-family: var(--vel-font-serif); }

.vel-font-mono  { font-family: var(--vel-font-mono); }

/* Font size */

.vel-text-xs   { font-size: var(--vel-text-xs); line-height: 1rem; }

.vel-text-sm   { font-size: var(--vel-text-sm); line-height: 1.25rem; }

.vel-text-base { font-size: var(--vel-text-base); line-height: 1.5rem; }

.vel-text-lg   { font-size: var(--vel-text-lg); line-height: 1.75rem; }

.vel-text-xl   { font-size: var(--vel-text-xl); line-height: 1.75rem; }

.vel-text-2xl  { font-size: var(--vel-text-2xl); line-height: 2rem; }

.vel-text-3xl  { font-size: var(--vel-text-3xl); line-height: 2.25rem; }

.vel-text-4xl  { font-size: var(--vel-text-4xl); line-height: 2.5rem; }

.vel-text-5xl  { font-size: var(--vel-text-5xl); line-height: 1; }

.vel-text-6xl  { font-size: var(--vel-text-6xl); line-height: 1; }

.vel-text-7xl  { font-size: var(--vel-text-7xl); line-height: 1; }

.vel-text-8xl  { font-size: var(--vel-text-8xl); line-height: 1; }

.vel-text-9xl  { font-size: var(--vel-text-9xl); line-height: 1; }

/* Font weight */

.vel-font-thin       { font-weight: 100; }

.vel-font-extralight { font-weight: 200; }

.vel-font-light      { font-weight: 300; }

.vel-font-normal     { font-weight: 400; }

.vel-font-medium     { font-weight: 500; }

.vel-font-semibold   { font-weight: 600; }

.vel-font-bold       { font-weight: 700; }

.vel-font-extrabold  { font-weight: 800; }

.vel-font-black      { font-weight: 900; }

/* Font style */

.vel-italic     { font-style: italic; }

.vel-not-italic { font-style: normal; }

/* Line height */

.vel-leading-none    { line-height: 1; }

.vel-leading-tight   { line-height: 1.25; }

.vel-leading-snug    { line-height: 1.375; }

.vel-leading-normal  { line-height: 1.5; }

.vel-leading-relaxed { line-height: 1.625; }

.vel-leading-loose   { line-height: 2; }

.vel-leading-3  { line-height: 0.75rem; }

.vel-leading-4  { line-height: 1rem; }

.vel-leading-5  { line-height: 1.25rem; }

.vel-leading-6  { line-height: 1.5rem; }

.vel-leading-7  { line-height: 1.75rem; }

.vel-leading-8  { line-height: 2rem; }

.vel-leading-9  { line-height: 2.25rem; }

.vel-leading-10 { line-height: 2.5rem; }

/* Letter spacing */

.vel-tracking-tighter { letter-spacing: -0.05em; }

.vel-tracking-tight   { letter-spacing: -0.025em; }

.vel-tracking-normal  { letter-spacing: 0em; }

.vel-tracking-wide    { letter-spacing: 0.025em; }

.vel-tracking-wider   { letter-spacing: 0.05em; }

.vel-tracking-widest  { letter-spacing: 0.1em; }

/* Text align */

.vel-text-left    { text-align: left; }

.vel-text-center  { text-align: center; }

.vel-text-right   { text-align: right; }

.vel-text-justify { text-align: justify; }

.vel-text-start   { text-align: start; }

.vel-text-end     { text-align: end; }

/* Text decoration */

.vel-underline    { text-decoration-line: underline; }

.vel-overline     { text-decoration-line: overline; }

.vel-line-through { text-decoration-line: line-through; }

.vel-no-underline { text-decoration-line: none; }

/* Text transform */

.vel-uppercase    { text-transform: uppercase; }

.vel-lowercase    { text-transform: lowercase; }

.vel-capitalize   { text-transform: capitalize; }

.vel-normal-case  { text-transform: none; }

/* Text overflow */

.vel-truncate     { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.vel-text-ellipsis{ text-overflow: ellipsis; }

.vel-text-clip    { text-overflow: clip; }

/* White space */

.vel-whitespace-normal    { white-space: normal; }

.vel-whitespace-nowrap    { white-space: nowrap; }

.vel-whitespace-pre       { white-space: pre; }

.vel-whitespace-pre-line  { white-space: pre-line; }

.vel-whitespace-pre-wrap  { white-space: pre-wrap; }

.vel-whitespace-break-spaces { white-space: break-spaces; }

/* Word break */

.vel-break-normal { overflow-wrap: normal; word-break: normal; }

.vel-break-words  { overflow-wrap: break-word; }

.vel-break-all    { word-break: break-all; }

.vel-break-keep   { word-break: keep-all; }

/* Vertical align */

.vel-align-baseline    { vertical-align: baseline; }

.vel-align-top         { vertical-align: top; }

.vel-align-middle      { vertical-align: middle; }

.vel-align-bottom      { vertical-align: bottom; }

.vel-align-text-top    { vertical-align: text-top; }

.vel-align-text-bottom { vertical-align: text-bottom; }

.vel-align-sub         { vertical-align: sub; }

.vel-align-super       { vertical-align: super; }

/* Text smoothing */

.vel-antialiased     { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

.vel-subpixel-antialiased { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }

/* List style */

.vel-list-none    { list-style-type: none; }

.vel-list-disc    { list-style-type: disc; }

.vel-list-decimal { list-style-type: decimal; }

.vel-list-inside  { list-style-position: inside; }

.vel-list-outside { list-style-position: outside; }

/* Text indent */

.vel-indent-0  { text-indent: 0px; }

.vel-indent-4  { text-indent: var(--vel-space-4); }

.vel-indent-8  { text-indent: var(--vel-space-8); }

/* Hyphens */

.vel-hyphens-none   { hyphens: none; }

.vel-hyphens-manual { hyphens: manual; }

.vel-hyphens-auto   { hyphens: auto; }

/* Content */

.vel-content-none  { content: none; }

.vel-content-empty { content: ""; }

/* VeloraCSS — Color Utilities */

/* ─── Text Colors ─────────────────────────── */

.vel-text-inherit    { color: inherit; }

.vel-text-current    { color: currentColor; }

.vel-text-transparent{ color: transparent; }

.vel-text-white      { color: #ffffff; }

.vel-text-black      { color: #000000; }

.vel-text-primary    { color: var(--vel-color-primary); }

.vel-text-secondary  { color: var(--vel-color-secondary); }

.vel-text-success    { color: var(--vel-color-success); }

.vel-text-danger     { color: var(--vel-color-danger); }

.vel-text-warning    { color: var(--vel-color-warning); }

.vel-text-info       { color: var(--vel-color-info); }

.vel-text-neutral-50  { color: var(--vel-neutral-50); }

.vel-text-neutral-100 { color: var(--vel-neutral-100); }

.vel-text-neutral-200 { color: var(--vel-neutral-200); }

.vel-text-neutral-300 { color: var(--vel-neutral-300); }

.vel-text-neutral-400 { color: var(--vel-neutral-400); }

.vel-text-neutral-500 { color: var(--vel-neutral-500); }

.vel-text-neutral-600 { color: var(--vel-neutral-600); }

.vel-text-neutral-700 { color: var(--vel-neutral-700); }

.vel-text-neutral-800 { color: var(--vel-neutral-800); }

.vel-text-neutral-900 { color: var(--vel-neutral-900); }

.vel-text-neutral-950 { color: var(--vel-neutral-950); }

/* ─── Background Colors ──────────────────── */

.vel-bg-inherit     { background-color: inherit; }

.vel-bg-current     { background-color: currentColor; }

.vel-bg-transparent { background-color: transparent; }

.vel-bg-white       { background-color: #ffffff; }

.vel-bg-black       { background-color: #000000; }

.vel-bg-primary     { background-color: var(--vel-color-primary); }

.vel-bg-secondary   { background-color: var(--vel-color-secondary); }

.vel-bg-success     { background-color: var(--vel-color-success); }

.vel-bg-danger      { background-color: var(--vel-color-danger); }

.vel-bg-warning     { background-color: var(--vel-color-warning); }

.vel-bg-info        { background-color: var(--vel-color-info); }

.vel-bg-primary-light   { background-color: var(--vel-color-primary-light); }

.vel-bg-success-light   { background-color: var(--vel-color-success-light); }

.vel-bg-danger-light    { background-color: var(--vel-color-danger-light); }

.vel-bg-warning-light   { background-color: var(--vel-color-warning-light); }

.vel-bg-info-light      { background-color: var(--vel-color-info-light); }

.vel-bg-neutral-50  { background-color: var(--vel-neutral-50); }

.vel-bg-neutral-100 { background-color: var(--vel-neutral-100); }

.vel-bg-neutral-200 { background-color: var(--vel-neutral-200); }

.vel-bg-neutral-300 { background-color: var(--vel-neutral-300); }

.vel-bg-neutral-400 { background-color: var(--vel-neutral-400); }

.vel-bg-neutral-500 { background-color: var(--vel-neutral-500); }

.vel-bg-neutral-600 { background-color: var(--vel-neutral-600); }

.vel-bg-neutral-700 { background-color: var(--vel-neutral-700); }

.vel-bg-neutral-800 { background-color: var(--vel-neutral-800); }

.vel-bg-neutral-900 { background-color: var(--vel-neutral-900); }

.vel-bg-neutral-950 { background-color: var(--vel-neutral-950); }

/* Background opacity (composable) */

.vel-bg-opacity-0   { --vel-bg-opacity: 0; }

.vel-bg-opacity-25  { --vel-bg-opacity: 0.25; }

.vel-bg-opacity-50  { --vel-bg-opacity: 0.5; }

.vel-bg-opacity-75  { --vel-bg-opacity: 0.75; }

.vel-bg-opacity-100 { --vel-bg-opacity: 1; }

/* ─── Border Colors ─────────────────────── */

.vel-border-inherit     { border-color: inherit; }

.vel-border-current     { border-color: currentColor; }

.vel-border-transparent { border-color: transparent; }

.vel-border-white       { border-color: #ffffff; }

.vel-border-black       { border-color: #000000; }

.vel-border-primary   { border-color: var(--vel-color-primary); }

.vel-border-secondary { border-color: var(--vel-color-secondary); }

.vel-border-success   { border-color: var(--vel-color-success); }

.vel-border-danger    { border-color: var(--vel-color-danger); }

.vel-border-warning   { border-color: var(--vel-color-warning); }

.vel-border-info      { border-color: var(--vel-color-info); }

.vel-border-neutral-100 { border-color: var(--vel-neutral-100); }

.vel-border-neutral-200 { border-color: var(--vel-neutral-200); }

.vel-border-neutral-300 { border-color: var(--vel-neutral-300); }

.vel-border-neutral-400 { border-color: var(--vel-neutral-400); }

.vel-border-neutral-500 { border-color: var(--vel-neutral-500); }

.vel-border-neutral-600 { border-color: var(--vel-neutral-600); }

.vel-border-neutral-700 { border-color: var(--vel-neutral-700); }

.vel-border-neutral-800 { border-color: var(--vel-neutral-800); }

.vel-border-neutral-900 { border-color: var(--vel-neutral-900); }

/* ─── Background position/size/repeat ─────── */

.vel-bg-auto     { background-size: auto; }

.vel-bg-cover    { background-size: cover; }

.vel-bg-contain  { background-size: contain; }

.vel-bg-center   { background-position: center; }

.vel-bg-top      { background-position: top; }

.vel-bg-right    { background-position: right; }

.vel-bg-bottom   { background-position: bottom; }

.vel-bg-left     { background-position: left; }

.vel-bg-repeat      { background-repeat: repeat; }

.vel-bg-no-repeat   { background-repeat: no-repeat; }

.vel-bg-repeat-x    { background-repeat: repeat-x; }

.vel-bg-repeat-y    { background-repeat: repeat-y; }

.vel-bg-fixed       { background-attachment: fixed; }

.vel-bg-local       { background-attachment: local; }

.vel-bg-scroll      { background-attachment: scroll; }

/* VeloraCSS — Border Utilities */

/* Border width */

.vel-border-0  { border-width: 0px; }

.vel-border    { border-width: 1px; }

.vel-border-2  { border-width: 2px; }

.vel-border-4  { border-width: 4px; }

.vel-border-8  { border-width: 8px; }

.vel-border-t-0 { border-top-width: 0px; }

.vel-border-t   { border-top-width: 1px; }

.vel-border-t-2 { border-top-width: 2px; }

.vel-border-t-4 { border-top-width: 4px; }

.vel-border-r-0 { border-right-width: 0px; }

.vel-border-r   { border-right-width: 1px; }

.vel-border-r-2 { border-right-width: 2px; }

.vel-border-r-4 { border-right-width: 4px; }

.vel-border-b-0 { border-bottom-width: 0px; }

.vel-border-b   { border-bottom-width: 1px; }

.vel-border-b-2 { border-bottom-width: 2px; }

.vel-border-b-4 { border-bottom-width: 4px; }

.vel-border-l-0 { border-left-width: 0px; }

.vel-border-l   { border-left-width: 1px; }

.vel-border-l-2 { border-left-width: 2px; }

.vel-border-l-4 { border-left-width: 4px; }

.vel-border-x-0 { border-left-width: 0px; border-right-width: 0px; }

.vel-border-x   { border-left-width: 1px; border-right-width: 1px; }

.vel-border-x-2 { border-left-width: 2px; border-right-width: 2px; }

.vel-border-y-0 { border-top-width: 0px; border-bottom-width: 0px; }

.vel-border-y   { border-top-width: 1px; border-bottom-width: 1px; }

.vel-border-y-2 { border-top-width: 2px; border-bottom-width: 2px; }

/* Border style */

.vel-border-solid  { border-style: solid; }

.vel-border-dashed { border-style: dashed; }

.vel-border-dotted { border-style: dotted; }

.vel-border-double { border-style: double; }

.vel-border-hidden { border-style: hidden; }

.vel-border-none   { border-style: none; }

/* Border radius */

.vel-rounded-none { border-radius: var(--vel-radius-none); }

.vel-rounded-sm   { border-radius: var(--vel-radius-sm); }

.vel-rounded      { border-radius: var(--vel-radius); }

.vel-rounded-md   { border-radius: var(--vel-radius-md); }

.vel-rounded-lg   { border-radius: var(--vel-radius-lg); }

.vel-rounded-xl   { border-radius: var(--vel-radius-xl); }

.vel-rounded-2xl  { border-radius: var(--vel-radius-2xl); }

.vel-rounded-3xl  { border-radius: var(--vel-radius-3xl); }

.vel-rounded-full { border-radius: var(--vel-radius-full); }

.vel-rounded-t-none { border-top-left-radius: 0; border-top-right-radius: 0; }

.vel-rounded-t-sm   { border-top-left-radius: var(--vel-radius-sm); border-top-right-radius: var(--vel-radius-sm); }

.vel-rounded-t      { border-top-left-radius: var(--vel-radius); border-top-right-radius: var(--vel-radius); }

.vel-rounded-t-md   { border-top-left-radius: var(--vel-radius-md); border-top-right-radius: var(--vel-radius-md); }

.vel-rounded-t-lg   { border-top-left-radius: var(--vel-radius-lg); border-top-right-radius: var(--vel-radius-lg); }

.vel-rounded-t-xl   { border-top-left-radius: var(--vel-radius-xl); border-top-right-radius: var(--vel-radius-xl); }

.vel-rounded-t-full { border-top-left-radius: 9999px; border-top-right-radius: 9999px; }

.vel-rounded-b-none { border-bottom-left-radius: 0; border-bottom-right-radius: 0; }

.vel-rounded-b-sm   { border-bottom-left-radius: var(--vel-radius-sm); border-bottom-right-radius: var(--vel-radius-sm); }

.vel-rounded-b      { border-bottom-left-radius: var(--vel-radius); border-bottom-right-radius: var(--vel-radius); }

.vel-rounded-b-md   { border-bottom-left-radius: var(--vel-radius-md); border-bottom-right-radius: var(--vel-radius-md); }

.vel-rounded-b-lg   { border-bottom-left-radius: var(--vel-radius-lg); border-bottom-right-radius: var(--vel-radius-lg); }

.vel-rounded-b-full { border-bottom-left-radius: 9999px; border-bottom-right-radius: 9999px; }

.vel-rounded-l-none { border-top-left-radius: 0; border-bottom-left-radius: 0; }

.vel-rounded-l-sm   { border-top-left-radius: var(--vel-radius-sm); border-bottom-left-radius: var(--vel-radius-sm); }

.vel-rounded-l      { border-top-left-radius: var(--vel-radius); border-bottom-left-radius: var(--vel-radius); }

.vel-rounded-l-lg   { border-top-left-radius: var(--vel-radius-lg); border-bottom-left-radius: var(--vel-radius-lg); }

.vel-rounded-l-full { border-top-left-radius: 9999px; border-bottom-left-radius: 9999px; }

.vel-rounded-r-none { border-top-right-radius: 0; border-bottom-right-radius: 0; }

.vel-rounded-r-sm   { border-top-right-radius: var(--vel-radius-sm); border-bottom-right-radius: var(--vel-radius-sm); }

.vel-rounded-r      { border-top-right-radius: var(--vel-radius); border-bottom-right-radius: var(--vel-radius); }

.vel-rounded-r-lg   { border-top-right-radius: var(--vel-radius-lg); border-bottom-right-radius: var(--vel-radius-lg); }

.vel-rounded-r-full { border-top-right-radius: 9999px; border-bottom-right-radius: 9999px; }

/* Outline */

.vel-outline-none { outline: 2px solid transparent; outline-offset: 2px; }

.vel-outline      { outline-style: solid; }

.vel-outline-dashed { outline-style: dashed; }

.vel-outline-dotted { outline-style: dotted; }

.vel-outline-0    { outline-width: 0px; }

.vel-outline-1    { outline-width: 1px; }

.vel-outline-2    { outline-width: 2px; }

.vel-outline-4    { outline-width: 4px; }

.vel-outline-8    { outline-width: 8px; }

.vel-outline-offset-0 { outline-offset: 0px; }

.vel-outline-offset-1 { outline-offset: 1px; }

.vel-outline-offset-2 { outline-offset: 2px; }

.vel-outline-offset-4 { outline-offset: 4px; }

.vel-outline-offset-8 { outline-offset: 8px; }

.vel-ring {
  box-shadow: 0 0 0 3px var(--vel-color-primary);
}

.vel-ring-primary   { box-shadow: 0 0 0 3px var(--vel-color-primary); }

.vel-ring-success   { box-shadow: 0 0 0 3px var(--vel-color-success); }

.vel-ring-danger    { box-shadow: 0 0 0 3px var(--vel-color-danger); }

.vel-ring-warning   { box-shadow: 0 0 0 3px var(--vel-color-warning); }

.vel-ring-neutral   { box-shadow: 0 0 0 3px var(--vel-neutral-400); }

/* VeloraCSS — Effects Utilities */

/* Box shadow */

.vel-shadow-sm    { box-shadow: var(--vel-shadow-sm); }

.vel-shadow       { box-shadow: var(--vel-shadow); }

.vel-shadow-md    { box-shadow: var(--vel-shadow-md); }

.vel-shadow-lg    { box-shadow: var(--vel-shadow-lg); }

.vel-shadow-xl    { box-shadow: var(--vel-shadow-xl); }

.vel-shadow-2xl   { box-shadow: var(--vel-shadow-2xl); }

.vel-shadow-inner { box-shadow: var(--vel-shadow-inner); }

.vel-shadow-none  { box-shadow: var(--vel-shadow-none); }

/* Opacity */

.vel-opacity-0   { opacity: 0; }

.vel-opacity-5   { opacity: 0.05; }

.vel-opacity-10  { opacity: 0.1; }

.vel-opacity-15  { opacity: 0.15; }

.vel-opacity-20  { opacity: 0.2; }

.vel-opacity-25  { opacity: 0.25; }

.vel-opacity-30  { opacity: 0.3; }

.vel-opacity-40  { opacity: 0.4; }

.vel-opacity-50  { opacity: 0.5; }

.vel-opacity-60  { opacity: 0.6; }

.vel-opacity-70  { opacity: 0.7; }

.vel-opacity-75  { opacity: 0.75; }

.vel-opacity-80  { opacity: 0.8; }

.vel-opacity-90  { opacity: 0.9; }

.vel-opacity-95  { opacity: 0.95; }

.vel-opacity-100 { opacity: 1; }

/* Mix blend mode */

.vel-mix-blend-normal      { mix-blend-mode: normal; }

.vel-mix-blend-multiply    { mix-blend-mode: multiply; }

.vel-mix-blend-screen      { mix-blend-mode: screen; }

.vel-mix-blend-overlay     { mix-blend-mode: overlay; }

.vel-mix-blend-darken      { mix-blend-mode: darken; }

.vel-mix-blend-lighten     { mix-blend-mode: lighten; }

.vel-mix-blend-color-dodge { mix-blend-mode: color-dodge; }

.vel-mix-blend-color-burn  { mix-blend-mode: color-burn; }

.vel-mix-blend-difference  { mix-blend-mode: difference; }

.vel-mix-blend-exclusion   { mix-blend-mode: exclusion; }

/* Filters */

.vel-blur-none { filter: blur(0); }

.vel-blur-sm   { filter: blur(4px); }

.vel-blur      { filter: blur(8px); }

.vel-blur-md   { filter: blur(12px); }

.vel-blur-lg   { filter: blur(16px); }

.vel-blur-xl   { filter: blur(24px); }

.vel-blur-2xl  { filter: blur(40px); }

.vel-blur-3xl  { filter: blur(64px); }

.vel-brightness-0   { filter: brightness(0); }

.vel-brightness-50  { filter: brightness(.5); }

.vel-brightness-75  { filter: brightness(.75); }

.vel-brightness-90  { filter: brightness(.9); }

.vel-brightness-95  { filter: brightness(.95); }

.vel-brightness-100 { filter: brightness(1); }

.vel-brightness-105 { filter: brightness(1.05); }

.vel-brightness-110 { filter: brightness(1.1); }

.vel-brightness-125 { filter: brightness(1.25); }

.vel-brightness-150 { filter: brightness(1.5); }

.vel-brightness-200 { filter: brightness(2); }

.vel-grayscale-0 { filter: grayscale(0); }

.vel-grayscale   { filter: grayscale(100%); }

.vel-invert-0 { filter: invert(0); }

.vel-invert   { filter: invert(100%); }

.vel-sepia-0 { filter: sepia(0); }

.vel-sepia   { filter: sepia(100%); }

/* Backdrop filters */

.vel-backdrop-blur-none { backdrop-filter: blur(0); }

.vel-backdrop-blur-sm   { backdrop-filter: blur(4px); }

.vel-backdrop-blur      { backdrop-filter: blur(8px); }

.vel-backdrop-blur-md   { backdrop-filter: blur(12px); }

.vel-backdrop-blur-lg   { backdrop-filter: blur(16px); }

.vel-backdrop-blur-xl   { backdrop-filter: blur(24px); }

.vel-backdrop-blur-2xl  { backdrop-filter: blur(40px); }

.vel-backdrop-blur-3xl  { backdrop-filter: blur(64px); }

/* VeloraCSS — Transitions & Transforms */

/* Transition property */

.vel-transition-none    { transition-property: none; }

.vel-transition-all     { transition-property: all; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

.vel-transition         { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

.vel-transition-colors  { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

.vel-transition-opacity { transition-property: opacity; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

.vel-transition-shadow  { transition-property: box-shadow; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

.vel-transition-transform{ transition-property: transform; transition-timing-function: var(--vel-ease-in-out); transition-duration: var(--vel-duration-150); }

/* Duration */

.vel-duration-0    { transition-duration: 0ms; }

.vel-duration-75   { transition-duration: var(--vel-duration-75); }

.vel-duration-100  { transition-duration: var(--vel-duration-100); }

.vel-duration-150  { transition-duration: var(--vel-duration-150); }

.vel-duration-200  { transition-duration: var(--vel-duration-200); }

.vel-duration-300  { transition-duration: var(--vel-duration-300); }

.vel-duration-500  { transition-duration: var(--vel-duration-500); }

.vel-duration-700  { transition-duration: var(--vel-duration-700); }

.vel-duration-1000 { transition-duration: var(--vel-duration-1000); }

/* Timing function */

.vel-ease-linear  { transition-timing-function: var(--vel-ease-linear); }

.vel-ease-in      { transition-timing-function: var(--vel-ease-in); }

.vel-ease-out     { transition-timing-function: var(--vel-ease-out); }

.vel-ease-in-out  { transition-timing-function: var(--vel-ease-in-out); }

/* Delay */

.vel-delay-0    { transition-delay: 0ms; }

.vel-delay-75   { transition-delay: 75ms; }

.vel-delay-100  { transition-delay: 100ms; }

.vel-delay-150  { transition-delay: 150ms; }

.vel-delay-200  { transition-delay: 200ms; }

.vel-delay-300  { transition-delay: 300ms; }

.vel-delay-500  { transition-delay: 500ms; }

.vel-delay-700  { transition-delay: 700ms; }

.vel-delay-1000 { transition-delay: 1000ms; }

/* ─── Transforms ──────────────────────────── */

/* Scale */

.vel-scale-0    { transform: scale(0); }

.vel-scale-50   { transform: scale(.5); }

.vel-scale-75   { transform: scale(.75); }

.vel-scale-90   { transform: scale(.9); }

.vel-scale-95   { transform: scale(.95); }

.vel-scale-100  { transform: scale(1); }

.vel-scale-105  { transform: scale(1.05); }

.vel-scale-110  { transform: scale(1.1); }

.vel-scale-125  { transform: scale(1.25); }

.vel-scale-150  { transform: scale(1.5); }

/* Rotate */

.vel-rotate-0    { transform: rotate(0deg); }

.vel-rotate-1    { transform: rotate(1deg); }

.vel-rotate-2    { transform: rotate(2deg); }

.vel-rotate-3    { transform: rotate(3deg); }

.vel-rotate-6    { transform: rotate(6deg); }

.vel-rotate-12   { transform: rotate(12deg); }

.vel-rotate-45   { transform: rotate(45deg); }

.vel-rotate-90   { transform: rotate(90deg); }

.vel-rotate-180  { transform: rotate(180deg); }

.-vel-rotate-1   { transform: rotate(-1deg); }

.-vel-rotate-2   { transform: rotate(-2deg); }

.-vel-rotate-3   { transform: rotate(-3deg); }

.-vel-rotate-6   { transform: rotate(-6deg); }

.-vel-rotate-12  { transform: rotate(-12deg); }

.-vel-rotate-45  { transform: rotate(-45deg); }

.-vel-rotate-90  { transform: rotate(-90deg); }

.-vel-rotate-180 { transform: rotate(-180deg); }

/* Translate */

.vel-translate-x-0    { transform: translateX(0px); }

.vel-translate-x-full { transform: translateX(100%); }

.vel-translate-x-1\\/2 { transform: translateX(50%); }

.-vel-translate-x-full{ transform: translateX(-100%); }

.-vel-translate-x-1\\/2{ transform: translateX(-50%); }

.vel-translate-y-0    { transform: translateY(0px); }

.vel-translate-y-full { transform: translateY(100%); }

.vel-translate-y-1\\/2 { transform: translateY(50%); }

.-vel-translate-y-full{ transform: translateY(-100%); }

.-vel-translate-y-1\\/2{ transform: translateY(-50%); }

/* Transform origin */

.vel-origin-center       { transform-origin: center; }

.vel-origin-top          { transform-origin: top; }

.vel-origin-top-right    { transform-origin: top right; }

.vel-origin-right        { transform-origin: right; }

.vel-origin-bottom-right { transform-origin: bottom right; }

.vel-origin-bottom       { transform-origin: bottom; }

.vel-origin-bottom-left  { transform-origin: bottom left; }

.vel-origin-left         { transform-origin: left; }

.vel-origin-top-left     { transform-origin: top left; }

/* ─── Animation ───────────────────────────── */

@keyframes vel-spin {
  to { transform: rotate(360deg); }
}

@keyframes vel-ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}

@keyframes vel-pulse {
  50% { opacity: .5; }
}

@keyframes vel-bounce {
  0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
  50%       { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
}

@keyframes vel-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes vel-slide-in-up {
  from { transform: translateY(10px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}

.vel-animate-none   { animation: none; }

.vel-animate-spin   { animation: vel-spin 1s linear infinite; }

.vel-animate-ping   { animation: vel-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }

.vel-animate-pulse  { animation: vel-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

.vel-animate-bounce { animation: vel-bounce 1s infinite; }

.vel-animate-fade-in    { animation: vel-fade-in 0.2s ease-out; }

.vel-animate-slide-in   { animation: vel-slide-in-up 0.2s ease-out; }

/* VeloraCSS — Interactivity Utilities */

/* Cursor */

.vel-cursor-auto        { cursor: auto; }

.vel-cursor-default     { cursor: default; }

.vel-cursor-pointer     { cursor: pointer; }

.vel-cursor-wait        { cursor: wait; }

.vel-cursor-text        { cursor: text; }

.vel-cursor-move        { cursor: move; }

.vel-cursor-help        { cursor: help; }

.vel-cursor-not-allowed { cursor: not-allowed; }

.vel-cursor-none        { cursor: none; }

.vel-cursor-grab        { cursor: grab; }

.vel-cursor-grabbing    { cursor: grabbing; }

.vel-cursor-crosshair   { cursor: crosshair; }

.vel-cursor-zoom-in     { cursor: zoom-in; }

.vel-cursor-zoom-out    { cursor: zoom-out; }

/* Pointer events */

.vel-pointer-events-none { pointer-events: none; }

.vel-pointer-events-auto { pointer-events: auto; }

/* User select */

.vel-select-none  { -webkit-user-select: none; -moz-user-select: none; user-select: none; }

.vel-select-text  { -webkit-user-select: text; -moz-user-select: text; user-select: text; }

.vel-select-all   { -webkit-user-select: all; -moz-user-select: all; user-select: all; }

.vel-select-auto  { -webkit-user-select: auto; -moz-user-select: auto; user-select: auto; }

/* Resize */

.vel-resize-none { resize: none; }

.vel-resize      { resize: both; }

.vel-resize-x    { resize: horizontal; }

.vel-resize-y    { resize: vertical; }

/* Scroll behavior */

.vel-scroll-auto   { scroll-behavior: auto; }

.vel-scroll-smooth { scroll-behavior: smooth; }

/* Scroll snap */

.vel-snap-none       { scroll-snap-type: none; }

.vel-snap-x          { scroll-snap-type: x var(--vel-scroll-snap-strictness, mandatory); }

.vel-snap-y          { scroll-snap-type: y var(--vel-scroll-snap-strictness, mandatory); }

.vel-snap-mandatory  { --vel-scroll-snap-strictness: mandatory; }

.vel-snap-proximity  { --vel-scroll-snap-strictness: proximity; }

.vel-snap-start      { scroll-snap-align: start; }

.vel-snap-end        { scroll-snap-align: end; }

.vel-snap-center     { scroll-snap-align: center; }

.vel-snap-align-none { scroll-snap-align: none; }

.vel-snap-always     { scroll-snap-stop: always; }

.vel-snap-normal     { scroll-snap-stop: normal; }

/* Touch action */

.vel-touch-auto        { touch-action: auto; }

.vel-touch-none        { touch-action: none; }

.vel-touch-pan-x       { touch-action: pan-x; }

.vel-touch-pan-y       { touch-action: pan-y; }

.vel-touch-pan-left    { touch-action: pan-left; }

.vel-touch-pan-right   { touch-action: pan-right; }

.vel-touch-pan-up      { touch-action: pan-up; }

.vel-touch-pan-down    { touch-action: pan-down; }

.vel-touch-pinch-zoom  { touch-action: pinch-zoom; }

.vel-touch-manipulation{ touch-action: manipulation; }

/* Will change */

.vel-will-change-auto      { will-change: auto; }

.vel-will-change-scroll    { will-change: scroll-position; }

.vel-will-change-contents  { will-change: contents; }

.vel-will-change-transform { will-change: transform; }

/* Appearance */

.vel-appearance-none { -webkit-appearance: none; -moz-appearance: none; appearance: none; }

.vel-appearance-auto { -webkit-appearance: auto; -moz-appearance: auto; appearance: auto; }

/* Color scheme */

.vel-scheme-normal { color-scheme: normal; }

.vel-scheme-light  { color-scheme: light; }

.vel-scheme-dark   { color-scheme: dark; }

/* Caret */

.vel-caret-transparent { caret-color: transparent; }

.vel-caret-primary     { caret-color: var(--vel-color-primary); }

.vel-caret-auto        { caret-color: auto; }

/* Focus ring helper */

.vel-focus-ring:focus-visible {
  outline: 2px solid var(--vel-color-primary);
  outline-offset: 2px;
}

/* Disabled state helper */

.vel-disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}

/* Components */

/* VeloraCSS — Button Component */

.vel-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--vel-space-2);
  padding: var(--vel-space-2) var(--vel-space-4);
  font-size: var(--vel-text-sm);
  font-weight: 500;
  line-height: 1.25rem;
  border-radius: var(--vel-radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: color 150ms ease, background-color 150ms ease, border-color 150ms ease, box-shadow 150ms ease, opacity 150ms ease;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  vertical-align: middle;
}

.vel-btn:focus-visible {
  outline: 2px solid var(--vel-color-primary);
  outline-offset: 2px;
}

.vel-btn:disabled,
.vel-btn.vel-btn-disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}

/* ─── Variants ────────────────────────────── */

.vel-btn-primary {
  background-color: var(--vel-color-primary);
  color: var(--vel-color-primary-fg);
  border-color: var(--vel-color-primary);
}

.vel-btn-primary:hover {
  background-color: var(--vel-color-primary-hover);
  border-color: var(--vel-color-primary-hover);
}

.vel-btn-secondary {
  background-color: var(--vel-color-secondary);
  color: var(--vel-color-secondary-fg);
  border-color: var(--vel-color-secondary);
}

.vel-btn-secondary:hover {
  background-color: var(--vel-color-secondary-hover);
  border-color: var(--vel-color-secondary-hover);
}

.vel-btn-success {
  background-color: var(--vel-color-success);
  color: var(--vel-color-success-fg);
  border-color: var(--vel-color-success);
}

.vel-btn-success:hover {
  background-color: var(--vel-color-success-hover);
  border-color: var(--vel-color-success-hover);
}

.vel-btn-danger {
  background-color: var(--vel-color-danger);
  color: var(--vel-color-danger-fg);
  border-color: var(--vel-color-danger);
}

.vel-btn-danger:hover {
  background-color: var(--vel-color-danger-hover);
  border-color: var(--vel-color-danger-hover);
}

.vel-btn-warning {
  background-color: var(--vel-color-warning);
  color: var(--vel-color-warning-fg);
  border-color: var(--vel-color-warning);
}

.vel-btn-warning:hover {
  background-color: var(--vel-color-warning-hover);
  border-color: var(--vel-color-warning-hover);
}

.vel-btn-info {
  background-color: var(--vel-color-info);
  color: var(--vel-color-info-fg);
  border-color: var(--vel-color-info);
}

.vel-btn-info:hover {
  background-color: var(--vel-color-info-hover);
  border-color: var(--vel-color-info-hover);
}

/* ─── Outline Variants ────────────────────── */

.vel-btn-outline-primary {
  background-color: transparent;
  color: var(--vel-color-primary);
  border-color: var(--vel-color-primary);
}

.vel-btn-outline-primary:hover {
  background-color: var(--vel-color-primary);
  color: var(--vel-color-primary-fg);
}

.vel-btn-outline-secondary {
  background-color: transparent;
  color: var(--vel-color-secondary);
  border-color: var(--vel-color-secondary);
}

.vel-btn-outline-secondary:hover {
  background-color: var(--vel-color-secondary);
  color: var(--vel-color-secondary-fg);
}

.vel-btn-outline-success {
  background-color: transparent;
  color: var(--vel-color-success);
  border-color: var(--vel-color-success);
}

.vel-btn-outline-success:hover {
  background-color: var(--vel-color-success);
  color: var(--vel-color-success-fg);
}

.vel-btn-outline-danger {
  background-color: transparent;
  color: var(--vel-color-danger);
  border-color: var(--vel-color-danger);
}

.vel-btn-outline-danger:hover {
  background-color: var(--vel-color-danger);
  color: var(--vel-color-danger-fg);
}

.vel-btn-outline-warning {
  background-color: transparent;
  color: var(--vel-color-warning);
  border-color: var(--vel-color-warning);
}

.vel-btn-outline-warning:hover {
  background-color: var(--vel-color-warning);
  color: var(--vel-color-warning-fg);
}

.vel-btn-outline-info {
  background-color: transparent;
  color: var(--vel-color-info);
  border-color: var(--vel-color-info);
}

.vel-btn-outline-info:hover {
  background-color: var(--vel-color-info);
  color: var(--vel-color-info-fg);
}

/* ─── Ghost Variant ───────────────────────── */

.vel-btn-ghost {
  background-color: transparent;
  color: var(--vel-neutral-700);
  border-color: transparent;
}

.vel-btn-ghost:hover {
  background-color: var(--vel-neutral-100);
  color: var(--vel-neutral-900);
}

/* ─── Link Variant ────────────────────────── */

.vel-btn-link {
  background-color: transparent;
  color: var(--vel-color-primary);
  border-color: transparent;
  padding-left: 0;
  padding-right: 0;
}

.vel-btn-link:hover {
  text-decoration: underline;
}

/* ─── Sizes ───────────────────────────────── */

.vel-btn-xs {
  padding: var(--vel-space-1) var(--vel-space-2);
  font-size: var(--vel-text-xs);
  line-height: 1rem;
  border-radius: var(--vel-radius);
}

.vel-btn-sm {
  padding: calc(var(--vel-space-1) + 1px) var(--vel-space-3);
  font-size: var(--vel-text-sm);
  line-height: 1.25rem;
}

.vel-btn-lg {
  padding: var(--vel-space-3) var(--vel-space-6);
  font-size: var(--vel-text-base);
  line-height: 1.5rem;
  border-radius: var(--vel-radius-lg);
}

.vel-btn-xl {
  padding: var(--vel-space-4) var(--vel-space-8);
  font-size: var(--vel-text-lg);
  line-height: 1.75rem;
  border-radius: var(--vel-radius-xl);
}

/* ─── Block (full width) ──────────────────── */

.vel-btn-block {
  display: flex;
  width: 100%;
}

/* ─── Icon button ─────────────────────────── */

.vel-btn-icon {
  padding: var(--vel-space-2);
  aspect-ratio: 1;
}

.vel-btn-icon.vel-btn-sm  { padding: var(--vel-space-1); }

.vel-btn-icon.vel-btn-lg  { padding: var(--vel-space-3); }

/* VeloraCSS — Card Component */

.vel-card {
  background-color: var(--vel-surface-2);
  border-radius: var(--vel-radius-xl);
  border: 1px solid var(--vel-border-base);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3);
  overflow: hidden;
}

.vel-card-header {
  padding: var(--vel-space-4) var(--vel-space-6);
  border-bottom: 1px solid var(--vel-border-base);
  font-weight: 600;
  font-size: var(--vel-text-base);
  color: var(--vel-text-base);
}

.vel-card-body {
  padding: var(--vel-space-6);
}

.vel-card-footer {
  padding: var(--vel-space-4) var(--vel-space-6);
  border-top: 1px solid var(--vel-border-base);
  background-color: var(--vel-surface-1);
}

.vel-card-img-top {
  width: 100%;
  height: auto;
  display: block;
}

.vel-card-img-bottom {
  width: 100%;
  height: auto;
  display: block;
  border-bottom-left-radius: calc(var(--vel-radius-xl) - 1px);
  border-bottom-right-radius: calc(var(--vel-radius-xl) - 1px);
}

/* ─── Card variants ───────────────────────── */

.vel-card-flat {
  background-color: var(--vel-surface-2);
  border-radius: var(--vel-radius-xl);
  border: 1px solid var(--vel-border-base);
  box-shadow: none;
  overflow: hidden;
}

.vel-card-elevated {
  background-color: var(--vel-surface-2);
  border-radius: var(--vel-radius-xl);
  border: none;
  box-shadow: 0 10px 30px -5px rgb(0 0 0 / 0.5), 0 4px 10px -4px rgb(0 0 0 / 0.4);
  overflow: hidden;
}

.vel-card-filled {
  background-color: var(--vel-surface-3);
  border-radius: var(--vel-radius-xl);
  border: 1px solid var(--vel-border-base);
  box-shadow: none;
  overflow: hidden;
}

.vel-card-primary {
  background-color: var(--vel-color-primary);
  color: var(--vel-color-primary-fg);
  border-color: var(--vel-color-primary);
}

.vel-card-primary .vel-card-header,
.vel-card-primary .vel-card-footer {
  border-color: rgba(255, 255, 255, 0.2);
  color: inherit;
}

.vel-card-primary .vel-card-footer {
  background-color: rgba(0, 0, 0, 0.1);
}

/* ─── Interactive card ────────────────────── */

.vel-card-hover {
  transition: box-shadow 200ms ease, transform 200ms ease;
  cursor: pointer;
}

.vel-card-hover:hover {
  box-shadow: 0 15px 35px -5px rgb(0 0 0 / 0.5), 0 6px 15px -4px rgb(0 0 0 / 0.4);
  transform: translateY(-2px);
}


/* ============================================
   VeloraCSS — Responsive & State Variants
   ============================================ */

/* Responsive variants — sm | md | lg | xl | 2xl */
@media (min-width: 640px) {
 .vel-sm\\:block { display: block
 }
 .vel-sm\\:inline-block { display: inline-block
 }
 .vel-sm\\:inline { display: inline
 }
 .vel-sm\\:flex { display: flex
 }
 .vel-sm\\:inline-flex { display: inline-flex
 }
 .vel-sm\\:grid { display: grid
 }
 .vel-sm\\:inline-grid { display: inline-grid
 }
 .vel-sm\\:hidden { display: none
 }
 .vel-sm\\:table { display: table
 }
 .vel-sm\\:table-row { display: table-row
 }
 .vel-sm\\:table-cell { display: table-cell
 }
 .vel-sm\\:contents { display: contents
 }
 .vel-sm\\:static { position: static
 }
 .vel-sm\\:relative { position: relative
 }
 .vel-sm\\:absolute { position: absolute
 }
 .vel-sm\\:fixed { position: fixed
 }
 .vel-sm\\:sticky { position: sticky
 }
 .vel-sm\\:overflow-auto { overflow: auto
 }
 .vel-sm\\:overflow-hidden { overflow: hidden
 }
 .vel-sm\\:overflow-visible { overflow: visible
 }
 .vel-sm\\:overflow-scroll { overflow: scroll
 }
 .vel-sm\\:overflow-x-auto { overflow-x: auto
 }
 .vel-sm\\:overflow-x-hidden { overflow-x: hidden
 }
 .vel-sm\\:overflow-y-auto { overflow-y: auto
 }
 .vel-sm\\:overflow-y-hidden { overflow-y: hidden
 }
 .vel-sm\\:overflow-y-scroll { overflow-y: scroll
 }
 .vel-sm\\:overscroll-auto { overscroll-behavior: auto
 }
 .vel-sm\\:overscroll-contain { overscroll-behavior: contain
 }
 .vel-sm\\:overscroll-none { overscroll-behavior: none
 }
 .vel-sm\\:visible { visibility: visible
 }
 .vel-sm\\:invisible { visibility: hidden
 }
 .vel-sm\\:collapse { visibility: collapse
 }
 .vel-sm\\:z-0 { z-index: var(--vel-z-0)
 }
 .vel-sm\\:z-10 { z-index: var(--vel-z-10)
 }
 .vel-sm\\:z-20 { z-index: var(--vel-z-20)
 }
 .vel-sm\\:z-30 { z-index: var(--vel-z-30)
 }
 .vel-sm\\:z-40 { z-index: var(--vel-z-40)
 }
 .vel-sm\\:z-50 { z-index: var(--vel-z-50)
 }
 .vel-sm\\:z-auto { z-index: var(--vel-z-auto)
 }
 .vel-sm\\:float-left { float: left
 }
 .vel-sm\\:float-right { float: right
 }
 .vel-sm\\:float-none { float: none
 }
 .vel-sm\\:clear-left { clear: left
 }
 .vel-sm\\:clear-right { clear: right
 }
 .vel-sm\\:clear-both { clear: both
 }
 .vel-sm\\:clear-none { clear: none
 }
 .vel-sm\\:object-contain { -o-object-fit: contain; object-fit: contain
 }
 .vel-sm\\:object-cover { -o-object-fit: cover; object-fit: cover
 }
 .vel-sm\\:object-fill { -o-object-fit: fill; object-fit: fill
 }
 .vel-sm\\:object-none { -o-object-fit: none; object-fit: none
 }
 .vel-sm\\:object-scale-down { -o-object-fit: scale-down; object-fit: scale-down
 }
 .vel-sm\\:aspect-auto { aspect-ratio: auto
 }
 .vel-sm\\:aspect-square { aspect-ratio: 1 / 1
 }
 .vel-sm\\:aspect-video { aspect-ratio: 16 / 9
 }
 .vel-sm\\:columns-1 { -moz-columns: 1; columns: 1
 }
 .vel-sm\\:columns-2 { -moz-columns: 2; columns: 2
 }
 .vel-sm\\:columns-3 { -moz-columns: 3; columns: 3
 }
 .vel-sm\\:columns-4 { -moz-columns: 4; columns: 4
 }
 .vel-sm\\:columns-auto { -moz-columns: auto; columns: auto
 }
 .vel-sm\\:sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0
 }
 .vel-sm\\:flex-row { flex-direction: row
 }
 .vel-sm\\:flex-row-reverse { flex-direction: row-reverse
 }
 .vel-sm\\:flex-col { flex-direction: column
 }
 .vel-sm\\:flex-col-reverse { flex-direction: column-reverse
 }
 .vel-sm\\:flex-wrap { flex-wrap: wrap
 }
 .vel-sm\\:flex-wrap-reverse { flex-wrap: wrap-reverse
 }
 .vel-sm\\:flex-nowrap { flex-wrap: nowrap
 }
 .vel-sm\\:flex-1 { flex: 1 1 0%
 }
 .vel-sm\\:flex-auto { flex: 1 1 auto
 }
 .vel-sm\\:flex-initial { flex: 0 1 auto
 }
 .vel-sm\\:flex-none { flex: none
 }
 .vel-sm\\:grow { flex-grow: 1
 }
 .vel-sm\\:shrink { flex-shrink: 1
 }
 .vel-sm\\:items-start { align-items: flex-start
 }
 .vel-sm\\:items-end { align-items: flex-end
 }
 .vel-sm\\:items-center { align-items: center
 }
 .vel-sm\\:items-baseline { align-items: baseline
 }
 .vel-sm\\:items-stretch { align-items: stretch
 }
 .vel-sm\\:self-auto { align-self: auto
 }
 .vel-sm\\:self-start { align-self: flex-start
 }
 .vel-sm\\:self-end { align-self: flex-end
 }
 .vel-sm\\:self-center { align-self: center
 }
 .vel-sm\\:self-baseline { align-self: baseline
 }
 .vel-sm\\:self-stretch { align-self: stretch
 }
 .vel-sm\\:justify-start { justify-content: flex-start
 }
 .vel-sm\\:justify-end { justify-content: flex-end
 }
 .vel-sm\\:justify-center { justify-content: center
 }
 .vel-sm\\:justify-between { justify-content: space-between
 }
 .vel-sm\\:justify-around { justify-content: space-around
 }
 .vel-sm\\:justify-evenly { justify-content: space-evenly
 }
 .vel-sm\\:justify-stretch { justify-content: stretch
 }
 .vel-sm\\:justify-items-start { justify-items: start
 }
 .vel-sm\\:justify-items-end { justify-items: end
 }
 .vel-sm\\:justify-items-center { justify-items: center
 }
 .vel-sm\\:justify-items-stretch { justify-items: stretch
 }
 .vel-sm\\:justify-self-auto { justify-self: auto
 }
 .vel-sm\\:justify-self-start { justify-self: start
 }
 .vel-sm\\:justify-self-end { justify-self: end
 }
 .vel-sm\\:justify-self-center { justify-self: center
 }
 .vel-sm\\:justify-self-stretch { justify-self: stretch
 }
 .vel-sm\\:order-first { order: -9999
 }
 .vel-sm\\:order-last { order: 9999
 }
 .vel-sm\\:order-none { order: 0
 }
 .vel-sm\\:order-1 { order: 1
 }
 .vel-sm\\:order-2 { order: 2
 }
 .vel-sm\\:order-3 { order: 3
 }
 .vel-sm\\:order-4 { order: 4
 }
 .vel-sm\\:order-5 { order: 5
 }
 .vel-sm\\:gap-0 { gap: 0px
 }
 .vel-sm\\:gap-1 { gap: var(--vel-space-1)
 }
 .vel-sm\\:gap-2 { gap: var(--vel-space-2)
 }
 .vel-sm\\:gap-3 { gap: var(--vel-space-3)
 }
 .vel-sm\\:gap-4 { gap: var(--vel-space-4)
 }
 .vel-sm\\:gap-5 { gap: var(--vel-space-5)
 }
 .vel-sm\\:gap-6 { gap: var(--vel-space-6)
 }
 .vel-sm\\:gap-7 { gap: var(--vel-space-7)
 }
 .vel-sm\\:gap-8 { gap: var(--vel-space-8)
 }
 .vel-sm\\:gap-10 { gap: var(--vel-space-10)
 }
 .vel-sm\\:gap-12 { gap: var(--vel-space-12)
 }
 .vel-sm\\:gap-16 { gap: var(--vel-space-16)
 }
 .vel-sm\\:gap-px { gap: 1px
 }
 .vel-sm\\:gap-x-0 { -moz-column-gap: 0px; column-gap: 0px
 }
 .vel-sm\\:gap-x-1 { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1)
 }
 .vel-sm\\:gap-x-2 { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2)
 }
 .vel-sm\\:gap-x-3 { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3)
 }
 .vel-sm\\:gap-x-4 { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4)
 }
 .vel-sm\\:gap-x-5 { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5)
 }
 .vel-sm\\:gap-x-6 { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6)
 }
 .vel-sm\\:gap-x-8 { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8)
 }
 .vel-sm\\:gap-y-0 { row-gap: 0px
 }
 .vel-sm\\:gap-y-1 { row-gap: var(--vel-space-1)
 }
 .vel-sm\\:gap-y-2 { row-gap: var(--vel-space-2)
 }
 .vel-sm\\:gap-y-3 { row-gap: var(--vel-space-3)
 }
 .vel-sm\\:gap-y-4 { row-gap: var(--vel-space-4)
 }
 .vel-sm\\:gap-y-5 { row-gap: var(--vel-space-5)
 }
 .vel-sm\\:gap-y-6 { row-gap: var(--vel-space-6)
 }
 .vel-sm\\:gap-y-8 { row-gap: var(--vel-space-8)
 }
 .vel-sm\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr))
 }
 .vel-sm\\:grid-cols-none { grid-template-columns: none
 }
 .vel-sm\\:col-auto { grid-column: auto
 }
 .vel-sm\\:col-span-1 { grid-column: span 1 / span 1
 }
 .vel-sm\\:col-span-2 { grid-column: span 2 / span 2
 }
 .vel-sm\\:col-span-3 { grid-column: span 3 / span 3
 }
 .vel-sm\\:col-span-4 { grid-column: span 4 / span 4
 }
 .vel-sm\\:col-span-5 { grid-column: span 5 / span 5
 }
 .vel-sm\\:col-span-6 { grid-column: span 6 / span 6
 }
 .vel-sm\\:col-span-7 { grid-column: span 7 / span 7
 }
 .vel-sm\\:col-span-8 { grid-column: span 8 / span 8
 }
 .vel-sm\\:col-span-9 { grid-column: span 9 / span 9
 }
 .vel-sm\\:col-span-10 { grid-column: span 10 / span 10
 }
 .vel-sm\\:col-span-11 { grid-column: span 11 / span 11
 }
 .vel-sm\\:col-span-12 { grid-column: span 12 / span 12
 }
 .vel-sm\\:col-span-full { grid-column: 1 / -1
 }
 .vel-sm\\:col-start-1 { grid-column-start: 1
 }
 .vel-sm\\:col-start-2 { grid-column-start: 2
 }
 .vel-sm\\:col-start-3 { grid-column-start: 3
 }
 .vel-sm\\:col-start-4 { grid-column-start: 4
 }
 .vel-sm\\:col-start-auto { grid-column-start: auto
 }
 .vel-sm\\:col-end-1 { grid-column-end: 1
 }
 .vel-sm\\:col-end-2 { grid-column-end: 2
 }
 .vel-sm\\:col-end-3 { grid-column-end: 3
 }
 .vel-sm\\:col-end-4 { grid-column-end: 4
 }
 .vel-sm\\:col-end-auto { grid-column-end: auto
 }
 .vel-sm\\:grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr))
 }
 .vel-sm\\:grid-rows-none { grid-template-rows: none
 }
 .vel-sm\\:row-auto { grid-row: auto
 }
 .vel-sm\\:row-span-1 { grid-row: span 1 / span 1
 }
 .vel-sm\\:row-span-2 { grid-row: span 2 / span 2
 }
 .vel-sm\\:row-span-3 { grid-row: span 3 / span 3
 }
 .vel-sm\\:row-span-4 { grid-row: span 4 / span 4
 }
 .vel-sm\\:row-span-5 { grid-row: span 5 / span 5
 }
 .vel-sm\\:row-span-6 { grid-row: span 6 / span 6
 }
 .vel-sm\\:row-span-full { grid-row: 1 / -1
 }
 .vel-sm\\:row-start-1 { grid-row-start: 1
 }
 .vel-sm\\:row-start-2 { grid-row-start: 2
 }
 .vel-sm\\:row-start-3 { grid-row-start: 3
 }
 .vel-sm\\:row-start-auto { grid-row-start: auto
 }
 .vel-sm\\:row-end-1 { grid-row-end: 1
 }
 .vel-sm\\:row-end-2 { grid-row-end: 2
 }
 .vel-sm\\:row-end-3 { grid-row-end: 3
 }
 .vel-sm\\:row-end-auto { grid-row-end: auto
 }
 .vel-sm\\:grid-flow-row { grid-auto-flow: row
 }
 .vel-sm\\:grid-flow-col { grid-auto-flow: column
 }
 .vel-sm\\:grid-flow-dense { grid-auto-flow: dense
 }
 .vel-sm\\:grid-flow-row-dense { grid-auto-flow: row dense
 }
 .vel-sm\\:grid-flow-col-dense { grid-auto-flow: column dense
 }
 .vel-sm\\:p-0 { padding: 0px
 }
 .vel-sm\\:p-px { padding: 1px
 }
 .vel-sm\\:p-1 { padding: var(--vel-space-1)
 }
 .vel-sm\\:p-2 { padding: var(--vel-space-2)
 }
 .vel-sm\\:p-3 { padding: var(--vel-space-3)
 }
 .vel-sm\\:p-4 { padding: var(--vel-space-4)
 }
 .vel-sm\\:p-5 { padding: var(--vel-space-5)
 }
 .vel-sm\\:p-6 { padding: var(--vel-space-6)
 }
 .vel-sm\\:p-7 { padding: var(--vel-space-7)
 }
 .vel-sm\\:p-8 { padding: var(--vel-space-8)
 }
 .vel-sm\\:p-9 { padding: var(--vel-space-9)
 }
 .vel-sm\\:p-10 { padding: var(--vel-space-10)
 }
 .vel-sm\\:p-11 { padding: var(--vel-space-11)
 }
 .vel-sm\\:p-12 { padding: var(--vel-space-12)
 }
 .vel-sm\\:p-14 { padding: var(--vel-space-14)
 }
 .vel-sm\\:p-16 { padding: var(--vel-space-16)
 }
 .vel-sm\\:p-20 { padding: var(--vel-space-20)
 }
 .vel-sm\\:p-24 { padding: var(--vel-space-24)
 }
 .vel-sm\\:p-28 { padding: var(--vel-space-28)
 }
 .vel-sm\\:p-32 { padding: var(--vel-space-32)
 }
 .vel-sm\\:pt-0 { padding-top: 0px
 }
 .vel-sm\\:pt-1 { padding-top: var(--vel-space-1)
 }
 .vel-sm\\:pt-2 { padding-top: var(--vel-space-2)
 }
 .vel-sm\\:pt-3 { padding-top: var(--vel-space-3)
 }
 .vel-sm\\:pt-4 { padding-top: var(--vel-space-4)
 }
 .vel-sm\\:pt-5 { padding-top: var(--vel-space-5)
 }
 .vel-sm\\:pt-6 { padding-top: var(--vel-space-6)
 }
 .vel-sm\\:pt-8 { padding-top: var(--vel-space-8)
 }
 .vel-sm\\:pt-10 { padding-top: var(--vel-space-10)
 }
 .vel-sm\\:pt-12 { padding-top: var(--vel-space-12)
 }
 .vel-sm\\:pt-16 { padding-top: var(--vel-space-16)
 }
 .vel-sm\\:pr-0 { padding-right: 0px
 }
 .vel-sm\\:pr-1 { padding-right: var(--vel-space-1)
 }
 .vel-sm\\:pr-2 { padding-right: var(--vel-space-2)
 }
 .vel-sm\\:pr-3 { padding-right: var(--vel-space-3)
 }
 .vel-sm\\:pr-4 { padding-right: var(--vel-space-4)
 }
 .vel-sm\\:pr-5 { padding-right: var(--vel-space-5)
 }
 .vel-sm\\:pr-6 { padding-right: var(--vel-space-6)
 }
 .vel-sm\\:pr-8 { padding-right: var(--vel-space-8)
 }
 .vel-sm\\:pr-12 { padding-right: var(--vel-space-12)
 }
 .vel-sm\\:pb-0 { padding-bottom: 0px
 }
 .vel-sm\\:pb-1 { padding-bottom: var(--vel-space-1)
 }
 .vel-sm\\:pb-2 { padding-bottom: var(--vel-space-2)
 }
 .vel-sm\\:pb-3 { padding-bottom: var(--vel-space-3)
 }
 .vel-sm\\:pb-4 { padding-bottom: var(--vel-space-4)
 }
 .vel-sm\\:pb-5 { padding-bottom: var(--vel-space-5)
 }
 .vel-sm\\:pb-6 { padding-bottom: var(--vel-space-6)
 }
 .vel-sm\\:pb-8 { padding-bottom: var(--vel-space-8)
 }
 .vel-sm\\:pb-12 { padding-bottom: var(--vel-space-12)
 }
 .vel-sm\\:pl-0 { padding-left: 0px
 }
 .vel-sm\\:pl-1 { padding-left: var(--vel-space-1)
 }
 .vel-sm\\:pl-2 { padding-left: var(--vel-space-2)
 }
 .vel-sm\\:pl-3 { padding-left: var(--vel-space-3)
 }
 .vel-sm\\:pl-4 { padding-left: var(--vel-space-4)
 }
 .vel-sm\\:pl-5 { padding-left: var(--vel-space-5)
 }
 .vel-sm\\:pl-6 { padding-left: var(--vel-space-6)
 }
 .vel-sm\\:pl-8 { padding-left: var(--vel-space-8)
 }
 .vel-sm\\:pl-12 { padding-left: var(--vel-space-12)
 }
 .vel-sm\\:m-0 { margin: 0px
 }
 .vel-sm\\:m-px { margin: 1px
 }
 .vel-sm\\:m-auto { margin: auto
 }
 .vel-sm\\:m-1 { margin: var(--vel-space-1)
 }
 .vel-sm\\:m-2 { margin: var(--vel-space-2)
 }
 .vel-sm\\:m-3 { margin: var(--vel-space-3)
 }
 .vel-sm\\:m-4 { margin: var(--vel-space-4)
 }
 .vel-sm\\:m-5 { margin: var(--vel-space-5)
 }
 .vel-sm\\:m-6 { margin: var(--vel-space-6)
 }
 .vel-sm\\:m-7 { margin: var(--vel-space-7)
 }
 .vel-sm\\:m-8 { margin: var(--vel-space-8)
 }
 .vel-sm\\:m-10 { margin: var(--vel-space-10)
 }
 .vel-sm\\:m-12 { margin: var(--vel-space-12)
 }
 .vel-sm\\:m-16 { margin: var(--vel-space-16)
 }
 .vel-sm\\:mt-0 { margin-top: 0px
 }
 .vel-sm\\:mt-auto { margin-top: auto
 }
 .vel-sm\\:mt-1 { margin-top: var(--vel-space-1)
 }
 .vel-sm\\:mt-2 { margin-top: var(--vel-space-2)
 }
 .vel-sm\\:mt-3 { margin-top: var(--vel-space-3)
 }
 .vel-sm\\:mt-4 { margin-top: var(--vel-space-4)
 }
 .vel-sm\\:mt-5 { margin-top: var(--vel-space-5)
 }
 .vel-sm\\:mt-6 { margin-top: var(--vel-space-6)
 }
 .vel-sm\\:mt-8 { margin-top: var(--vel-space-8)
 }
 .vel-sm\\:mt-10 { margin-top: var(--vel-space-10)
 }
 .vel-sm\\:mt-12 { margin-top: var(--vel-space-12)
 }
 .vel-sm\\:mt-16 { margin-top: var(--vel-space-16)
 }
 .vel-sm\\:mr-0 { margin-right: 0px
 }
 .vel-sm\\:mr-auto { margin-right: auto
 }
 .vel-sm\\:mr-1 { margin-right: var(--vel-space-1)
 }
 .vel-sm\\:mr-2 { margin-right: var(--vel-space-2)
 }
 .vel-sm\\:mr-3 { margin-right: var(--vel-space-3)
 }
 .vel-sm\\:mr-4 { margin-right: var(--vel-space-4)
 }
 .vel-sm\\:mr-6 { margin-right: var(--vel-space-6)
 }
 .vel-sm\\:mr-8 { margin-right: var(--vel-space-8)
 }
 .vel-sm\\:mb-0 { margin-bottom: 0px
 }
 .vel-sm\\:mb-auto { margin-bottom: auto
 }
 .vel-sm\\:mb-1 { margin-bottom: var(--vel-space-1)
 }
 .vel-sm\\:mb-2 { margin-bottom: var(--vel-space-2)
 }
 .vel-sm\\:mb-3 { margin-bottom: var(--vel-space-3)
 }
 .vel-sm\\:mb-4 { margin-bottom: var(--vel-space-4)
 }
 .vel-sm\\:mb-5 { margin-bottom: var(--vel-space-5)
 }
 .vel-sm\\:mb-6 { margin-bottom: var(--vel-space-6)
 }
 .vel-sm\\:mb-8 { margin-bottom: var(--vel-space-8)
 }
 .vel-sm\\:mb-10 { margin-bottom: var(--vel-space-10)
 }
 .vel-sm\\:mb-12 { margin-bottom: var(--vel-space-12)
 }
 .vel-sm\\:mb-16 { margin-bottom: var(--vel-space-16)
 }
 .vel-sm\\:ml-0 { margin-left: 0px
 }
 .vel-sm\\:ml-auto { margin-left: auto
 }
 .vel-sm\\:ml-1 { margin-left: var(--vel-space-1)
 }
 .vel-sm\\:ml-2 { margin-left: var(--vel-space-2)
 }
 .vel-sm\\:ml-3 { margin-left: var(--vel-space-3)
 }
 .vel-sm\\:ml-4 { margin-left: var(--vel-space-4)
 }
 .vel-sm\\:ml-6 { margin-left: var(--vel-space-6)
 }
 .vel-sm\\:ml-8 { margin-left: var(--vel-space-8)
 }
 .vel-sm\\:w-0 { width: 0px
 }
 .vel-sm\\:w-px { width: 1px
 }
 .vel-sm\\:w-auto { width: auto
 }
 .vel-sm\\:w-full { width: 100%
 }
 .vel-sm\\:w-screen { width: 100vw
 }
 .vel-sm\\:w-svw { width: 100svw
 }
 .vel-sm\\:w-dvw { width: 100dvw
 }
 .vel-sm\\:w-min { width: -moz-min-content; width: min-content
 }
 .vel-sm\\:w-max { width: -moz-max-content; width: max-content
 }
 .vel-sm\\:w-fit { width: -moz-fit-content; width: fit-content
 }
 .vel-sm\\:w-1 { width: var(--vel-space-1)
 }
 .vel-sm\\:w-2 { width: var(--vel-space-2)
 }
 .vel-sm\\:w-3 { width: var(--vel-space-3)
 }
 .vel-sm\\:w-4 { width: var(--vel-space-4)
 }
 .vel-sm\\:w-5 { width: var(--vel-space-5)
 }
 .vel-sm\\:w-6 { width: var(--vel-space-6)
 }
 .vel-sm\\:w-7 { width: var(--vel-space-7)
 }
 .vel-sm\\:w-8 { width: var(--vel-space-8)
 }
 .vel-sm\\:w-9 { width: var(--vel-space-9)
 }
 .vel-sm\\:w-10 { width: var(--vel-space-10)
 }
 .vel-sm\\:w-11 { width: var(--vel-space-11)
 }
 .vel-sm\\:w-12 { width: var(--vel-space-12)
 }
 .vel-sm\\:w-14 { width: var(--vel-space-14)
 }
 .vel-sm\\:w-16 { width: var(--vel-space-16)
 }
 .vel-sm\\:w-20 { width: var(--vel-space-20)
 }
 .vel-sm\\:w-24 { width: var(--vel-space-24)
 }
 .vel-sm\\:w-28 { width: var(--vel-space-28)
 }
 .vel-sm\\:w-32 { width: var(--vel-space-32)
 }
 .vel-sm\\:w-36 { width: var(--vel-space-36)
 }
 .vel-sm\\:w-40 { width: var(--vel-space-40)
 }
 .vel-sm\\:w-48 { width: var(--vel-space-48)
 }
 .vel-sm\\:w-56 { width: var(--vel-space-56)
 }
 .vel-sm\\:w-64 { width: var(--vel-space-64)
 }
 .vel-sm\\:w-72 { width: var(--vel-space-72)
 }
 .vel-sm\\:w-80 { width: var(--vel-space-80)
 }
 .vel-sm\\:w-96 { width: var(--vel-space-96)
 }
 .vel-sm\\:min-w-0 { min-width: 0px
 }
 .vel-sm\\:min-w-full { min-width: 100%
 }
 .vel-sm\\:min-w-min { min-width: -moz-min-content; min-width: min-content
 }
 .vel-sm\\:min-w-max { min-width: -moz-max-content; min-width: max-content
 }
 .vel-sm\\:min-w-fit { min-width: -moz-fit-content; min-width: fit-content
 }
 .vel-sm\\:max-w-none { max-width: none
 }
 .vel-sm\\:max-w-xs { max-width: 20rem
 }
 .vel-sm\\:max-w-sm { max-width: 24rem
 }
 .vel-sm\\:max-w-md { max-width: 28rem
 }
 .vel-sm\\:max-w-lg { max-width: 32rem
 }
 .vel-sm\\:max-w-xl { max-width: 36rem
 }
 .vel-sm\\:max-w-2xl { max-width: 42rem
 }
 .vel-sm\\:max-w-3xl { max-width: 48rem
 }
 .vel-sm\\:max-w-4xl { max-width: 56rem
 }
 .vel-sm\\:max-w-5xl { max-width: 64rem
 }
 .vel-sm\\:max-w-6xl { max-width: 72rem
 }
 .vel-sm\\:max-w-7xl { max-width: 80rem
 }
 .vel-sm\\:max-w-full { max-width: 100%
 }
 .vel-sm\\:max-w-min { max-width: -moz-min-content; max-width: min-content
 }
 .vel-sm\\:max-w-max { max-width: -moz-max-content; max-width: max-content
 }
 .vel-sm\\:max-w-fit { max-width: -moz-fit-content; max-width: fit-content
 }
 .vel-sm\\:max-w-prose { max-width: 65ch
 }
 .vel-sm\\:max-w-screen-sm { max-width: 640px
 }
 .vel-sm\\:max-w-screen-md { max-width: 768px
 }
 .vel-sm\\:max-w-screen-lg { max-width: 1024px
 }
 .vel-sm\\:max-w-screen-xl { max-width: 1280px
 }
 .vel-sm\\:max-w-screen-2xl { max-width: 1536px
 }
 .vel-sm\\:h-0 { height: 0px
 }
 .vel-sm\\:h-px { height: 1px
 }
 .vel-sm\\:h-auto { height: auto
 }
 .vel-sm\\:h-full { height: 100%
 }
 .vel-sm\\:h-screen { height: 100vh
 }
 .vel-sm\\:h-svh { height: 100svh
 }
 .vel-sm\\:h-dvh { height: 100dvh
 }
 .vel-sm\\:h-min { height: -moz-min-content; height: min-content
 }
 .vel-sm\\:h-max { height: -moz-max-content; height: max-content
 }
 .vel-sm\\:h-fit { height: -moz-fit-content; height: fit-content
 }
 .vel-sm\\:h-1 { height: var(--vel-space-1)
 }
 .vel-sm\\:h-2 { height: var(--vel-space-2)
 }
 .vel-sm\\:h-3 { height: var(--vel-space-3)
 }
 .vel-sm\\:h-4 { height: var(--vel-space-4)
 }
 .vel-sm\\:h-5 { height: var(--vel-space-5)
 }
 .vel-sm\\:h-6 { height: var(--vel-space-6)
 }
 .vel-sm\\:h-7 { height: var(--vel-space-7)
 }
 .vel-sm\\:h-8 { height: var(--vel-space-8)
 }
 .vel-sm\\:h-9 { height: var(--vel-space-9)
 }
 .vel-sm\\:h-10 { height: var(--vel-space-10)
 }
 .vel-sm\\:h-11 { height: var(--vel-space-11)
 }
 .vel-sm\\:h-12 { height: var(--vel-space-12)
 }
 .vel-sm\\:h-14 { height: var(--vel-space-14)
 }
 .vel-sm\\:h-16 { height: var(--vel-space-16)
 }
 .vel-sm\\:h-20 { height: var(--vel-space-20)
 }
 .vel-sm\\:h-24 { height: var(--vel-space-24)
 }
 .vel-sm\\:h-28 { height: var(--vel-space-28)
 }
 .vel-sm\\:h-32 { height: var(--vel-space-32)
 }
 .vel-sm\\:h-36 { height: var(--vel-space-36)
 }
 .vel-sm\\:h-40 { height: var(--vel-space-40)
 }
 .vel-sm\\:h-48 { height: var(--vel-space-48)
 }
 .vel-sm\\:h-56 { height: var(--vel-space-56)
 }
 .vel-sm\\:h-64 { height: var(--vel-space-64)
 }
 .vel-sm\\:min-h-0 { min-height: 0px
 }
 .vel-sm\\:min-h-full { min-height: 100%
 }
 .vel-sm\\:min-h-screen { min-height: 100vh
 }
 .vel-sm\\:min-h-svh { min-height: 100svh
 }
 .vel-sm\\:min-h-dvh { min-height: 100dvh
 }
 .vel-sm\\:min-h-min { min-height: -moz-min-content; min-height: min-content
 }
 .vel-sm\\:min-h-max { min-height: -moz-max-content; min-height: max-content
 }
 .vel-sm\\:min-h-fit { min-height: -moz-fit-content; min-height: fit-content
 }
 .vel-sm\\:max-h-none { max-height: none
 }
 .vel-sm\\:max-h-full { max-height: 100%
 }
 .vel-sm\\:max-h-screen { max-height: 100vh
 }
 .vel-sm\\:max-h-svh { max-height: 100svh
 }
 .vel-sm\\:max-h-dvh { max-height: 100dvh
 }
 .vel-sm\\:max-h-min { max-height: -moz-min-content; max-height: min-content
 }
 .vel-sm\\:max-h-max { max-height: -moz-max-content; max-height: max-content
 }
 .vel-sm\\:max-h-fit { max-height: -moz-fit-content; max-height: fit-content
 }
 .vel-sm\\:max-h-24 { max-height: var(--vel-space-24)
 }
 .vel-sm\\:max-h-48 { max-height: var(--vel-space-48)
 }
 .vel-sm\\:max-h-64 { max-height: var(--vel-space-64)
 }
 .vel-sm\\:max-h-96 { max-height: var(--vel-space-96)
 }
 .vel-sm\\:font-sans { font-family: var(--vel-font-sans)
 }
 .vel-sm\\:font-serif { font-family: var(--vel-font-serif)
 }
 .vel-sm\\:font-mono { font-family: var(--vel-font-mono)
 }
 .vel-sm\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
 }
 .vel-sm\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
 }
 .vel-sm\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
 }
 .vel-sm\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
 }
 .vel-sm\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
 }
 .vel-sm\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
 }
 .vel-sm\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
 }
 .vel-sm\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
 }
 .vel-sm\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
 }
 .vel-sm\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
 }
 .vel-sm\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
 }
 .vel-sm\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
 }
 .vel-sm\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
 }
 .vel-sm\\:font-thin { font-weight: 100
 }
 .vel-sm\\:font-extralight { font-weight: 200
 }
 .vel-sm\\:font-light { font-weight: 300
 }
 .vel-sm\\:font-normal { font-weight: 400
 }
 .vel-sm\\:font-medium { font-weight: 500
 }
 .vel-sm\\:font-semibold { font-weight: 600
 }
 .vel-sm\\:font-bold { font-weight: 700
 }
 .vel-sm\\:font-extrabold { font-weight: 800
 }
 .vel-sm\\:font-black { font-weight: 900
 }
 .vel-sm\\:italic { font-style: italic
 }
 .vel-sm\\:not-italic { font-style: normal
 }
 .vel-sm\\:leading-none { line-height: 1
 }
 .vel-sm\\:leading-tight { line-height: 1.25
 }
 .vel-sm\\:leading-snug { line-height: 1.375
 }
 .vel-sm\\:leading-normal { line-height: 1.5
 }
 .vel-sm\\:leading-relaxed { line-height: 1.625
 }
 .vel-sm\\:leading-loose { line-height: 2
 }
 .vel-sm\\:leading-3 { line-height: 0.75rem
 }
 .vel-sm\\:leading-4 { line-height: 1rem
 }
 .vel-sm\\:leading-5 { line-height: 1.25rem
 }
 .vel-sm\\:leading-6 { line-height: 1.5rem
 }
 .vel-sm\\:leading-7 { line-height: 1.75rem
 }
 .vel-sm\\:leading-8 { line-height: 2rem
 }
 .vel-sm\\:leading-9 { line-height: 2.25rem
 }
 .vel-sm\\:leading-10 { line-height: 2.5rem
 }
 .vel-sm\\:tracking-tighter { letter-spacing: -0.05em
 }
 .vel-sm\\:tracking-tight { letter-spacing: -0.025em
 }
 .vel-sm\\:tracking-normal { letter-spacing: 0em
 }
 .vel-sm\\:tracking-wide { letter-spacing: 0.025em
 }
 .vel-sm\\:tracking-wider { letter-spacing: 0.05em
 }
 .vel-sm\\:tracking-widest { letter-spacing: 0.1em
 }
 .vel-sm\\:text-left { text-align: left
 }
 .vel-sm\\:text-center { text-align: center
 }
 .vel-sm\\:text-right { text-align: right
 }
 .vel-sm\\:text-justify { text-align: justify
 }
 .vel-sm\\:text-start { text-align: start
 }
 .vel-sm\\:text-end { text-align: end
 }
 .vel-sm\\:underline { text-decoration-line: underline
 }
 .vel-sm\\:line-through { text-decoration-line: line-through
 }
 .vel-sm\\:no-underline { text-decoration-line: none
 }
 .vel-sm\\:uppercase { text-transform: uppercase
 }
 .vel-sm\\:lowercase { text-transform: lowercase
 }
 .vel-sm\\:capitalize { text-transform: capitalize
 }
 .vel-sm\\:normal-case { text-transform: none
 }
 .vel-sm\\:truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap
 }
 .vel-sm\\:text-ellipsis { text-overflow: ellipsis
 }
 .vel-sm\\:text-clip { text-overflow: clip
 }
 .vel-sm\\:whitespace-normal { white-space: normal
 }
 .vel-sm\\:whitespace-nowrap { white-space: nowrap
 }
 .vel-sm\\:whitespace-pre { white-space: pre
 }
 .vel-sm\\:whitespace-pre-line { white-space: pre-line
 }
 .vel-sm\\:whitespace-pre-wrap { white-space: pre-wrap
 }
 .vel-sm\\:whitespace-break-spaces { white-space: break-spaces
 }
 .vel-sm\\:text-inherit { color: inherit
 }
 .vel-sm\\:text-current { color: currentColor
 }
 .vel-sm\\:text-transparent { color: transparent
 }
 .vel-sm\\:text-white { color: #ffffff
 }
 .vel-sm\\:text-black { color: #000000
 }
 .vel-sm\\:text-primary { color: var(--vel-color-primary)
 }
 .vel-sm\\:text-secondary { color: var(--vel-color-secondary)
 }
 .vel-sm\\:text-success { color: var(--vel-color-success)
 }
 .vel-sm\\:text-danger { color: var(--vel-color-danger)
 }
 .vel-sm\\:text-warning { color: var(--vel-color-warning)
 }
 .vel-sm\\:text-info { color: var(--vel-color-info)
 }
 .vel-sm\\:text-neutral-50 { color: var(--vel-neutral-50)
 }
 .vel-sm\\:text-neutral-100 { color: var(--vel-neutral-100)
 }
 .vel-sm\\:text-neutral-200 { color: var(--vel-neutral-200)
 }
 .vel-sm\\:text-neutral-300 { color: var(--vel-neutral-300)
 }
 .vel-sm\\:text-neutral-400 { color: var(--vel-neutral-400)
 }
 .vel-sm\\:text-neutral-500 { color: var(--vel-neutral-500)
 }
 .vel-sm\\:text-neutral-600 { color: var(--vel-neutral-600)
 }
 .vel-sm\\:text-neutral-700 { color: var(--vel-neutral-700)
 }
 .vel-sm\\:text-neutral-800 { color: var(--vel-neutral-800)
 }
 .vel-sm\\:text-neutral-900 { color: var(--vel-neutral-900)
 }
 .vel-sm\\:text-neutral-950 { color: var(--vel-neutral-950)
 }
}
@media (min-width: 768px) {
 .vel-md\\:block { display: block
 }
 .vel-md\\:inline-block { display: inline-block
 }
 .vel-md\\:inline { display: inline
 }
 .vel-md\\:flex { display: flex
 }
 .vel-md\\:inline-flex { display: inline-flex
 }
 .vel-md\\:grid { display: grid
 }
 .vel-md\\:inline-grid { display: inline-grid
 }
 .vel-md\\:hidden { display: none
 }
 .vel-md\\:table { display: table
 }
 .vel-md\\:table-row { display: table-row
 }
 .vel-md\\:table-cell { display: table-cell
 }
 .vel-md\\:contents { display: contents
 }
 .vel-md\\:static { position: static
 }
 .vel-md\\:relative { position: relative
 }
 .vel-md\\:absolute { position: absolute
 }
 .vel-md\\:fixed { position: fixed
 }
 .vel-md\\:sticky { position: sticky
 }
 .vel-md\\:overflow-auto { overflow: auto
 }
 .vel-md\\:overflow-hidden { overflow: hidden
 }
 .vel-md\\:overflow-visible { overflow: visible
 }
 .vel-md\\:overflow-scroll { overflow: scroll
 }
 .vel-md\\:overflow-x-auto { overflow-x: auto
 }
 .vel-md\\:overflow-x-hidden { overflow-x: hidden
 }
 .vel-md\\:overflow-y-auto { overflow-y: auto
 }
 .vel-md\\:overflow-y-hidden { overflow-y: hidden
 }
 .vel-md\\:overflow-y-scroll { overflow-y: scroll
 }
 .vel-md\\:overscroll-auto { overscroll-behavior: auto
 }
 .vel-md\\:overscroll-contain { overscroll-behavior: contain
 }
 .vel-md\\:overscroll-none { overscroll-behavior: none
 }
 .vel-md\\:visible { visibility: visible
 }
 .vel-md\\:invisible { visibility: hidden
 }
 .vel-md\\:collapse { visibility: collapse
 }
 .vel-md\\:z-0 { z-index: var(--vel-z-0)
 }
 .vel-md\\:z-10 { z-index: var(--vel-z-10)
 }
 .vel-md\\:z-20 { z-index: var(--vel-z-20)
 }
 .vel-md\\:z-30 { z-index: var(--vel-z-30)
 }
 .vel-md\\:z-40 { z-index: var(--vel-z-40)
 }
 .vel-md\\:z-50 { z-index: var(--vel-z-50)
 }
 .vel-md\\:z-auto { z-index: var(--vel-z-auto)
 }
 .vel-md\\:float-left { float: left
 }
 .vel-md\\:float-right { float: right
 }
 .vel-md\\:float-none { float: none
 }
 .vel-md\\:clear-left { clear: left
 }
 .vel-md\\:clear-right { clear: right
 }
 .vel-md\\:clear-both { clear: both
 }
 .vel-md\\:clear-none { clear: none
 }
 .vel-md\\:object-contain { -o-object-fit: contain; object-fit: contain
 }
 .vel-md\\:object-cover { -o-object-fit: cover; object-fit: cover
 }
 .vel-md\\:object-fill { -o-object-fit: fill; object-fit: fill
 }
 .vel-md\\:object-none { -o-object-fit: none; object-fit: none
 }
 .vel-md\\:object-scale-down { -o-object-fit: scale-down; object-fit: scale-down
 }
 .vel-md\\:aspect-auto { aspect-ratio: auto
 }
 .vel-md\\:aspect-square { aspect-ratio: 1 / 1
 }
 .vel-md\\:aspect-video { aspect-ratio: 16 / 9
 }
 .vel-md\\:columns-1 { -moz-columns: 1; columns: 1
 }
 .vel-md\\:columns-2 { -moz-columns: 2; columns: 2
 }
 .vel-md\\:columns-3 { -moz-columns: 3; columns: 3
 }
 .vel-md\\:columns-4 { -moz-columns: 4; columns: 4
 }
 .vel-md\\:columns-auto { -moz-columns: auto; columns: auto
 }
 .vel-md\\:sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0
 }
 .vel-md\\:flex-row { flex-direction: row
 }
 .vel-md\\:flex-row-reverse { flex-direction: row-reverse
 }
 .vel-md\\:flex-col { flex-direction: column
 }
 .vel-md\\:flex-col-reverse { flex-direction: column-reverse
 }
 .vel-md\\:flex-wrap { flex-wrap: wrap
 }
 .vel-md\\:flex-wrap-reverse { flex-wrap: wrap-reverse
 }
 .vel-md\\:flex-nowrap { flex-wrap: nowrap
 }
 .vel-md\\:flex-1 { flex: 1 1 0%
 }
 .vel-md\\:flex-auto { flex: 1 1 auto
 }
 .vel-md\\:flex-initial { flex: 0 1 auto
 }
 .vel-md\\:flex-none { flex: none
 }
 .vel-md\\:grow { flex-grow: 1
 }
 .vel-md\\:shrink { flex-shrink: 1
 }
 .vel-md\\:items-start { align-items: flex-start
 }
 .vel-md\\:items-end { align-items: flex-end
 }
 .vel-md\\:items-center { align-items: center
 }
 .vel-md\\:items-baseline { align-items: baseline
 }
 .vel-md\\:items-stretch { align-items: stretch
 }
 .vel-md\\:self-auto { align-self: auto
 }
 .vel-md\\:self-start { align-self: flex-start
 }
 .vel-md\\:self-end { align-self: flex-end
 }
 .vel-md\\:self-center { align-self: center
 }
 .vel-md\\:self-baseline { align-self: baseline
 }
 .vel-md\\:self-stretch { align-self: stretch
 }
 .vel-md\\:justify-start { justify-content: flex-start
 }
 .vel-md\\:justify-end { justify-content: flex-end
 }
 .vel-md\\:justify-center { justify-content: center
 }
 .vel-md\\:justify-between { justify-content: space-between
 }
 .vel-md\\:justify-around { justify-content: space-around
 }
 .vel-md\\:justify-evenly { justify-content: space-evenly
 }
 .vel-md\\:justify-stretch { justify-content: stretch
 }
 .vel-md\\:justify-items-start { justify-items: start
 }
 .vel-md\\:justify-items-end { justify-items: end
 }
 .vel-md\\:justify-items-center { justify-items: center
 }
 .vel-md\\:justify-items-stretch { justify-items: stretch
 }
 .vel-md\\:justify-self-auto { justify-self: auto
 }
 .vel-md\\:justify-self-start { justify-self: start
 }
 .vel-md\\:justify-self-end { justify-self: end
 }
 .vel-md\\:justify-self-center { justify-self: center
 }
 .vel-md\\:justify-self-stretch { justify-self: stretch
 }
 .vel-md\\:order-first { order: -9999
 }
 .vel-md\\:order-last { order: 9999
 }
 .vel-md\\:order-none { order: 0
 }
 .vel-md\\:order-1 { order: 1
 }
 .vel-md\\:order-2 { order: 2
 }
 .vel-md\\:order-3 { order: 3
 }
 .vel-md\\:order-4 { order: 4
 }
 .vel-md\\:order-5 { order: 5
 }
 .vel-md\\:gap-0 { gap: 0px
 }
 .vel-md\\:gap-1 { gap: var(--vel-space-1)
 }
 .vel-md\\:gap-2 { gap: var(--vel-space-2)
 }
 .vel-md\\:gap-3 { gap: var(--vel-space-3)
 }
 .vel-md\\:gap-4 { gap: var(--vel-space-4)
 }
 .vel-md\\:gap-5 { gap: var(--vel-space-5)
 }
 .vel-md\\:gap-6 { gap: var(--vel-space-6)
 }
 .vel-md\\:gap-7 { gap: var(--vel-space-7)
 }
 .vel-md\\:gap-8 { gap: var(--vel-space-8)
 }
 .vel-md\\:gap-10 { gap: var(--vel-space-10)
 }
 .vel-md\\:gap-12 { gap: var(--vel-space-12)
 }
 .vel-md\\:gap-16 { gap: var(--vel-space-16)
 }
 .vel-md\\:gap-px { gap: 1px
 }
 .vel-md\\:gap-x-0 { -moz-column-gap: 0px; column-gap: 0px
 }
 .vel-md\\:gap-x-1 { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1)
 }
 .vel-md\\:gap-x-2 { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2)
 }
 .vel-md\\:gap-x-3 { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3)
 }
 .vel-md\\:gap-x-4 { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4)
 }
 .vel-md\\:gap-x-5 { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5)
 }
 .vel-md\\:gap-x-6 { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6)
 }
 .vel-md\\:gap-x-8 { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8)
 }
 .vel-md\\:gap-y-0 { row-gap: 0px
 }
 .vel-md\\:gap-y-1 { row-gap: var(--vel-space-1)
 }
 .vel-md\\:gap-y-2 { row-gap: var(--vel-space-2)
 }
 .vel-md\\:gap-y-3 { row-gap: var(--vel-space-3)
 }
 .vel-md\\:gap-y-4 { row-gap: var(--vel-space-4)
 }
 .vel-md\\:gap-y-5 { row-gap: var(--vel-space-5)
 }
 .vel-md\\:gap-y-6 { row-gap: var(--vel-space-6)
 }
 .vel-md\\:gap-y-8 { row-gap: var(--vel-space-8)
 }
 .vel-md\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr))
 }
 .vel-md\\:grid-cols-none { grid-template-columns: none
 }
 .vel-md\\:col-auto { grid-column: auto
 }
 .vel-md\\:col-span-1 { grid-column: span 1 / span 1
 }
 .vel-md\\:col-span-2 { grid-column: span 2 / span 2
 }
 .vel-md\\:col-span-3 { grid-column: span 3 / span 3
 }
 .vel-md\\:col-span-4 { grid-column: span 4 / span 4
 }
 .vel-md\\:col-span-5 { grid-column: span 5 / span 5
 }
 .vel-md\\:col-span-6 { grid-column: span 6 / span 6
 }
 .vel-md\\:col-span-7 { grid-column: span 7 / span 7
 }
 .vel-md\\:col-span-8 { grid-column: span 8 / span 8
 }
 .vel-md\\:col-span-9 { grid-column: span 9 / span 9
 }
 .vel-md\\:col-span-10 { grid-column: span 10 / span 10
 }
 .vel-md\\:col-span-11 { grid-column: span 11 / span 11
 }
 .vel-md\\:col-span-12 { grid-column: span 12 / span 12
 }
 .vel-md\\:col-span-full { grid-column: 1 / -1
 }
 .vel-md\\:col-start-1 { grid-column-start: 1
 }
 .vel-md\\:col-start-2 { grid-column-start: 2
 }
 .vel-md\\:col-start-3 { grid-column-start: 3
 }
 .vel-md\\:col-start-4 { grid-column-start: 4
 }
 .vel-md\\:col-start-auto { grid-column-start: auto
 }
 .vel-md\\:col-end-1 { grid-column-end: 1
 }
 .vel-md\\:col-end-2 { grid-column-end: 2
 }
 .vel-md\\:col-end-3 { grid-column-end: 3
 }
 .vel-md\\:col-end-4 { grid-column-end: 4
 }
 .vel-md\\:col-end-auto { grid-column-end: auto
 }
 .vel-md\\:grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr))
 }
 .vel-md\\:grid-rows-none { grid-template-rows: none
 }
 .vel-md\\:row-auto { grid-row: auto
 }
 .vel-md\\:row-span-1 { grid-row: span 1 / span 1
 }
 .vel-md\\:row-span-2 { grid-row: span 2 / span 2
 }
 .vel-md\\:row-span-3 { grid-row: span 3 / span 3
 }
 .vel-md\\:row-span-4 { grid-row: span 4 / span 4
 }
 .vel-md\\:row-span-5 { grid-row: span 5 / span 5
 }
 .vel-md\\:row-span-6 { grid-row: span 6 / span 6
 }
 .vel-md\\:row-span-full { grid-row: 1 / -1
 }
 .vel-md\\:row-start-1 { grid-row-start: 1
 }
 .vel-md\\:row-start-2 { grid-row-start: 2
 }
 .vel-md\\:row-start-3 { grid-row-start: 3
 }
 .vel-md\\:row-start-auto { grid-row-start: auto
 }
 .vel-md\\:row-end-1 { grid-row-end: 1
 }
 .vel-md\\:row-end-2 { grid-row-end: 2
 }
 .vel-md\\:row-end-3 { grid-row-end: 3
 }
 .vel-md\\:row-end-auto { grid-row-end: auto
 }
 .vel-md\\:grid-flow-row { grid-auto-flow: row
 }
 .vel-md\\:grid-flow-col { grid-auto-flow: column
 }
 .vel-md\\:grid-flow-dense { grid-auto-flow: dense
 }
 .vel-md\\:grid-flow-row-dense { grid-auto-flow: row dense
 }
 .vel-md\\:grid-flow-col-dense { grid-auto-flow: column dense
 }
 .vel-md\\:p-0 { padding: 0px
 }
 .vel-md\\:p-px { padding: 1px
 }
 .vel-md\\:p-1 { padding: var(--vel-space-1)
 }
 .vel-md\\:p-2 { padding: var(--vel-space-2)
 }
 .vel-md\\:p-3 { padding: var(--vel-space-3)
 }
 .vel-md\\:p-4 { padding: var(--vel-space-4)
 }
 .vel-md\\:p-5 { padding: var(--vel-space-5)
 }
 .vel-md\\:p-6 { padding: var(--vel-space-6)
 }
 .vel-md\\:p-7 { padding: var(--vel-space-7)
 }
 .vel-md\\:p-8 { padding: var(--vel-space-8)
 }
 .vel-md\\:p-9 { padding: var(--vel-space-9)
 }
 .vel-md\\:p-10 { padding: var(--vel-space-10)
 }
 .vel-md\\:p-11 { padding: var(--vel-space-11)
 }
 .vel-md\\:p-12 { padding: var(--vel-space-12)
 }
 .vel-md\\:p-14 { padding: var(--vel-space-14)
 }
 .vel-md\\:p-16 { padding: var(--vel-space-16)
 }
 .vel-md\\:p-20 { padding: var(--vel-space-20)
 }
 .vel-md\\:p-24 { padding: var(--vel-space-24)
 }
 .vel-md\\:p-28 { padding: var(--vel-space-28)
 }
 .vel-md\\:p-32 { padding: var(--vel-space-32)
 }
 .vel-md\\:pt-0 { padding-top: 0px
 }
 .vel-md\\:pt-1 { padding-top: var(--vel-space-1)
 }
 .vel-md\\:pt-2 { padding-top: var(--vel-space-2)
 }
 .vel-md\\:pt-3 { padding-top: var(--vel-space-3)
 }
 .vel-md\\:pt-4 { padding-top: var(--vel-space-4)
 }
 .vel-md\\:pt-5 { padding-top: var(--vel-space-5)
 }
 .vel-md\\:pt-6 { padding-top: var(--vel-space-6)
 }
 .vel-md\\:pt-8 { padding-top: var(--vel-space-8)
 }
 .vel-md\\:pt-10 { padding-top: var(--vel-space-10)
 }
 .vel-md\\:pt-12 { padding-top: var(--vel-space-12)
 }
 .vel-md\\:pt-16 { padding-top: var(--vel-space-16)
 }
 .vel-md\\:pr-0 { padding-right: 0px
 }
 .vel-md\\:pr-1 { padding-right: var(--vel-space-1)
 }
 .vel-md\\:pr-2 { padding-right: var(--vel-space-2)
 }
 .vel-md\\:pr-3 { padding-right: var(--vel-space-3)
 }
 .vel-md\\:pr-4 { padding-right: var(--vel-space-4)
 }
 .vel-md\\:pr-5 { padding-right: var(--vel-space-5)
 }
 .vel-md\\:pr-6 { padding-right: var(--vel-space-6)
 }
 .vel-md\\:pr-8 { padding-right: var(--vel-space-8)
 }
 .vel-md\\:pr-12 { padding-right: var(--vel-space-12)
 }
 .vel-md\\:pb-0 { padding-bottom: 0px
 }
 .vel-md\\:pb-1 { padding-bottom: var(--vel-space-1)
 }
 .vel-md\\:pb-2 { padding-bottom: var(--vel-space-2)
 }
 .vel-md\\:pb-3 { padding-bottom: var(--vel-space-3)
 }
 .vel-md\\:pb-4 { padding-bottom: var(--vel-space-4)
 }
 .vel-md\\:pb-5 { padding-bottom: var(--vel-space-5)
 }
 .vel-md\\:pb-6 { padding-bottom: var(--vel-space-6)
 }
 .vel-md\\:pb-8 { padding-bottom: var(--vel-space-8)
 }
 .vel-md\\:pb-12 { padding-bottom: var(--vel-space-12)
 }
 .vel-md\\:pl-0 { padding-left: 0px
 }
 .vel-md\\:pl-1 { padding-left: var(--vel-space-1)
 }
 .vel-md\\:pl-2 { padding-left: var(--vel-space-2)
 }
 .vel-md\\:pl-3 { padding-left: var(--vel-space-3)
 }
 .vel-md\\:pl-4 { padding-left: var(--vel-space-4)
 }
 .vel-md\\:pl-5 { padding-left: var(--vel-space-5)
 }
 .vel-md\\:pl-6 { padding-left: var(--vel-space-6)
 }
 .vel-md\\:pl-8 { padding-left: var(--vel-space-8)
 }
 .vel-md\\:pl-12 { padding-left: var(--vel-space-12)
 }
 .vel-md\\:m-0 { margin: 0px
 }
 .vel-md\\:m-px { margin: 1px
 }
 .vel-md\\:m-auto { margin: auto
 }
 .vel-md\\:m-1 { margin: var(--vel-space-1)
 }
 .vel-md\\:m-2 { margin: var(--vel-space-2)
 }
 .vel-md\\:m-3 { margin: var(--vel-space-3)
 }
 .vel-md\\:m-4 { margin: var(--vel-space-4)
 }
 .vel-md\\:m-5 { margin: var(--vel-space-5)
 }
 .vel-md\\:m-6 { margin: var(--vel-space-6)
 }
 .vel-md\\:m-7 { margin: var(--vel-space-7)
 }
 .vel-md\\:m-8 { margin: var(--vel-space-8)
 }
 .vel-md\\:m-10 { margin: var(--vel-space-10)
 }
 .vel-md\\:m-12 { margin: var(--vel-space-12)
 }
 .vel-md\\:m-16 { margin: var(--vel-space-16)
 }
 .vel-md\\:mt-0 { margin-top: 0px
 }
 .vel-md\\:mt-auto { margin-top: auto
 }
 .vel-md\\:mt-1 { margin-top: var(--vel-space-1)
 }
 .vel-md\\:mt-2 { margin-top: var(--vel-space-2)
 }
 .vel-md\\:mt-3 { margin-top: var(--vel-space-3)
 }
 .vel-md\\:mt-4 { margin-top: var(--vel-space-4)
 }
 .vel-md\\:mt-5 { margin-top: var(--vel-space-5)
 }
 .vel-md\\:mt-6 { margin-top: var(--vel-space-6)
 }
 .vel-md\\:mt-8 { margin-top: var(--vel-space-8)
 }
 .vel-md\\:mt-10 { margin-top: var(--vel-space-10)
 }
 .vel-md\\:mt-12 { margin-top: var(--vel-space-12)
 }
 .vel-md\\:mt-16 { margin-top: var(--vel-space-16)
 }
 .vel-md\\:mr-0 { margin-right: 0px
 }
 .vel-md\\:mr-auto { margin-right: auto
 }
 .vel-md\\:mr-1 { margin-right: var(--vel-space-1)
 }
 .vel-md\\:mr-2 { margin-right: var(--vel-space-2)
 }
 .vel-md\\:mr-3 { margin-right: var(--vel-space-3)
 }
 .vel-md\\:mr-4 { margin-right: var(--vel-space-4)
 }
 .vel-md\\:mr-6 { margin-right: var(--vel-space-6)
 }
 .vel-md\\:mr-8 { margin-right: var(--vel-space-8)
 }
 .vel-md\\:mb-0 { margin-bottom: 0px
 }
 .vel-md\\:mb-auto { margin-bottom: auto
 }
 .vel-md\\:mb-1 { margin-bottom: var(--vel-space-1)
 }
 .vel-md\\:mb-2 { margin-bottom: var(--vel-space-2)
 }
 .vel-md\\:mb-3 { margin-bottom: var(--vel-space-3)
 }
 .vel-md\\:mb-4 { margin-bottom: var(--vel-space-4)
 }
 .vel-md\\:mb-5 { margin-bottom: var(--vel-space-5)
 }
 .vel-md\\:mb-6 { margin-bottom: var(--vel-space-6)
 }
 .vel-md\\:mb-8 { margin-bottom: var(--vel-space-8)
 }
 .vel-md\\:mb-10 { margin-bottom: var(--vel-space-10)
 }
 .vel-md\\:mb-12 { margin-bottom: var(--vel-space-12)
 }
 .vel-md\\:mb-16 { margin-bottom: var(--vel-space-16)
 }
 .vel-md\\:ml-0 { margin-left: 0px
 }
 .vel-md\\:ml-auto { margin-left: auto
 }
 .vel-md\\:ml-1 { margin-left: var(--vel-space-1)
 }
 .vel-md\\:ml-2 { margin-left: var(--vel-space-2)
 }
 .vel-md\\:ml-3 { margin-left: var(--vel-space-3)
 }
 .vel-md\\:ml-4 { margin-left: var(--vel-space-4)
 }
 .vel-md\\:ml-6 { margin-left: var(--vel-space-6)
 }
 .vel-md\\:ml-8 { margin-left: var(--vel-space-8)
 }
 .vel-md\\:w-0 { width: 0px
 }
 .vel-md\\:w-px { width: 1px
 }
 .vel-md\\:w-auto { width: auto
 }
 .vel-md\\:w-full { width: 100%
 }
 .vel-md\\:w-screen { width: 100vw
 }
 .vel-md\\:w-svw { width: 100svw
 }
 .vel-md\\:w-dvw { width: 100dvw
 }
 .vel-md\\:w-min { width: -moz-min-content; width: min-content
 }
 .vel-md\\:w-max { width: -moz-max-content; width: max-content
 }
 .vel-md\\:w-fit { width: -moz-fit-content; width: fit-content
 }
 .vel-md\\:w-1 { width: var(--vel-space-1)
 }
 .vel-md\\:w-2 { width: var(--vel-space-2)
 }
 .vel-md\\:w-3 { width: var(--vel-space-3)
 }
 .vel-md\\:w-4 { width: var(--vel-space-4)
 }
 .vel-md\\:w-5 { width: var(--vel-space-5)
 }
 .vel-md\\:w-6 { width: var(--vel-space-6)
 }
 .vel-md\\:w-7 { width: var(--vel-space-7)
 }
 .vel-md\\:w-8 { width: var(--vel-space-8)
 }
 .vel-md\\:w-9 { width: var(--vel-space-9)
 }
 .vel-md\\:w-10 { width: var(--vel-space-10)
 }
 .vel-md\\:w-11 { width: var(--vel-space-11)
 }
 .vel-md\\:w-12 { width: var(--vel-space-12)
 }
 .vel-md\\:w-14 { width: var(--vel-space-14)
 }
 .vel-md\\:w-16 { width: var(--vel-space-16)
 }
 .vel-md\\:w-20 { width: var(--vel-space-20)
 }
 .vel-md\\:w-24 { width: var(--vel-space-24)
 }
 .vel-md\\:w-28 { width: var(--vel-space-28)
 }
 .vel-md\\:w-32 { width: var(--vel-space-32)
 }
 .vel-md\\:w-36 { width: var(--vel-space-36)
 }
 .vel-md\\:w-40 { width: var(--vel-space-40)
 }
 .vel-md\\:w-48 { width: var(--vel-space-48)
 }
 .vel-md\\:w-56 { width: var(--vel-space-56)
 }
 .vel-md\\:w-64 { width: var(--vel-space-64)
 }
 .vel-md\\:w-72 { width: var(--vel-space-72)
 }
 .vel-md\\:w-80 { width: var(--vel-space-80)
 }
 .vel-md\\:w-96 { width: var(--vel-space-96)
 }
 .vel-md\\:min-w-0 { min-width: 0px
 }
 .vel-md\\:min-w-full { min-width: 100%
 }
 .vel-md\\:min-w-min { min-width: -moz-min-content; min-width: min-content
 }
 .vel-md\\:min-w-max { min-width: -moz-max-content; min-width: max-content
 }
 .vel-md\\:min-w-fit { min-width: -moz-fit-content; min-width: fit-content
 }
 .vel-md\\:max-w-none { max-width: none
 }
 .vel-md\\:max-w-xs { max-width: 20rem
 }
 .vel-md\\:max-w-sm { max-width: 24rem
 }
 .vel-md\\:max-w-md { max-width: 28rem
 }
 .vel-md\\:max-w-lg { max-width: 32rem
 }
 .vel-md\\:max-w-xl { max-width: 36rem
 }
 .vel-md\\:max-w-2xl { max-width: 42rem
 }
 .vel-md\\:max-w-3xl { max-width: 48rem
 }
 .vel-md\\:max-w-4xl { max-width: 56rem
 }
 .vel-md\\:max-w-5xl { max-width: 64rem
 }
 .vel-md\\:max-w-6xl { max-width: 72rem
 }
 .vel-md\\:max-w-7xl { max-width: 80rem
 }
 .vel-md\\:max-w-full { max-width: 100%
 }
 .vel-md\\:max-w-min { max-width: -moz-min-content; max-width: min-content
 }
 .vel-md\\:max-w-max { max-width: -moz-max-content; max-width: max-content
 }
 .vel-md\\:max-w-fit { max-width: -moz-fit-content; max-width: fit-content
 }
 .vel-md\\:max-w-prose { max-width: 65ch
 }
 .vel-md\\:max-w-screen-sm { max-width: 640px
 }
 .vel-md\\:max-w-screen-md { max-width: 768px
 }
 .vel-md\\:max-w-screen-lg { max-width: 1024px
 }
 .vel-md\\:max-w-screen-xl { max-width: 1280px
 }
 .vel-md\\:max-w-screen-2xl { max-width: 1536px
 }
 .vel-md\\:h-0 { height: 0px
 }
 .vel-md\\:h-px { height: 1px
 }
 .vel-md\\:h-auto { height: auto
 }
 .vel-md\\:h-full { height: 100%
 }
 .vel-md\\:h-screen { height: 100vh
 }
 .vel-md\\:h-svh { height: 100svh
 }
 .vel-md\\:h-dvh { height: 100dvh
 }
 .vel-md\\:h-min { height: -moz-min-content; height: min-content
 }
 .vel-md\\:h-max { height: -moz-max-content; height: max-content
 }
 .vel-md\\:h-fit { height: -moz-fit-content; height: fit-content
 }
 .vel-md\\:h-1 { height: var(--vel-space-1)
 }
 .vel-md\\:h-2 { height: var(--vel-space-2)
 }
 .vel-md\\:h-3 { height: var(--vel-space-3)
 }
 .vel-md\\:h-4 { height: var(--vel-space-4)
 }
 .vel-md\\:h-5 { height: var(--vel-space-5)
 }
 .vel-md\\:h-6 { height: var(--vel-space-6)
 }
 .vel-md\\:h-7 { height: var(--vel-space-7)
 }
 .vel-md\\:h-8 { height: var(--vel-space-8)
 }
 .vel-md\\:h-9 { height: var(--vel-space-9)
 }
 .vel-md\\:h-10 { height: var(--vel-space-10)
 }
 .vel-md\\:h-11 { height: var(--vel-space-11)
 }
 .vel-md\\:h-12 { height: var(--vel-space-12)
 }
 .vel-md\\:h-14 { height: var(--vel-space-14)
 }
 .vel-md\\:h-16 { height: var(--vel-space-16)
 }
 .vel-md\\:h-20 { height: var(--vel-space-20)
 }
 .vel-md\\:h-24 { height: var(--vel-space-24)
 }
 .vel-md\\:h-28 { height: var(--vel-space-28)
 }
 .vel-md\\:h-32 { height: var(--vel-space-32)
 }
 .vel-md\\:h-36 { height: var(--vel-space-36)
 }
 .vel-md\\:h-40 { height: var(--vel-space-40)
 }
 .vel-md\\:h-48 { height: var(--vel-space-48)
 }
 .vel-md\\:h-56 { height: var(--vel-space-56)
 }
 .vel-md\\:h-64 { height: var(--vel-space-64)
 }
 .vel-md\\:min-h-0 { min-height: 0px
 }
 .vel-md\\:min-h-full { min-height: 100%
 }
 .vel-md\\:min-h-screen { min-height: 100vh
 }
 .vel-md\\:min-h-svh { min-height: 100svh
 }
 .vel-md\\:min-h-dvh { min-height: 100dvh
 }
 .vel-md\\:min-h-min { min-height: -moz-min-content; min-height: min-content
 }
 .vel-md\\:min-h-max { min-height: -moz-max-content; min-height: max-content
 }
 .vel-md\\:min-h-fit { min-height: -moz-fit-content; min-height: fit-content
 }
 .vel-md\\:max-h-none { max-height: none
 }
 .vel-md\\:max-h-full { max-height: 100%
 }
 .vel-md\\:max-h-screen { max-height: 100vh
 }
 .vel-md\\:max-h-svh { max-height: 100svh
 }
 .vel-md\\:max-h-dvh { max-height: 100dvh
 }
 .vel-md\\:max-h-min { max-height: -moz-min-content; max-height: min-content
 }
 .vel-md\\:max-h-max { max-height: -moz-max-content; max-height: max-content
 }
 .vel-md\\:max-h-fit { max-height: -moz-fit-content; max-height: fit-content
 }
 .vel-md\\:max-h-24 { max-height: var(--vel-space-24)
 }
 .vel-md\\:max-h-48 { max-height: var(--vel-space-48)
 }
 .vel-md\\:max-h-64 { max-height: var(--vel-space-64)
 }
 .vel-md\\:max-h-96 { max-height: var(--vel-space-96)
 }
 .vel-md\\:font-sans { font-family: var(--vel-font-sans)
 }
 .vel-md\\:font-serif { font-family: var(--vel-font-serif)
 }
 .vel-md\\:font-mono { font-family: var(--vel-font-mono)
 }
 .vel-md\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
 }
 .vel-md\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
 }
 .vel-md\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
 }
 .vel-md\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
 }
 .vel-md\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
 }
 .vel-md\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
 }
 .vel-md\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
 }
 .vel-md\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
 }
 .vel-md\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
 }
 .vel-md\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
 }
 .vel-md\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
 }
 .vel-md\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
 }
 .vel-md\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
 }
 .vel-md\\:font-thin { font-weight: 100
 }
 .vel-md\\:font-extralight { font-weight: 200
 }
 .vel-md\\:font-light { font-weight: 300
 }
 .vel-md\\:font-normal { font-weight: 400
 }
 .vel-md\\:font-medium { font-weight: 500
 }
 .vel-md\\:font-semibold { font-weight: 600
 }
 .vel-md\\:font-bold { font-weight: 700
 }
 .vel-md\\:font-extrabold { font-weight: 800
 }
 .vel-md\\:font-black { font-weight: 900
 }
 .vel-md\\:italic { font-style: italic
 }
 .vel-md\\:not-italic { font-style: normal
 }
 .vel-md\\:leading-none { line-height: 1
 }
 .vel-md\\:leading-tight { line-height: 1.25
 }
 .vel-md\\:leading-snug { line-height: 1.375
 }
 .vel-md\\:leading-normal { line-height: 1.5
 }
 .vel-md\\:leading-relaxed { line-height: 1.625
 }
 .vel-md\\:leading-loose { line-height: 2
 }
 .vel-md\\:leading-3 { line-height: 0.75rem
 }
 .vel-md\\:leading-4 { line-height: 1rem
 }
 .vel-md\\:leading-5 { line-height: 1.25rem
 }
 .vel-md\\:leading-6 { line-height: 1.5rem
 }
 .vel-md\\:leading-7 { line-height: 1.75rem
 }
 .vel-md\\:leading-8 { line-height: 2rem
 }
 .vel-md\\:leading-9 { line-height: 2.25rem
 }
 .vel-md\\:leading-10 { line-height: 2.5rem
 }
 .vel-md\\:tracking-tighter { letter-spacing: -0.05em
 }
 .vel-md\\:tracking-tight { letter-spacing: -0.025em
 }
 .vel-md\\:tracking-normal { letter-spacing: 0em
 }
 .vel-md\\:tracking-wide { letter-spacing: 0.025em
 }
 .vel-md\\:tracking-wider { letter-spacing: 0.05em
 }
 .vel-md\\:tracking-widest { letter-spacing: 0.1em
 }
 .vel-md\\:text-left { text-align: left
 }
 .vel-md\\:text-center { text-align: center
 }
 .vel-md\\:text-right { text-align: right
 }
 .vel-md\\:text-justify { text-align: justify
 }
 .vel-md\\:text-start { text-align: start
 }
 .vel-md\\:text-end { text-align: end
 }
 .vel-md\\:underline { text-decoration-line: underline
 }
 .vel-md\\:line-through { text-decoration-line: line-through
 }
 .vel-md\\:no-underline { text-decoration-line: none
 }
 .vel-md\\:uppercase { text-transform: uppercase
 }
 .vel-md\\:lowercase { text-transform: lowercase
 }
 .vel-md\\:capitalize { text-transform: capitalize
 }
 .vel-md\\:normal-case { text-transform: none
 }
 .vel-md\\:truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap
 }
 .vel-md\\:text-ellipsis { text-overflow: ellipsis
 }
 .vel-md\\:text-clip { text-overflow: clip
 }
 .vel-md\\:whitespace-normal { white-space: normal
 }
 .vel-md\\:whitespace-nowrap { white-space: nowrap
 }
 .vel-md\\:whitespace-pre { white-space: pre
 }
 .vel-md\\:whitespace-pre-line { white-space: pre-line
 }
 .vel-md\\:whitespace-pre-wrap { white-space: pre-wrap
 }
 .vel-md\\:whitespace-break-spaces { white-space: break-spaces
 }
 .vel-md\\:text-inherit { color: inherit
 }
 .vel-md\\:text-current { color: currentColor
 }
 .vel-md\\:text-transparent { color: transparent
 }
 .vel-md\\:text-white { color: #ffffff
 }
 .vel-md\\:text-black { color: #000000
 }
 .vel-md\\:text-primary { color: var(--vel-color-primary)
 }
 .vel-md\\:text-secondary { color: var(--vel-color-secondary)
 }
 .vel-md\\:text-success { color: var(--vel-color-success)
 }
 .vel-md\\:text-danger { color: var(--vel-color-danger)
 }
 .vel-md\\:text-warning { color: var(--vel-color-warning)
 }
 .vel-md\\:text-info { color: var(--vel-color-info)
 }
 .vel-md\\:text-neutral-50 { color: var(--vel-neutral-50)
 }
 .vel-md\\:text-neutral-100 { color: var(--vel-neutral-100)
 }
 .vel-md\\:text-neutral-200 { color: var(--vel-neutral-200)
 }
 .vel-md\\:text-neutral-300 { color: var(--vel-neutral-300)
 }
 .vel-md\\:text-neutral-400 { color: var(--vel-neutral-400)
 }
 .vel-md\\:text-neutral-500 { color: var(--vel-neutral-500)
 }
 .vel-md\\:text-neutral-600 { color: var(--vel-neutral-600)
 }
 .vel-md\\:text-neutral-700 { color: var(--vel-neutral-700)
 }
 .vel-md\\:text-neutral-800 { color: var(--vel-neutral-800)
 }
 .vel-md\\:text-neutral-900 { color: var(--vel-neutral-900)
 }
 .vel-md\\:text-neutral-950 { color: var(--vel-neutral-950)
 }
}
@media (min-width: 1024px) {
 .vel-lg\\:block { display: block
 }
 .vel-lg\\:inline-block { display: inline-block
 }
 .vel-lg\\:inline { display: inline
 }
 .vel-lg\\:flex { display: flex
 }
 .vel-lg\\:inline-flex { display: inline-flex
 }
 .vel-lg\\:grid { display: grid
 }
 .vel-lg\\:inline-grid { display: inline-grid
 }
 .vel-lg\\:hidden { display: none
 }
 .vel-lg\\:table { display: table
 }
 .vel-lg\\:table-row { display: table-row
 }
 .vel-lg\\:table-cell { display: table-cell
 }
 .vel-lg\\:contents { display: contents
 }
 .vel-lg\\:static { position: static
 }
 .vel-lg\\:relative { position: relative
 }
 .vel-lg\\:absolute { position: absolute
 }
 .vel-lg\\:fixed { position: fixed
 }
 .vel-lg\\:sticky { position: sticky
 }
 .vel-lg\\:overflow-auto { overflow: auto
 }
 .vel-lg\\:overflow-hidden { overflow: hidden
 }
 .vel-lg\\:overflow-visible { overflow: visible
 }
 .vel-lg\\:overflow-scroll { overflow: scroll
 }
 .vel-lg\\:overflow-x-auto { overflow-x: auto
 }
 .vel-lg\\:overflow-x-hidden { overflow-x: hidden
 }
 .vel-lg\\:overflow-y-auto { overflow-y: auto
 }
 .vel-lg\\:overflow-y-hidden { overflow-y: hidden
 }
 .vel-lg\\:overflow-y-scroll { overflow-y: scroll
 }
 .vel-lg\\:overscroll-auto { overscroll-behavior: auto
 }
 .vel-lg\\:overscroll-contain { overscroll-behavior: contain
 }
 .vel-lg\\:overscroll-none { overscroll-behavior: none
 }
 .vel-lg\\:visible { visibility: visible
 }
 .vel-lg\\:invisible { visibility: hidden
 }
 .vel-lg\\:collapse { visibility: collapse
 }
 .vel-lg\\:z-0 { z-index: var(--vel-z-0)
 }
 .vel-lg\\:z-10 { z-index: var(--vel-z-10)
 }
 .vel-lg\\:z-20 { z-index: var(--vel-z-20)
 }
 .vel-lg\\:z-30 { z-index: var(--vel-z-30)
 }
 .vel-lg\\:z-40 { z-index: var(--vel-z-40)
 }
 .vel-lg\\:z-50 { z-index: var(--vel-z-50)
 }
 .vel-lg\\:z-auto { z-index: var(--vel-z-auto)
 }
 .vel-lg\\:float-left { float: left
 }
 .vel-lg\\:float-right { float: right
 }
 .vel-lg\\:float-none { float: none
 }
 .vel-lg\\:clear-left { clear: left
 }
 .vel-lg\\:clear-right { clear: right
 }
 .vel-lg\\:clear-both { clear: both
 }
 .vel-lg\\:clear-none { clear: none
 }
 .vel-lg\\:object-contain { -o-object-fit: contain; object-fit: contain
 }
 .vel-lg\\:object-cover { -o-object-fit: cover; object-fit: cover
 }
 .vel-lg\\:object-fill { -o-object-fit: fill; object-fit: fill
 }
 .vel-lg\\:object-none { -o-object-fit: none; object-fit: none
 }
 .vel-lg\\:object-scale-down { -o-object-fit: scale-down; object-fit: scale-down
 }
 .vel-lg\\:aspect-auto { aspect-ratio: auto
 }
 .vel-lg\\:aspect-square { aspect-ratio: 1 / 1
 }
 .vel-lg\\:aspect-video { aspect-ratio: 16 / 9
 }
 .vel-lg\\:columns-1 { -moz-columns: 1; columns: 1
 }
 .vel-lg\\:columns-2 { -moz-columns: 2; columns: 2
 }
 .vel-lg\\:columns-3 { -moz-columns: 3; columns: 3
 }
 .vel-lg\\:columns-4 { -moz-columns: 4; columns: 4
 }
 .vel-lg\\:columns-auto { -moz-columns: auto; columns: auto
 }
 .vel-lg\\:sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0
 }
 .vel-lg\\:flex-row { flex-direction: row
 }
 .vel-lg\\:flex-row-reverse { flex-direction: row-reverse
 }
 .vel-lg\\:flex-col { flex-direction: column
 }
 .vel-lg\\:flex-col-reverse { flex-direction: column-reverse
 }
 .vel-lg\\:flex-wrap { flex-wrap: wrap
 }
 .vel-lg\\:flex-wrap-reverse { flex-wrap: wrap-reverse
 }
 .vel-lg\\:flex-nowrap { flex-wrap: nowrap
 }
 .vel-lg\\:flex-1 { flex: 1 1 0%
 }
 .vel-lg\\:flex-auto { flex: 1 1 auto
 }
 .vel-lg\\:flex-initial { flex: 0 1 auto
 }
 .vel-lg\\:flex-none { flex: none
 }
 .vel-lg\\:grow { flex-grow: 1
 }
 .vel-lg\\:shrink { flex-shrink: 1
 }
 .vel-lg\\:items-start { align-items: flex-start
 }
 .vel-lg\\:items-end { align-items: flex-end
 }
 .vel-lg\\:items-center { align-items: center
 }
 .vel-lg\\:items-baseline { align-items: baseline
 }
 .vel-lg\\:items-stretch { align-items: stretch
 }
 .vel-lg\\:self-auto { align-self: auto
 }
 .vel-lg\\:self-start { align-self: flex-start
 }
 .vel-lg\\:self-end { align-self: flex-end
 }
 .vel-lg\\:self-center { align-self: center
 }
 .vel-lg\\:self-baseline { align-self: baseline
 }
 .vel-lg\\:self-stretch { align-self: stretch
 }
 .vel-lg\\:justify-start { justify-content: flex-start
 }
 .vel-lg\\:justify-end { justify-content: flex-end
 }
 .vel-lg\\:justify-center { justify-content: center
 }
 .vel-lg\\:justify-between { justify-content: space-between
 }
 .vel-lg\\:justify-around { justify-content: space-around
 }
 .vel-lg\\:justify-evenly { justify-content: space-evenly
 }
 .vel-lg\\:justify-stretch { justify-content: stretch
 }
 .vel-lg\\:justify-items-start { justify-items: start
 }
 .vel-lg\\:justify-items-end { justify-items: end
 }
 .vel-lg\\:justify-items-center { justify-items: center
 }
 .vel-lg\\:justify-items-stretch { justify-items: stretch
 }
 .vel-lg\\:justify-self-auto { justify-self: auto
 }
 .vel-lg\\:justify-self-start { justify-self: start
 }
 .vel-lg\\:justify-self-end { justify-self: end
 }
 .vel-lg\\:justify-self-center { justify-self: center
 }
 .vel-lg\\:justify-self-stretch { justify-self: stretch
 }
 .vel-lg\\:order-first { order: -9999
 }
 .vel-lg\\:order-last { order: 9999
 }
 .vel-lg\\:order-none { order: 0
 }
 .vel-lg\\:order-1 { order: 1
 }
 .vel-lg\\:order-2 { order: 2
 }
 .vel-lg\\:order-3 { order: 3
 }
 .vel-lg\\:order-4 { order: 4
 }
 .vel-lg\\:order-5 { order: 5
 }
 .vel-lg\\:gap-0 { gap: 0px
 }
 .vel-lg\\:gap-1 { gap: var(--vel-space-1)
 }
 .vel-lg\\:gap-2 { gap: var(--vel-space-2)
 }
 .vel-lg\\:gap-3 { gap: var(--vel-space-3)
 }
 .vel-lg\\:gap-4 { gap: var(--vel-space-4)
 }
 .vel-lg\\:gap-5 { gap: var(--vel-space-5)
 }
 .vel-lg\\:gap-6 { gap: var(--vel-space-6)
 }
 .vel-lg\\:gap-7 { gap: var(--vel-space-7)
 }
 .vel-lg\\:gap-8 { gap: var(--vel-space-8)
 }
 .vel-lg\\:gap-10 { gap: var(--vel-space-10)
 }
 .vel-lg\\:gap-12 { gap: var(--vel-space-12)
 }
 .vel-lg\\:gap-16 { gap: var(--vel-space-16)
 }
 .vel-lg\\:gap-px { gap: 1px
 }
 .vel-lg\\:gap-x-0 { -moz-column-gap: 0px; column-gap: 0px
 }
 .vel-lg\\:gap-x-1 { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1)
 }
 .vel-lg\\:gap-x-2 { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2)
 }
 .vel-lg\\:gap-x-3 { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3)
 }
 .vel-lg\\:gap-x-4 { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4)
 }
 .vel-lg\\:gap-x-5 { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5)
 }
 .vel-lg\\:gap-x-6 { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6)
 }
 .vel-lg\\:gap-x-8 { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8)
 }
 .vel-lg\\:gap-y-0 { row-gap: 0px
 }
 .vel-lg\\:gap-y-1 { row-gap: var(--vel-space-1)
 }
 .vel-lg\\:gap-y-2 { row-gap: var(--vel-space-2)
 }
 .vel-lg\\:gap-y-3 { row-gap: var(--vel-space-3)
 }
 .vel-lg\\:gap-y-4 { row-gap: var(--vel-space-4)
 }
 .vel-lg\\:gap-y-5 { row-gap: var(--vel-space-5)
 }
 .vel-lg\\:gap-y-6 { row-gap: var(--vel-space-6)
 }
 .vel-lg\\:gap-y-8 { row-gap: var(--vel-space-8)
 }
 .vel-lg\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr))
 }
 .vel-lg\\:grid-cols-none { grid-template-columns: none
 }
 .vel-lg\\:col-auto { grid-column: auto
 }
 .vel-lg\\:col-span-1 { grid-column: span 1 / span 1
 }
 .vel-lg\\:col-span-2 { grid-column: span 2 / span 2
 }
 .vel-lg\\:col-span-3 { grid-column: span 3 / span 3
 }
 .vel-lg\\:col-span-4 { grid-column: span 4 / span 4
 }
 .vel-lg\\:col-span-5 { grid-column: span 5 / span 5
 }
 .vel-lg\\:col-span-6 { grid-column: span 6 / span 6
 }
 .vel-lg\\:col-span-7 { grid-column: span 7 / span 7
 }
 .vel-lg\\:col-span-8 { grid-column: span 8 / span 8
 }
 .vel-lg\\:col-span-9 { grid-column: span 9 / span 9
 }
 .vel-lg\\:col-span-10 { grid-column: span 10 / span 10
 }
 .vel-lg\\:col-span-11 { grid-column: span 11 / span 11
 }
 .vel-lg\\:col-span-12 { grid-column: span 12 / span 12
 }
 .vel-lg\\:col-span-full { grid-column: 1 / -1
 }
 .vel-lg\\:col-start-1 { grid-column-start: 1
 }
 .vel-lg\\:col-start-2 { grid-column-start: 2
 }
 .vel-lg\\:col-start-3 { grid-column-start: 3
 }
 .vel-lg\\:col-start-4 { grid-column-start: 4
 }
 .vel-lg\\:col-start-auto { grid-column-start: auto
 }
 .vel-lg\\:col-end-1 { grid-column-end: 1
 }
 .vel-lg\\:col-end-2 { grid-column-end: 2
 }
 .vel-lg\\:col-end-3 { grid-column-end: 3
 }
 .vel-lg\\:col-end-4 { grid-column-end: 4
 }
 .vel-lg\\:col-end-auto { grid-column-end: auto
 }
 .vel-lg\\:grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr))
 }
 .vel-lg\\:grid-rows-none { grid-template-rows: none
 }
 .vel-lg\\:row-auto { grid-row: auto
 }
 .vel-lg\\:row-span-1 { grid-row: span 1 / span 1
 }
 .vel-lg\\:row-span-2 { grid-row: span 2 / span 2
 }
 .vel-lg\\:row-span-3 { grid-row: span 3 / span 3
 }
 .vel-lg\\:row-span-4 { grid-row: span 4 / span 4
 }
 .vel-lg\\:row-span-5 { grid-row: span 5 / span 5
 }
 .vel-lg\\:row-span-6 { grid-row: span 6 / span 6
 }
 .vel-lg\\:row-span-full { grid-row: 1 / -1
 }
 .vel-lg\\:row-start-1 { grid-row-start: 1
 }
 .vel-lg\\:row-start-2 { grid-row-start: 2
 }
 .vel-lg\\:row-start-3 { grid-row-start: 3
 }
 .vel-lg\\:row-start-auto { grid-row-start: auto
 }
 .vel-lg\\:row-end-1 { grid-row-end: 1
 }
 .vel-lg\\:row-end-2 { grid-row-end: 2
 }
 .vel-lg\\:row-end-3 { grid-row-end: 3
 }
 .vel-lg\\:row-end-auto { grid-row-end: auto
 }
 .vel-lg\\:grid-flow-row { grid-auto-flow: row
 }
 .vel-lg\\:grid-flow-col { grid-auto-flow: column
 }
 .vel-lg\\:grid-flow-dense { grid-auto-flow: dense
 }
 .vel-lg\\:grid-flow-row-dense { grid-auto-flow: row dense
 }
 .vel-lg\\:grid-flow-col-dense { grid-auto-flow: column dense
 }
 .vel-lg\\:p-0 { padding: 0px
 }
 .vel-lg\\:p-px { padding: 1px
 }
 .vel-lg\\:p-1 { padding: var(--vel-space-1)
 }
 .vel-lg\\:p-2 { padding: var(--vel-space-2)
 }
 .vel-lg\\:p-3 { padding: var(--vel-space-3)
 }
 .vel-lg\\:p-4 { padding: var(--vel-space-4)
 }
 .vel-lg\\:p-5 { padding: var(--vel-space-5)
 }
 .vel-lg\\:p-6 { padding: var(--vel-space-6)
 }
 .vel-lg\\:p-7 { padding: var(--vel-space-7)
 }
 .vel-lg\\:p-8 { padding: var(--vel-space-8)
 }
 .vel-lg\\:p-9 { padding: var(--vel-space-9)
 }
 .vel-lg\\:p-10 { padding: var(--vel-space-10)
 }
 .vel-lg\\:p-11 { padding: var(--vel-space-11)
 }
 .vel-lg\\:p-12 { padding: var(--vel-space-12)
 }
 .vel-lg\\:p-14 { padding: var(--vel-space-14)
 }
 .vel-lg\\:p-16 { padding: var(--vel-space-16)
 }
 .vel-lg\\:p-20 { padding: var(--vel-space-20)
 }
 .vel-lg\\:p-24 { padding: var(--vel-space-24)
 }
 .vel-lg\\:p-28 { padding: var(--vel-space-28)
 }
 .vel-lg\\:p-32 { padding: var(--vel-space-32)
 }
 .vel-lg\\:pt-0 { padding-top: 0px
 }
 .vel-lg\\:pt-1 { padding-top: var(--vel-space-1)
 }
 .vel-lg\\:pt-2 { padding-top: var(--vel-space-2)
 }
 .vel-lg\\:pt-3 { padding-top: var(--vel-space-3)
 }
 .vel-lg\\:pt-4 { padding-top: var(--vel-space-4)
 }
 .vel-lg\\:pt-5 { padding-top: var(--vel-space-5)
 }
 .vel-lg\\:pt-6 { padding-top: var(--vel-space-6)
 }
 .vel-lg\\:pt-8 { padding-top: var(--vel-space-8)
 }
 .vel-lg\\:pt-10 { padding-top: var(--vel-space-10)
 }
 .vel-lg\\:pt-12 { padding-top: var(--vel-space-12)
 }
 .vel-lg\\:pt-16 { padding-top: var(--vel-space-16)
 }
 .vel-lg\\:pr-0 { padding-right: 0px
 }
 .vel-lg\\:pr-1 { padding-right: var(--vel-space-1)
 }
 .vel-lg\\:pr-2 { padding-right: var(--vel-space-2)
 }
 .vel-lg\\:pr-3 { padding-right: var(--vel-space-3)
 }
 .vel-lg\\:pr-4 { padding-right: var(--vel-space-4)
 }
 .vel-lg\\:pr-5 { padding-right: var(--vel-space-5)
 }
 .vel-lg\\:pr-6 { padding-right: var(--vel-space-6)
 }
 .vel-lg\\:pr-8 { padding-right: var(--vel-space-8)
 }
 .vel-lg\\:pr-12 { padding-right: var(--vel-space-12)
 }
 .vel-lg\\:pb-0 { padding-bottom: 0px
 }
 .vel-lg\\:pb-1 { padding-bottom: var(--vel-space-1)
 }
 .vel-lg\\:pb-2 { padding-bottom: var(--vel-space-2)
 }
 .vel-lg\\:pb-3 { padding-bottom: var(--vel-space-3)
 }
 .vel-lg\\:pb-4 { padding-bottom: var(--vel-space-4)
 }
 .vel-lg\\:pb-5 { padding-bottom: var(--vel-space-5)
 }
 .vel-lg\\:pb-6 { padding-bottom: var(--vel-space-6)
 }
 .vel-lg\\:pb-8 { padding-bottom: var(--vel-space-8)
 }
 .vel-lg\\:pb-12 { padding-bottom: var(--vel-space-12)
 }
 .vel-lg\\:pl-0 { padding-left: 0px
 }
 .vel-lg\\:pl-1 { padding-left: var(--vel-space-1)
 }
 .vel-lg\\:pl-2 { padding-left: var(--vel-space-2)
 }
 .vel-lg\\:pl-3 { padding-left: var(--vel-space-3)
 }
 .vel-lg\\:pl-4 { padding-left: var(--vel-space-4)
 }
 .vel-lg\\:pl-5 { padding-left: var(--vel-space-5)
 }
 .vel-lg\\:pl-6 { padding-left: var(--vel-space-6)
 }
 .vel-lg\\:pl-8 { padding-left: var(--vel-space-8)
 }
 .vel-lg\\:pl-12 { padding-left: var(--vel-space-12)
 }
 .vel-lg\\:m-0 { margin: 0px
 }
 .vel-lg\\:m-px { margin: 1px
 }
 .vel-lg\\:m-auto { margin: auto
 }
 .vel-lg\\:m-1 { margin: var(--vel-space-1)
 }
 .vel-lg\\:m-2 { margin: var(--vel-space-2)
 }
 .vel-lg\\:m-3 { margin: var(--vel-space-3)
 }
 .vel-lg\\:m-4 { margin: var(--vel-space-4)
 }
 .vel-lg\\:m-5 { margin: var(--vel-space-5)
 }
 .vel-lg\\:m-6 { margin: var(--vel-space-6)
 }
 .vel-lg\\:m-7 { margin: var(--vel-space-7)
 }
 .vel-lg\\:m-8 { margin: var(--vel-space-8)
 }
 .vel-lg\\:m-10 { margin: var(--vel-space-10)
 }
 .vel-lg\\:m-12 { margin: var(--vel-space-12)
 }
 .vel-lg\\:m-16 { margin: var(--vel-space-16)
 }
 .vel-lg\\:mt-0 { margin-top: 0px
 }
 .vel-lg\\:mt-auto { margin-top: auto
 }
 .vel-lg\\:mt-1 { margin-top: var(--vel-space-1)
 }
 .vel-lg\\:mt-2 { margin-top: var(--vel-space-2)
 }
 .vel-lg\\:mt-3 { margin-top: var(--vel-space-3)
 }
 .vel-lg\\:mt-4 { margin-top: var(--vel-space-4)
 }
 .vel-lg\\:mt-5 { margin-top: var(--vel-space-5)
 }
 .vel-lg\\:mt-6 { margin-top: var(--vel-space-6)
 }
 .vel-lg\\:mt-8 { margin-top: var(--vel-space-8)
 }
 .vel-lg\\:mt-10 { margin-top: var(--vel-space-10)
 }
 .vel-lg\\:mt-12 { margin-top: var(--vel-space-12)
 }
 .vel-lg\\:mt-16 { margin-top: var(--vel-space-16)
 }
 .vel-lg\\:mr-0 { margin-right: 0px
 }
 .vel-lg\\:mr-auto { margin-right: auto
 }
 .vel-lg\\:mr-1 { margin-right: var(--vel-space-1)
 }
 .vel-lg\\:mr-2 { margin-right: var(--vel-space-2)
 }
 .vel-lg\\:mr-3 { margin-right: var(--vel-space-3)
 }
 .vel-lg\\:mr-4 { margin-right: var(--vel-space-4)
 }
 .vel-lg\\:mr-6 { margin-right: var(--vel-space-6)
 }
 .vel-lg\\:mr-8 { margin-right: var(--vel-space-8)
 }
 .vel-lg\\:mb-0 { margin-bottom: 0px
 }
 .vel-lg\\:mb-auto { margin-bottom: auto
 }
 .vel-lg\\:mb-1 { margin-bottom: var(--vel-space-1)
 }
 .vel-lg\\:mb-2 { margin-bottom: var(--vel-space-2)
 }
 .vel-lg\\:mb-3 { margin-bottom: var(--vel-space-3)
 }
 .vel-lg\\:mb-4 { margin-bottom: var(--vel-space-4)
 }
 .vel-lg\\:mb-5 { margin-bottom: var(--vel-space-5)
 }
 .vel-lg\\:mb-6 { margin-bottom: var(--vel-space-6)
 }
 .vel-lg\\:mb-8 { margin-bottom: var(--vel-space-8)
 }
 .vel-lg\\:mb-10 { margin-bottom: var(--vel-space-10)
 }
 .vel-lg\\:mb-12 { margin-bottom: var(--vel-space-12)
 }
 .vel-lg\\:mb-16 { margin-bottom: var(--vel-space-16)
 }
 .vel-lg\\:ml-0 { margin-left: 0px
 }
 .vel-lg\\:ml-auto { margin-left: auto
 }
 .vel-lg\\:ml-1 { margin-left: var(--vel-space-1)
 }
 .vel-lg\\:ml-2 { margin-left: var(--vel-space-2)
 }
 .vel-lg\\:ml-3 { margin-left: var(--vel-space-3)
 }
 .vel-lg\\:ml-4 { margin-left: var(--vel-space-4)
 }
 .vel-lg\\:ml-6 { margin-left: var(--vel-space-6)
 }
 .vel-lg\\:ml-8 { margin-left: var(--vel-space-8)
 }
 .vel-lg\\:w-0 { width: 0px
 }
 .vel-lg\\:w-px { width: 1px
 }
 .vel-lg\\:w-auto { width: auto
 }
 .vel-lg\\:w-full { width: 100%
 }
 .vel-lg\\:w-screen { width: 100vw
 }
 .vel-lg\\:w-svw { width: 100svw
 }
 .vel-lg\\:w-dvw { width: 100dvw
 }
 .vel-lg\\:w-min { width: -moz-min-content; width: min-content
 }
 .vel-lg\\:w-max { width: -moz-max-content; width: max-content
 }
 .vel-lg\\:w-fit { width: -moz-fit-content; width: fit-content
 }
 .vel-lg\\:w-1 { width: var(--vel-space-1)
 }
 .vel-lg\\:w-2 { width: var(--vel-space-2)
 }
 .vel-lg\\:w-3 { width: var(--vel-space-3)
 }
 .vel-lg\\:w-4 { width: var(--vel-space-4)
 }
 .vel-lg\\:w-5 { width: var(--vel-space-5)
 }
 .vel-lg\\:w-6 { width: var(--vel-space-6)
 }
 .vel-lg\\:w-7 { width: var(--vel-space-7)
 }
 .vel-lg\\:w-8 { width: var(--vel-space-8)
 }
 .vel-lg\\:w-9 { width: var(--vel-space-9)
 }
 .vel-lg\\:w-10 { width: var(--vel-space-10)
 }
 .vel-lg\\:w-11 { width: var(--vel-space-11)
 }
 .vel-lg\\:w-12 { width: var(--vel-space-12)
 }
 .vel-lg\\:w-14 { width: var(--vel-space-14)
 }
 .vel-lg\\:w-16 { width: var(--vel-space-16)
 }
 .vel-lg\\:w-20 { width: var(--vel-space-20)
 }
 .vel-lg\\:w-24 { width: var(--vel-space-24)
 }
 .vel-lg\\:w-28 { width: var(--vel-space-28)
 }
 .vel-lg\\:w-32 { width: var(--vel-space-32)
 }
 .vel-lg\\:w-36 { width: var(--vel-space-36)
 }
 .vel-lg\\:w-40 { width: var(--vel-space-40)
 }
 .vel-lg\\:w-48 { width: var(--vel-space-48)
 }
 .vel-lg\\:w-56 { width: var(--vel-space-56)
 }
 .vel-lg\\:w-64 { width: var(--vel-space-64)
 }
 .vel-lg\\:w-72 { width: var(--vel-space-72)
 }
 .vel-lg\\:w-80 { width: var(--vel-space-80)
 }
 .vel-lg\\:w-96 { width: var(--vel-space-96)
 }
 .vel-lg\\:min-w-0 { min-width: 0px
 }
 .vel-lg\\:min-w-full { min-width: 100%
 }
 .vel-lg\\:min-w-min { min-width: -moz-min-content; min-width: min-content
 }
 .vel-lg\\:min-w-max { min-width: -moz-max-content; min-width: max-content
 }
 .vel-lg\\:min-w-fit { min-width: -moz-fit-content; min-width: fit-content
 }
 .vel-lg\\:max-w-none { max-width: none
 }
 .vel-lg\\:max-w-xs { max-width: 20rem
 }
 .vel-lg\\:max-w-sm { max-width: 24rem
 }
 .vel-lg\\:max-w-md { max-width: 28rem
 }
 .vel-lg\\:max-w-lg { max-width: 32rem
 }
 .vel-lg\\:max-w-xl { max-width: 36rem
 }
 .vel-lg\\:max-w-2xl { max-width: 42rem
 }
 .vel-lg\\:max-w-3xl { max-width: 48rem
 }
 .vel-lg\\:max-w-4xl { max-width: 56rem
 }
 .vel-lg\\:max-w-5xl { max-width: 64rem
 }
 .vel-lg\\:max-w-6xl { max-width: 72rem
 }
 .vel-lg\\:max-w-7xl { max-width: 80rem
 }
 .vel-lg\\:max-w-full { max-width: 100%
 }
 .vel-lg\\:max-w-min { max-width: -moz-min-content; max-width: min-content
 }
 .vel-lg\\:max-w-max { max-width: -moz-max-content; max-width: max-content
 }
 .vel-lg\\:max-w-fit { max-width: -moz-fit-content; max-width: fit-content
 }
 .vel-lg\\:max-w-prose { max-width: 65ch
 }
 .vel-lg\\:max-w-screen-sm { max-width: 640px
 }
 .vel-lg\\:max-w-screen-md { max-width: 768px
 }
 .vel-lg\\:max-w-screen-lg { max-width: 1024px
 }
 .vel-lg\\:max-w-screen-xl { max-width: 1280px
 }
 .vel-lg\\:max-w-screen-2xl { max-width: 1536px
 }
 .vel-lg\\:h-0 { height: 0px
 }
 .vel-lg\\:h-px { height: 1px
 }
 .vel-lg\\:h-auto { height: auto
 }
 .vel-lg\\:h-full { height: 100%
 }
 .vel-lg\\:h-screen { height: 100vh
 }
 .vel-lg\\:h-svh { height: 100svh
 }
 .vel-lg\\:h-dvh { height: 100dvh
 }
 .vel-lg\\:h-min { height: -moz-min-content; height: min-content
 }
 .vel-lg\\:h-max { height: -moz-max-content; height: max-content
 }
 .vel-lg\\:h-fit { height: -moz-fit-content; height: fit-content
 }
 .vel-lg\\:h-1 { height: var(--vel-space-1)
 }
 .vel-lg\\:h-2 { height: var(--vel-space-2)
 }
 .vel-lg\\:h-3 { height: var(--vel-space-3)
 }
 .vel-lg\\:h-4 { height: var(--vel-space-4)
 }
 .vel-lg\\:h-5 { height: var(--vel-space-5)
 }
 .vel-lg\\:h-6 { height: var(--vel-space-6)
 }
 .vel-lg\\:h-7 { height: var(--vel-space-7)
 }
 .vel-lg\\:h-8 { height: var(--vel-space-8)
 }
 .vel-lg\\:h-9 { height: var(--vel-space-9)
 }
 .vel-lg\\:h-10 { height: var(--vel-space-10)
 }
 .vel-lg\\:h-11 { height: var(--vel-space-11)
 }
 .vel-lg\\:h-12 { height: var(--vel-space-12)
 }
 .vel-lg\\:h-14 { height: var(--vel-space-14)
 }
 .vel-lg\\:h-16 { height: var(--vel-space-16)
 }
 .vel-lg\\:h-20 { height: var(--vel-space-20)
 }
 .vel-lg\\:h-24 { height: var(--vel-space-24)
 }
 .vel-lg\\:h-28 { height: var(--vel-space-28)
 }
 .vel-lg\\:h-32 { height: var(--vel-space-32)
 }
 .vel-lg\\:h-36 { height: var(--vel-space-36)
 }
 .vel-lg\\:h-40 { height: var(--vel-space-40)
 }
 .vel-lg\\:h-48 { height: var(--vel-space-48)
 }
 .vel-lg\\:h-56 { height: var(--vel-space-56)
 }
 .vel-lg\\:h-64 { height: var(--vel-space-64)
 }
 .vel-lg\\:min-h-0 { min-height: 0px
 }
 .vel-lg\\:min-h-full { min-height: 100%
 }
 .vel-lg\\:min-h-screen { min-height: 100vh
 }
 .vel-lg\\:min-h-svh { min-height: 100svh
 }
 .vel-lg\\:min-h-dvh { min-height: 100dvh
 }
 .vel-lg\\:min-h-min { min-height: -moz-min-content; min-height: min-content
 }
 .vel-lg\\:min-h-max { min-height: -moz-max-content; min-height: max-content
 }
 .vel-lg\\:min-h-fit { min-height: -moz-fit-content; min-height: fit-content
 }
 .vel-lg\\:max-h-none { max-height: none
 }
 .vel-lg\\:max-h-full { max-height: 100%
 }
 .vel-lg\\:max-h-screen { max-height: 100vh
 }
 .vel-lg\\:max-h-svh { max-height: 100svh
 }
 .vel-lg\\:max-h-dvh { max-height: 100dvh
 }
 .vel-lg\\:max-h-min { max-height: -moz-min-content; max-height: min-content
 }
 .vel-lg\\:max-h-max { max-height: -moz-max-content; max-height: max-content
 }
 .vel-lg\\:max-h-fit { max-height: -moz-fit-content; max-height: fit-content
 }
 .vel-lg\\:max-h-24 { max-height: var(--vel-space-24)
 }
 .vel-lg\\:max-h-48 { max-height: var(--vel-space-48)
 }
 .vel-lg\\:max-h-64 { max-height: var(--vel-space-64)
 }
 .vel-lg\\:max-h-96 { max-height: var(--vel-space-96)
 }
 .vel-lg\\:font-sans { font-family: var(--vel-font-sans)
 }
 .vel-lg\\:font-serif { font-family: var(--vel-font-serif)
 }
 .vel-lg\\:font-mono { font-family: var(--vel-font-mono)
 }
 .vel-lg\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
 }
 .vel-lg\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
 }
 .vel-lg\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
 }
 .vel-lg\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
 }
 .vel-lg\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
 }
 .vel-lg\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
 }
 .vel-lg\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
 }
 .vel-lg\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
 }
 .vel-lg\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
 }
 .vel-lg\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
 }
 .vel-lg\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
 }
 .vel-lg\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
 }
 .vel-lg\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
 }
 .vel-lg\\:font-thin { font-weight: 100
 }
 .vel-lg\\:font-extralight { font-weight: 200
 }
 .vel-lg\\:font-light { font-weight: 300
 }
 .vel-lg\\:font-normal { font-weight: 400
 }
 .vel-lg\\:font-medium { font-weight: 500
 }
 .vel-lg\\:font-semibold { font-weight: 600
 }
 .vel-lg\\:font-bold { font-weight: 700
 }
 .vel-lg\\:font-extrabold { font-weight: 800
 }
 .vel-lg\\:font-black { font-weight: 900
 }
 .vel-lg\\:italic { font-style: italic
 }
 .vel-lg\\:not-italic { font-style: normal
 }
 .vel-lg\\:leading-none { line-height: 1
 }
 .vel-lg\\:leading-tight { line-height: 1.25
 }
 .vel-lg\\:leading-snug { line-height: 1.375
 }
 .vel-lg\\:leading-normal { line-height: 1.5
 }
 .vel-lg\\:leading-relaxed { line-height: 1.625
 }
 .vel-lg\\:leading-loose { line-height: 2
 }
 .vel-lg\\:leading-3 { line-height: 0.75rem
 }
 .vel-lg\\:leading-4 { line-height: 1rem
 }
 .vel-lg\\:leading-5 { line-height: 1.25rem
 }
 .vel-lg\\:leading-6 { line-height: 1.5rem
 }
 .vel-lg\\:leading-7 { line-height: 1.75rem
 }
 .vel-lg\\:leading-8 { line-height: 2rem
 }
 .vel-lg\\:leading-9 { line-height: 2.25rem
 }
 .vel-lg\\:leading-10 { line-height: 2.5rem
 }
 .vel-lg\\:tracking-tighter { letter-spacing: -0.05em
 }
 .vel-lg\\:tracking-tight { letter-spacing: -0.025em
 }
 .vel-lg\\:tracking-normal { letter-spacing: 0em
 }
 .vel-lg\\:tracking-wide { letter-spacing: 0.025em
 }
 .vel-lg\\:tracking-wider { letter-spacing: 0.05em
 }
 .vel-lg\\:tracking-widest { letter-spacing: 0.1em
 }
 .vel-lg\\:text-left { text-align: left
 }
 .vel-lg\\:text-center { text-align: center
 }
 .vel-lg\\:text-right { text-align: right
 }
 .vel-lg\\:text-justify { text-align: justify
 }
 .vel-lg\\:text-start { text-align: start
 }
 .vel-lg\\:text-end { text-align: end
 }
 .vel-lg\\:underline { text-decoration-line: underline
 }
 .vel-lg\\:line-through { text-decoration-line: line-through
 }
 .vel-lg\\:no-underline { text-decoration-line: none
 }
 .vel-lg\\:uppercase { text-transform: uppercase
 }
 .vel-lg\\:lowercase { text-transform: lowercase
 }
 .vel-lg\\:capitalize { text-transform: capitalize
 }
 .vel-lg\\:normal-case { text-transform: none
 }
 .vel-lg\\:truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap
 }
 .vel-lg\\:text-ellipsis { text-overflow: ellipsis
 }
 .vel-lg\\:text-clip { text-overflow: clip
 }
 .vel-lg\\:whitespace-normal { white-space: normal
 }
 .vel-lg\\:whitespace-nowrap { white-space: nowrap
 }
 .vel-lg\\:whitespace-pre { white-space: pre
 }
 .vel-lg\\:whitespace-pre-line { white-space: pre-line
 }
 .vel-lg\\:whitespace-pre-wrap { white-space: pre-wrap
 }
 .vel-lg\\:whitespace-break-spaces { white-space: break-spaces
 }
 .vel-lg\\:text-inherit { color: inherit
 }
 .vel-lg\\:text-current { color: currentColor
 }
 .vel-lg\\:text-transparent { color: transparent
 }
 .vel-lg\\:text-white { color: #ffffff
 }
 .vel-lg\\:text-black { color: #000000
 }
 .vel-lg\\:text-primary { color: var(--vel-color-primary)
 }
 .vel-lg\\:text-secondary { color: var(--vel-color-secondary)
 }
 .vel-lg\\:text-success { color: var(--vel-color-success)
 }
 .vel-lg\\:text-danger { color: var(--vel-color-danger)
 }
 .vel-lg\\:text-warning { color: var(--vel-color-warning)
 }
 .vel-lg\\:text-info { color: var(--vel-color-info)
 }
 .vel-lg\\:text-neutral-50 { color: var(--vel-neutral-50)
 }
 .vel-lg\\:text-neutral-100 { color: var(--vel-neutral-100)
 }
 .vel-lg\\:text-neutral-200 { color: var(--vel-neutral-200)
 }
 .vel-lg\\:text-neutral-300 { color: var(--vel-neutral-300)
 }
 .vel-lg\\:text-neutral-400 { color: var(--vel-neutral-400)
 }
 .vel-lg\\:text-neutral-500 { color: var(--vel-neutral-500)
 }
 .vel-lg\\:text-neutral-600 { color: var(--vel-neutral-600)
 }
 .vel-lg\\:text-neutral-700 { color: var(--vel-neutral-700)
 }
 .vel-lg\\:text-neutral-800 { color: var(--vel-neutral-800)
 }
 .vel-lg\\:text-neutral-900 { color: var(--vel-neutral-900)
 }
 .vel-lg\\:text-neutral-950 { color: var(--vel-neutral-950)
 }
}
@media (min-width: 1280px) {
 .vel-xl\\:block { display: block
 }
 .vel-xl\\:inline-block { display: inline-block
 }
 .vel-xl\\:inline { display: inline
 }
 .vel-xl\\:flex { display: flex
 }
 .vel-xl\\:inline-flex { display: inline-flex
 }
 .vel-xl\\:grid { display: grid
 }
 .vel-xl\\:inline-grid { display: inline-grid
 }
 .vel-xl\\:hidden { display: none
 }
 .vel-xl\\:table { display: table
 }
 .vel-xl\\:table-row { display: table-row
 }
 .vel-xl\\:table-cell { display: table-cell
 }
 .vel-xl\\:contents { display: contents
 }
 .vel-xl\\:static { position: static
 }
 .vel-xl\\:relative { position: relative
 }
 .vel-xl\\:absolute { position: absolute
 }
 .vel-xl\\:fixed { position: fixed
 }
 .vel-xl\\:sticky { position: sticky
 }
 .vel-xl\\:overflow-auto { overflow: auto
 }
 .vel-xl\\:overflow-hidden { overflow: hidden
 }
 .vel-xl\\:overflow-visible { overflow: visible
 }
 .vel-xl\\:overflow-scroll { overflow: scroll
 }
 .vel-xl\\:overflow-x-auto { overflow-x: auto
 }
 .vel-xl\\:overflow-x-hidden { overflow-x: hidden
 }
 .vel-xl\\:overflow-y-auto { overflow-y: auto
 }
 .vel-xl\\:overflow-y-hidden { overflow-y: hidden
 }
 .vel-xl\\:overflow-y-scroll { overflow-y: scroll
 }
 .vel-xl\\:overscroll-auto { overscroll-behavior: auto
 }
 .vel-xl\\:overscroll-contain { overscroll-behavior: contain
 }
 .vel-xl\\:overscroll-none { overscroll-behavior: none
 }
 .vel-xl\\:visible { visibility: visible
 }
 .vel-xl\\:invisible { visibility: hidden
 }
 .vel-xl\\:collapse { visibility: collapse
 }
 .vel-xl\\:z-0 { z-index: var(--vel-z-0)
 }
 .vel-xl\\:z-10 { z-index: var(--vel-z-10)
 }
 .vel-xl\\:z-20 { z-index: var(--vel-z-20)
 }
 .vel-xl\\:z-30 { z-index: var(--vel-z-30)
 }
 .vel-xl\\:z-40 { z-index: var(--vel-z-40)
 }
 .vel-xl\\:z-50 { z-index: var(--vel-z-50)
 }
 .vel-xl\\:z-auto { z-index: var(--vel-z-auto)
 }
 .vel-xl\\:float-left { float: left
 }
 .vel-xl\\:float-right { float: right
 }
 .vel-xl\\:float-none { float: none
 }
 .vel-xl\\:clear-left { clear: left
 }
 .vel-xl\\:clear-right { clear: right
 }
 .vel-xl\\:clear-both { clear: both
 }
 .vel-xl\\:clear-none { clear: none
 }
 .vel-xl\\:object-contain { -o-object-fit: contain; object-fit: contain
 }
 .vel-xl\\:object-cover { -o-object-fit: cover; object-fit: cover
 }
 .vel-xl\\:object-fill { -o-object-fit: fill; object-fit: fill
 }
 .vel-xl\\:object-none { -o-object-fit: none; object-fit: none
 }
 .vel-xl\\:object-scale-down { -o-object-fit: scale-down; object-fit: scale-down
 }
 .vel-xl\\:aspect-auto { aspect-ratio: auto
 }
 .vel-xl\\:aspect-square { aspect-ratio: 1 / 1
 }
 .vel-xl\\:aspect-video { aspect-ratio: 16 / 9
 }
 .vel-xl\\:columns-1 { -moz-columns: 1; columns: 1
 }
 .vel-xl\\:columns-2 { -moz-columns: 2; columns: 2
 }
 .vel-xl\\:columns-3 { -moz-columns: 3; columns: 3
 }
 .vel-xl\\:columns-4 { -moz-columns: 4; columns: 4
 }
 .vel-xl\\:columns-auto { -moz-columns: auto; columns: auto
 }
 .vel-xl\\:sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0
 }
 .vel-xl\\:flex-row { flex-direction: row
 }
 .vel-xl\\:flex-row-reverse { flex-direction: row-reverse
 }
 .vel-xl\\:flex-col { flex-direction: column
 }
 .vel-xl\\:flex-col-reverse { flex-direction: column-reverse
 }
 .vel-xl\\:flex-wrap { flex-wrap: wrap
 }
 .vel-xl\\:flex-wrap-reverse { flex-wrap: wrap-reverse
 }
 .vel-xl\\:flex-nowrap { flex-wrap: nowrap
 }
 .vel-xl\\:flex-1 { flex: 1 1 0%
 }
 .vel-xl\\:flex-auto { flex: 1 1 auto
 }
 .vel-xl\\:flex-initial { flex: 0 1 auto
 }
 .vel-xl\\:flex-none { flex: none
 }
 .vel-xl\\:grow { flex-grow: 1
 }
 .vel-xl\\:shrink { flex-shrink: 1
 }
 .vel-xl\\:items-start { align-items: flex-start
 }
 .vel-xl\\:items-end { align-items: flex-end
 }
 .vel-xl\\:items-center { align-items: center
 }
 .vel-xl\\:items-baseline { align-items: baseline
 }
 .vel-xl\\:items-stretch { align-items: stretch
 }
 .vel-xl\\:self-auto { align-self: auto
 }
 .vel-xl\\:self-start { align-self: flex-start
 }
 .vel-xl\\:self-end { align-self: flex-end
 }
 .vel-xl\\:self-center { align-self: center
 }
 .vel-xl\\:self-baseline { align-self: baseline
 }
 .vel-xl\\:self-stretch { align-self: stretch
 }
 .vel-xl\\:justify-start { justify-content: flex-start
 }
 .vel-xl\\:justify-end { justify-content: flex-end
 }
 .vel-xl\\:justify-center { justify-content: center
 }
 .vel-xl\\:justify-between { justify-content: space-between
 }
 .vel-xl\\:justify-around { justify-content: space-around
 }
 .vel-xl\\:justify-evenly { justify-content: space-evenly
 }
 .vel-xl\\:justify-stretch { justify-content: stretch
 }
 .vel-xl\\:justify-items-start { justify-items: start
 }
 .vel-xl\\:justify-items-end { justify-items: end
 }
 .vel-xl\\:justify-items-center { justify-items: center
 }
 .vel-xl\\:justify-items-stretch { justify-items: stretch
 }
 .vel-xl\\:justify-self-auto { justify-self: auto
 }
 .vel-xl\\:justify-self-start { justify-self: start
 }
 .vel-xl\\:justify-self-end { justify-self: end
 }
 .vel-xl\\:justify-self-center { justify-self: center
 }
 .vel-xl\\:justify-self-stretch { justify-self: stretch
 }
 .vel-xl\\:order-first { order: -9999
 }
 .vel-xl\\:order-last { order: 9999
 }
 .vel-xl\\:order-none { order: 0
 }
 .vel-xl\\:order-1 { order: 1
 }
 .vel-xl\\:order-2 { order: 2
 }
 .vel-xl\\:order-3 { order: 3
 }
 .vel-xl\\:order-4 { order: 4
 }
 .vel-xl\\:order-5 { order: 5
 }
 .vel-xl\\:gap-0 { gap: 0px
 }
 .vel-xl\\:gap-1 { gap: var(--vel-space-1)
 }
 .vel-xl\\:gap-2 { gap: var(--vel-space-2)
 }
 .vel-xl\\:gap-3 { gap: var(--vel-space-3)
 }
 .vel-xl\\:gap-4 { gap: var(--vel-space-4)
 }
 .vel-xl\\:gap-5 { gap: var(--vel-space-5)
 }
 .vel-xl\\:gap-6 { gap: var(--vel-space-6)
 }
 .vel-xl\\:gap-7 { gap: var(--vel-space-7)
 }
 .vel-xl\\:gap-8 { gap: var(--vel-space-8)
 }
 .vel-xl\\:gap-10 { gap: var(--vel-space-10)
 }
 .vel-xl\\:gap-12 { gap: var(--vel-space-12)
 }
 .vel-xl\\:gap-16 { gap: var(--vel-space-16)
 }
 .vel-xl\\:gap-px { gap: 1px
 }
 .vel-xl\\:gap-x-0 { -moz-column-gap: 0px; column-gap: 0px
 }
 .vel-xl\\:gap-x-1 { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1)
 }
 .vel-xl\\:gap-x-2 { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2)
 }
 .vel-xl\\:gap-x-3 { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3)
 }
 .vel-xl\\:gap-x-4 { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4)
 }
 .vel-xl\\:gap-x-5 { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5)
 }
 .vel-xl\\:gap-x-6 { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6)
 }
 .vel-xl\\:gap-x-8 { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8)
 }
 .vel-xl\\:gap-y-0 { row-gap: 0px
 }
 .vel-xl\\:gap-y-1 { row-gap: var(--vel-space-1)
 }
 .vel-xl\\:gap-y-2 { row-gap: var(--vel-space-2)
 }
 .vel-xl\\:gap-y-3 { row-gap: var(--vel-space-3)
 }
 .vel-xl\\:gap-y-4 { row-gap: var(--vel-space-4)
 }
 .vel-xl\\:gap-y-5 { row-gap: var(--vel-space-5)
 }
 .vel-xl\\:gap-y-6 { row-gap: var(--vel-space-6)
 }
 .vel-xl\\:gap-y-8 { row-gap: var(--vel-space-8)
 }
 .vel-xl\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr))
 }
 .vel-xl\\:grid-cols-none { grid-template-columns: none
 }
 .vel-xl\\:col-auto { grid-column: auto
 }
 .vel-xl\\:col-span-1 { grid-column: span 1 / span 1
 }
 .vel-xl\\:col-span-2 { grid-column: span 2 / span 2
 }
 .vel-xl\\:col-span-3 { grid-column: span 3 / span 3
 }
 .vel-xl\\:col-span-4 { grid-column: span 4 / span 4
 }
 .vel-xl\\:col-span-5 { grid-column: span 5 / span 5
 }
 .vel-xl\\:col-span-6 { grid-column: span 6 / span 6
 }
 .vel-xl\\:col-span-7 { grid-column: span 7 / span 7
 }
 .vel-xl\\:col-span-8 { grid-column: span 8 / span 8
 }
 .vel-xl\\:col-span-9 { grid-column: span 9 / span 9
 }
 .vel-xl\\:col-span-10 { grid-column: span 10 / span 10
 }
 .vel-xl\\:col-span-11 { grid-column: span 11 / span 11
 }
 .vel-xl\\:col-span-12 { grid-column: span 12 / span 12
 }
 .vel-xl\\:col-span-full { grid-column: 1 / -1
 }
 .vel-xl\\:col-start-1 { grid-column-start: 1
 }
 .vel-xl\\:col-start-2 { grid-column-start: 2
 }
 .vel-xl\\:col-start-3 { grid-column-start: 3
 }
 .vel-xl\\:col-start-4 { grid-column-start: 4
 }
 .vel-xl\\:col-start-auto { grid-column-start: auto
 }
 .vel-xl\\:col-end-1 { grid-column-end: 1
 }
 .vel-xl\\:col-end-2 { grid-column-end: 2
 }
 .vel-xl\\:col-end-3 { grid-column-end: 3
 }
 .vel-xl\\:col-end-4 { grid-column-end: 4
 }
 .vel-xl\\:col-end-auto { grid-column-end: auto
 }
 .vel-xl\\:grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr))
 }
 .vel-xl\\:grid-rows-none { grid-template-rows: none
 }
 .vel-xl\\:row-auto { grid-row: auto
 }
 .vel-xl\\:row-span-1 { grid-row: span 1 / span 1
 }
 .vel-xl\\:row-span-2 { grid-row: span 2 / span 2
 }
 .vel-xl\\:row-span-3 { grid-row: span 3 / span 3
 }
 .vel-xl\\:row-span-4 { grid-row: span 4 / span 4
 }
 .vel-xl\\:row-span-5 { grid-row: span 5 / span 5
 }
 .vel-xl\\:row-span-6 { grid-row: span 6 / span 6
 }
 .vel-xl\\:row-span-full { grid-row: 1 / -1
 }
 .vel-xl\\:row-start-1 { grid-row-start: 1
 }
 .vel-xl\\:row-start-2 { grid-row-start: 2
 }
 .vel-xl\\:row-start-3 { grid-row-start: 3
 }
 .vel-xl\\:row-start-auto { grid-row-start: auto
 }
 .vel-xl\\:row-end-1 { grid-row-end: 1
 }
 .vel-xl\\:row-end-2 { grid-row-end: 2
 }
 .vel-xl\\:row-end-3 { grid-row-end: 3
 }
 .vel-xl\\:row-end-auto { grid-row-end: auto
 }
 .vel-xl\\:grid-flow-row { grid-auto-flow: row
 }
 .vel-xl\\:grid-flow-col { grid-auto-flow: column
 }
 .vel-xl\\:grid-flow-dense { grid-auto-flow: dense
 }
 .vel-xl\\:grid-flow-row-dense { grid-auto-flow: row dense
 }
 .vel-xl\\:grid-flow-col-dense { grid-auto-flow: column dense
 }
 .vel-xl\\:p-0 { padding: 0px
 }
 .vel-xl\\:p-px { padding: 1px
 }
 .vel-xl\\:p-1 { padding: var(--vel-space-1)
 }
 .vel-xl\\:p-2 { padding: var(--vel-space-2)
 }
 .vel-xl\\:p-3 { padding: var(--vel-space-3)
 }
 .vel-xl\\:p-4 { padding: var(--vel-space-4)
 }
 .vel-xl\\:p-5 { padding: var(--vel-space-5)
 }
 .vel-xl\\:p-6 { padding: var(--vel-space-6)
 }
 .vel-xl\\:p-7 { padding: var(--vel-space-7)
 }
 .vel-xl\\:p-8 { padding: var(--vel-space-8)
 }
 .vel-xl\\:p-9 { padding: var(--vel-space-9)
 }
 .vel-xl\\:p-10 { padding: var(--vel-space-10)
 }
 .vel-xl\\:p-11 { padding: var(--vel-space-11)
 }
 .vel-xl\\:p-12 { padding: var(--vel-space-12)
 }
 .vel-xl\\:p-14 { padding: var(--vel-space-14)
 }
 .vel-xl\\:p-16 { padding: var(--vel-space-16)
 }
 .vel-xl\\:p-20 { padding: var(--vel-space-20)
 }
 .vel-xl\\:p-24 { padding: var(--vel-space-24)
 }
 .vel-xl\\:p-28 { padding: var(--vel-space-28)
 }
 .vel-xl\\:p-32 { padding: var(--vel-space-32)
 }
 .vel-xl\\:pt-0 { padding-top: 0px
 }
 .vel-xl\\:pt-1 { padding-top: var(--vel-space-1)
 }
 .vel-xl\\:pt-2 { padding-top: var(--vel-space-2)
 }
 .vel-xl\\:pt-3 { padding-top: var(--vel-space-3)
 }
 .vel-xl\\:pt-4 { padding-top: var(--vel-space-4)
 }
 .vel-xl\\:pt-5 { padding-top: var(--vel-space-5)
 }
 .vel-xl\\:pt-6 { padding-top: var(--vel-space-6)
 }
 .vel-xl\\:pt-8 { padding-top: var(--vel-space-8)
 }
 .vel-xl\\:pt-10 { padding-top: var(--vel-space-10)
 }
 .vel-xl\\:pt-12 { padding-top: var(--vel-space-12)
 }
 .vel-xl\\:pt-16 { padding-top: var(--vel-space-16)
 }
 .vel-xl\\:pr-0 { padding-right: 0px
 }
 .vel-xl\\:pr-1 { padding-right: var(--vel-space-1)
 }
 .vel-xl\\:pr-2 { padding-right: var(--vel-space-2)
 }
 .vel-xl\\:pr-3 { padding-right: var(--vel-space-3)
 }
 .vel-xl\\:pr-4 { padding-right: var(--vel-space-4)
 }
 .vel-xl\\:pr-5 { padding-right: var(--vel-space-5)
 }
 .vel-xl\\:pr-6 { padding-right: var(--vel-space-6)
 }
 .vel-xl\\:pr-8 { padding-right: var(--vel-space-8)
 }
 .vel-xl\\:pr-12 { padding-right: var(--vel-space-12)
 }
 .vel-xl\\:pb-0 { padding-bottom: 0px
 }
 .vel-xl\\:pb-1 { padding-bottom: var(--vel-space-1)
 }
 .vel-xl\\:pb-2 { padding-bottom: var(--vel-space-2)
 }
 .vel-xl\\:pb-3 { padding-bottom: var(--vel-space-3)
 }
 .vel-xl\\:pb-4 { padding-bottom: var(--vel-space-4)
 }
 .vel-xl\\:pb-5 { padding-bottom: var(--vel-space-5)
 }
 .vel-xl\\:pb-6 { padding-bottom: var(--vel-space-6)
 }
 .vel-xl\\:pb-8 { padding-bottom: var(--vel-space-8)
 }
 .vel-xl\\:pb-12 { padding-bottom: var(--vel-space-12)
 }
 .vel-xl\\:pl-0 { padding-left: 0px
 }
 .vel-xl\\:pl-1 { padding-left: var(--vel-space-1)
 }
 .vel-xl\\:pl-2 { padding-left: var(--vel-space-2)
 }
 .vel-xl\\:pl-3 { padding-left: var(--vel-space-3)
 }
 .vel-xl\\:pl-4 { padding-left: var(--vel-space-4)
 }
 .vel-xl\\:pl-5 { padding-left: var(--vel-space-5)
 }
 .vel-xl\\:pl-6 { padding-left: var(--vel-space-6)
 }
 .vel-xl\\:pl-8 { padding-left: var(--vel-space-8)
 }
 .vel-xl\\:pl-12 { padding-left: var(--vel-space-12)
 }
 .vel-xl\\:m-0 { margin: 0px
 }
 .vel-xl\\:m-px { margin: 1px
 }
 .vel-xl\\:m-auto { margin: auto
 }
 .vel-xl\\:m-1 { margin: var(--vel-space-1)
 }
 .vel-xl\\:m-2 { margin: var(--vel-space-2)
 }
 .vel-xl\\:m-3 { margin: var(--vel-space-3)
 }
 .vel-xl\\:m-4 { margin: var(--vel-space-4)
 }
 .vel-xl\\:m-5 { margin: var(--vel-space-5)
 }
 .vel-xl\\:m-6 { margin: var(--vel-space-6)
 }
 .vel-xl\\:m-7 { margin: var(--vel-space-7)
 }
 .vel-xl\\:m-8 { margin: var(--vel-space-8)
 }
 .vel-xl\\:m-10 { margin: var(--vel-space-10)
 }
 .vel-xl\\:m-12 { margin: var(--vel-space-12)
 }
 .vel-xl\\:m-16 { margin: var(--vel-space-16)
 }
 .vel-xl\\:mt-0 { margin-top: 0px
 }
 .vel-xl\\:mt-auto { margin-top: auto
 }
 .vel-xl\\:mt-1 { margin-top: var(--vel-space-1)
 }
 .vel-xl\\:mt-2 { margin-top: var(--vel-space-2)
 }
 .vel-xl\\:mt-3 { margin-top: var(--vel-space-3)
 }
 .vel-xl\\:mt-4 { margin-top: var(--vel-space-4)
 }
 .vel-xl\\:mt-5 { margin-top: var(--vel-space-5)
 }
 .vel-xl\\:mt-6 { margin-top: var(--vel-space-6)
 }
 .vel-xl\\:mt-8 { margin-top: var(--vel-space-8)
 }
 .vel-xl\\:mt-10 { margin-top: var(--vel-space-10)
 }
 .vel-xl\\:mt-12 { margin-top: var(--vel-space-12)
 }
 .vel-xl\\:mt-16 { margin-top: var(--vel-space-16)
 }
 .vel-xl\\:mr-0 { margin-right: 0px
 }
 .vel-xl\\:mr-auto { margin-right: auto
 }
 .vel-xl\\:mr-1 { margin-right: var(--vel-space-1)
 }
 .vel-xl\\:mr-2 { margin-right: var(--vel-space-2)
 }
 .vel-xl\\:mr-3 { margin-right: var(--vel-space-3)
 }
 .vel-xl\\:mr-4 { margin-right: var(--vel-space-4)
 }
 .vel-xl\\:mr-6 { margin-right: var(--vel-space-6)
 }
 .vel-xl\\:mr-8 { margin-right: var(--vel-space-8)
 }
 .vel-xl\\:mb-0 { margin-bottom: 0px
 }
 .vel-xl\\:mb-auto { margin-bottom: auto
 }
 .vel-xl\\:mb-1 { margin-bottom: var(--vel-space-1)
 }
 .vel-xl\\:mb-2 { margin-bottom: var(--vel-space-2)
 }
 .vel-xl\\:mb-3 { margin-bottom: var(--vel-space-3)
 }
 .vel-xl\\:mb-4 { margin-bottom: var(--vel-space-4)
 }
 .vel-xl\\:mb-5 { margin-bottom: var(--vel-space-5)
 }
 .vel-xl\\:mb-6 { margin-bottom: var(--vel-space-6)
 }
 .vel-xl\\:mb-8 { margin-bottom: var(--vel-space-8)
 }
 .vel-xl\\:mb-10 { margin-bottom: var(--vel-space-10)
 }
 .vel-xl\\:mb-12 { margin-bottom: var(--vel-space-12)
 }
 .vel-xl\\:mb-16 { margin-bottom: var(--vel-space-16)
 }
 .vel-xl\\:ml-0 { margin-left: 0px
 }
 .vel-xl\\:ml-auto { margin-left: auto
 }
 .vel-xl\\:ml-1 { margin-left: var(--vel-space-1)
 }
 .vel-xl\\:ml-2 { margin-left: var(--vel-space-2)
 }
 .vel-xl\\:ml-3 { margin-left: var(--vel-space-3)
 }
 .vel-xl\\:ml-4 { margin-left: var(--vel-space-4)
 }
 .vel-xl\\:ml-6 { margin-left: var(--vel-space-6)
 }
 .vel-xl\\:ml-8 { margin-left: var(--vel-space-8)
 }
 .vel-xl\\:w-0 { width: 0px
 }
 .vel-xl\\:w-px { width: 1px
 }
 .vel-xl\\:w-auto { width: auto
 }
 .vel-xl\\:w-full { width: 100%
 }
 .vel-xl\\:w-screen { width: 100vw
 }
 .vel-xl\\:w-svw { width: 100svw
 }
 .vel-xl\\:w-dvw { width: 100dvw
 }
 .vel-xl\\:w-min { width: -moz-min-content; width: min-content
 }
 .vel-xl\\:w-max { width: -moz-max-content; width: max-content
 }
 .vel-xl\\:w-fit { width: -moz-fit-content; width: fit-content
 }
 .vel-xl\\:w-1 { width: var(--vel-space-1)
 }
 .vel-xl\\:w-2 { width: var(--vel-space-2)
 }
 .vel-xl\\:w-3 { width: var(--vel-space-3)
 }
 .vel-xl\\:w-4 { width: var(--vel-space-4)
 }
 .vel-xl\\:w-5 { width: var(--vel-space-5)
 }
 .vel-xl\\:w-6 { width: var(--vel-space-6)
 }
 .vel-xl\\:w-7 { width: var(--vel-space-7)
 }
 .vel-xl\\:w-8 { width: var(--vel-space-8)
 }
 .vel-xl\\:w-9 { width: var(--vel-space-9)
 }
 .vel-xl\\:w-10 { width: var(--vel-space-10)
 }
 .vel-xl\\:w-11 { width: var(--vel-space-11)
 }
 .vel-xl\\:w-12 { width: var(--vel-space-12)
 }
 .vel-xl\\:w-14 { width: var(--vel-space-14)
 }
 .vel-xl\\:w-16 { width: var(--vel-space-16)
 }
 .vel-xl\\:w-20 { width: var(--vel-space-20)
 }
 .vel-xl\\:w-24 { width: var(--vel-space-24)
 }
 .vel-xl\\:w-28 { width: var(--vel-space-28)
 }
 .vel-xl\\:w-32 { width: var(--vel-space-32)
 }
 .vel-xl\\:w-36 { width: var(--vel-space-36)
 }
 .vel-xl\\:w-40 { width: var(--vel-space-40)
 }
 .vel-xl\\:w-48 { width: var(--vel-space-48)
 }
 .vel-xl\\:w-56 { width: var(--vel-space-56)
 }
 .vel-xl\\:w-64 { width: var(--vel-space-64)
 }
 .vel-xl\\:w-72 { width: var(--vel-space-72)
 }
 .vel-xl\\:w-80 { width: var(--vel-space-80)
 }
 .vel-xl\\:w-96 { width: var(--vel-space-96)
 }
 .vel-xl\\:min-w-0 { min-width: 0px
 }
 .vel-xl\\:min-w-full { min-width: 100%
 }
 .vel-xl\\:min-w-min { min-width: -moz-min-content; min-width: min-content
 }
 .vel-xl\\:min-w-max { min-width: -moz-max-content; min-width: max-content
 }
 .vel-xl\\:min-w-fit { min-width: -moz-fit-content; min-width: fit-content
 }
 .vel-xl\\:max-w-none { max-width: none
 }
 .vel-xl\\:max-w-xs { max-width: 20rem
 }
 .vel-xl\\:max-w-sm { max-width: 24rem
 }
 .vel-xl\\:max-w-md { max-width: 28rem
 }
 .vel-xl\\:max-w-lg { max-width: 32rem
 }
 .vel-xl\\:max-w-xl { max-width: 36rem
 }
 .vel-xl\\:max-w-2xl { max-width: 42rem
 }
 .vel-xl\\:max-w-3xl { max-width: 48rem
 }
 .vel-xl\\:max-w-4xl { max-width: 56rem
 }
 .vel-xl\\:max-w-5xl { max-width: 64rem
 }
 .vel-xl\\:max-w-6xl { max-width: 72rem
 }
 .vel-xl\\:max-w-7xl { max-width: 80rem
 }
 .vel-xl\\:max-w-full { max-width: 100%
 }
 .vel-xl\\:max-w-min { max-width: -moz-min-content; max-width: min-content
 }
 .vel-xl\\:max-w-max { max-width: -moz-max-content; max-width: max-content
 }
 .vel-xl\\:max-w-fit { max-width: -moz-fit-content; max-width: fit-content
 }
 .vel-xl\\:max-w-prose { max-width: 65ch
 }
 .vel-xl\\:max-w-screen-sm { max-width: 640px
 }
 .vel-xl\\:max-w-screen-md { max-width: 768px
 }
 .vel-xl\\:max-w-screen-lg { max-width: 1024px
 }
 .vel-xl\\:max-w-screen-xl { max-width: 1280px
 }
 .vel-xl\\:max-w-screen-2xl { max-width: 1536px
 }
 .vel-xl\\:h-0 { height: 0px
 }
 .vel-xl\\:h-px { height: 1px
 }
 .vel-xl\\:h-auto { height: auto
 }
 .vel-xl\\:h-full { height: 100%
 }
 .vel-xl\\:h-screen { height: 100vh
 }
 .vel-xl\\:h-svh { height: 100svh
 }
 .vel-xl\\:h-dvh { height: 100dvh
 }
 .vel-xl\\:h-min { height: -moz-min-content; height: min-content
 }
 .vel-xl\\:h-max { height: -moz-max-content; height: max-content
 }
 .vel-xl\\:h-fit { height: -moz-fit-content; height: fit-content
 }
 .vel-xl\\:h-1 { height: var(--vel-space-1)
 }
 .vel-xl\\:h-2 { height: var(--vel-space-2)
 }
 .vel-xl\\:h-3 { height: var(--vel-space-3)
 }
 .vel-xl\\:h-4 { height: var(--vel-space-4)
 }
 .vel-xl\\:h-5 { height: var(--vel-space-5)
 }
 .vel-xl\\:h-6 { height: var(--vel-space-6)
 }
 .vel-xl\\:h-7 { height: var(--vel-space-7)
 }
 .vel-xl\\:h-8 { height: var(--vel-space-8)
 }
 .vel-xl\\:h-9 { height: var(--vel-space-9)
 }
 .vel-xl\\:h-10 { height: var(--vel-space-10)
 }
 .vel-xl\\:h-11 { height: var(--vel-space-11)
 }
 .vel-xl\\:h-12 { height: var(--vel-space-12)
 }
 .vel-xl\\:h-14 { height: var(--vel-space-14)
 }
 .vel-xl\\:h-16 { height: var(--vel-space-16)
 }
 .vel-xl\\:h-20 { height: var(--vel-space-20)
 }
 .vel-xl\\:h-24 { height: var(--vel-space-24)
 }
 .vel-xl\\:h-28 { height: var(--vel-space-28)
 }
 .vel-xl\\:h-32 { height: var(--vel-space-32)
 }
 .vel-xl\\:h-36 { height: var(--vel-space-36)
 }
 .vel-xl\\:h-40 { height: var(--vel-space-40)
 }
 .vel-xl\\:h-48 { height: var(--vel-space-48)
 }
 .vel-xl\\:h-56 { height: var(--vel-space-56)
 }
 .vel-xl\\:h-64 { height: var(--vel-space-64)
 }
 .vel-xl\\:min-h-0 { min-height: 0px
 }
 .vel-xl\\:min-h-full { min-height: 100%
 }
 .vel-xl\\:min-h-screen { min-height: 100vh
 }
 .vel-xl\\:min-h-svh { min-height: 100svh
 }
 .vel-xl\\:min-h-dvh { min-height: 100dvh
 }
 .vel-xl\\:min-h-min { min-height: -moz-min-content; min-height: min-content
 }
 .vel-xl\\:min-h-max { min-height: -moz-max-content; min-height: max-content
 }
 .vel-xl\\:min-h-fit { min-height: -moz-fit-content; min-height: fit-content
 }
 .vel-xl\\:max-h-none { max-height: none
 }
 .vel-xl\\:max-h-full { max-height: 100%
 }
 .vel-xl\\:max-h-screen { max-height: 100vh
 }
 .vel-xl\\:max-h-svh { max-height: 100svh
 }
 .vel-xl\\:max-h-dvh { max-height: 100dvh
 }
 .vel-xl\\:max-h-min { max-height: -moz-min-content; max-height: min-content
 }
 .vel-xl\\:max-h-max { max-height: -moz-max-content; max-height: max-content
 }
 .vel-xl\\:max-h-fit { max-height: -moz-fit-content; max-height: fit-content
 }
 .vel-xl\\:max-h-24 { max-height: var(--vel-space-24)
 }
 .vel-xl\\:max-h-48 { max-height: var(--vel-space-48)
 }
 .vel-xl\\:max-h-64 { max-height: var(--vel-space-64)
 }
 .vel-xl\\:max-h-96 { max-height: var(--vel-space-96)
 }
 .vel-xl\\:font-sans { font-family: var(--vel-font-sans)
 }
 .vel-xl\\:font-serif { font-family: var(--vel-font-serif)
 }
 .vel-xl\\:font-mono { font-family: var(--vel-font-mono)
 }
 .vel-xl\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
 }
 .vel-xl\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
 }
 .vel-xl\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
 }
 .vel-xl\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
 }
 .vel-xl\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
 }
 .vel-xl\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
 }
 .vel-xl\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
 }
 .vel-xl\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
 }
 .vel-xl\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
 }
 .vel-xl\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
 }
 .vel-xl\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
 }
 .vel-xl\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
 }
 .vel-xl\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
 }
 .vel-xl\\:font-thin { font-weight: 100
 }
 .vel-xl\\:font-extralight { font-weight: 200
 }
 .vel-xl\\:font-light { font-weight: 300
 }
 .vel-xl\\:font-normal { font-weight: 400
 }
 .vel-xl\\:font-medium { font-weight: 500
 }
 .vel-xl\\:font-semibold { font-weight: 600
 }
 .vel-xl\\:font-bold { font-weight: 700
 }
 .vel-xl\\:font-extrabold { font-weight: 800
 }
 .vel-xl\\:font-black { font-weight: 900
 }
 .vel-xl\\:italic { font-style: italic
 }
 .vel-xl\\:not-italic { font-style: normal
 }
 .vel-xl\\:leading-none { line-height: 1
 }
 .vel-xl\\:leading-tight { line-height: 1.25
 }
 .vel-xl\\:leading-snug { line-height: 1.375
 }
 .vel-xl\\:leading-normal { line-height: 1.5
 }
 .vel-xl\\:leading-relaxed { line-height: 1.625
 }
 .vel-xl\\:leading-loose { line-height: 2
 }
 .vel-xl\\:leading-3 { line-height: 0.75rem
 }
 .vel-xl\\:leading-4 { line-height: 1rem
 }
 .vel-xl\\:leading-5 { line-height: 1.25rem
 }
 .vel-xl\\:leading-6 { line-height: 1.5rem
 }
 .vel-xl\\:leading-7 { line-height: 1.75rem
 }
 .vel-xl\\:leading-8 { line-height: 2rem
 }
 .vel-xl\\:leading-9 { line-height: 2.25rem
 }
 .vel-xl\\:leading-10 { line-height: 2.5rem
 }
 .vel-xl\\:tracking-tighter { letter-spacing: -0.05em
 }
 .vel-xl\\:tracking-tight { letter-spacing: -0.025em
 }
 .vel-xl\\:tracking-normal { letter-spacing: 0em
 }
 .vel-xl\\:tracking-wide { letter-spacing: 0.025em
 }
 .vel-xl\\:tracking-wider { letter-spacing: 0.05em
 }
 .vel-xl\\:tracking-widest { letter-spacing: 0.1em
 }
 .vel-xl\\:text-left { text-align: left
 }
 .vel-xl\\:text-center { text-align: center
 }
 .vel-xl\\:text-right { text-align: right
 }
 .vel-xl\\:text-justify { text-align: justify
 }
 .vel-xl\\:text-start { text-align: start
 }
 .vel-xl\\:text-end { text-align: end
 }
 .vel-xl\\:underline { text-decoration-line: underline
 }
 .vel-xl\\:line-through { text-decoration-line: line-through
 }
 .vel-xl\\:no-underline { text-decoration-line: none
 }
 .vel-xl\\:uppercase { text-transform: uppercase
 }
 .vel-xl\\:lowercase { text-transform: lowercase
 }
 .vel-xl\\:capitalize { text-transform: capitalize
 }
 .vel-xl\\:normal-case { text-transform: none
 }
 .vel-xl\\:truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap
 }
 .vel-xl\\:text-ellipsis { text-overflow: ellipsis
 }
 .vel-xl\\:text-clip { text-overflow: clip
 }
 .vel-xl\\:whitespace-normal { white-space: normal
 }
 .vel-xl\\:whitespace-nowrap { white-space: nowrap
 }
 .vel-xl\\:whitespace-pre { white-space: pre
 }
 .vel-xl\\:whitespace-pre-line { white-space: pre-line
 }
 .vel-xl\\:whitespace-pre-wrap { white-space: pre-wrap
 }
 .vel-xl\\:whitespace-break-spaces { white-space: break-spaces
 }
 .vel-xl\\:text-inherit { color: inherit
 }
 .vel-xl\\:text-current { color: currentColor
 }
 .vel-xl\\:text-transparent { color: transparent
 }
 .vel-xl\\:text-white { color: #ffffff
 }
 .vel-xl\\:text-black { color: #000000
 }
 .vel-xl\\:text-primary { color: var(--vel-color-primary)
 }
 .vel-xl\\:text-secondary { color: var(--vel-color-secondary)
 }
 .vel-xl\\:text-success { color: var(--vel-color-success)
 }
 .vel-xl\\:text-danger { color: var(--vel-color-danger)
 }
 .vel-xl\\:text-warning { color: var(--vel-color-warning)
 }
 .vel-xl\\:text-info { color: var(--vel-color-info)
 }
 .vel-xl\\:text-neutral-50 { color: var(--vel-neutral-50)
 }
 .vel-xl\\:text-neutral-100 { color: var(--vel-neutral-100)
 }
 .vel-xl\\:text-neutral-200 { color: var(--vel-neutral-200)
 }
 .vel-xl\\:text-neutral-300 { color: var(--vel-neutral-300)
 }
 .vel-xl\\:text-neutral-400 { color: var(--vel-neutral-400)
 }
 .vel-xl\\:text-neutral-500 { color: var(--vel-neutral-500)
 }
 .vel-xl\\:text-neutral-600 { color: var(--vel-neutral-600)
 }
 .vel-xl\\:text-neutral-700 { color: var(--vel-neutral-700)
 }
 .vel-xl\\:text-neutral-800 { color: var(--vel-neutral-800)
 }
 .vel-xl\\:text-neutral-900 { color: var(--vel-neutral-900)
 }
 .vel-xl\\:text-neutral-950 { color: var(--vel-neutral-950)
 }
}
@media (min-width: 1536px) {
 .vel-2xl\\:block { display: block
 }
 .vel-2xl\\:inline-block { display: inline-block
 }
 .vel-2xl\\:inline { display: inline
 }
 .vel-2xl\\:flex { display: flex
 }
 .vel-2xl\\:inline-flex { display: inline-flex
 }
 .vel-2xl\\:grid { display: grid
 }
 .vel-2xl\\:inline-grid { display: inline-grid
 }
 .vel-2xl\\:hidden { display: none
 }
 .vel-2xl\\:table { display: table
 }
 .vel-2xl\\:table-row { display: table-row
 }
 .vel-2xl\\:table-cell { display: table-cell
 }
 .vel-2xl\\:contents { display: contents
 }
 .vel-2xl\\:static { position: static
 }
 .vel-2xl\\:relative { position: relative
 }
 .vel-2xl\\:absolute { position: absolute
 }
 .vel-2xl\\:fixed { position: fixed
 }
 .vel-2xl\\:sticky { position: sticky
 }
 .vel-2xl\\:overflow-auto { overflow: auto
 }
 .vel-2xl\\:overflow-hidden { overflow: hidden
 }
 .vel-2xl\\:overflow-visible { overflow: visible
 }
 .vel-2xl\\:overflow-scroll { overflow: scroll
 }
 .vel-2xl\\:overflow-x-auto { overflow-x: auto
 }
 .vel-2xl\\:overflow-x-hidden { overflow-x: hidden
 }
 .vel-2xl\\:overflow-y-auto { overflow-y: auto
 }
 .vel-2xl\\:overflow-y-hidden { overflow-y: hidden
 }
 .vel-2xl\\:overflow-y-scroll { overflow-y: scroll
 }
 .vel-2xl\\:overscroll-auto { overscroll-behavior: auto
 }
 .vel-2xl\\:overscroll-contain { overscroll-behavior: contain
 }
 .vel-2xl\\:overscroll-none { overscroll-behavior: none
 }
 .vel-2xl\\:visible { visibility: visible
 }
 .vel-2xl\\:invisible { visibility: hidden
 }
 .vel-2xl\\:collapse { visibility: collapse
 }
 .vel-2xl\\:z-0 { z-index: var(--vel-z-0)
 }
 .vel-2xl\\:z-10 { z-index: var(--vel-z-10)
 }
 .vel-2xl\\:z-20 { z-index: var(--vel-z-20)
 }
 .vel-2xl\\:z-30 { z-index: var(--vel-z-30)
 }
 .vel-2xl\\:z-40 { z-index: var(--vel-z-40)
 }
 .vel-2xl\\:z-50 { z-index: var(--vel-z-50)
 }
 .vel-2xl\\:z-auto { z-index: var(--vel-z-auto)
 }
 .vel-2xl\\:float-left { float: left
 }
 .vel-2xl\\:float-right { float: right
 }
 .vel-2xl\\:float-none { float: none
 }
 .vel-2xl\\:clear-left { clear: left
 }
 .vel-2xl\\:clear-right { clear: right
 }
 .vel-2xl\\:clear-both { clear: both
 }
 .vel-2xl\\:clear-none { clear: none
 }
 .vel-2xl\\:object-contain { -o-object-fit: contain; object-fit: contain
 }
 .vel-2xl\\:object-cover { -o-object-fit: cover; object-fit: cover
 }
 .vel-2xl\\:object-fill { -o-object-fit: fill; object-fit: fill
 }
 .vel-2xl\\:object-none { -o-object-fit: none; object-fit: none
 }
 .vel-2xl\\:object-scale-down { -o-object-fit: scale-down; object-fit: scale-down
 }
 .vel-2xl\\:aspect-auto { aspect-ratio: auto
 }
 .vel-2xl\\:aspect-square { aspect-ratio: 1 / 1
 }
 .vel-2xl\\:aspect-video { aspect-ratio: 16 / 9
 }
 .vel-2xl\\:columns-1 { -moz-columns: 1; columns: 1
 }
 .vel-2xl\\:columns-2 { -moz-columns: 2; columns: 2
 }
 .vel-2xl\\:columns-3 { -moz-columns: 3; columns: 3
 }
 .vel-2xl\\:columns-4 { -moz-columns: 4; columns: 4
 }
 .vel-2xl\\:columns-auto { -moz-columns: auto; columns: auto
 }
 .vel-2xl\\:sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0
 }
 .vel-2xl\\:flex-row { flex-direction: row
 }
 .vel-2xl\\:flex-row-reverse { flex-direction: row-reverse
 }
 .vel-2xl\\:flex-col { flex-direction: column
 }
 .vel-2xl\\:flex-col-reverse { flex-direction: column-reverse
 }
 .vel-2xl\\:flex-wrap { flex-wrap: wrap
 }
 .vel-2xl\\:flex-wrap-reverse { flex-wrap: wrap-reverse
 }
 .vel-2xl\\:flex-nowrap { flex-wrap: nowrap
 }
 .vel-2xl\\:flex-1 { flex: 1 1 0%
 }
 .vel-2xl\\:flex-auto { flex: 1 1 auto
 }
 .vel-2xl\\:flex-initial { flex: 0 1 auto
 }
 .vel-2xl\\:flex-none { flex: none
 }
 .vel-2xl\\:grow { flex-grow: 1
 }
 .vel-2xl\\:shrink { flex-shrink: 1
 }
 .vel-2xl\\:items-start { align-items: flex-start
 }
 .vel-2xl\\:items-end { align-items: flex-end
 }
 .vel-2xl\\:items-center { align-items: center
 }
 .vel-2xl\\:items-baseline { align-items: baseline
 }
 .vel-2xl\\:items-stretch { align-items: stretch
 }
 .vel-2xl\\:self-auto { align-self: auto
 }
 .vel-2xl\\:self-start { align-self: flex-start
 }
 .vel-2xl\\:self-end { align-self: flex-end
 }
 .vel-2xl\\:self-center { align-self: center
 }
 .vel-2xl\\:self-baseline { align-self: baseline
 }
 .vel-2xl\\:self-stretch { align-self: stretch
 }
 .vel-2xl\\:justify-start { justify-content: flex-start
 }
 .vel-2xl\\:justify-end { justify-content: flex-end
 }
 .vel-2xl\\:justify-center { justify-content: center
 }
 .vel-2xl\\:justify-between { justify-content: space-between
 }
 .vel-2xl\\:justify-around { justify-content: space-around
 }
 .vel-2xl\\:justify-evenly { justify-content: space-evenly
 }
 .vel-2xl\\:justify-stretch { justify-content: stretch
 }
 .vel-2xl\\:justify-items-start { justify-items: start
 }
 .vel-2xl\\:justify-items-end { justify-items: end
 }
 .vel-2xl\\:justify-items-center { justify-items: center
 }
 .vel-2xl\\:justify-items-stretch { justify-items: stretch
 }
 .vel-2xl\\:justify-self-auto { justify-self: auto
 }
 .vel-2xl\\:justify-self-start { justify-self: start
 }
 .vel-2xl\\:justify-self-end { justify-self: end
 }
 .vel-2xl\\:justify-self-center { justify-self: center
 }
 .vel-2xl\\:justify-self-stretch { justify-self: stretch
 }
 .vel-2xl\\:order-first { order: -9999
 }
 .vel-2xl\\:order-last { order: 9999
 }
 .vel-2xl\\:order-none { order: 0
 }
 .vel-2xl\\:order-1 { order: 1
 }
 .vel-2xl\\:order-2 { order: 2
 }
 .vel-2xl\\:order-3 { order: 3
 }
 .vel-2xl\\:order-4 { order: 4
 }
 .vel-2xl\\:order-5 { order: 5
 }
 .vel-2xl\\:gap-0 { gap: 0px
 }
 .vel-2xl\\:gap-1 { gap: var(--vel-space-1)
 }
 .vel-2xl\\:gap-2 { gap: var(--vel-space-2)
 }
 .vel-2xl\\:gap-3 { gap: var(--vel-space-3)
 }
 .vel-2xl\\:gap-4 { gap: var(--vel-space-4)
 }
 .vel-2xl\\:gap-5 { gap: var(--vel-space-5)
 }
 .vel-2xl\\:gap-6 { gap: var(--vel-space-6)
 }
 .vel-2xl\\:gap-7 { gap: var(--vel-space-7)
 }
 .vel-2xl\\:gap-8 { gap: var(--vel-space-8)
 }
 .vel-2xl\\:gap-10 { gap: var(--vel-space-10)
 }
 .vel-2xl\\:gap-12 { gap: var(--vel-space-12)
 }
 .vel-2xl\\:gap-16 { gap: var(--vel-space-16)
 }
 .vel-2xl\\:gap-px { gap: 1px
 }
 .vel-2xl\\:gap-x-0 { -moz-column-gap: 0px; column-gap: 0px
 }
 .vel-2xl\\:gap-x-1 { -moz-column-gap: var(--vel-space-1); column-gap: var(--vel-space-1)
 }
 .vel-2xl\\:gap-x-2 { -moz-column-gap: var(--vel-space-2); column-gap: var(--vel-space-2)
 }
 .vel-2xl\\:gap-x-3 { -moz-column-gap: var(--vel-space-3); column-gap: var(--vel-space-3)
 }
 .vel-2xl\\:gap-x-4 { -moz-column-gap: var(--vel-space-4); column-gap: var(--vel-space-4)
 }
 .vel-2xl\\:gap-x-5 { -moz-column-gap: var(--vel-space-5); column-gap: var(--vel-space-5)
 }
 .vel-2xl\\:gap-x-6 { -moz-column-gap: var(--vel-space-6); column-gap: var(--vel-space-6)
 }
 .vel-2xl\\:gap-x-8 { -moz-column-gap: var(--vel-space-8); column-gap: var(--vel-space-8)
 }
 .vel-2xl\\:gap-y-0 { row-gap: 0px
 }
 .vel-2xl\\:gap-y-1 { row-gap: var(--vel-space-1)
 }
 .vel-2xl\\:gap-y-2 { row-gap: var(--vel-space-2)
 }
 .vel-2xl\\:gap-y-3 { row-gap: var(--vel-space-3)
 }
 .vel-2xl\\:gap-y-4 { row-gap: var(--vel-space-4)
 }
 .vel-2xl\\:gap-y-5 { row-gap: var(--vel-space-5)
 }
 .vel-2xl\\:gap-y-6 { row-gap: var(--vel-space-6)
 }
 .vel-2xl\\:gap-y-8 { row-gap: var(--vel-space-8)
 }
 .vel-2xl\\:grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-cols-none { grid-template-columns: none
 }
 .vel-2xl\\:col-auto { grid-column: auto
 }
 .vel-2xl\\:col-span-1 { grid-column: span 1 / span 1
 }
 .vel-2xl\\:col-span-2 { grid-column: span 2 / span 2
 }
 .vel-2xl\\:col-span-3 { grid-column: span 3 / span 3
 }
 .vel-2xl\\:col-span-4 { grid-column: span 4 / span 4
 }
 .vel-2xl\\:col-span-5 { grid-column: span 5 / span 5
 }
 .vel-2xl\\:col-span-6 { grid-column: span 6 / span 6
 }
 .vel-2xl\\:col-span-7 { grid-column: span 7 / span 7
 }
 .vel-2xl\\:col-span-8 { grid-column: span 8 / span 8
 }
 .vel-2xl\\:col-span-9 { grid-column: span 9 / span 9
 }
 .vel-2xl\\:col-span-10 { grid-column: span 10 / span 10
 }
 .vel-2xl\\:col-span-11 { grid-column: span 11 / span 11
 }
 .vel-2xl\\:col-span-12 { grid-column: span 12 / span 12
 }
 .vel-2xl\\:col-span-full { grid-column: 1 / -1
 }
 .vel-2xl\\:col-start-1 { grid-column-start: 1
 }
 .vel-2xl\\:col-start-2 { grid-column-start: 2
 }
 .vel-2xl\\:col-start-3 { grid-column-start: 3
 }
 .vel-2xl\\:col-start-4 { grid-column-start: 4
 }
 .vel-2xl\\:col-start-auto { grid-column-start: auto
 }
 .vel-2xl\\:col-end-1 { grid-column-end: 1
 }
 .vel-2xl\\:col-end-2 { grid-column-end: 2
 }
 .vel-2xl\\:col-end-3 { grid-column-end: 3
 }
 .vel-2xl\\:col-end-4 { grid-column-end: 4
 }
 .vel-2xl\\:col-end-auto { grid-column-end: auto
 }
 .vel-2xl\\:grid-rows-1 { grid-template-rows: repeat(1, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-2 { grid-template-rows: repeat(2, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-3 { grid-template-rows: repeat(3, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-4 { grid-template-rows: repeat(4, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-5 { grid-template-rows: repeat(5, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-6 { grid-template-rows: repeat(6, minmax(0, 1fr))
 }
 .vel-2xl\\:grid-rows-none { grid-template-rows: none
 }
 .vel-2xl\\:row-auto { grid-row: auto
 }
 .vel-2xl\\:row-span-1 { grid-row: span 1 / span 1
 }
 .vel-2xl\\:row-span-2 { grid-row: span 2 / span 2
 }
 .vel-2xl\\:row-span-3 { grid-row: span 3 / span 3
 }
 .vel-2xl\\:row-span-4 { grid-row: span 4 / span 4
 }
 .vel-2xl\\:row-span-5 { grid-row: span 5 / span 5
 }
 .vel-2xl\\:row-span-6 { grid-row: span 6 / span 6
 }
 .vel-2xl\\:row-span-full { grid-row: 1 / -1
 }
 .vel-2xl\\:row-start-1 { grid-row-start: 1
 }
 .vel-2xl\\:row-start-2 { grid-row-start: 2
 }
 .vel-2xl\\:row-start-3 { grid-row-start: 3
 }
 .vel-2xl\\:row-start-auto { grid-row-start: auto
 }
 .vel-2xl\\:row-end-1 { grid-row-end: 1
 }
 .vel-2xl\\:row-end-2 { grid-row-end: 2
 }
 .vel-2xl\\:row-end-3 { grid-row-end: 3
 }
 .vel-2xl\\:row-end-auto { grid-row-end: auto
 }
 .vel-2xl\\:grid-flow-row { grid-auto-flow: row
 }
 .vel-2xl\\:grid-flow-col { grid-auto-flow: column
 }
 .vel-2xl\\:grid-flow-dense { grid-auto-flow: dense
 }
 .vel-2xl\\:grid-flow-row-dense { grid-auto-flow: row dense
 }
 .vel-2xl\\:grid-flow-col-dense { grid-auto-flow: column dense
 }
 .vel-2xl\\:p-0 { padding: 0px
 }
 .vel-2xl\\:p-px { padding: 1px
 }
 .vel-2xl\\:p-1 { padding: var(--vel-space-1)
 }
 .vel-2xl\\:p-2 { padding: var(--vel-space-2)
 }
 .vel-2xl\\:p-3 { padding: var(--vel-space-3)
 }
 .vel-2xl\\:p-4 { padding: var(--vel-space-4)
 }
 .vel-2xl\\:p-5 { padding: var(--vel-space-5)
 }
 .vel-2xl\\:p-6 { padding: var(--vel-space-6)
 }
 .vel-2xl\\:p-7 { padding: var(--vel-space-7)
 }
 .vel-2xl\\:p-8 { padding: var(--vel-space-8)
 }
 .vel-2xl\\:p-9 { padding: var(--vel-space-9)
 }
 .vel-2xl\\:p-10 { padding: var(--vel-space-10)
 }
 .vel-2xl\\:p-11 { padding: var(--vel-space-11)
 }
 .vel-2xl\\:p-12 { padding: var(--vel-space-12)
 }
 .vel-2xl\\:p-14 { padding: var(--vel-space-14)
 }
 .vel-2xl\\:p-16 { padding: var(--vel-space-16)
 }
 .vel-2xl\\:p-20 { padding: var(--vel-space-20)
 }
 .vel-2xl\\:p-24 { padding: var(--vel-space-24)
 }
 .vel-2xl\\:p-28 { padding: var(--vel-space-28)
 }
 .vel-2xl\\:p-32 { padding: var(--vel-space-32)
 }
 .vel-2xl\\:pt-0 { padding-top: 0px
 }
 .vel-2xl\\:pt-1 { padding-top: var(--vel-space-1)
 }
 .vel-2xl\\:pt-2 { padding-top: var(--vel-space-2)
 }
 .vel-2xl\\:pt-3 { padding-top: var(--vel-space-3)
 }
 .vel-2xl\\:pt-4 { padding-top: var(--vel-space-4)
 }
 .vel-2xl\\:pt-5 { padding-top: var(--vel-space-5)
 }
 .vel-2xl\\:pt-6 { padding-top: var(--vel-space-6)
 }
 .vel-2xl\\:pt-8 { padding-top: var(--vel-space-8)
 }
 .vel-2xl\\:pt-10 { padding-top: var(--vel-space-10)
 }
 .vel-2xl\\:pt-12 { padding-top: var(--vel-space-12)
 }
 .vel-2xl\\:pt-16 { padding-top: var(--vel-space-16)
 }
 .vel-2xl\\:pr-0 { padding-right: 0px
 }
 .vel-2xl\\:pr-1 { padding-right: var(--vel-space-1)
 }
 .vel-2xl\\:pr-2 { padding-right: var(--vel-space-2)
 }
 .vel-2xl\\:pr-3 { padding-right: var(--vel-space-3)
 }
 .vel-2xl\\:pr-4 { padding-right: var(--vel-space-4)
 }
 .vel-2xl\\:pr-5 { padding-right: var(--vel-space-5)
 }
 .vel-2xl\\:pr-6 { padding-right: var(--vel-space-6)
 }
 .vel-2xl\\:pr-8 { padding-right: var(--vel-space-8)
 }
 .vel-2xl\\:pr-12 { padding-right: var(--vel-space-12)
 }
 .vel-2xl\\:pb-0 { padding-bottom: 0px
 }
 .vel-2xl\\:pb-1 { padding-bottom: var(--vel-space-1)
 }
 .vel-2xl\\:pb-2 { padding-bottom: var(--vel-space-2)
 }
 .vel-2xl\\:pb-3 { padding-bottom: var(--vel-space-3)
 }
 .vel-2xl\\:pb-4 { padding-bottom: var(--vel-space-4)
 }
 .vel-2xl\\:pb-5 { padding-bottom: var(--vel-space-5)
 }
 .vel-2xl\\:pb-6 { padding-bottom: var(--vel-space-6)
 }
 .vel-2xl\\:pb-8 { padding-bottom: var(--vel-space-8)
 }
 .vel-2xl\\:pb-12 { padding-bottom: var(--vel-space-12)
 }
 .vel-2xl\\:pl-0 { padding-left: 0px
 }
 .vel-2xl\\:pl-1 { padding-left: var(--vel-space-1)
 }
 .vel-2xl\\:pl-2 { padding-left: var(--vel-space-2)
 }
 .vel-2xl\\:pl-3 { padding-left: var(--vel-space-3)
 }
 .vel-2xl\\:pl-4 { padding-left: var(--vel-space-4)
 }
 .vel-2xl\\:pl-5 { padding-left: var(--vel-space-5)
 }
 .vel-2xl\\:pl-6 { padding-left: var(--vel-space-6)
 }
 .vel-2xl\\:pl-8 { padding-left: var(--vel-space-8)
 }
 .vel-2xl\\:pl-12 { padding-left: var(--vel-space-12)
 }
 .vel-2xl\\:m-0 { margin: 0px
 }
 .vel-2xl\\:m-px { margin: 1px
 }
 .vel-2xl\\:m-auto { margin: auto
 }
 .vel-2xl\\:m-1 { margin: var(--vel-space-1)
 }
 .vel-2xl\\:m-2 { margin: var(--vel-space-2)
 }
 .vel-2xl\\:m-3 { margin: var(--vel-space-3)
 }
 .vel-2xl\\:m-4 { margin: var(--vel-space-4)
 }
 .vel-2xl\\:m-5 { margin: var(--vel-space-5)
 }
 .vel-2xl\\:m-6 { margin: var(--vel-space-6)
 }
 .vel-2xl\\:m-7 { margin: var(--vel-space-7)
 }
 .vel-2xl\\:m-8 { margin: var(--vel-space-8)
 }
 .vel-2xl\\:m-10 { margin: var(--vel-space-10)
 }
 .vel-2xl\\:m-12 { margin: var(--vel-space-12)
 }
 .vel-2xl\\:m-16 { margin: var(--vel-space-16)
 }
 .vel-2xl\\:mt-0 { margin-top: 0px
 }
 .vel-2xl\\:mt-auto { margin-top: auto
 }
 .vel-2xl\\:mt-1 { margin-top: var(--vel-space-1)
 }
 .vel-2xl\\:mt-2 { margin-top: var(--vel-space-2)
 }
 .vel-2xl\\:mt-3 { margin-top: var(--vel-space-3)
 }
 .vel-2xl\\:mt-4 { margin-top: var(--vel-space-4)
 }
 .vel-2xl\\:mt-5 { margin-top: var(--vel-space-5)
 }
 .vel-2xl\\:mt-6 { margin-top: var(--vel-space-6)
 }
 .vel-2xl\\:mt-8 { margin-top: var(--vel-space-8)
 }
 .vel-2xl\\:mt-10 { margin-top: var(--vel-space-10)
 }
 .vel-2xl\\:mt-12 { margin-top: var(--vel-space-12)
 }
 .vel-2xl\\:mt-16 { margin-top: var(--vel-space-16)
 }
 .vel-2xl\\:mr-0 { margin-right: 0px
 }
 .vel-2xl\\:mr-auto { margin-right: auto
 }
 .vel-2xl\\:mr-1 { margin-right: var(--vel-space-1)
 }
 .vel-2xl\\:mr-2 { margin-right: var(--vel-space-2)
 }
 .vel-2xl\\:mr-3 { margin-right: var(--vel-space-3)
 }
 .vel-2xl\\:mr-4 { margin-right: var(--vel-space-4)
 }
 .vel-2xl\\:mr-6 { margin-right: var(--vel-space-6)
 }
 .vel-2xl\\:mr-8 { margin-right: var(--vel-space-8)
 }
 .vel-2xl\\:mb-0 { margin-bottom: 0px
 }
 .vel-2xl\\:mb-auto { margin-bottom: auto
 }
 .vel-2xl\\:mb-1 { margin-bottom: var(--vel-space-1)
 }
 .vel-2xl\\:mb-2 { margin-bottom: var(--vel-space-2)
 }
 .vel-2xl\\:mb-3 { margin-bottom: var(--vel-space-3)
 }
 .vel-2xl\\:mb-4 { margin-bottom: var(--vel-space-4)
 }
 .vel-2xl\\:mb-5 { margin-bottom: var(--vel-space-5)
 }
 .vel-2xl\\:mb-6 { margin-bottom: var(--vel-space-6)
 }
 .vel-2xl\\:mb-8 { margin-bottom: var(--vel-space-8)
 }
 .vel-2xl\\:mb-10 { margin-bottom: var(--vel-space-10)
 }
 .vel-2xl\\:mb-12 { margin-bottom: var(--vel-space-12)
 }
 .vel-2xl\\:mb-16 { margin-bottom: var(--vel-space-16)
 }
 .vel-2xl\\:ml-0 { margin-left: 0px
 }
 .vel-2xl\\:ml-auto { margin-left: auto
 }
 .vel-2xl\\:ml-1 { margin-left: var(--vel-space-1)
 }
 .vel-2xl\\:ml-2 { margin-left: var(--vel-space-2)
 }
 .vel-2xl\\:ml-3 { margin-left: var(--vel-space-3)
 }
 .vel-2xl\\:ml-4 { margin-left: var(--vel-space-4)
 }
 .vel-2xl\\:ml-6 { margin-left: var(--vel-space-6)
 }
 .vel-2xl\\:ml-8 { margin-left: var(--vel-space-8)
 }
 .vel-2xl\\:w-0 { width: 0px
 }
 .vel-2xl\\:w-px { width: 1px
 }
 .vel-2xl\\:w-auto { width: auto
 }
 .vel-2xl\\:w-full { width: 100%
 }
 .vel-2xl\\:w-screen { width: 100vw
 }
 .vel-2xl\\:w-svw { width: 100svw
 }
 .vel-2xl\\:w-dvw { width: 100dvw
 }
 .vel-2xl\\:w-min { width: -moz-min-content; width: min-content
 }
 .vel-2xl\\:w-max { width: -moz-max-content; width: max-content
 }
 .vel-2xl\\:w-fit { width: -moz-fit-content; width: fit-content
 }
 .vel-2xl\\:w-1 { width: var(--vel-space-1)
 }
 .vel-2xl\\:w-2 { width: var(--vel-space-2)
 }
 .vel-2xl\\:w-3 { width: var(--vel-space-3)
 }
 .vel-2xl\\:w-4 { width: var(--vel-space-4)
 }
 .vel-2xl\\:w-5 { width: var(--vel-space-5)
 }
 .vel-2xl\\:w-6 { width: var(--vel-space-6)
 }
 .vel-2xl\\:w-7 { width: var(--vel-space-7)
 }
 .vel-2xl\\:w-8 { width: var(--vel-space-8)
 }
 .vel-2xl\\:w-9 { width: var(--vel-space-9)
 }
 .vel-2xl\\:w-10 { width: var(--vel-space-10)
 }
 .vel-2xl\\:w-11 { width: var(--vel-space-11)
 }
 .vel-2xl\\:w-12 { width: var(--vel-space-12)
 }
 .vel-2xl\\:w-14 { width: var(--vel-space-14)
 }
 .vel-2xl\\:w-16 { width: var(--vel-space-16)
 }
 .vel-2xl\\:w-20 { width: var(--vel-space-20)
 }
 .vel-2xl\\:w-24 { width: var(--vel-space-24)
 }
 .vel-2xl\\:w-28 { width: var(--vel-space-28)
 }
 .vel-2xl\\:w-32 { width: var(--vel-space-32)
 }
 .vel-2xl\\:w-36 { width: var(--vel-space-36)
 }
 .vel-2xl\\:w-40 { width: var(--vel-space-40)
 }
 .vel-2xl\\:w-48 { width: var(--vel-space-48)
 }
 .vel-2xl\\:w-56 { width: var(--vel-space-56)
 }
 .vel-2xl\\:w-64 { width: var(--vel-space-64)
 }
 .vel-2xl\\:w-72 { width: var(--vel-space-72)
 }
 .vel-2xl\\:w-80 { width: var(--vel-space-80)
 }
 .vel-2xl\\:w-96 { width: var(--vel-space-96)
 }
 .vel-2xl\\:min-w-0 { min-width: 0px
 }
 .vel-2xl\\:min-w-full { min-width: 100%
 }
 .vel-2xl\\:min-w-min { min-width: -moz-min-content; min-width: min-content
 }
 .vel-2xl\\:min-w-max { min-width: -moz-max-content; min-width: max-content
 }
 .vel-2xl\\:min-w-fit { min-width: -moz-fit-content; min-width: fit-content
 }
 .vel-2xl\\:max-w-none { max-width: none
 }
 .vel-2xl\\:max-w-xs { max-width: 20rem
 }
 .vel-2xl\\:max-w-sm { max-width: 24rem
 }
 .vel-2xl\\:max-w-md { max-width: 28rem
 }
 .vel-2xl\\:max-w-lg { max-width: 32rem
 }
 .vel-2xl\\:max-w-xl { max-width: 36rem
 }
 .vel-2xl\\:max-w-2xl { max-width: 42rem
 }
 .vel-2xl\\:max-w-3xl { max-width: 48rem
 }
 .vel-2xl\\:max-w-4xl { max-width: 56rem
 }
 .vel-2xl\\:max-w-5xl { max-width: 64rem
 }
 .vel-2xl\\:max-w-6xl { max-width: 72rem
 }
 .vel-2xl\\:max-w-7xl { max-width: 80rem
 }
 .vel-2xl\\:max-w-full { max-width: 100%
 }
 .vel-2xl\\:max-w-min { max-width: -moz-min-content; max-width: min-content
 }
 .vel-2xl\\:max-w-max { max-width: -moz-max-content; max-width: max-content
 }
 .vel-2xl\\:max-w-fit { max-width: -moz-fit-content; max-width: fit-content
 }
 .vel-2xl\\:max-w-prose { max-width: 65ch
 }
 .vel-2xl\\:max-w-screen-sm { max-width: 640px
 }
 .vel-2xl\\:max-w-screen-md { max-width: 768px
 }
 .vel-2xl\\:max-w-screen-lg { max-width: 1024px
 }
 .vel-2xl\\:max-w-screen-xl { max-width: 1280px
 }
 .vel-2xl\\:max-w-screen-2xl { max-width: 1536px
 }
 .vel-2xl\\:h-0 { height: 0px
 }
 .vel-2xl\\:h-px { height: 1px
 }
 .vel-2xl\\:h-auto { height: auto
 }
 .vel-2xl\\:h-full { height: 100%
 }
 .vel-2xl\\:h-screen { height: 100vh
 }
 .vel-2xl\\:h-svh { height: 100svh
 }
 .vel-2xl\\:h-dvh { height: 100dvh
 }
 .vel-2xl\\:h-min { height: -moz-min-content; height: min-content
 }
 .vel-2xl\\:h-max { height: -moz-max-content; height: max-content
 }
 .vel-2xl\\:h-fit { height: -moz-fit-content; height: fit-content
 }
 .vel-2xl\\:h-1 { height: var(--vel-space-1)
 }
 .vel-2xl\\:h-2 { height: var(--vel-space-2)
 }
 .vel-2xl\\:h-3 { height: var(--vel-space-3)
 }
 .vel-2xl\\:h-4 { height: var(--vel-space-4)
 }
 .vel-2xl\\:h-5 { height: var(--vel-space-5)
 }
 .vel-2xl\\:h-6 { height: var(--vel-space-6)
 }
 .vel-2xl\\:h-7 { height: var(--vel-space-7)
 }
 .vel-2xl\\:h-8 { height: var(--vel-space-8)
 }
 .vel-2xl\\:h-9 { height: var(--vel-space-9)
 }
 .vel-2xl\\:h-10 { height: var(--vel-space-10)
 }
 .vel-2xl\\:h-11 { height: var(--vel-space-11)
 }
 .vel-2xl\\:h-12 { height: var(--vel-space-12)
 }
 .vel-2xl\\:h-14 { height: var(--vel-space-14)
 }
 .vel-2xl\\:h-16 { height: var(--vel-space-16)
 }
 .vel-2xl\\:h-20 { height: var(--vel-space-20)
 }
 .vel-2xl\\:h-24 { height: var(--vel-space-24)
 }
 .vel-2xl\\:h-28 { height: var(--vel-space-28)
 }
 .vel-2xl\\:h-32 { height: var(--vel-space-32)
 }
 .vel-2xl\\:h-36 { height: var(--vel-space-36)
 }
 .vel-2xl\\:h-40 { height: var(--vel-space-40)
 }
 .vel-2xl\\:h-48 { height: var(--vel-space-48)
 }
 .vel-2xl\\:h-56 { height: var(--vel-space-56)
 }
 .vel-2xl\\:h-64 { height: var(--vel-space-64)
 }
 .vel-2xl\\:min-h-0 { min-height: 0px
 }
 .vel-2xl\\:min-h-full { min-height: 100%
 }
 .vel-2xl\\:min-h-screen { min-height: 100vh
 }
 .vel-2xl\\:min-h-svh { min-height: 100svh
 }
 .vel-2xl\\:min-h-dvh { min-height: 100dvh
 }
 .vel-2xl\\:min-h-min { min-height: -moz-min-content; min-height: min-content
 }
 .vel-2xl\\:min-h-max { min-height: -moz-max-content; min-height: max-content
 }
 .vel-2xl\\:min-h-fit { min-height: -moz-fit-content; min-height: fit-content
 }
 .vel-2xl\\:max-h-none { max-height: none
 }
 .vel-2xl\\:max-h-full { max-height: 100%
 }
 .vel-2xl\\:max-h-screen { max-height: 100vh
 }
 .vel-2xl\\:max-h-svh { max-height: 100svh
 }
 .vel-2xl\\:max-h-dvh { max-height: 100dvh
 }
 .vel-2xl\\:max-h-min { max-height: -moz-min-content; max-height: min-content
 }
 .vel-2xl\\:max-h-max { max-height: -moz-max-content; max-height: max-content
 }
 .vel-2xl\\:max-h-fit { max-height: -moz-fit-content; max-height: fit-content
 }
 .vel-2xl\\:max-h-24 { max-height: var(--vel-space-24)
 }
 .vel-2xl\\:max-h-48 { max-height: var(--vel-space-48)
 }
 .vel-2xl\\:max-h-64 { max-height: var(--vel-space-64)
 }
 .vel-2xl\\:max-h-96 { max-height: var(--vel-space-96)
 }
 .vel-2xl\\:font-sans { font-family: var(--vel-font-sans)
 }
 .vel-2xl\\:font-serif { font-family: var(--vel-font-serif)
 }
 .vel-2xl\\:font-mono { font-family: var(--vel-font-mono)
 }
 .vel-2xl\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
 }
 .vel-2xl\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
 }
 .vel-2xl\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
 }
 .vel-2xl\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
 }
 .vel-2xl\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
 }
 .vel-2xl\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
 }
 .vel-2xl\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
 }
 .vel-2xl\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
 }
 .vel-2xl\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
 }
 .vel-2xl\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
 }
 .vel-2xl\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
 }
 .vel-2xl\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
 }
 .vel-2xl\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
 }
 .vel-2xl\\:font-thin { font-weight: 100
 }
 .vel-2xl\\:font-extralight { font-weight: 200
 }
 .vel-2xl\\:font-light { font-weight: 300
 }
 .vel-2xl\\:font-normal { font-weight: 400
 }
 .vel-2xl\\:font-medium { font-weight: 500
 }
 .vel-2xl\\:font-semibold { font-weight: 600
 }
 .vel-2xl\\:font-bold { font-weight: 700
 }
 .vel-2xl\\:font-extrabold { font-weight: 800
 }
 .vel-2xl\\:font-black { font-weight: 900
 }
 .vel-2xl\\:italic { font-style: italic
 }
 .vel-2xl\\:not-italic { font-style: normal
 }
 .vel-2xl\\:leading-none { line-height: 1
 }
 .vel-2xl\\:leading-tight { line-height: 1.25
 }
 .vel-2xl\\:leading-snug { line-height: 1.375
 }
 .vel-2xl\\:leading-normal { line-height: 1.5
 }
 .vel-2xl\\:leading-relaxed { line-height: 1.625
 }
 .vel-2xl\\:leading-loose { line-height: 2
 }
 .vel-2xl\\:leading-3 { line-height: 0.75rem
 }
 .vel-2xl\\:leading-4 { line-height: 1rem
 }
 .vel-2xl\\:leading-5 { line-height: 1.25rem
 }
 .vel-2xl\\:leading-6 { line-height: 1.5rem
 }
 .vel-2xl\\:leading-7 { line-height: 1.75rem
 }
 .vel-2xl\\:leading-8 { line-height: 2rem
 }
 .vel-2xl\\:leading-9 { line-height: 2.25rem
 }
 .vel-2xl\\:leading-10 { line-height: 2.5rem
 }
 .vel-2xl\\:tracking-tighter { letter-spacing: -0.05em
 }
 .vel-2xl\\:tracking-tight { letter-spacing: -0.025em
 }
 .vel-2xl\\:tracking-normal { letter-spacing: 0em
 }
 .vel-2xl\\:tracking-wide { letter-spacing: 0.025em
 }
 .vel-2xl\\:tracking-wider { letter-spacing: 0.05em
 }
 .vel-2xl\\:tracking-widest { letter-spacing: 0.1em
 }
 .vel-2xl\\:text-left { text-align: left
 }
 .vel-2xl\\:text-center { text-align: center
 }
 .vel-2xl\\:text-right { text-align: right
 }
 .vel-2xl\\:text-justify { text-align: justify
 }
 .vel-2xl\\:text-start { text-align: start
 }
 .vel-2xl\\:text-end { text-align: end
 }
 .vel-2xl\\:underline { text-decoration-line: underline
 }
 .vel-2xl\\:line-through { text-decoration-line: line-through
 }
 .vel-2xl\\:no-underline { text-decoration-line: none
 }
 .vel-2xl\\:uppercase { text-transform: uppercase
 }
 .vel-2xl\\:lowercase { text-transform: lowercase
 }
 .vel-2xl\\:capitalize { text-transform: capitalize
 }
 .vel-2xl\\:normal-case { text-transform: none
 }
 .vel-2xl\\:truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap
 }
 .vel-2xl\\:text-ellipsis { text-overflow: ellipsis
 }
 .vel-2xl\\:text-clip { text-overflow: clip
 }
 .vel-2xl\\:whitespace-normal { white-space: normal
 }
 .vel-2xl\\:whitespace-nowrap { white-space: nowrap
 }
 .vel-2xl\\:whitespace-pre { white-space: pre
 }
 .vel-2xl\\:whitespace-pre-line { white-space: pre-line
 }
 .vel-2xl\\:whitespace-pre-wrap { white-space: pre-wrap
 }
 .vel-2xl\\:whitespace-break-spaces { white-space: break-spaces
 }
 .vel-2xl\\:text-inherit { color: inherit
 }
 .vel-2xl\\:text-current { color: currentColor
 }
 .vel-2xl\\:text-transparent { color: transparent
 }
 .vel-2xl\\:text-white { color: #ffffff
 }
 .vel-2xl\\:text-black { color: #000000
 }
 .vel-2xl\\:text-primary { color: var(--vel-color-primary)
 }
 .vel-2xl\\:text-secondary { color: var(--vel-color-secondary)
 }
 .vel-2xl\\:text-success { color: var(--vel-color-success)
 }
 .vel-2xl\\:text-danger { color: var(--vel-color-danger)
 }
 .vel-2xl\\:text-warning { color: var(--vel-color-warning)
 }
 .vel-2xl\\:text-info { color: var(--vel-color-info)
 }
 .vel-2xl\\:text-neutral-50 { color: var(--vel-neutral-50)
 }
 .vel-2xl\\:text-neutral-100 { color: var(--vel-neutral-100)
 }
 .vel-2xl\\:text-neutral-200 { color: var(--vel-neutral-200)
 }
 .vel-2xl\\:text-neutral-300 { color: var(--vel-neutral-300)
 }
 .vel-2xl\\:text-neutral-400 { color: var(--vel-neutral-400)
 }
 .vel-2xl\\:text-neutral-500 { color: var(--vel-neutral-500)
 }
 .vel-2xl\\:text-neutral-600 { color: var(--vel-neutral-600)
 }
 .vel-2xl\\:text-neutral-700 { color: var(--vel-neutral-700)
 }
 .vel-2xl\\:text-neutral-800 { color: var(--vel-neutral-800)
 }
 .vel-2xl\\:text-neutral-900 { color: var(--vel-neutral-900)
 }
 .vel-2xl\\:text-neutral-950 { color: var(--vel-neutral-950)
 }
}

/* Hover variants — vel-hover:* */
.vel-hover\\:text-xs:hover { font-size: var(--vel-text-xs); line-height: 1rem
}
.vel-hover\\:text-sm:hover { font-size: var(--vel-text-sm); line-height: 1.25rem
}
.vel-hover\\:text-base:hover { font-size: var(--vel-text-base); line-height: 1.5rem
}
.vel-hover\\:text-lg:hover { font-size: var(--vel-text-lg); line-height: 1.75rem
}
.vel-hover\\:text-xl:hover { font-size: var(--vel-text-xl); line-height: 1.75rem
}
.vel-hover\\:text-2xl:hover { font-size: var(--vel-text-2xl); line-height: 2rem
}
.vel-hover\\:text-3xl:hover { font-size: var(--vel-text-3xl); line-height: 2.25rem
}
.vel-hover\\:text-4xl:hover { font-size: var(--vel-text-4xl); line-height: 2.5rem
}
.vel-hover\\:text-5xl:hover { font-size: var(--vel-text-5xl); line-height: 1
}
.vel-hover\\:text-6xl:hover { font-size: var(--vel-text-6xl); line-height: 1
}
.vel-hover\\:text-7xl:hover { font-size: var(--vel-text-7xl); line-height: 1
}
.vel-hover\\:text-8xl:hover { font-size: var(--vel-text-8xl); line-height: 1
}
.vel-hover\\:text-9xl:hover { font-size: var(--vel-text-9xl); line-height: 1
}
.vel-hover\\:text-left:hover { text-align: left
}
.vel-hover\\:text-center:hover { text-align: center
}
.vel-hover\\:text-right:hover { text-align: right
}
.vel-hover\\:text-justify:hover { text-align: justify
}
.vel-hover\\:text-start:hover { text-align: start
}
.vel-hover\\:text-end:hover { text-align: end
}
.vel-hover\\:underline:hover { text-decoration-line: underline
}
.vel-hover\\:line-through:hover { text-decoration-line: line-through
}
.vel-hover\\:no-underline:hover { text-decoration-line: none
}
.vel-hover\\:text-ellipsis:hover { text-overflow: ellipsis
}
.vel-hover\\:text-clip:hover { text-overflow: clip
}
.vel-hover\\:text-inherit:hover { color: inherit
}
.vel-hover\\:text-current:hover { color: currentColor
}
.vel-hover\\:text-transparent:hover { color: transparent
}
.vel-hover\\:text-white:hover { color: #ffffff
}
.vel-hover\\:text-black:hover { color: #000000
}
.vel-hover\\:text-primary:hover { color: var(--vel-color-primary)
}
.vel-hover\\:text-secondary:hover { color: var(--vel-color-secondary)
}
.vel-hover\\:text-success:hover { color: var(--vel-color-success)
}
.vel-hover\\:text-danger:hover { color: var(--vel-color-danger)
}
.vel-hover\\:text-warning:hover { color: var(--vel-color-warning)
}
.vel-hover\\:text-info:hover { color: var(--vel-color-info)
}
.vel-hover\\:text-neutral-50:hover { color: var(--vel-neutral-50)
}
.vel-hover\\:text-neutral-100:hover { color: var(--vel-neutral-100)
}
.vel-hover\\:text-neutral-200:hover { color: var(--vel-neutral-200)
}
.vel-hover\\:text-neutral-300:hover { color: var(--vel-neutral-300)
}
.vel-hover\\:text-neutral-400:hover { color: var(--vel-neutral-400)
}
.vel-hover\\:text-neutral-500:hover { color: var(--vel-neutral-500)
}
.vel-hover\\:text-neutral-600:hover { color: var(--vel-neutral-600)
}
.vel-hover\\:text-neutral-700:hover { color: var(--vel-neutral-700)
}
.vel-hover\\:text-neutral-800:hover { color: var(--vel-neutral-800)
}
.vel-hover\\:text-neutral-900:hover { color: var(--vel-neutral-900)
}
.vel-hover\\:text-neutral-950:hover { color: var(--vel-neutral-950)
}
.vel-hover\\:bg-inherit:hover { background-color: inherit
}
.vel-hover\\:bg-current:hover { background-color: currentColor
}
.vel-hover\\:bg-transparent:hover { background-color: transparent
}
.vel-hover\\:bg-white:hover { background-color: #ffffff
}
.vel-hover\\:bg-black:hover { background-color: #000000
}
.vel-hover\\:bg-primary:hover { background-color: var(--vel-color-primary)
}
.vel-hover\\:bg-secondary:hover { background-color: var(--vel-color-secondary)
}
.vel-hover\\:bg-success:hover { background-color: var(--vel-color-success)
}
.vel-hover\\:bg-danger:hover { background-color: var(--vel-color-danger)
}
.vel-hover\\:bg-warning:hover { background-color: var(--vel-color-warning)
}
.vel-hover\\:bg-info:hover { background-color: var(--vel-color-info)
}
.vel-hover\\:bg-primary-light:hover { background-color: var(--vel-color-primary-light)
}
.vel-hover\\:bg-success-light:hover { background-color: var(--vel-color-success-light)
}
.vel-hover\\:bg-danger-light:hover { background-color: var(--vel-color-danger-light)
}
.vel-hover\\:bg-warning-light:hover { background-color: var(--vel-color-warning-light)
}
.vel-hover\\:bg-info-light:hover { background-color: var(--vel-color-info-light)
}
.vel-hover\\:bg-neutral-50:hover { background-color: var(--vel-neutral-50)
}
.vel-hover\\:bg-neutral-100:hover { background-color: var(--vel-neutral-100)
}
.vel-hover\\:bg-neutral-200:hover { background-color: var(--vel-neutral-200)
}
.vel-hover\\:bg-neutral-300:hover { background-color: var(--vel-neutral-300)
}
.vel-hover\\:bg-neutral-400:hover { background-color: var(--vel-neutral-400)
}
.vel-hover\\:bg-neutral-500:hover { background-color: var(--vel-neutral-500)
}
.vel-hover\\:bg-neutral-600:hover { background-color: var(--vel-neutral-600)
}
.vel-hover\\:bg-neutral-700:hover { background-color: var(--vel-neutral-700)
}
.vel-hover\\:bg-neutral-800:hover { background-color: var(--vel-neutral-800)
}
.vel-hover\\:bg-neutral-900:hover { background-color: var(--vel-neutral-900)
}
.vel-hover\\:bg-neutral-950:hover { background-color: var(--vel-neutral-950)
}
.vel-hover\\:bg-opacity-0:hover { --vel-bg-opacity: 0
}
.vel-hover\\:bg-opacity-25:hover { --vel-bg-opacity: 0.25
}
.vel-hover\\:bg-opacity-50:hover { --vel-bg-opacity: 0.5
}
.vel-hover\\:bg-opacity-75:hover { --vel-bg-opacity: 0.75
}
.vel-hover\\:bg-opacity-100:hover { --vel-bg-opacity: 1
}
.vel-hover\\:border-inherit:hover { border-color: inherit
}
.vel-hover\\:border-current:hover { border-color: currentColor
}
.vel-hover\\:border-transparent:hover { border-color: transparent
}
.vel-hover\\:border-white:hover { border-color: #ffffff
}
.vel-hover\\:border-black:hover { border-color: #000000
}
.vel-hover\\:border-primary:hover { border-color: var(--vel-color-primary)
}
.vel-hover\\:border-secondary:hover { border-color: var(--vel-color-secondary)
}
.vel-hover\\:border-success:hover { border-color: var(--vel-color-success)
}
.vel-hover\\:border-danger:hover { border-color: var(--vel-color-danger)
}
.vel-hover\\:border-warning:hover { border-color: var(--vel-color-warning)
}
.vel-hover\\:border-info:hover { border-color: var(--vel-color-info)
}
.vel-hover\\:border-neutral-100:hover { border-color: var(--vel-neutral-100)
}
.vel-hover\\:border-neutral-200:hover { border-color: var(--vel-neutral-200)
}
.vel-hover\\:border-neutral-300:hover { border-color: var(--vel-neutral-300)
}
.vel-hover\\:border-neutral-400:hover { border-color: var(--vel-neutral-400)
}
.vel-hover\\:border-neutral-500:hover { border-color: var(--vel-neutral-500)
}
.vel-hover\\:border-neutral-600:hover { border-color: var(--vel-neutral-600)
}
.vel-hover\\:border-neutral-700:hover { border-color: var(--vel-neutral-700)
}
.vel-hover\\:border-neutral-800:hover { border-color: var(--vel-neutral-800)
}
.vel-hover\\:border-neutral-900:hover { border-color: var(--vel-neutral-900)
}
.vel-hover\\:bg-auto:hover { background-size: auto
}
.vel-hover\\:bg-cover:hover { background-size: cover
}
.vel-hover\\:bg-contain:hover { background-size: contain
}
.vel-hover\\:bg-center:hover { background-position: center
}
.vel-hover\\:bg-top:hover { background-position: top
}
.vel-hover\\:bg-right:hover { background-position: right
}
.vel-hover\\:bg-bottom:hover { background-position: bottom
}
.vel-hover\\:bg-left:hover { background-position: left
}
.vel-hover\\:bg-repeat:hover { background-repeat: repeat
}
.vel-hover\\:bg-no-repeat:hover { background-repeat: no-repeat
}
.vel-hover\\:bg-repeat-x:hover { background-repeat: repeat-x
}
.vel-hover\\:bg-repeat-y:hover { background-repeat: repeat-y
}
.vel-hover\\:bg-fixed:hover { background-attachment: fixed
}
.vel-hover\\:bg-local:hover { background-attachment: local
}
.vel-hover\\:bg-scroll:hover { background-attachment: scroll
}
.vel-hover\\:border-0:hover { border-width: 0px
}
.vel-hover\\:border-2:hover { border-width: 2px
}
.vel-hover\\:border-4:hover { border-width: 4px
}
.vel-hover\\:border-8:hover { border-width: 8px
}
.vel-hover\\:border-t-0:hover { border-top-width: 0px
}
.vel-hover\\:border-t:hover { border-top-width: 1px
}
.vel-hover\\:border-t-2:hover { border-top-width: 2px
}
.vel-hover\\:border-t-4:hover { border-top-width: 4px
}
.vel-hover\\:border-r-0:hover { border-right-width: 0px
}
.vel-hover\\:border-r:hover { border-right-width: 1px
}
.vel-hover\\:border-r-2:hover { border-right-width: 2px
}
.vel-hover\\:border-r-4:hover { border-right-width: 4px
}
.vel-hover\\:border-b-0:hover { border-bottom-width: 0px
}
.vel-hover\\:border-b:hover { border-bottom-width: 1px
}
.vel-hover\\:border-b-2:hover { border-bottom-width: 2px
}
.vel-hover\\:border-b-4:hover { border-bottom-width: 4px
}
.vel-hover\\:border-l-0:hover { border-left-width: 0px
}
.vel-hover\\:border-l:hover { border-left-width: 1px
}
.vel-hover\\:border-l-2:hover { border-left-width: 2px
}
.vel-hover\\:border-l-4:hover { border-left-width: 4px
}
.vel-hover\\:border-x-0:hover { border-left-width: 0px; border-right-width: 0px
}
.vel-hover\\:border-x:hover { border-left-width: 1px; border-right-width: 1px
}
.vel-hover\\:border-x-2:hover { border-left-width: 2px; border-right-width: 2px
}
.vel-hover\\:border-y-0:hover { border-top-width: 0px; border-bottom-width: 0px
}
.vel-hover\\:border-y:hover { border-top-width: 1px; border-bottom-width: 1px
}
.vel-hover\\:border-y-2:hover { border-top-width: 2px; border-bottom-width: 2px
}
.vel-hover\\:border-solid:hover { border-style: solid
}
.vel-hover\\:border-dashed:hover { border-style: dashed
}
.vel-hover\\:border-dotted:hover { border-style: dotted
}
.vel-hover\\:border-double:hover { border-style: double
}
.vel-hover\\:border-hidden:hover { border-style: hidden
}
.vel-hover\\:border-none:hover { border-style: none
}
.vel-hover\\:ring:hover {
  box-shadow: 0 0 0 3px var(--vel-color-primary)
}
.vel-hover\\:ring-primary:hover { box-shadow: 0 0 0 3px var(--vel-color-primary)
}
.vel-hover\\:ring-success:hover { box-shadow: 0 0 0 3px var(--vel-color-success)
}
.vel-hover\\:ring-danger:hover { box-shadow: 0 0 0 3px var(--vel-color-danger)
}
.vel-hover\\:ring-warning:hover { box-shadow: 0 0 0 3px var(--vel-color-warning)
}
.vel-hover\\:ring-neutral:hover { box-shadow: 0 0 0 3px var(--vel-neutral-400)
}
.vel-hover\\:shadow-sm:hover { box-shadow: var(--vel-shadow-sm)
}
.vel-hover\\:shadow:hover { box-shadow: var(--vel-shadow)
}
.vel-hover\\:shadow-md:hover { box-shadow: var(--vel-shadow-md)
}
.vel-hover\\:shadow-lg:hover { box-shadow: var(--vel-shadow-lg)
}
.vel-hover\\:shadow-xl:hover { box-shadow: var(--vel-shadow-xl)
}
.vel-hover\\:shadow-2xl:hover { box-shadow: var(--vel-shadow-2xl)
}
.vel-hover\\:shadow-inner:hover { box-shadow: var(--vel-shadow-inner)
}
.vel-hover\\:shadow-none:hover { box-shadow: var(--vel-shadow-none)
}
.vel-hover\\:opacity-0:hover { opacity: 0
}
.vel-hover\\:opacity-5:hover { opacity: 0.05
}
.vel-hover\\:opacity-10:hover { opacity: 0.1
}
.vel-hover\\:opacity-15:hover { opacity: 0.15
}
.vel-hover\\:opacity-20:hover { opacity: 0.2
}
.vel-hover\\:opacity-25:hover { opacity: 0.25
}
.vel-hover\\:opacity-30:hover { opacity: 0.3
}
.vel-hover\\:opacity-40:hover { opacity: 0.4
}
.vel-hover\\:opacity-50:hover { opacity: 0.5
}
.vel-hover\\:opacity-60:hover { opacity: 0.6
}
.vel-hover\\:opacity-70:hover { opacity: 0.7
}
.vel-hover\\:opacity-75:hover { opacity: 0.75
}
.vel-hover\\:opacity-80:hover { opacity: 0.8
}
.vel-hover\\:opacity-90:hover { opacity: 0.9
}
.vel-hover\\:opacity-95:hover { opacity: 0.95
}
.vel-hover\\:opacity-100:hover { opacity: 1
}
.vel-hover\\:scale-0:hover { transform: scale(0)
}
.vel-hover\\:scale-50:hover { transform: scale(.5)
}
.vel-hover\\:scale-75:hover { transform: scale(.75)
}
.vel-hover\\:scale-90:hover { transform: scale(.9)
}
.vel-hover\\:scale-95:hover { transform: scale(.95)
}
.vel-hover\\:scale-100:hover { transform: scale(1)
}
.vel-hover\\:scale-105:hover { transform: scale(1.05)
}
.vel-hover\\:scale-110:hover { transform: scale(1.1)
}
.vel-hover\\:scale-125:hover { transform: scale(1.25)
}
.vel-hover\\:scale-150:hover { transform: scale(1.5)
}
.vel-hover\\:rotate-0:hover { transform: rotate(0deg)
}
.vel-hover\\:rotate-1:hover { transform: rotate(1deg)
}
.vel-hover\\:rotate-2:hover { transform: rotate(2deg)
}
.vel-hover\\:rotate-3:hover { transform: rotate(3deg)
}
.vel-hover\\:rotate-6:hover { transform: rotate(6deg)
}
.vel-hover\\:rotate-12:hover { transform: rotate(12deg)
}
.vel-hover\\:rotate-45:hover { transform: rotate(45deg)
}
.vel-hover\\:rotate-90:hover { transform: rotate(90deg)
}
.vel-hover\\:rotate-180:hover { transform: rotate(180deg)
}
.vel-hover\\:translate-x-0:hover { transform: translateX(0px)
}
.vel-hover\\:translate-x-full:hover { transform: translateX(100%)
}
.vel-hover\\:translate-y-0:hover { transform: translateY(0px)
}
.vel-hover\\:translate-y-full:hover { transform: translateY(100%)
}

/* Focus variants — vel-focus:* */
.vel-focus\\:text-xs:focus, .vel-focus\\:text-xs:focus-visible { font-size: var(--vel-text-xs); line-height: 1rem
}
.vel-focus\\:text-sm:focus, .vel-focus\\:text-sm:focus-visible { font-size: var(--vel-text-sm); line-height: 1.25rem
}
.vel-focus\\:text-base:focus, .vel-focus\\:text-base:focus-visible { font-size: var(--vel-text-base); line-height: 1.5rem
}
.vel-focus\\:text-lg:focus, .vel-focus\\:text-lg:focus-visible { font-size: var(--vel-text-lg); line-height: 1.75rem
}
.vel-focus\\:text-xl:focus, .vel-focus\\:text-xl:focus-visible { font-size: var(--vel-text-xl); line-height: 1.75rem
}
.vel-focus\\:text-2xl:focus, .vel-focus\\:text-2xl:focus-visible { font-size: var(--vel-text-2xl); line-height: 2rem
}
.vel-focus\\:text-3xl:focus, .vel-focus\\:text-3xl:focus-visible { font-size: var(--vel-text-3xl); line-height: 2.25rem
}
.vel-focus\\:text-4xl:focus, .vel-focus\\:text-4xl:focus-visible { font-size: var(--vel-text-4xl); line-height: 2.5rem
}
.vel-focus\\:text-5xl:focus, .vel-focus\\:text-5xl:focus-visible { font-size: var(--vel-text-5xl); line-height: 1
}
.vel-focus\\:text-6xl:focus, .vel-focus\\:text-6xl:focus-visible { font-size: var(--vel-text-6xl); line-height: 1
}
.vel-focus\\:text-7xl:focus, .vel-focus\\:text-7xl:focus-visible { font-size: var(--vel-text-7xl); line-height: 1
}
.vel-focus\\:text-8xl:focus, .vel-focus\\:text-8xl:focus-visible { font-size: var(--vel-text-8xl); line-height: 1
}
.vel-focus\\:text-9xl:focus, .vel-focus\\:text-9xl:focus-visible { font-size: var(--vel-text-9xl); line-height: 1
}
.vel-focus\\:text-left:focus, .vel-focus\\:text-left:focus-visible { text-align: left
}
.vel-focus\\:text-center:focus, .vel-focus\\:text-center:focus-visible { text-align: center
}
.vel-focus\\:text-right:focus, .vel-focus\\:text-right:focus-visible { text-align: right
}
.vel-focus\\:text-justify:focus, .vel-focus\\:text-justify:focus-visible { text-align: justify
}
.vel-focus\\:text-start:focus, .vel-focus\\:text-start:focus-visible { text-align: start
}
.vel-focus\\:text-end:focus, .vel-focus\\:text-end:focus-visible { text-align: end
}
.vel-focus\\:text-ellipsis:focus, .vel-focus\\:text-ellipsis:focus-visible { text-overflow: ellipsis
}
.vel-focus\\:text-clip:focus, .vel-focus\\:text-clip:focus-visible { text-overflow: clip
}
.vel-focus\\:text-inherit:focus, .vel-focus\\:text-inherit:focus-visible { color: inherit
}
.vel-focus\\:text-current:focus, .vel-focus\\:text-current:focus-visible { color: currentColor
}
.vel-focus\\:text-transparent:focus, .vel-focus\\:text-transparent:focus-visible { color: transparent
}
.vel-focus\\:text-white:focus, .vel-focus\\:text-white:focus-visible { color: #ffffff
}
.vel-focus\\:text-black:focus, .vel-focus\\:text-black:focus-visible { color: #000000
}
.vel-focus\\:text-primary:focus, .vel-focus\\:text-primary:focus-visible { color: var(--vel-color-primary)
}
.vel-focus\\:text-secondary:focus, .vel-focus\\:text-secondary:focus-visible { color: var(--vel-color-secondary)
}
.vel-focus\\:text-success:focus, .vel-focus\\:text-success:focus-visible { color: var(--vel-color-success)
}
.vel-focus\\:text-danger:focus, .vel-focus\\:text-danger:focus-visible { color: var(--vel-color-danger)
}
.vel-focus\\:text-warning:focus, .vel-focus\\:text-warning:focus-visible { color: var(--vel-color-warning)
}
.vel-focus\\:text-info:focus, .vel-focus\\:text-info:focus-visible { color: var(--vel-color-info)
}
.vel-focus\\:text-neutral-50:focus, .vel-focus\\:text-neutral-50:focus-visible { color: var(--vel-neutral-50)
}
.vel-focus\\:text-neutral-100:focus, .vel-focus\\:text-neutral-100:focus-visible { color: var(--vel-neutral-100)
}
.vel-focus\\:text-neutral-200:focus, .vel-focus\\:text-neutral-200:focus-visible { color: var(--vel-neutral-200)
}
.vel-focus\\:text-neutral-300:focus, .vel-focus\\:text-neutral-300:focus-visible { color: var(--vel-neutral-300)
}
.vel-focus\\:text-neutral-400:focus, .vel-focus\\:text-neutral-400:focus-visible { color: var(--vel-neutral-400)
}
.vel-focus\\:text-neutral-500:focus, .vel-focus\\:text-neutral-500:focus-visible { color: var(--vel-neutral-500)
}
.vel-focus\\:text-neutral-600:focus, .vel-focus\\:text-neutral-600:focus-visible { color: var(--vel-neutral-600)
}
.vel-focus\\:text-neutral-700:focus, .vel-focus\\:text-neutral-700:focus-visible { color: var(--vel-neutral-700)
}
.vel-focus\\:text-neutral-800:focus, .vel-focus\\:text-neutral-800:focus-visible { color: var(--vel-neutral-800)
}
.vel-focus\\:text-neutral-900:focus, .vel-focus\\:text-neutral-900:focus-visible { color: var(--vel-neutral-900)
}
.vel-focus\\:text-neutral-950:focus, .vel-focus\\:text-neutral-950:focus-visible { color: var(--vel-neutral-950)
}
.vel-focus\\:bg-inherit:focus, .vel-focus\\:bg-inherit:focus-visible { background-color: inherit
}
.vel-focus\\:bg-current:focus, .vel-focus\\:bg-current:focus-visible { background-color: currentColor
}
.vel-focus\\:bg-transparent:focus, .vel-focus\\:bg-transparent:focus-visible { background-color: transparent
}
.vel-focus\\:bg-white:focus, .vel-focus\\:bg-white:focus-visible { background-color: #ffffff
}
.vel-focus\\:bg-black:focus, .vel-focus\\:bg-black:focus-visible { background-color: #000000
}
.vel-focus\\:bg-primary:focus, .vel-focus\\:bg-primary:focus-visible { background-color: var(--vel-color-primary)
}
.vel-focus\\:bg-secondary:focus, .vel-focus\\:bg-secondary:focus-visible { background-color: var(--vel-color-secondary)
}
.vel-focus\\:bg-success:focus, .vel-focus\\:bg-success:focus-visible { background-color: var(--vel-color-success)
}
.vel-focus\\:bg-danger:focus, .vel-focus\\:bg-danger:focus-visible { background-color: var(--vel-color-danger)
}
.vel-focus\\:bg-warning:focus, .vel-focus\\:bg-warning:focus-visible { background-color: var(--vel-color-warning)
}
.vel-focus\\:bg-info:focus, .vel-focus\\:bg-info:focus-visible { background-color: var(--vel-color-info)
}
.vel-focus\\:bg-primary-light:focus, .vel-focus\\:bg-primary-light:focus-visible { background-color: var(--vel-color-primary-light)
}
.vel-focus\\:bg-success-light:focus, .vel-focus\\:bg-success-light:focus-visible { background-color: var(--vel-color-success-light)
}
.vel-focus\\:bg-danger-light:focus, .vel-focus\\:bg-danger-light:focus-visible { background-color: var(--vel-color-danger-light)
}
.vel-focus\\:bg-warning-light:focus, .vel-focus\\:bg-warning-light:focus-visible { background-color: var(--vel-color-warning-light)
}
.vel-focus\\:bg-info-light:focus, .vel-focus\\:bg-info-light:focus-visible { background-color: var(--vel-color-info-light)
}
.vel-focus\\:bg-neutral-50:focus, .vel-focus\\:bg-neutral-50:focus-visible { background-color: var(--vel-neutral-50)
}
.vel-focus\\:bg-neutral-100:focus, .vel-focus\\:bg-neutral-100:focus-visible { background-color: var(--vel-neutral-100)
}
.vel-focus\\:bg-neutral-200:focus, .vel-focus\\:bg-neutral-200:focus-visible { background-color: var(--vel-neutral-200)
}
.vel-focus\\:bg-neutral-300:focus, .vel-focus\\:bg-neutral-300:focus-visible { background-color: var(--vel-neutral-300)
}
.vel-focus\\:bg-neutral-400:focus, .vel-focus\\:bg-neutral-400:focus-visible { background-color: var(--vel-neutral-400)
}
.vel-focus\\:bg-neutral-500:focus, .vel-focus\\:bg-neutral-500:focus-visible { background-color: var(--vel-neutral-500)
}
.vel-focus\\:bg-neutral-600:focus, .vel-focus\\:bg-neutral-600:focus-visible { background-color: var(--vel-neutral-600)
}
.vel-focus\\:bg-neutral-700:focus, .vel-focus\\:bg-neutral-700:focus-visible { background-color: var(--vel-neutral-700)
}
.vel-focus\\:bg-neutral-800:focus, .vel-focus\\:bg-neutral-800:focus-visible { background-color: var(--vel-neutral-800)
}
.vel-focus\\:bg-neutral-900:focus, .vel-focus\\:bg-neutral-900:focus-visible { background-color: var(--vel-neutral-900)
}
.vel-focus\\:bg-neutral-950:focus, .vel-focus\\:bg-neutral-950:focus-visible { background-color: var(--vel-neutral-950)
}
.vel-focus\\:bg-opacity-0:focus, .vel-focus\\:bg-opacity-0:focus-visible { --vel-bg-opacity: 0
}
.vel-focus\\:bg-opacity-25:focus, .vel-focus\\:bg-opacity-25:focus-visible { --vel-bg-opacity: 0.25
}
.vel-focus\\:bg-opacity-50:focus, .vel-focus\\:bg-opacity-50:focus-visible { --vel-bg-opacity: 0.5
}
.vel-focus\\:bg-opacity-75:focus, .vel-focus\\:bg-opacity-75:focus-visible { --vel-bg-opacity: 0.75
}
.vel-focus\\:bg-opacity-100:focus, .vel-focus\\:bg-opacity-100:focus-visible { --vel-bg-opacity: 1
}
.vel-focus\\:border-inherit:focus, .vel-focus\\:border-inherit:focus-visible { border-color: inherit
}
.vel-focus\\:border-current:focus, .vel-focus\\:border-current:focus-visible { border-color: currentColor
}
.vel-focus\\:border-transparent:focus, .vel-focus\\:border-transparent:focus-visible { border-color: transparent
}
.vel-focus\\:border-white:focus, .vel-focus\\:border-white:focus-visible { border-color: #ffffff
}
.vel-focus\\:border-black:focus, .vel-focus\\:border-black:focus-visible { border-color: #000000
}
.vel-focus\\:border-primary:focus, .vel-focus\\:border-primary:focus-visible { border-color: var(--vel-color-primary)
}
.vel-focus\\:border-secondary:focus, .vel-focus\\:border-secondary:focus-visible { border-color: var(--vel-color-secondary)
}
.vel-focus\\:border-success:focus, .vel-focus\\:border-success:focus-visible { border-color: var(--vel-color-success)
}
.vel-focus\\:border-danger:focus, .vel-focus\\:border-danger:focus-visible { border-color: var(--vel-color-danger)
}
.vel-focus\\:border-warning:focus, .vel-focus\\:border-warning:focus-visible { border-color: var(--vel-color-warning)
}
.vel-focus\\:border-info:focus, .vel-focus\\:border-info:focus-visible { border-color: var(--vel-color-info)
}
.vel-focus\\:border-neutral-100:focus, .vel-focus\\:border-neutral-100:focus-visible { border-color: var(--vel-neutral-100)
}
.vel-focus\\:border-neutral-200:focus, .vel-focus\\:border-neutral-200:focus-visible { border-color: var(--vel-neutral-200)
}
.vel-focus\\:border-neutral-300:focus, .vel-focus\\:border-neutral-300:focus-visible { border-color: var(--vel-neutral-300)
}
.vel-focus\\:border-neutral-400:focus, .vel-focus\\:border-neutral-400:focus-visible { border-color: var(--vel-neutral-400)
}
.vel-focus\\:border-neutral-500:focus, .vel-focus\\:border-neutral-500:focus-visible { border-color: var(--vel-neutral-500)
}
.vel-focus\\:border-neutral-600:focus, .vel-focus\\:border-neutral-600:focus-visible { border-color: var(--vel-neutral-600)
}
.vel-focus\\:border-neutral-700:focus, .vel-focus\\:border-neutral-700:focus-visible { border-color: var(--vel-neutral-700)
}
.vel-focus\\:border-neutral-800:focus, .vel-focus\\:border-neutral-800:focus-visible { border-color: var(--vel-neutral-800)
}
.vel-focus\\:border-neutral-900:focus, .vel-focus\\:border-neutral-900:focus-visible { border-color: var(--vel-neutral-900)
}
.vel-focus\\:bg-auto:focus, .vel-focus\\:bg-auto:focus-visible { background-size: auto
}
.vel-focus\\:bg-cover:focus, .vel-focus\\:bg-cover:focus-visible { background-size: cover
}
.vel-focus\\:bg-contain:focus, .vel-focus\\:bg-contain:focus-visible { background-size: contain
}
.vel-focus\\:bg-center:focus, .vel-focus\\:bg-center:focus-visible { background-position: center
}
.vel-focus\\:bg-top:focus, .vel-focus\\:bg-top:focus-visible { background-position: top
}
.vel-focus\\:bg-right:focus, .vel-focus\\:bg-right:focus-visible { background-position: right
}
.vel-focus\\:bg-bottom:focus, .vel-focus\\:bg-bottom:focus-visible { background-position: bottom
}
.vel-focus\\:bg-left:focus, .vel-focus\\:bg-left:focus-visible { background-position: left
}
.vel-focus\\:bg-repeat:focus, .vel-focus\\:bg-repeat:focus-visible { background-repeat: repeat
}
.vel-focus\\:bg-no-repeat:focus, .vel-focus\\:bg-no-repeat:focus-visible { background-repeat: no-repeat
}
.vel-focus\\:bg-repeat-x:focus, .vel-focus\\:bg-repeat-x:focus-visible { background-repeat: repeat-x
}
.vel-focus\\:bg-repeat-y:focus, .vel-focus\\:bg-repeat-y:focus-visible { background-repeat: repeat-y
}
.vel-focus\\:bg-fixed:focus, .vel-focus\\:bg-fixed:focus-visible { background-attachment: fixed
}
.vel-focus\\:bg-local:focus, .vel-focus\\:bg-local:focus-visible { background-attachment: local
}
.vel-focus\\:bg-scroll:focus, .vel-focus\\:bg-scroll:focus-visible { background-attachment: scroll
}
.vel-focus\\:border-0:focus, .vel-focus\\:border-0:focus-visible { border-width: 0px
}
.vel-focus\\:border-2:focus, .vel-focus\\:border-2:focus-visible { border-width: 2px
}
.vel-focus\\:border-4:focus, .vel-focus\\:border-4:focus-visible { border-width: 4px
}
.vel-focus\\:border-8:focus, .vel-focus\\:border-8:focus-visible { border-width: 8px
}
.vel-focus\\:border-t-0:focus, .vel-focus\\:border-t-0:focus-visible { border-top-width: 0px
}
.vel-focus\\:border-t:focus, .vel-focus\\:border-t:focus-visible { border-top-width: 1px
}
.vel-focus\\:border-t-2:focus, .vel-focus\\:border-t-2:focus-visible { border-top-width: 2px
}
.vel-focus\\:border-t-4:focus, .vel-focus\\:border-t-4:focus-visible { border-top-width: 4px
}
.vel-focus\\:border-r-0:focus, .vel-focus\\:border-r-0:focus-visible { border-right-width: 0px
}
.vel-focus\\:border-r:focus, .vel-focus\\:border-r:focus-visible { border-right-width: 1px
}
.vel-focus\\:border-r-2:focus, .vel-focus\\:border-r-2:focus-visible { border-right-width: 2px
}
.vel-focus\\:border-r-4:focus, .vel-focus\\:border-r-4:focus-visible { border-right-width: 4px
}
.vel-focus\\:border-b-0:focus, .vel-focus\\:border-b-0:focus-visible { border-bottom-width: 0px
}
.vel-focus\\:border-b:focus, .vel-focus\\:border-b:focus-visible { border-bottom-width: 1px
}
.vel-focus\\:border-b-2:focus, .vel-focus\\:border-b-2:focus-visible { border-bottom-width: 2px
}
.vel-focus\\:border-b-4:focus, .vel-focus\\:border-b-4:focus-visible { border-bottom-width: 4px
}
.vel-focus\\:border-l-0:focus, .vel-focus\\:border-l-0:focus-visible { border-left-width: 0px
}
.vel-focus\\:border-l:focus, .vel-focus\\:border-l:focus-visible { border-left-width: 1px
}
.vel-focus\\:border-l-2:focus, .vel-focus\\:border-l-2:focus-visible { border-left-width: 2px
}
.vel-focus\\:border-l-4:focus, .vel-focus\\:border-l-4:focus-visible { border-left-width: 4px
}
.vel-focus\\:border-x-0:focus, .vel-focus\\:border-x-0:focus-visible { border-left-width: 0px; border-right-width: 0px
}
.vel-focus\\:border-x:focus, .vel-focus\\:border-x:focus-visible { border-left-width: 1px; border-right-width: 1px
}
.vel-focus\\:border-x-2:focus, .vel-focus\\:border-x-2:focus-visible { border-left-width: 2px; border-right-width: 2px
}
.vel-focus\\:border-y-0:focus, .vel-focus\\:border-y-0:focus-visible { border-top-width: 0px; border-bottom-width: 0px
}
.vel-focus\\:border-y:focus, .vel-focus\\:border-y:focus-visible { border-top-width: 1px; border-bottom-width: 1px
}
.vel-focus\\:border-y-2:focus, .vel-focus\\:border-y-2:focus-visible { border-top-width: 2px; border-bottom-width: 2px
}
.vel-focus\\:border-solid:focus, .vel-focus\\:border-solid:focus-visible { border-style: solid
}
.vel-focus\\:border-dashed:focus, .vel-focus\\:border-dashed:focus-visible { border-style: dashed
}
.vel-focus\\:border-dotted:focus, .vel-focus\\:border-dotted:focus-visible { border-style: dotted
}
.vel-focus\\:border-double:focus, .vel-focus\\:border-double:focus-visible { border-style: double
}
.vel-focus\\:border-hidden:focus, .vel-focus\\:border-hidden:focus-visible { border-style: hidden
}
.vel-focus\\:border-none:focus, .vel-focus\\:border-none:focus-visible { border-style: none
}
.vel-focus\\:outline-none:focus, .vel-focus\\:outline-none:focus-visible { outline: 2px solid transparent; outline-offset: 2px
}
.vel-focus\\:outline:focus, .vel-focus\\:outline:focus-visible { outline-style: solid
}
.vel-focus\\:outline-dashed:focus, .vel-focus\\:outline-dashed:focus-visible { outline-style: dashed
}
.vel-focus\\:outline-dotted:focus, .vel-focus\\:outline-dotted:focus-visible { outline-style: dotted
}
.vel-focus\\:outline-0:focus, .vel-focus\\:outline-0:focus-visible { outline-width: 0px
}
.vel-focus\\:outline-1:focus, .vel-focus\\:outline-1:focus-visible { outline-width: 1px
}
.vel-focus\\:outline-2:focus, .vel-focus\\:outline-2:focus-visible { outline-width: 2px
}
.vel-focus\\:outline-4:focus, .vel-focus\\:outline-4:focus-visible { outline-width: 4px
}
.vel-focus\\:outline-8:focus, .vel-focus\\:outline-8:focus-visible { outline-width: 8px
}
.vel-focus\\:outline-offset-0:focus, .vel-focus\\:outline-offset-0:focus-visible { outline-offset: 0px
}
.vel-focus\\:outline-offset-1:focus, .vel-focus\\:outline-offset-1:focus-visible { outline-offset: 1px
}
.vel-focus\\:outline-offset-2:focus, .vel-focus\\:outline-offset-2:focus-visible { outline-offset: 2px
}
.vel-focus\\:outline-offset-4:focus, .vel-focus\\:outline-offset-4:focus-visible { outline-offset: 4px
}
.vel-focus\\:outline-offset-8:focus, .vel-focus\\:outline-offset-8:focus-visible { outline-offset: 8px
}
.vel-focus\\:ring:focus, .vel-focus\\:ring:focus-visible {
  box-shadow: 0 0 0 3px var(--vel-color-primary)
}
.vel-focus\\:ring-primary:focus, .vel-focus\\:ring-primary:focus-visible { box-shadow: 0 0 0 3px var(--vel-color-primary)
}
.vel-focus\\:ring-success:focus, .vel-focus\\:ring-success:focus-visible { box-shadow: 0 0 0 3px var(--vel-color-success)
}
.vel-focus\\:ring-danger:focus, .vel-focus\\:ring-danger:focus-visible { box-shadow: 0 0 0 3px var(--vel-color-danger)
}
.vel-focus\\:ring-warning:focus, .vel-focus\\:ring-warning:focus-visible { box-shadow: 0 0 0 3px var(--vel-color-warning)
}
.vel-focus\\:ring-neutral:focus, .vel-focus\\:ring-neutral:focus-visible { box-shadow: 0 0 0 3px var(--vel-neutral-400)
}
.vel-focus\\:shadow-sm:focus, .vel-focus\\:shadow-sm:focus-visible { box-shadow: var(--vel-shadow-sm)
}
.vel-focus\\:shadow:focus, .vel-focus\\:shadow:focus-visible { box-shadow: var(--vel-shadow)
}
.vel-focus\\:shadow-md:focus, .vel-focus\\:shadow-md:focus-visible { box-shadow: var(--vel-shadow-md)
}
.vel-focus\\:shadow-lg:focus, .vel-focus\\:shadow-lg:focus-visible { box-shadow: var(--vel-shadow-lg)
}
.vel-focus\\:shadow-xl:focus, .vel-focus\\:shadow-xl:focus-visible { box-shadow: var(--vel-shadow-xl)
}
.vel-focus\\:shadow-2xl:focus, .vel-focus\\:shadow-2xl:focus-visible { box-shadow: var(--vel-shadow-2xl)
}
.vel-focus\\:shadow-inner:focus, .vel-focus\\:shadow-inner:focus-visible { box-shadow: var(--vel-shadow-inner)
}
.vel-focus\\:shadow-none:focus, .vel-focus\\:shadow-none:focus-visible { box-shadow: var(--vel-shadow-none)
}

/* Active variants — vel-active:* */
.vel-active\\:bg-inherit:active { background-color: inherit
}
.vel-active\\:bg-current:active { background-color: currentColor
}
.vel-active\\:bg-transparent:active { background-color: transparent
}
.vel-active\\:bg-white:active { background-color: #ffffff
}
.vel-active\\:bg-black:active { background-color: #000000
}
.vel-active\\:bg-primary:active { background-color: var(--vel-color-primary)
}
.vel-active\\:bg-secondary:active { background-color: var(--vel-color-secondary)
}
.vel-active\\:bg-success:active { background-color: var(--vel-color-success)
}
.vel-active\\:bg-danger:active { background-color: var(--vel-color-danger)
}
.vel-active\\:bg-warning:active { background-color: var(--vel-color-warning)
}
.vel-active\\:bg-info:active { background-color: var(--vel-color-info)
}
.vel-active\\:bg-primary-light:active { background-color: var(--vel-color-primary-light)
}
.vel-active\\:bg-success-light:active { background-color: var(--vel-color-success-light)
}
.vel-active\\:bg-danger-light:active { background-color: var(--vel-color-danger-light)
}
.vel-active\\:bg-warning-light:active { background-color: var(--vel-color-warning-light)
}
.vel-active\\:bg-info-light:active { background-color: var(--vel-color-info-light)
}
.vel-active\\:bg-neutral-50:active { background-color: var(--vel-neutral-50)
}
.vel-active\\:bg-neutral-100:active { background-color: var(--vel-neutral-100)
}
.vel-active\\:bg-neutral-200:active { background-color: var(--vel-neutral-200)
}
.vel-active\\:bg-neutral-300:active { background-color: var(--vel-neutral-300)
}
.vel-active\\:bg-neutral-400:active { background-color: var(--vel-neutral-400)
}
.vel-active\\:bg-neutral-500:active { background-color: var(--vel-neutral-500)
}
.vel-active\\:bg-neutral-600:active { background-color: var(--vel-neutral-600)
}
.vel-active\\:bg-neutral-700:active { background-color: var(--vel-neutral-700)
}
.vel-active\\:bg-neutral-800:active { background-color: var(--vel-neutral-800)
}
.vel-active\\:bg-neutral-900:active { background-color: var(--vel-neutral-900)
}
.vel-active\\:bg-neutral-950:active { background-color: var(--vel-neutral-950)
}
.vel-active\\:bg-opacity-0:active { --vel-bg-opacity: 0
}
.vel-active\\:bg-opacity-25:active { --vel-bg-opacity: 0.25
}
.vel-active\\:bg-opacity-50:active { --vel-bg-opacity: 0.5
}
.vel-active\\:bg-opacity-75:active { --vel-bg-opacity: 0.75
}
.vel-active\\:bg-opacity-100:active { --vel-bg-opacity: 1
}
.vel-active\\:bg-auto:active { background-size: auto
}
.vel-active\\:bg-cover:active { background-size: cover
}
.vel-active\\:bg-contain:active { background-size: contain
}
.vel-active\\:bg-center:active { background-position: center
}
.vel-active\\:bg-top:active { background-position: top
}
.vel-active\\:bg-right:active { background-position: right
}
.vel-active\\:bg-bottom:active { background-position: bottom
}
.vel-active\\:bg-left:active { background-position: left
}
.vel-active\\:bg-repeat:active { background-repeat: repeat
}
.vel-active\\:bg-no-repeat:active { background-repeat: no-repeat
}
.vel-active\\:bg-repeat-x:active { background-repeat: repeat-x
}
.vel-active\\:bg-repeat-y:active { background-repeat: repeat-y
}
.vel-active\\:bg-fixed:active { background-attachment: fixed
}
.vel-active\\:bg-local:active { background-attachment: local
}
.vel-active\\:bg-scroll:active { background-attachment: scroll
}
.vel-active\\:shadow-sm:active { box-shadow: var(--vel-shadow-sm)
}
.vel-active\\:shadow:active { box-shadow: var(--vel-shadow)
}
.vel-active\\:shadow-md:active { box-shadow: var(--vel-shadow-md)
}
.vel-active\\:shadow-lg:active { box-shadow: var(--vel-shadow-lg)
}
.vel-active\\:shadow-xl:active { box-shadow: var(--vel-shadow-xl)
}
.vel-active\\:shadow-2xl:active { box-shadow: var(--vel-shadow-2xl)
}
.vel-active\\:shadow-inner:active { box-shadow: var(--vel-shadow-inner)
}
.vel-active\\:shadow-none:active { box-shadow: var(--vel-shadow-none)
}
.vel-active\\:opacity-0:active { opacity: 0
}
.vel-active\\:opacity-5:active { opacity: 0.05
}
.vel-active\\:opacity-10:active { opacity: 0.1
}
.vel-active\\:opacity-15:active { opacity: 0.15
}
.vel-active\\:opacity-20:active { opacity: 0.2
}
.vel-active\\:opacity-25:active { opacity: 0.25
}
.vel-active\\:opacity-30:active { opacity: 0.3
}
.vel-active\\:opacity-40:active { opacity: 0.4
}
.vel-active\\:opacity-50:active { opacity: 0.5
}
.vel-active\\:opacity-60:active { opacity: 0.6
}
.vel-active\\:opacity-70:active { opacity: 0.7
}
.vel-active\\:opacity-75:active { opacity: 0.75
}
.vel-active\\:opacity-80:active { opacity: 0.8
}
.vel-active\\:opacity-90:active { opacity: 0.9
}
.vel-active\\:opacity-95:active { opacity: 0.95
}
.vel-active\\:opacity-100:active { opacity: 1
}
.vel-active\\:scale-0:active { transform: scale(0)
}
.vel-active\\:scale-50:active { transform: scale(.5)
}
.vel-active\\:scale-75:active { transform: scale(.75)
}
.vel-active\\:scale-90:active { transform: scale(.9)
}
.vel-active\\:scale-95:active { transform: scale(.95)
}
.vel-active\\:scale-100:active { transform: scale(1)
}
.vel-active\\:scale-105:active { transform: scale(1.05)
}
.vel-active\\:scale-110:active { transform: scale(1.1)
}
.vel-active\\:scale-125:active { transform: scale(1.25)
}
.vel-active\\:scale-150:active { transform: scale(1.5)
}

/* Dark mode variants — add class="vel-dark" to <html> or <body> */
.vel-dark .vel-dark\\:text-xs { font-size: var(--vel-text-xs); line-height: 1rem
}
.vel-dark .vel-dark\\:text-sm { font-size: var(--vel-text-sm); line-height: 1.25rem
}
.vel-dark .vel-dark\\:text-base { font-size: var(--vel-text-base); line-height: 1.5rem
}
.vel-dark .vel-dark\\:text-lg { font-size: var(--vel-text-lg); line-height: 1.75rem
}
.vel-dark .vel-dark\\:text-xl { font-size: var(--vel-text-xl); line-height: 1.75rem
}
.vel-dark .vel-dark\\:text-2xl { font-size: var(--vel-text-2xl); line-height: 2rem
}
.vel-dark .vel-dark\\:text-3xl { font-size: var(--vel-text-3xl); line-height: 2.25rem
}
.vel-dark .vel-dark\\:text-4xl { font-size: var(--vel-text-4xl); line-height: 2.5rem
}
.vel-dark .vel-dark\\:text-5xl { font-size: var(--vel-text-5xl); line-height: 1
}
.vel-dark .vel-dark\\:text-6xl { font-size: var(--vel-text-6xl); line-height: 1
}
.vel-dark .vel-dark\\:text-7xl { font-size: var(--vel-text-7xl); line-height: 1
}
.vel-dark .vel-dark\\:text-8xl { font-size: var(--vel-text-8xl); line-height: 1
}
.vel-dark .vel-dark\\:text-9xl { font-size: var(--vel-text-9xl); line-height: 1
}
.vel-dark .vel-dark\\:text-left { text-align: left
}
.vel-dark .vel-dark\\:text-center { text-align: center
}
.vel-dark .vel-dark\\:text-right { text-align: right
}
.vel-dark .vel-dark\\:text-justify { text-align: justify
}
.vel-dark .vel-dark\\:text-start { text-align: start
}
.vel-dark .vel-dark\\:text-end { text-align: end
}
.vel-dark .vel-dark\\:text-ellipsis { text-overflow: ellipsis
}
.vel-dark .vel-dark\\:text-clip { text-overflow: clip
}
.vel-dark .vel-dark\\:text-inherit { color: inherit
}
.vel-dark .vel-dark\\:text-current { color: currentColor
}
.vel-dark .vel-dark\\:text-transparent { color: transparent
}
.vel-dark .vel-dark\\:text-white { color: #ffffff
}
.vel-dark .vel-dark\\:text-black { color: #000000
}
.vel-dark .vel-dark\\:text-primary { color: var(--vel-color-primary)
}
.vel-dark .vel-dark\\:text-secondary { color: var(--vel-color-secondary)
}
.vel-dark .vel-dark\\:text-success { color: var(--vel-color-success)
}
.vel-dark .vel-dark\\:text-danger { color: var(--vel-color-danger)
}
.vel-dark .vel-dark\\:text-warning { color: var(--vel-color-warning)
}
.vel-dark .vel-dark\\:text-info { color: var(--vel-color-info)
}
.vel-dark .vel-dark\\:text-neutral-50 { color: var(--vel-neutral-50)
}
.vel-dark .vel-dark\\:text-neutral-100 { color: var(--vel-neutral-100)
}
.vel-dark .vel-dark\\:text-neutral-200 { color: var(--vel-neutral-200)
}
.vel-dark .vel-dark\\:text-neutral-300 { color: var(--vel-neutral-300)
}
.vel-dark .vel-dark\\:text-neutral-400 { color: var(--vel-neutral-400)
}
.vel-dark .vel-dark\\:text-neutral-500 { color: var(--vel-neutral-500)
}
.vel-dark .vel-dark\\:text-neutral-600 { color: var(--vel-neutral-600)
}
.vel-dark .vel-dark\\:text-neutral-700 { color: var(--vel-neutral-700)
}
.vel-dark .vel-dark\\:text-neutral-800 { color: var(--vel-neutral-800)
}
.vel-dark .vel-dark\\:text-neutral-900 { color: var(--vel-neutral-900)
}
.vel-dark .vel-dark\\:text-neutral-950 { color: var(--vel-neutral-950)
}
.vel-dark .vel-dark\\:bg-inherit { background-color: inherit
}
.vel-dark .vel-dark\\:bg-current { background-color: currentColor
}
.vel-dark .vel-dark\\:bg-transparent { background-color: transparent
}
.vel-dark .vel-dark\\:bg-white { background-color: #ffffff
}
.vel-dark .vel-dark\\:bg-black { background-color: #000000
}
.vel-dark .vel-dark\\:bg-primary { background-color: var(--vel-color-primary)
}
.vel-dark .vel-dark\\:bg-secondary { background-color: var(--vel-color-secondary)
}
.vel-dark .vel-dark\\:bg-success { background-color: var(--vel-color-success)
}
.vel-dark .vel-dark\\:bg-danger { background-color: var(--vel-color-danger)
}
.vel-dark .vel-dark\\:bg-warning { background-color: var(--vel-color-warning)
}
.vel-dark .vel-dark\\:bg-info { background-color: var(--vel-color-info)
}
.vel-dark .vel-dark\\:bg-primary-light { background-color: var(--vel-color-primary-light)
}
.vel-dark .vel-dark\\:bg-success-light { background-color: var(--vel-color-success-light)
}
.vel-dark .vel-dark\\:bg-danger-light { background-color: var(--vel-color-danger-light)
}
.vel-dark .vel-dark\\:bg-warning-light { background-color: var(--vel-color-warning-light)
}
.vel-dark .vel-dark\\:bg-info-light { background-color: var(--vel-color-info-light)
}
.vel-dark .vel-dark\\:bg-neutral-50 { background-color: var(--vel-neutral-50)
}
.vel-dark .vel-dark\\:bg-neutral-100 { background-color: var(--vel-neutral-100)
}
.vel-dark .vel-dark\\:bg-neutral-200 { background-color: var(--vel-neutral-200)
}
.vel-dark .vel-dark\\:bg-neutral-300 { background-color: var(--vel-neutral-300)
}
.vel-dark .vel-dark\\:bg-neutral-400 { background-color: var(--vel-neutral-400)
}
.vel-dark .vel-dark\\:bg-neutral-500 { background-color: var(--vel-neutral-500)
}
.vel-dark .vel-dark\\:bg-neutral-600 { background-color: var(--vel-neutral-600)
}
.vel-dark .vel-dark\\:bg-neutral-700 { background-color: var(--vel-neutral-700)
}
.vel-dark .vel-dark\\:bg-neutral-800 { background-color: var(--vel-neutral-800)
}
.vel-dark .vel-dark\\:bg-neutral-900 { background-color: var(--vel-neutral-900)
}
.vel-dark .vel-dark\\:bg-neutral-950 { background-color: var(--vel-neutral-950)
}
.vel-dark .vel-dark\\:bg-opacity-0 { --vel-bg-opacity: 0
}
.vel-dark .vel-dark\\:bg-opacity-25 { --vel-bg-opacity: 0.25
}
.vel-dark .vel-dark\\:bg-opacity-50 { --vel-bg-opacity: 0.5
}
.vel-dark .vel-dark\\:bg-opacity-75 { --vel-bg-opacity: 0.75
}
.vel-dark .vel-dark\\:bg-opacity-100 { --vel-bg-opacity: 1
}
.vel-dark .vel-dark\\:border-inherit { border-color: inherit
}
.vel-dark .vel-dark\\:border-current { border-color: currentColor
}
.vel-dark .vel-dark\\:border-transparent { border-color: transparent
}
.vel-dark .vel-dark\\:border-white { border-color: #ffffff
}
.vel-dark .vel-dark\\:border-black { border-color: #000000
}
.vel-dark .vel-dark\\:border-primary { border-color: var(--vel-color-primary)
}
.vel-dark .vel-dark\\:border-secondary { border-color: var(--vel-color-secondary)
}
.vel-dark .vel-dark\\:border-success { border-color: var(--vel-color-success)
}
.vel-dark .vel-dark\\:border-danger { border-color: var(--vel-color-danger)
}
.vel-dark .vel-dark\\:border-warning { border-color: var(--vel-color-warning)
}
.vel-dark .vel-dark\\:border-info { border-color: var(--vel-color-info)
}
.vel-dark .vel-dark\\:border-neutral-100 { border-color: var(--vel-neutral-100)
}
.vel-dark .vel-dark\\:border-neutral-200 { border-color: var(--vel-neutral-200)
}
.vel-dark .vel-dark\\:border-neutral-300 { border-color: var(--vel-neutral-300)
}
.vel-dark .vel-dark\\:border-neutral-400 { border-color: var(--vel-neutral-400)
}
.vel-dark .vel-dark\\:border-neutral-500 { border-color: var(--vel-neutral-500)
}
.vel-dark .vel-dark\\:border-neutral-600 { border-color: var(--vel-neutral-600)
}
.vel-dark .vel-dark\\:border-neutral-700 { border-color: var(--vel-neutral-700)
}
.vel-dark .vel-dark\\:border-neutral-800 { border-color: var(--vel-neutral-800)
}
.vel-dark .vel-dark\\:border-neutral-900 { border-color: var(--vel-neutral-900)
}
.vel-dark .vel-dark\\:bg-auto { background-size: auto
}
.vel-dark .vel-dark\\:bg-cover { background-size: cover
}
.vel-dark .vel-dark\\:bg-contain { background-size: contain
}
.vel-dark .vel-dark\\:bg-center { background-position: center
}
.vel-dark .vel-dark\\:bg-top { background-position: top
}
.vel-dark .vel-dark\\:bg-right { background-position: right
}
.vel-dark .vel-dark\\:bg-bottom { background-position: bottom
}
.vel-dark .vel-dark\\:bg-left { background-position: left
}
.vel-dark .vel-dark\\:bg-repeat { background-repeat: repeat
}
.vel-dark .vel-dark\\:bg-no-repeat { background-repeat: no-repeat
}
.vel-dark .vel-dark\\:bg-repeat-x { background-repeat: repeat-x
}
.vel-dark .vel-dark\\:bg-repeat-y { background-repeat: repeat-y
}
.vel-dark .vel-dark\\:bg-fixed { background-attachment: fixed
}
.vel-dark .vel-dark\\:bg-local { background-attachment: local
}
.vel-dark .vel-dark\\:bg-scroll { background-attachment: scroll
}
.vel-dark .vel-dark\\:border-0 { border-width: 0px
}
.vel-dark .vel-dark\\:border-2 { border-width: 2px
}
.vel-dark .vel-dark\\:border-4 { border-width: 4px
}
.vel-dark .vel-dark\\:border-8 { border-width: 8px
}
.vel-dark .vel-dark\\:border-t-0 { border-top-width: 0px
}
.vel-dark .vel-dark\\:border-t { border-top-width: 1px
}
.vel-dark .vel-dark\\:border-t-2 { border-top-width: 2px
}
.vel-dark .vel-dark\\:border-t-4 { border-top-width: 4px
}
.vel-dark .vel-dark\\:border-r-0 { border-right-width: 0px
}
.vel-dark .vel-dark\\:border-r { border-right-width: 1px
}
.vel-dark .vel-dark\\:border-r-2 { border-right-width: 2px
}
.vel-dark .vel-dark\\:border-r-4 { border-right-width: 4px
}
.vel-dark .vel-dark\\:border-b-0 { border-bottom-width: 0px
}
.vel-dark .vel-dark\\:border-b { border-bottom-width: 1px
}
.vel-dark .vel-dark\\:border-b-2 { border-bottom-width: 2px
}
.vel-dark .vel-dark\\:border-b-4 { border-bottom-width: 4px
}
.vel-dark .vel-dark\\:border-l-0 { border-left-width: 0px
}
.vel-dark .vel-dark\\:border-l { border-left-width: 1px
}
.vel-dark .vel-dark\\:border-l-2 { border-left-width: 2px
}
.vel-dark .vel-dark\\:border-l-4 { border-left-width: 4px
}
.vel-dark .vel-dark\\:border-x-0 { border-left-width: 0px; border-right-width: 0px
}
.vel-dark .vel-dark\\:border-x { border-left-width: 1px; border-right-width: 1px
}
.vel-dark .vel-dark\\:border-x-2 { border-left-width: 2px; border-right-width: 2px
}
.vel-dark .vel-dark\\:border-y-0 { border-top-width: 0px; border-bottom-width: 0px
}
.vel-dark .vel-dark\\:border-y { border-top-width: 1px; border-bottom-width: 1px
}
.vel-dark .vel-dark\\:border-y-2 { border-top-width: 2px; border-bottom-width: 2px
}
.vel-dark .vel-dark\\:border-solid { border-style: solid
}
.vel-dark .vel-dark\\:border-dashed { border-style: dashed
}
.vel-dark .vel-dark\\:border-dotted { border-style: dotted
}
.vel-dark .vel-dark\\:border-double { border-style: double
}
.vel-dark .vel-dark\\:border-hidden { border-style: hidden
}
.vel-dark .vel-dark\\:border-none { border-style: none
}
.vel-dark .vel-dark\\:ring {
  box-shadow: 0 0 0 3px var(--vel-color-primary)
}
.vel-dark .vel-dark\\:ring-primary { box-shadow: 0 0 0 3px var(--vel-color-primary)
}
.vel-dark .vel-dark\\:ring-success { box-shadow: 0 0 0 3px var(--vel-color-success)
}
.vel-dark .vel-dark\\:ring-danger { box-shadow: 0 0 0 3px var(--vel-color-danger)
}
.vel-dark .vel-dark\\:ring-warning { box-shadow: 0 0 0 3px var(--vel-color-warning)
}
.vel-dark .vel-dark\\:ring-neutral { box-shadow: 0 0 0 3px var(--vel-neutral-400)
}
.vel-dark .vel-dark\\:shadow-sm { box-shadow: var(--vel-shadow-sm)
}
.vel-dark .vel-dark\\:shadow { box-shadow: var(--vel-shadow)
}
.vel-dark .vel-dark\\:shadow-md { box-shadow: var(--vel-shadow-md)
}
.vel-dark .vel-dark\\:shadow-lg { box-shadow: var(--vel-shadow-lg)
}
.vel-dark .vel-dark\\:shadow-xl { box-shadow: var(--vel-shadow-xl)
}
.vel-dark .vel-dark\\:shadow-2xl { box-shadow: var(--vel-shadow-2xl)
}
.vel-dark .vel-dark\\:shadow-inner { box-shadow: var(--vel-shadow-inner)
}
.vel-dark .vel-dark\\:shadow-none { box-shadow: var(--vel-shadow-none)
}`,zm="/veloracss/playground/assets/velora_actual-B8GlOCR0.png",Ic=zm,la={Starter:`<!--
  Welcome to VeloraCSS Playground!
  Edit this HTML to start building — changes appear live in the preview.
  Pick a different example from the Examples dropdown above.
-->
<div style="min-height:100vh;background:#0b1120;background-image:radial-gradient(circle,#1e293b 1px,transparent 1px);background-size:30px 30px;display:flex;align-items:center;justify-content:center;padding:40px 20px;font-family:system-ui,sans-serif">
  <div style="background:#111827;border:1px solid #1e2d45;border-radius:20px;padding:44px 48px;max-width:540px;width:100%;box-shadow:0 32px 64px rgba(0,0,0,.6)">

    <!-- Logo -->
    <div style="display:flex;justify-content:center;margin-bottom:32px">
      <img src="${Ic}" style="height:32px;width:auto">
    </div>

    <!-- Heading -->
    <h1 style="color:#f1f5f9;font-size:1.375rem;font-weight:700;margin:0 0 10px;letter-spacing:-0.02em">
      Welcome to the VeloraCSS Playground
    </h1>
    <p style="color:#64748b;font-size:0.9rem;line-height:1.7;margin:0 0 30px">
      An online playground for <strong style="color:#818cf8">VeloraCSS</strong> — a fully original
      utility-first CSS framework with rich components and zero dependencies.
      Edit the HTML on the left and see changes instantly.
    </p>

    <!-- Feature list -->
    <ul style="list-style:none;padding:0;margin:0 0 34px;display:flex;flex-direction:column;gap:14px">
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#6366f120;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Utility-first classes</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-flex, vel-p-4, vel-text-lg and hundreds more</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#22c55e20;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Rich components</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-btn, vel-card with full variant sets</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#0ea5e920;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">Responsive breakpoints</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-sm:flex · vel-md:grid-cols-3 · vel-lg:hidden</span>
        </div>
      </li>
      <li style="display:flex;align-items:flex-start;gap:14px">
        <span style="width:22px;height:22px;background:#f59e0b20;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px">✦</span>
        <div>
          <span style="color:#e2e8f0;font-size:0.875rem;font-weight:600">State variants</span>
          <span style="color:#475569;font-size:0.8rem;display:block;margin-top:2px">vel-hover:bg-primary · vel-focus:ring · vel-dark:text-white</span>
        </div>
      </li>
    </ul>

    <!-- Prompt box -->
    <div style="background:#0b1120;border:1px solid #1e2d45;border-radius:12px;padding:14px 18px;display:flex;align-items:flex-start;gap:12px">
      <span style="color:#6366f1;font-size:20px;margin-top:-2px">←</span>
      <p style="color:#475569;font-size:0.8rem;line-height:1.6;margin:0">
        Edit the HTML on the left to get started, or choose a demo from the
        <strong style="color:#94a3b8">Examples</strong> dropdown above.
      </p>
    </div>

  </div>
</div>`,Buttons:`<div class="vel-min-h-screen vel-bg-white vel-p-10">
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
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Outline</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-outline-primary">Primary</button>
        <button class="vel-btn vel-btn-outline-secondary">Secondary</button>
        <button class="vel-btn vel-btn-outline-success">Success</button>
        <button class="vel-btn vel-btn-outline-danger">Danger</button>
      </div>
    </section>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Ghost &amp; Link</h2>
      <div class="vel-flex vel-flex-wrap vel-gap-3">
        <button class="vel-btn vel-btn-ghost">Ghost</button>
        <button class="vel-btn vel-btn-link">Link</button>
      </div>
    </section>

    <section class="vel-mb-8">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Sizes</h2>
      <div class="vel-flex vel-flex-wrap vel-items-center vel-gap-3">
        <button class="vel-btn vel-btn-primary vel-btn-xs">XSmall</button>
        <button class="vel-btn vel-btn-primary vel-btn-sm">Small</button>
        <button class="vel-btn vel-btn-primary">Default</button>
        <button class="vel-btn vel-btn-primary vel-btn-lg">Large</button>
        <button class="vel-btn vel-btn-primary vel-btn-xl">XLarge</button>
      </div>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Block</h2>
      <button class="vel-btn vel-btn-primary vel-btn-block">Block Button</button>
    </section>

  </div>
</div>`,Cards:`<div class="vel-min-h-screen vel-bg-neutral-50 vel-p-10">
  <div class="vel-max-w-4xl vel-mx-auto">

    <h1 class="vel-text-3xl vel-font-bold vel-text-neutral-900 vel-mb-8 vel-tracking-tight">Cards</h1>

    <div class="vel-grid vel-grid-cols-2 vel-gap-6 vel-mb-6">
      <div class="vel-card">
        <div class="vel-card-header">Default Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">The default card style with a subtle border and rounded corners.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-primary vel-btn-sm">Action</button>
        </div>
      </div>

      <div class="vel-card vel-card-elevated">
        <div class="vel-card-header">Elevated Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">Elevated with a large shadow for depth and prominence.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-outline-primary vel-btn-sm">Action</button>
        </div>
      </div>

      <div class="vel-card vel-card-flat">
        <div class="vel-card-header">Flat Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">No shadow, no border. Blends into the background cleanly.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-ghost vel-btn-sm">Action</button>
        </div>
      </div>

      <div class="vel-card vel-card-hover">
        <div class="vel-card-header">Hover Card</div>
        <div class="vel-card-body">
          <p class="vel-text-neutral-600 vel-text-sm">Hover over me — the shadow lifts on interaction.</p>
        </div>
        <div class="vel-card-footer">
          <button class="vel-btn vel-btn-ghost vel-btn-sm">Action</button>
        </div>
      </div>
    </div>

    <div class="vel-grid vel-grid-cols-2 vel-gap-6">
      <div class="vel-card vel-card-filled">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-neutral-900 vel-mb-2">Filled Card</h3>
          <p class="vel-text-neutral-500 vel-text-sm">Neutral background fill for a softer look.</p>
        </div>
      </div>

      <div class="vel-card vel-card-primary">
        <div class="vel-card-body">
          <h3 class="vel-text-lg vel-font-semibold vel-text-white vel-mb-2">Primary Card</h3>
          <p class="vel-text-white vel-text-sm" style="opacity:0.8">Bold brand-colored card for featured content.</p>
        </div>
      </div>
    </div>

  </div>
</div>`,Typography:`<div class="vel-min-h-screen vel-bg-white vel-p-10">
  <div class="vel-max-w-2xl vel-mx-auto">

    <h1 class="vel-text-5xl vel-font-black vel-text-neutral-900 vel-tracking-tight vel-mb-2">Typography</h1>
    <p class="vel-text-xl vel-text-neutral-400 vel-mb-10">Font sizes, weights, and text utilities.</p>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Sizes</h2>
      <p class="vel-text-xs vel-text-neutral-700 vel-mb-1">vel-text-xs — The quick brown fox</p>
      <p class="vel-text-sm vel-text-neutral-700 vel-mb-1">vel-text-sm — The quick brown fox</p>
      <p class="vel-text-base vel-text-neutral-700 vel-mb-1">vel-text-base — The quick brown fox</p>
      <p class="vel-text-lg vel-text-neutral-700 vel-mb-1">vel-text-lg — The quick brown fox</p>
      <p class="vel-text-xl vel-text-neutral-700 vel-mb-1">vel-text-xl — The quick brown fox</p>
      <p class="vel-text-2xl vel-text-neutral-700 vel-mb-1">vel-text-2xl — The quick brown fox</p>
      <p class="vel-text-3xl vel-text-neutral-700 vel-mb-1">vel-text-3xl — The quick brown fox</p>
      <p class="vel-text-4xl vel-text-neutral-700 vel-mb-1">vel-text-4xl — Fox</p>
    </section>

    <section class="vel-mb-10">
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Weights</h2>
      <p class="vel-text-xl vel-font-thin vel-text-neutral-800 vel-mb-1">Thin — 100</p>
      <p class="vel-text-xl vel-font-light vel-text-neutral-800 vel-mb-1">Light — 300</p>
      <p class="vel-text-xl vel-font-normal vel-text-neutral-800 vel-mb-1">Normal — 400</p>
      <p class="vel-text-xl vel-font-medium vel-text-neutral-800 vel-mb-1">Medium — 500</p>
      <p class="vel-text-xl vel-font-semibold vel-text-neutral-800 vel-mb-1">Semibold — 600</p>
      <p class="vel-text-xl vel-font-bold vel-text-neutral-800 vel-mb-1">Bold — 700</p>
      <p class="vel-text-xl vel-font-extrabold vel-text-neutral-800 vel-mb-1">Extrabold — 800</p>
      <p class="vel-text-xl vel-font-black vel-text-neutral-800 vel-mb-1">Black — 900</p>
    </section>

    <section>
      <h2 class="vel-text-xs vel-font-semibold vel-text-neutral-400 vel-uppercase vel-tracking-widest vel-mb-4">Colors</h2>
      <p class="vel-text-primary vel-text-lg vel-font-medium vel-mb-1">vel-text-primary</p>
      <p class="vel-text-success vel-text-lg vel-font-medium vel-mb-1">vel-text-success</p>
      <p class="vel-text-danger vel-text-lg vel-font-medium vel-mb-1">vel-text-danger</p>
      <p class="vel-text-warning vel-text-lg vel-font-medium vel-mb-1">vel-text-warning</p>
      <p class="vel-text-info vel-text-lg vel-font-medium vel-mb-1">vel-text-info</p>
      <p class="vel-text-neutral-400 vel-text-lg vel-font-medium">vel-text-neutral-400</p>
    </section>

  </div>
</div>`,"Hero Section":`<div class="vel-min-h-screen vel-bg-white">

  <!-- Nav -->
  <nav class="vel-flex vel-items-center vel-justify-between vel-px-8 vel-py-5 vel-border-b vel-border-neutral-100">
    <div class="vel-flex vel-items-center vel-gap-2">
      <div style="background:#6366f1;color:#fff;font-weight:800;font-size:13px;padding:4px 10px;border-radius:6px">vel</div>
      <span class="vel-font-semibold vel-text-neutral-900">VeloraCSS</span>
    </div>
    <div class="vel-flex vel-items-center vel-gap-6">
      <a class="vel-text-sm vel-text-neutral-500">Docs</a>
      <a class="vel-text-sm vel-text-neutral-500">Components</a>
      <a class="vel-text-sm vel-text-neutral-500">Examples</a>
      <button class="vel-btn vel-btn-primary vel-btn-sm">Get Started</button>
    </div>
  </nav>

  <!-- Hero -->
  <div class="vel-flex vel-flex-col vel-items-center vel-text-center vel-px-8 vel-pt-20 vel-pb-16">
    <div class="vel-bg-primary-light vel-text-primary vel-text-xs vel-font-semibold vel-px-3 vel-py-1 vel-rounded-full vel-mb-6">
      Now in v0.1 — utility-first CSS
    </div>
    <h1 class="vel-text-6xl vel-font-black vel-text-neutral-900 vel-tracking-tight vel-mb-6" style="line-height:1.1">
      Build fast.<br>Look great.
    </h1>
    <p class="vel-text-xl vel-text-neutral-500 vel-max-w-lg vel-leading-relaxed vel-mb-10">
      VeloraCSS is a fully original utility-first CSS framework with rich components,
      zero footprints from other frameworks, and a consistent design system.
    </p>
    <div class="vel-flex vel-gap-4 vel-justify-center vel-mb-16">
      <button class="vel-btn vel-btn-primary vel-btn-lg">Start Building</button>
      <button class="vel-btn vel-btn-outline-primary vel-btn-lg">View Docs</button>
    </div>

    <!-- Feature cards -->
    <div class="vel-grid vel-grid-cols-3 vel-gap-6 vel-max-w-3xl vel-w-full">
      <div class="vel-card vel-card-flat vel-text-left vel-p-6">
        <div class="vel-text-2xl vel-mb-3">⚡</div>
        <h3 class="vel-font-semibold vel-text-neutral-900 vel-mb-1">Utility-first</h3>
        <p class="vel-text-sm vel-text-neutral-500">Compose any design directly in HTML with low-level utility classes.</p>
      </div>
      <div class="vel-card vel-card-flat vel-text-left vel-p-6">
        <div class="vel-text-2xl vel-mb-3">🧩</div>
        <h3 class="vel-font-semibold vel-text-neutral-900 vel-mb-1">Rich Components</h3>
        <p class="vel-text-sm vel-text-neutral-500">Production-ready buttons, cards, forms, modals, and more.</p>
      </div>
      <div class="vel-card vel-card-flat vel-text-left vel-p-6">
        <div class="vel-text-2xl vel-mb-3">🎨</div>
        <h3 class="vel-font-semibold vel-text-neutral-900 vel-mb-1">Design Tokens</h3>
        <p class="vel-text-sm vel-text-neutral-500">Consistent spacing, colors, and typography with CSS custom properties.</p>
      </div>
    </div>
  </div>

</div>`},Sm=la.Starter,jm=`/* Add your custom CSS here */
`,pv=[{id:"full",label:"Full",width:null,icon:"⬛"},{id:"desktop",label:"1280",width:1280,icon:"🖥"},{id:"tablet",label:"768",width:768,icon:"📱"},{id:"mobile",label:"375",width:375,icon:"📱"}],M={bg:"#0a0f1e",header:"#060b17",surface:"#131929",surface2:"#1a2236",border:"#1e2d45",text:"#e2e8f0",muted:"#64748b",accent:"#6366f1"};function mv(e){return btoa(new TextEncoder().encode(e).reduce((n,l)=>n+String.fromCharCode(l),""))}function Cm(e){try{const n=Uint8Array.from(atob(e),l=>l.charCodeAt(0));return new TextDecoder().decode(n)}catch{return""}}function fv({onClick:e,children:n,active:l,title:t}){return D.jsx("button",{onClick:e,title:t,style:{display:"flex",alignItems:"center",gap:"6px",padding:"5px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:500,cursor:"pointer",background:l?M.accent:M.surface2,color:l?"#fff":M.muted,border:`1px solid ${l?M.accent:M.border}`,transition:"all .15s"},children:n})}function Em({device:e,current:n,onClick:l}){const t=e.id===n;return D.jsx("button",{onClick:l,title:e.label==="Full"?"Full width":`${e.label}px`,style:{padding:"4px 10px",borderRadius:"5px",fontSize:"11px",fontWeight:500,cursor:"pointer",background:t?M.accent:"transparent",color:t?"#fff":M.muted,border:`1px solid ${t?M.accent:"transparent"}`,transition:"all .15s"},children:e.label==="Full"?"Full":`${e.label}px`})}function _m(){const[e,n]=_.useState(Sm),[l,t]=_.useState(jm),[r,o]=_.useState("html"),[a,i]=_.useState("full"),[v,c]=_.useState(!1),[g,m]=_.useState(!1),[p,w]=_.useState(!1),[b,z]=_.useState("Starter"),U=_.useRef(null);_.useEffect(()=>{const k=window.location.hash.match(/[#&]code=([^&]+)/);if(k){const y=Cm(k[1]);y&&(n(y),z(""))}},[]),_.useEffect(()=>{function f(k){U.current&&!U.current.contains(k.target)&&w(!1)}return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[]);const u=_.useCallback(()=>{navigator.clipboard.writeText(e),c(!0),setTimeout(()=>c(!1),2e3)},[e]),s=_.useCallback(()=>{const f=`${window.location.origin}${window.location.pathname}#code=${mv(e)}`;navigator.clipboard.writeText(f),window.history.replaceState(null,"",`#code=${mv(e)}`),m(!0),setTimeout(()=>m(!1),2500)},[e]),d=_.useCallback(f=>{n(la[f]),z(f),w(!1),o("html"),window.history.replaceState(null,"",window.location.pathname)},[]),h=pv.find(f=>f.id===a);return D.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",background:M.bg,color:M.text,fontFamily:"system-ui, sans-serif"},children:[D.jsxs("header",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",height:"48px",flexShrink:0,background:M.header,borderBottom:`1px solid ${M.border}`},children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[D.jsx("img",{src:Ic,alt:"VeloraCSS",style:{height:"32px",width:"auto"}}),D.jsx("div",{style:{width:"1px",height:"20px",background:M.border}}),D.jsx("span",{style:{fontSize:"11px",color:M.muted,background:M.surface2,padding:"2px 7px",borderRadius:"4px",border:`1px solid ${M.border}`},children:"v0.1.0"}),D.jsx("div",{style:{width:"1px",height:"20px",background:M.border}}),D.jsxs("div",{ref:U,style:{position:"relative"},children:[D.jsxs("button",{onClick:()=>w(f=>!f),style:{display:"flex",alignItems:"center",gap:"6px",padding:"5px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:500,cursor:"pointer",background:p?M.surface:"transparent",color:p?M.text:M.muted,border:`1px solid ${p?M.border:"transparent"}`,transition:"all .15s"},children:[b||"Examples",D.jsx("span",{style:{fontSize:"9px",opacity:.6},children:"▼"})]}),p&&D.jsx("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,background:M.surface,border:`1px solid ${M.border}`,borderRadius:"10px",padding:"6px",zIndex:100,minWidth:"180px",boxShadow:"0 8px 32px rgba(0,0,0,.5)"},children:Object.keys(la).map(f=>D.jsx("button",{onClick:()=>d(f),style:{display:"block",width:"100%",textAlign:"left",padding:"8px 12px",borderRadius:"6px",fontSize:"13px",cursor:"pointer",border:"none",background:b===f?M.surface2:"transparent",color:b===f?M.text:M.muted,fontWeight:b===f?600:400,transition:"all .1s"},children:f},f))})]})]}),D.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[D.jsx("a",{href:window.location.hostname==="localhost"?"http://localhost:3000":`${window.location.origin}/veloracss`,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:"6px",padding:"5px 12px",borderRadius:"6px",fontSize:"12px",fontWeight:500,cursor:"pointer",textDecoration:"none",background:M.surface2,color:M.muted,border:`1px solid ${M.border}`},children:"Next.js Demo"}),D.jsx(fv,{onClick:u,children:v?"✓ Copied":"Copy HTML"}),D.jsx(fv,{onClick:s,active:g,children:g?"✓ Link copied!":"🔗 Share"})]})]}),D.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[D.jsxs("div",{style:{width:"50%",display:"flex",flexDirection:"column",borderRight:`1px solid ${M.border}`},children:[D.jsx("div",{style:{display:"flex",alignItems:"center",borderBottom:`1px solid ${M.border}`,flexShrink:0,background:M.header,height:"38px"},children:["html","css"].map(f=>D.jsx("button",{onClick:()=>o(f),style:{padding:"0 18px",height:"38px",fontSize:"12px",fontWeight:500,background:"transparent",cursor:"pointer",border:"none",color:r===f?M.text:M.muted,borderBottom:r===f?`2px solid ${M.accent}`:"2px solid transparent",letterSpacing:"0.04em"},children:f.toUpperCase()},f))}),D.jsx("div",{style:{flex:1,overflow:"hidden"},children:r==="html"?D.jsx(dv,{value:e,onChange:f=>n(f??""),language:"html"},"html"):D.jsx(dv,{value:l,onChange:f=>t(f??""),language:"css"},"css")})]}),D.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[D.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 12px",height:"38px",flexShrink:0,background:M.header,borderBottom:`1px solid ${M.border}`},children:[D.jsx("span",{style:{fontSize:"11px",color:M.muted,letterSpacing:"0.05em",textTransform:"uppercase"},children:"Preview"}),D.jsx("div",{style:{display:"flex",gap:"2px",background:M.surface,padding:"2px",borderRadius:"7px",border:`1px solid ${M.border}`},children:pv.map(f=>D.jsx(Em,{device:f,current:a,onClick:()=>i(f.id)},f.id))})]}),D.jsx("div",{style:{flex:1,overflow:"auto",display:"flex",justifyContent:"center",background:a==="full"?"transparent":"#0d1422",padding:a==="full"?"0":"20px"},children:D.jsx("div",{style:{width:h.width?`${h.width}px`:"100%",height:a==="full"?"100%":"calc(100vh - 130px)",flexShrink:0,borderRadius:a==="full"?"0":"8px",overflow:"hidden",boxShadow:a==="full"?"none":"0 0 0 1px rgba(255,255,255,.08), 0 20px 60px rgba(0,0,0,.6)"},children:D.jsx(ym,{html:e,customCss:l,veloraCss:km})})})]})]})]})}_c(document.getElementById("root")).render(D.jsx(_.StrictMode,{children:D.jsx(_m,{})}));
