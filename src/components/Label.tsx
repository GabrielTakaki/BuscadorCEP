import React from 'react';
import { LabelProps } from '../interfaces';

const Label: React.FC<LabelProps> = ({ id, text, value, type, name, onChange, placeholder }) => {
  return (
    <label htmlFor={ id } className="label">
      <p>{ text }</p>
      <input
        id={ id }
        type={ type }
        onChange={ onChange }
        value={ value }
        name={ name }
        className="label__input"
        placeholder={  placeholder }
      />
    </label>
  );
};

export default Label;
