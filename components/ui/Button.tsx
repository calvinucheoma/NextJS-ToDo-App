'use client';
import clsx from 'clsx'; // to render class names conditionally in a cleaner way
import { ReactNode } from 'react';

interface buttonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string | ReactNode; //we use ReactNode because we'll be sending some react icons as text values for the button
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({ type, text, onClick, actionButton }: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton && 'bg-orange-700 rounded-full p-2 text-white',
          'bg-orange-700 px-2 text-white'
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
