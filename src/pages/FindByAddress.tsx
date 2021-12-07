import React, { useState, useEffect, useContext } from 'react';
import Label from '../components/Label';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { ZipResult } from '../interfaces';
import myContext from '../context/myContext';
import StatesSelect from '../components/StateSelect';

const FindByAddress: React.FC = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('AC');
  const [street, setStreet] = useState('');
  const [clicked, setClicked] = useState(false);
  const [search, setSearch] = useState<ZipResult[]>([]);
  const { findByAddress } = useContext(myContext);

  const handleClick = () => {
    setClicked(true);
  }

  useEffect(() => {
    const getZip = async () => {
      if (clicked && city.length > 0) {
        const citySpace = city.replace(/ /g, '%20');
        const streetSpace = street.replace(/ /g, '+');
        const zip: any = await findByAddress(state, citySpace, streetSpace);
        setClicked(false);
        return setSearch(zip)
      }
    }
    getZip();
  }, [city, street, state, clicked, findByAddress]);
  return (
    <>
      <Header />
      <div className="cep-form">
        <StatesSelect
          onChange={ (e) => setState(e.target.value) }
          value={ state }
        />
        <Label
          id="city"
          name="city"
          value={ city }
          type="text"
          onChange={ (e) => setCity(e.target.value) }
          text="Cidade:"
          className="city-input"
        />
        <Label
          type="text"
          id="street"
          name="street"
          value={ street }
          onChange={ (e) => setStreet(e.target.value) }
          text="Rua:"
          className="street-input"
        />
        <Button
          text="Buscar"
          classNameDiv="btn-div"
          classNameButton="btn-el"
          onClick={ handleClick }
        />
      </div>
      <table className="address-table">
        <tbody>
          <tr className="table-header">
            <th>CEP</th>
            <th>Logradouro</th>
          </tr>
          {search && search.map((item, index) => 
            <tr className="table-header" data-testid={ `cep-${index}` } key={ item.logradouro }>
              <td>{ item.cep }</td>
              <td>{ item.logradouro }</td>
            </tr>
          )}
        </tbody>
      </table>
      <Footer />
    </>
  );
}

export default FindByAddress;
