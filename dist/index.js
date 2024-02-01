import React, { createContext, useRef, useCallback, useEffect, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return _extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  _extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var ModalError = /** @class */function (_super) {
  __extends(ModalError, _super);
  function ModalError() {
    return _super.call(this, 'useModal must be used within a ModalProvider') || this;
  }
  return ModalError;
}(Error);
var DEFAULT_MODAL_REF = {
  isEscDisabled: false,
  closeTimer: undefined,
  modalCloseDelay: function modalCloseDelay() {
    return 0;
  },
  isClosing: false,
  onCloseStart: undefined,
  onCloseEnd: undefined
};
var ModalContext = /*#__PURE__*/createContext(null);
/**
 * @function ModalProvider
 * @param {ModalProviderProps} props - Properties for the ModalProvider component
 * @returns {React.ReactNode} - Rendering result of the ModalProvider component
 */
var ModalProvider = function ModalProvider(_a) {
  var _b = _a.modalKey,
    modalKey = _b === void 0 ? 'root' : _b,
    children = _a.children,
    _c = _a.className,
    className = _c === void 0 ? '' : _c,
    attributes = __rest(_a, ["modalKey", "children", "className"]);
  var dialog = useRef(null);
  var modalRef = useRef(DEFAULT_MODAL_REF);
  var setModalOpen = useRef(undefined);
  var onKeyDown = useCallback(function (e) {
    e.preventDefault();
    if (!modalRef.current.isEscDisabled && e.key.toLocaleLowerCase() === 'escape') {
      close();
    }
  }, []);
  var open = function open(dispatch, modalCloseDelay, onCloseStart, disableEsc, unlockBodyScroll) {
    var _a, _b;
    if (modalCloseDelay === void 0) {
      modalCloseDelay = DEFAULT_MODAL_REF.modalCloseDelay;
    }
    if (disableEsc === void 0) {
      disableEsc = DEFAULT_MODAL_REF.isEscDisabled;
    }
    if (unlockBodyScroll === void 0) {
      unlockBodyScroll = false;
    }
    modalRef.current = _assign(_assign({}, DEFAULT_MODAL_REF), {
      isEscDisabled: disableEsc,
      onCloseStart: onCloseStart,
      modalCloseDelay: modalCloseDelay
    });
    /**
     * The React.KeyboardEventHandler<HTMLDialogElement>(onKeyDown) doesn't work on Safari v17.2.1 (Mac OS 14.2.1)
     */
    (_a = dialog.current) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', onKeyDown, true);
    setModalOpen.current = dispatch;
    setModalOpen.current(true);
    if (!unlockBodyScroll) {
      document.body.classList.add('use-modal-scroll-lock');
    }
    (_b = dialog.current) === null || _b === void 0 ? void 0 : _b.showModal();
  };
  var close = function close() {
    if (modalRef.current.isClosing || dialog.current === null) return;
    modalRef.current.isClosing = true;
    clearTimeout(modalRef.current.closeTimer);
    modalRef.current.onCloseEnd = typeof modalRef.current.onCloseStart !== 'undefined' ? modalRef.current.onCloseStart(dialog.current) : undefined;
    modalRef.current.closeTimer = setTimeout(function () {
      var _a;
      (_a = dialog.current) === null || _a === void 0 ? void 0 : _a.close();
    }, modalRef.current.modalCloseDelay());
  };
  var onModalClose = function onModalClose() {
    var _a;
    document.body.classList.remove('use-modal-scroll-lock');
    if (typeof setModalOpen.current !== 'undefined') {
      setModalOpen.current(false);
      setModalOpen.current = undefined;
    }
    (_a = dialog.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('keydown', onKeyDown);
    if (typeof modalRef.current.onCloseEnd !== 'undefined') {
      modalRef.current.onCloseEnd();
    }
    modalRef.current = DEFAULT_MODAL_REF;
  };
  useEffect(function () {
    return function () {
      var dialogElement = dialog.current;
      dialogElement === null || dialogElement === void 0 ? void 0 : dialogElement.removeEventListener('keydown', onKeyDown);
      if (modalRef.current.closeTimer) {
        clearTimeout(modalRef.current.closeTimer);
      }
    };
  }, [onKeyDown]);
  var getModal = function getModal() {
    return dialog.current;
  };
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: {
      getModal: getModal,
      open: open,
      close: close,
      modalKey: modalKey
    }
  }, children, /*#__PURE__*/React.createElement("dialog", _assign({
    className: "use-modal-container ".concat(className),
    ref: dialog,
    onClose: onModalClose,
    key: modalKey
  }, attributes)));
};

/**
 * Custom hook for managing modal state and operations using React Hooks.
 *
 * @template T - Type of the template component's props.
 * @param {FC<T>} Template - The component that renders the content of the modal.
 * @param {Object} options - Options for configuring the modal behavior.
 * @param {boolean} [options.unlockBodyScroll] - Whether to lock scrolling when the modal is open.
 * @param {ModalCloseDelay} [options.modalCloseDelay] - Delay duration(ms) before closing the modal.
 * @param {OnModalClose} [options.onModalClose] - Callback function triggered when the modal is closed.
 * @param {boolean} [options.disableEsc] - Whether to disable closing the modal with the ESC key.
 * @returns {[FC<T>, OpenModal, CloseModal, boolean, HTMLDialogElement | null]} - Tuple containing the modal component, functions to open/close the modal, the modal's open state, and the modal's dialog element.
 */
var useModal = function useModal(Template, _a) {
  var _b = _a === void 0 ? {} : _a,
    unlockBodyScroll = _b.unlockBodyScroll,
    modalCloseDelay = _b.modalCloseDelay,
    onModalClose = _b.onModalClose,
    disableEsc = _b.disableEsc;
  var context = useContext(ModalContext);
  if (context === null) {
    throw new ModalError();
  }
  var getModal = context.getModal,
    open = context.open,
    closeModal = context.close,
    modalKey = context.modalKey;
  var _c = useState(false),
    isModalOpen = _c[0],
    setIsModalOpen = _c[1];
  var openModal = function openModal() {
    open(setIsModalOpen, modalCloseDelay, onModalClose, disableEsc, unlockBodyScroll);
  };
  var Modal = useCallback(function (props) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, isModalOpen && /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(Template, _assign({}, props)), getModal(), "modal-".concat(modalKey)));
  }, [Template, getModal, isModalOpen, modalKey]);
  return [Modal, openModal, closeModal, isModalOpen, getModal()];
};
export { ModalError, ModalProvider, useModal };
