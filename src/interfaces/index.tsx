export interface ZipResult {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  complemento?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}

export interface AddressCardProps {
  patio: string;
  className?: string;
  city: string;
  neighborhood: string;
  zip: string;
  key: string;
}

export interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  classNameDiv: string;
  classNameButton: string;
  id?: string;
}

export interface DefaultValue {
  findByZip: (zip: string) => void;
  findByAddress: (street: string, city: string, state: string) => void;
}

export interface Props {
  children: React.ReactNode;
}

export interface LabelProps {
  id: string;
  text: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type: string;
}
