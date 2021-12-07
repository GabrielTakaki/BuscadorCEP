import React from 'react';

interface LabelProps {
  id: string;
  text: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Label: React.FC<LabelProps> = ({ id, text, value, name, onChange }) => {
  return (
    <label htmlFor={ id }>
      <p>{ text }</p>
      <input
        id={ id }
        type="text"
        onChange={ onChange }
        value={ value }
        name={ name }
      />
    </label>
  );
};

export default Label;