import React from 'react';
import { AddressCardProps } from '../interfaces';

const AddressCard: React.FC<AddressCardProps> = ({ patio, neighborhood, city, zip, key }) => {
  return (
    <div className="address" key={ key }>
      <section className="address__section">
        <h5 className="address__header">Logradouro</h5>
        <p>{ patio }</p>
      </section>
      <section className="address__section">
        <h5 className="address__header">Bairro</h5>
        <p>{ neighborhood }</p>
      </section>
      <section className="address__section">
        <h5 className="address__header">Cidade</h5>
        <p>{ city }</p>
      </section>
      <section className="address__section">
        <h5 className="address__header">CEP</h5>
        <p>{ zip }</p>
      </section>
    </div>
  )
}

export default AddressCard;
