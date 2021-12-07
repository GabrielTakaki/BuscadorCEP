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
  const [zipValid, setZipValid] = useState(false);
  const [getCep, setGetCep] = useState<ZipResult[]>([]);
  const { findByZip } = useContext(myContext);

  const handleClick = () => {
    setGetInput(cep);
    if (cep.length < 8) {
      // global.alert('Cep inválido, digite apenas números');
      return setZipValid(true);
    }
    return setZipValid(false);
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
  }, [getInput, findByZip]);

  return (
    <>
      <Header />
      <div className="container">
        <Label
          id="cep"
          name="cep"
          value={ cep }
          onChange={ (e) => setCep(e.target.value) }
          type="number"
          text="Pesquise por CEP:"
        />
        { zipValid ? <p style={{ margin: '200px, auto' }} className="valid-msg">CEP inválido</p> : '' }
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
          state={ item.uf }
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
