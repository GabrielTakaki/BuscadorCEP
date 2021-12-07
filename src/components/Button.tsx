import React from 'react';
import { ButtonProps } from '../interfaces';

const Button: React.FC<ButtonProps> = ({ text, onClick, id }) => {
  return (
    // <div className="">
      <button className="btn" onClick={ onClick } id={ id }>{ text }</button>
    // </div>
  );
}

export default Button;
