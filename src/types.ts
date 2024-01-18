import { DialogHTMLAttributes } from 'react';

export type ModalProviderConfig = {
  modalKey?: string;
} & Omit<DialogHTMLAttributes<HTMLDialogElement>, 'onKeyDown'>;

export type ModalCloseDelay = () => number;

type OnModalCloseStart<T extends Function> = (e: HTMLDialogElement) => T | void;

type OnModalCloseEnd = () => void;

export type OnModalClose = OnModalCloseStart<OnModalCloseEnd>;

export type OpenModal = () => void;

export type CloseModal = () => void;
