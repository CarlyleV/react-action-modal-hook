import e,{createContext as r,useRef as o,useCallback as n,useEffect as t,useContext as l,useState as c}from"react";import{createPortal as u}from"react-dom";var i=function(e,r){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])},i(e,r)};var a=function(){return a=Object.assign||function(e){for(var r,o=1,n=arguments.length;o<n;o++)for(var t in r=arguments[o])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e},a.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var s=function(e){function r(){return e.call(this,"useModal must be used within a ModalProvider")||this}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}i(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}(r,e),r}(Error),d={isEscDisabled:!1,closeTimer:void 0,modalCloseDelay:function(){return 0},isClosing:!1,onCloseStart:void 0,onCloseEnd:void 0},v=r(null),f=function(r){var l=r.modalKey,c=void 0===l?"root":l,u=r.children,i=r.className,s=void 0===i?"":i,f=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]])}return o}(r,["modalKey","children","className"]),m=o(null),p=o(d),y=o(void 0),E=n((function(e){e.preventDefault(),p.current.isEscDisabled||"escape"!==e.key.toLocaleLowerCase()||b()}),[]),b=function(){p.current.isClosing||null===m.current||(p.current.isClosing=!0,clearTimeout(p.current.closeTimer),p.current.onCloseEnd=void 0!==p.current.onCloseStart?p.current.onCloseStart(m.current):void 0,p.current.closeTimer=setTimeout((function(){var e;null===(e=m.current)||void 0===e||e.close()}),p.current.modalCloseDelay()))};t((function(){return function(){var e=m.current;null==e||e.removeEventListener("keydown",E),p.current.closeTimer&&clearTimeout(p.current.closeTimer)}}),[E]);return e.createElement(v.Provider,{value:{getModal:function(){return m.current},open:function(e,r,o,n,t){var l,c;void 0===r&&(r=d.modalCloseDelay),void 0===n&&(n=d.isEscDisabled),void 0===t&&(t=!1),p.current=a(a({},d),{isEscDisabled:n,onCloseStart:o,modalCloseDelay:r}),null===(l=m.current)||void 0===l||l.addEventListener("keydown",E,!0),y.current=e,y.current(!0),t||document.body.classList.add("use-modal-scroll-lock"),null===(c=m.current)||void 0===c||c.showModal()},close:b,modalKey:c}},u,e.createElement("dialog",a({className:"use-modal-container ".concat(s),ref:m,onClose:function(){var e;document.body.classList.remove("use-modal-scroll-lock"),void 0!==y.current&&(y.current(!1),y.current=void 0),null===(e=m.current)||void 0===e||e.removeEventListener("keydown",E),void 0!==p.current.onCloseEnd&&p.current.onCloseEnd(),p.current=d},key:c},f)))},m=function(r,o){var t=void 0===o?{}:o,i=t.unlockBodyScroll,d=t.modalCloseDelay,f=t.onModalClose,m=t.disableEsc,p=l(v);if(null===p)throw new s;var y=p.getModal,E=p.open,b=p.close,C=p.modalKey,O=c(!1),w=O[0],h=O[1];return[n((function(o){return e.createElement(e.Fragment,null,w&&u(e.createElement(r,a({},o)),y(),"modal-".concat(C)))}),[r,y,w,C]),function(){E(h,d,f,m,i)},b,w,y()]};export{s as ModalError,f as ModalProvider,m as useModal};
