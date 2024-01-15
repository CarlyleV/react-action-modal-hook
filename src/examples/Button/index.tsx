import clsx from 'clsx';
import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import './style.css';

type Props = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ children, className, ...attributes }) => {
  return (
    <button className={clsx(className, 'common-button')} {...attributes}>
      {children}
    </button>
  );
};
