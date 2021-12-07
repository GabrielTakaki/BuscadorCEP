import React from 'react';
import { DefaultValue } from '../interfaces'

const defaultsState = {
  findByZip: (zip: string) => {},
  findByAddress: (street: string, city: string, state: string) => {},
}

const myContext = React.createContext<DefaultValue>(defaultsState);

export default myContext;
