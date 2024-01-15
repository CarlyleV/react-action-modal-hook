import { DialogHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
export type ModalProviderConfig = {
    modalKey?: string;
} & Omit<DialogHTMLAttributes<HTMLDialogElement>, 'onKeyDown'>;
export type CloseDelay = () => number;
export type UseModalEventHandler = (e: HTMLDialogElement) => (() => void) | void;
export type ModalProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export type OpenModal = () => void;
export type CloseModal = () => void;
