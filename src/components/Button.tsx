import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  classNameDiv: string;
  classNameButton: string;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, classNameDiv, classNameButton, id }) => {
  return (
    <div className={ classNameDiv }>
      <button className={ classNameButton } onClick={ onClick } id={ id }>{ text }</button>
    </div>
  );
}

export default Button;
