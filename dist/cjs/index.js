"use strict";var e=require("react"),r=require("react-dom"),o=function(e,r){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},o(e,r)};var t=function(){return t=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},t.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var n={isEscDisabled:!1,closeTimer:void 0,closeDelay:function(){return 0},isClosing:!1,onCloseStart:void 0,onCloseEnd:void 0},c=e.createContext(null),l=function(e){function r(){return e.call(this,"useModal must be used within a ModalProvider")||this}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}o(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}(r,e),r}(Error);exports.ModalProvider=function(r){var o=r.modalKey,l=void 0===o?"root":o,u=r.children,s=r.className,i=void 0===s?"":s,a=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]])}return o}(r,["modalKey","children","className"]),d=e.useRef(null),f=e.useRef(n),v=e.useRef(void 0),p=e.useCallback((function(e){e.preventDefault(),f.current.isEscDisabled||"escape"!==e.key.toLocaleLowerCase()||y()}),[]),y=function(){f.current.isClosing||null===d.current||(f.current.isClosing=!0,clearTimeout(f.current.closeTimer),f.current.onCloseEnd=void 0!==f.current.onCloseStart?f.current.onCloseStart(d.current):void 0,f.current.closeTimer=setTimeout((function(){var e;null===(e=d.current)||void 0===e||e.close()}),f.current.closeDelay()))};e.useEffect((function(){return function(){var e=d.current;null==e||e.removeEventListener("keydown",p),f.current.closeTimer&&clearTimeout(f.current.closeTimer)}}),[p]);return e.createElement(c.Provider,{value:{getModal:function(){return d.current},open:function(e,r,o,c,l){var u,s;void 0===r&&(r=n.closeDelay),void 0===c&&(c=n.isEscDisabled),void 0===l&&(l=!1),f.current=t(t({},n),{isEscDisabled:c,onCloseStart:o,closeDelay:r}),null===(u=d.current)||void 0===u||u.addEventListener("keydown",p,!0),v.current=e,v.current(!0),l||document.body.classList.add("use-modal-scroll-lock"),null===(s=d.current)||void 0===s||s.showModal()},close:y,modalKey:l}},u,e.createElement("dialog",t({className:"use-modal-container ".concat(i),ref:d,onClose:function(){var e;document.body.classList.remove("use-modal-scroll-lock"),void 0!==v.current&&(v.current(!1),v.current=void 0),null===(e=d.current)||void 0===e||e.removeEventListener("keydown",p),void 0!==f.current.onCloseEnd&&f.current.onCloseEnd(),f.current=n},key:l},a)))},exports.useModal=function(o,n){var u=void 0===n?{}:n,s=u.unlockBodyScroll,i=u.closeDelay,a=u.onClose,d=u.disableEsc,f=e.useContext(c);if(null===f)throw new l;var v=f.getModal,p=f.open,y=f.close,m=f.modalKey,b=e.useState(!1),E=b[0],C=b[1];return[e.useCallback((function(n){return e.createElement(e.Fragment,null,E&&r.createPortal(e.createElement(o,t({},n)),v(),"modal-".concat(m)))}),[o,v,E,m]),function(){p(C,i,a,d,s)},y,E,v()]};
