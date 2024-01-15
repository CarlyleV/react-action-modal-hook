import React, { DialogHTMLAttributes, FC, ReactNode } from 'react';

type ModalProviderConfig = {
    modalKey?: string;
} & Omit<DialogHTMLAttributes<HTMLDialogElement>, 'onKeyDown'>;
type CloseDelay = () => number;
type UseModalEventHandler = (e: HTMLDialogElement) => (() => void) | void;
type OpenModal = () => void;
type CloseModal = () => void;

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
/**
 * @function ModalProvider
 * @param {ModalProviderProps} props - Properties for the ModalProvider component
 * @returns {React.ReactNode} - Rendering result of the ModalProvider component
 */
declare const ModalProvider: FC<ModalProviderProps>;

/**
 * Custom hook for managing modal state and operations using React Hooks.
 *
 * @template T - Type of the template component's props.
 * @param {FC<T>} Template - The component that renders the content of the modal.
 * @param {Object} options - Options for configuring the modal behavior.
 * @param {boolean} [options.unlockBodyScroll] - Whether to lock scrolling when the modal is open.
 * @param {CloseDelay} [options.closeDelay] - Delay duration(ms) before closing the modal.
 * @param {UseModalEventHandler} [options.onClose] - Callback function triggered when the modal is closed.
 * @param {boolean} [options.disableEsc] - Whether to disable closing the modal with the ESC key.
 * @returns {[FC<T>, OpenModal, CloseModal, boolean, HTMLDialogElement | null]} - Tuple containing the modal component, functions to open/close the modal, the modal's open state, and the modal's dialog element.
 */
declare const useModal: <T extends object>(Template: React.FC<T>, { unlockBodyScroll, closeDelay, onClose, disableEsc, }?: {
    closeDelay?: CloseDelay | undefined;
    disableEsc?: boolean | undefined;
    onClose?: UseModalEventHandler | undefined;
    unlockBodyScroll?: boolean | undefined;
}) => [React.FC<T>, OpenModal, CloseModal, boolean, HTMLDialogElement | null];

export { ModalProvider, useModal };
