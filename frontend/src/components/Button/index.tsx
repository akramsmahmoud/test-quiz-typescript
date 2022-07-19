import React from 'react';
import './button.css';

type Props = {
  children: string;
  type?: string;
  onClick: () => void;
};

function Button(props: Props) {
  const { children, type, onClick } = props;
  const btnClass = type && `button__${type}`;
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
