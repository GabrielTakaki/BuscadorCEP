import React from 'react';
import { AddressCardProps } from '../interfaces';

const AddressTable: React.FC<AddressCardProps> = ({ patio, city, zip, key }) => {
  return (
    <table className="address-table">
        <tbody>
          <tr className="table-header">
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Cidade</th>
          </tr>
          <tr className="table-header" key={ key }>
            <td>{ zip }</td>
            <td>{ patio }</td>
            <td>{ city }</td>
          </tr>
        </tbody>
      </table>
  );
}

export default AddressTable;
