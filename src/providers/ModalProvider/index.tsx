'use client';

import React, {
  Dispatch,
  FC,
  KeyboardEventHandler,
  ReactEventHandler,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import {
  CloseDelay,
  ModalProviderConfig,
  UseModalEventHandler,
} from '../../types';

/**
 * @typedef {object} ModalProviderProps - Properties for the ModalProvider component
 * @property {React.ReactNode} children - Content inside the modal
 * @property {string} [modalKey='root'] - Unique key for the modal
 * @property {string} [className=''] - Additional class name applied to the modal
 * @property {ModalProviderConfig} attributes - Additional attributes for ModalProvider
 */
type ModalProviderProps = {
  children: ReactNode;
} & ModalProviderConfig;

type ModalContextProps = {
  close: () => void;
  getModal: () => HTMLDialogElement | null;
  modalKey: string;
  open: Open;
} | null;

type Open = (
  dispatch: Dispatch<SetStateAction<boolean>>,
  closeDelay?: CloseDelay,
  onClose?: UseModalEventHandler,
  disableEsc?: boolean,
  unlockBodyScroll?: boolean,
) => void;

type ModalRef = {
  closeDelay: () => number;
  closeTimer: NodeJS.Timeout | undefined;
  isClosing: boolean;
  isEscDisabled: boolean;
  onCloseStart: UseModalEventHandler | undefined;
  onCloseEnd: ReturnType<UseModalEventHandler>;
};

const DEFAULT_MODAL_REF: ModalRef = {
  isEscDisabled: false,
  closeTimer: undefined,
  closeDelay: () => 0,
  isClosing: false,
  onCloseStart: undefined,
  onCloseEnd: undefined,
} as const;

export const ModalContext = createContext<ModalContextProps>(null);

/**
 * @function ModalProvider
 * @param {ModalProviderProps} props - Properties for the ModalProvider component
 * @returns {React.ReactNode} - Rendering result of the ModalProvider component
 */
export const ModalProvider: FC<ModalProviderProps> = ({
  modalKey = 'root',
  children,
  className = '',
  ...attributes
}) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const modalRef = useRef<ModalRef>(DEFAULT_MODAL_REF);
  const setModalOpen = useRef<Dispatch<SetStateAction<boolean>> | undefined>(
    undefined,
  );

  const onKeyDown: KeyboardEventHandler<HTMLDialogElement> = useCallback(
    (e) => {
      e.preventDefault();
      if (
        !modalRef.current.isEscDisabled &&
        e.key.toLocaleLowerCase() === 'escape'
      ) {
        close();
      }
    },
    [],
  );

  const open: Open = (
    dispatch,
    closeDelay = DEFAULT_MODAL_REF.closeDelay,
    onCloseStart,
    disableEsc = DEFAULT_MODAL_REF.isEscDisabled,
    unlockBodyScroll = false,
  ) => {
    modalRef.current = {
      ...DEFAULT_MODAL_REF,
      isEscDisabled: disableEsc,
      onCloseStart,
      closeDelay,
    };

    /**
     * The React.KeyboardEventHandler<HTMLDialogElement>(onKeyDown) doesn't work on Safari v17.2.1 (Mac OS 14.2.1)
     */
    dialog.current?.addEventListener(
      'keydown',
      onKeyDown as unknown as EventListenerOrEventListenerObject,
      true,
    );

    setModalOpen.current = dispatch;
    setModalOpen.current(true);
    if (!unlockBodyScroll) {
      document.body.classList.add('use-modal-scroll-lock');
    }

    dialog.current?.showModal();
  };

  const close = () => {
    if (modalRef.current.isClosing || dialog.current === null) return;
    modalRef.current.isClosing = true;
    clearTimeout(modalRef.current.closeTimer);
    modalRef.current.onCloseEnd =
      typeof modalRef.current.onCloseStart !== 'undefined'
        ? modalRef.current.onCloseStart(dialog.current)
        : undefined;

    modalRef.current.closeTimer = setTimeout(() => {
      dialog.current?.close();
    }, modalRef.current.closeDelay());
  };

  const onClose: ReactEventHandler<HTMLDialogElement> = () => {
    document.body.classList.remove('use-modal-scroll-lock');
    if (typeof setModalOpen.current !== 'undefined') {
      setModalOpen.current(false);
      setModalOpen.current = undefined;
    }
    dialog.current?.removeEventListener(
      'keydown',
      onKeyDown as unknown as EventListenerOrEventListenerObject,
    );
    if (typeof modalRef.current.onCloseEnd !== 'undefined') {
      modalRef.current.onCloseEnd();
    }
    modalRef.current = DEFAULT_MODAL_REF;
  };

  useEffect(() => {
    return () => {
      const { current: dialogElement } = dialog;

      dialogElement?.removeEventListener(
        'keydown',
        onKeyDown as unknown as EventListenerOrEventListenerObject,
      );

      if (modalRef.current.closeTimer) {
        clearTimeout(modalRef.current.closeTimer);
      }
    };
  }, [onKeyDown]);

  const getModal = () => dialog.current;

  return (
    <ModalContext.Provider
      value={{
        getModal,
        open,
        close,
        modalKey,
      }}
    >
      {children}
      <dialog
        className={`use-modal-container ${className}`}
        ref={dialog}
        onClose={onClose}
        key={modalKey}
        {...attributes}
      ></dialog>
    </ModalContext.Provider>
  );
};
