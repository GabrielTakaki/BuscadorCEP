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
  const [street, setStreet] = useState('');
  const [state, setState] = useState('AC');
  const [clicked, setClicked] = useState(false);
  const { findByAddress } = useContext(myContext);
  const [search, setSearch] = useState<ZipResult[]>([]);

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
      <div className="container">
        <StatesSelect
          onChange={ (e) => setState(e.target.value) }
          value={ state }
        />
        <Label
          id="city"
          name="city"
          value={ city }
          onChange={ (e) => setCity(e.target.value) }
          type="text"
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
      <table className="table">
        <tbody className="table__body">
          <tr className="table__header">
            <th>CEP</th>
            <th>Logradouro</th>
          </tr>
          {search && search.map((item, index) => 
            <tr className="table__header" data-testid={ `cep-${index}` } key={ item.cep }>
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
