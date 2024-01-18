import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { ModalCloseDelay, ModalProviderConfig, OnModalClose } from '../../types';
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
type Open = (dispatch: Dispatch<SetStateAction<boolean>>, modalCloseDelay?: ModalCloseDelay, onModalClose?: OnModalClose, disableEsc?: boolean, unlockBodyScroll?: boolean) => void;
export declare const ModalContext: React.Context<ModalContextProps>;
/**
 * @function ModalProvider
 * @param {ModalProviderProps} props - Properties for the ModalProvider component
 * @returns {React.ReactNode} - Rendering result of the ModalProvider component
 */
export declare const ModalProvider: FC<ModalProviderProps>;
export {};
