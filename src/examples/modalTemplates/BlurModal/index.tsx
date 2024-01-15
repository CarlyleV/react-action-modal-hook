import clsx from 'clsx';
import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { Button } from '../../Button';
import './style.css';

type Props = {
  children: ReactNode;
  closeModal: () => void;
  isClosing: boolean;
  title: string;
} & HTMLAttributes<HTMLDivElement>;

export const BlurModal: FC<Props> = ({
  children,
  isClosing,
  title,
  closeModal,
  ...attributes
}) => {
  return (
    <div
      className={clsx('use-modal-container', isClosing && '-close')}
      {...attributes}
    >
      <div className={'background'} onClick={closeModal}></div>
      <section className={'modal-body'}>
        <header className={'header'}>{title}</header>
        <div className={'main'}>{children}</div>
        <footer className={'footer'}>
          <Button onClick={closeModal}>Close</Button>
        </footer>
      </section>
    </div>
  );
};
