import React from 'react';
import { ButtonProps } from '../interfaces';

const Button: React.FC<ButtonProps> = ({ text, onClick, classNameDiv, classNameButton, id }) => {
  return (
    <div className={ classNameDiv }>
      <button className={ classNameButton } onClick={ onClick } id={ id }>{ text }</button>
    </div>
  );
}

export default Button;
