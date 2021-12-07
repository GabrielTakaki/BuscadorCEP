import React, { useState, useContext, useEffect } from 'react';
import Label from '../components/Label';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ZipResult } from '../interfaces';
import Button from '../components/Button';
import myContext from '../context/myContext';
import AddressCard from '../components/AddressCard';

const FindByZip: React.FC = () => {
  const [cep, setCep] = useState('');
  const [getInput, setGetInput] = useState('');
  const [getCep, setGetCep] = useState<ZipResult[]>([]);
  const { findByZip } = useContext(myContext);

  const handleClick = () => {
    setGetInput(cep);
    setCep('');
  }

  useEffect(() => {
    const validateCep = async () => {
      if ((/^[0-9]{8}$/).test(getInput)) {
        const res: any = await findByZip(getInput);
        return setGetCep([res]);
      }
    }
    validateCep();
  }, [getInput]);

  return (
    <>
      <Header />
      <div className="container">
        <Label
          id="cep"
          value={ cep }
          onChange={ (e) => setCep(e.target.value) }
          name="cep"
          text="Pesquise por CEP:"
          className="cep-input"
        />
        <Button
          id="cep-button"
          text="Buscar"
          onClick={ handleClick }
          classNameDiv="btn-div"
          classNameButton="btn-el"
        />
      </div>
      {getCep.length > 0 && getCep.map((item, index) => 
        <AddressCard
          key={ item.cep }
          zip={ item.cep }
          patio={ item.logradouro }
          neighborhood={ item.bairro }
          city={ item.localidade }
          data-testid={ `address-${index}` }
        />
      )}
      <Footer />
    </>
  );
}

export default FindByZip;
