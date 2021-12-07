import React from 'react';
import { AddressCardProps } from '../interfaces';

const AddressCard: React.FC<AddressCardProps> = ({ patio, neighborhood, city, zip, className }) => {
  return (
    <div className={ className }>
      <section>
        <h5>Logradouro</h5>
        <p>{ patio }</p>
      </section>
      <section>
        <h5>Bairro</h5>
        <p>{ neighborhood }</p>
      </section>
      <section>
        <h5>Cidade</h5>
        <p>{ city }</p>
      </section>
      <section >
        <h5>CEP</h5>
        <p>{ zip }</p>
      </section>
    </div>
  )
}

export default AddressCard;
