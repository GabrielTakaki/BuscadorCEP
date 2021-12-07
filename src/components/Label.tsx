import React from 'react';
import { LabelProps } from '../interfaces';

const Label: React.FC<LabelProps> = ({ id, text, value, type, name, onChange, className }) => {
  return (
    <label htmlFor={ id }>
      <p>{ text }</p>
      <input
        id={ id }
        type={ type }
        onChange={ onChange }
        value={ value }
        name={ name }
        className={ className }
      />
    </label>
  );
};

export default Label;
