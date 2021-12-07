import React from 'react';
import { AddressCardProps } from '../interfaces';

const AddressCard: React.FC<AddressCardProps> = ({ patio, neighborhood, city, key, state }) => {
  return (
    <div className="address" key={ key }>
      <section className="address__section">
        <h5 className="address__header">Logradouro</h5>
        <p id="patio">{ patio }</p>
      </section>
      <section className="address__section">
        <h5 className="address__header">Bairro</h5>
        <p id="neighborhood">{ neighborhood }</p>
      </section>
      <section className="address__section">
        <h5 className="address__header">Cidade</h5>
        <p id="city">{ city }</p>
      </section>
      <section className="address__section">
        <h5 className="address__header">Estado</h5>
        <p id="state">{ state }</p>
      </section>
    </div>
  )
}

export default AddressCard;
