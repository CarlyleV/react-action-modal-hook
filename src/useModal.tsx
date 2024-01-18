import React, { FC, useCallback, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalError from './error/ModalError';
import { ModalContext } from './providers/ModalProvider';
import { CloseModal, ModalCloseDelay, OnModalClose, OpenModal } from './types';

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
export const useModal = <T extends object>(
  Template: FC<T>,
  {
    unlockBodyScroll,
    modalCloseDelay,
    onModalClose,
    disableEsc,
  }: {
    modalCloseDelay?: ModalCloseDelay;
    disableEsc?: boolean;
    onModalClose?: OnModalClose;
    unlockBodyScroll?: boolean;
  } = {},
): [FC<T>, OpenModal, CloseModal, boolean, HTMLDialogElement | null] => {
  const context = useContext(ModalContext);

  if (context === null) {
    throw new ModalError();
  }

  const { getModal, open, close: closeModal, modalKey } = context;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal: OpenModal = () => {
    open(
      setIsModalOpen,
      modalCloseDelay,
      onModalClose,
      disableEsc,
      unlockBodyScroll,
    );
  };

  const Modal = useCallback<FC<T>>(
    (props) => {
      return (
        <>
          {isModalOpen &&
            createPortal(
              <Template {...props} />,
              getModal() as Element,
              `modal-${modalKey}`,
            )}
        </>
      );
    },
    [Template, getModal, isModalOpen, modalKey],
  );

  return [Modal, openModal, closeModal, isModalOpen, getModal()];
};
