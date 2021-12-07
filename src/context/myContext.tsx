import React from 'react';

interface DefaultValue {
  findByZip: (zip: string) => void;
  findByAddress: (street: string, city: string, state: string) => void;
}

const defaultsState = {
  findByZip: (zip: string) => {},
  findByAddress: (street: string, city: string, state: string) => {},
}

const myContext = React.createContext<DefaultValue>(defaultsState);

export default myContext;
