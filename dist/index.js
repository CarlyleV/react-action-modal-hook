import e,{createContext as r,useRef as o,useCallback as n,useEffect as t,useContext as c,useState as l}from"react";import{createPortal as u}from"react-dom";var i=function(e,r){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},i(e,r)};var s=function(){return s=Object.assign||function(e){for(var r,o=1,n=arguments.length;o<n;o++)for(var t in r=arguments[o])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e},s.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var a={isEscDisabled:!1,closeTimer:void 0,closeDelay:function(){return 0},isClosing:!1,onCloseStart:void 0,onCloseEnd:void 0},d=r(null),v=function(r){var c=r.modalKey,l=void 0===c?"root":c,u=r.children,i=r.className,v=void 0===i?"":i,f=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]])}return o}(r,["modalKey","children","className"]),p=o(null),y=o(a),m=o(void 0),E=n((function(e){e.preventDefault(),y.current.isEscDisabled||"escape"!==e.key.toLocaleLowerCase()||b()}),[]),b=function(){y.current.isClosing||null===p.current||(y.current.isClosing=!0,clearTimeout(y.current.closeTimer),y.current.onCloseEnd=void 0!==y.current.onCloseStart?y.current.onCloseStart(p.current):void 0,y.current.closeTimer=setTimeout((function(){var e;null===(e=p.current)||void 0===e||e.close()}),y.current.closeDelay()))};t((function(){return function(){var e=p.current;null==e||e.removeEventListener("keydown",E),y.current.closeTimer&&clearTimeout(y.current.closeTimer)}}),[E]);return e.createElement(d.Provider,{value:{getModal:function(){return p.current},open:function(e,r,o,n,t){var c,l;void 0===r&&(r=a.closeDelay),void 0===n&&(n=a.isEscDisabled),void 0===t&&(t=!1),y.current=s(s({},a),{isEscDisabled:n,onCloseStart:o,closeDelay:r}),null===(c=p.current)||void 0===c||c.addEventListener("keydown",E,!0),m.current=e,m.current(!0),t||document.body.classList.add("use-modal-scroll-lock"),null===(l=p.current)||void 0===l||l.showModal()},close:b,modalKey:l}},u,e.createElement("dialog",s({className:"use-modal-container ".concat(v),ref:p,onClose:function(){var e;document.body.classList.remove("use-modal-scroll-lock"),void 0!==m.current&&(m.current(!1),m.current=void 0),null===(e=p.current)||void 0===e||e.removeEventListener("keydown",E),void 0!==y.current.onCloseEnd&&y.current.onCloseEnd(),y.current=a},key:l},f)))},f=function(e){function r(){return e.call(this,"useModal must be used within a ModalProvider")||this}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}i(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}(r,e),r}(Error),p=function(r,o){var t=void 0===o?{}:o,i=t.unlockBodyScroll,a=t.closeDelay,v=t.onClose,p=t.disableEsc,y=c(d);if(null===y)throw new f;var m=y.getModal,E=y.open,b=y.close,O=y.modalKey,w=l(!1),h=w[0],C=w[1];return[n((function(o){return e.createElement(e.Fragment,null,h&&u(e.createElement(r,s({},o)),m(),"modal-".concat(O)))}),[r,m,h,O]),function(){E(C,a,v,p,i)},b,h,m()]};export{v as ModalProvider,p as useModal};
