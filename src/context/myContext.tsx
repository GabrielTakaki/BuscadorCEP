import React from 'react';

interface DefaultValue {
  findAddress: (zip: number) => void;
  findZip: (street: string, city: string, state: string) => void;
}

const myContext = React.createContext<DefaultValue | undefined>(undefined);

export default myContext;
