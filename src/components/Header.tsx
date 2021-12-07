import React from 'react'
import efrete from '../assets/efrete.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <section className="header__section">
        <Link className="link" to="/">
          <img className="img-logo" src={ efrete } alt="e-frete logo" />
        </Link>
        <nav className="header__nav">
          <Link to="/" className="link">
            <button className="header__btn">Página inicial</button>
          </Link>
          <Link to="/findByZip" className="link">
            <button className="header__btn">Procurar por CEP</button>
          </Link>
          <Link to="/findByAddress" className="link">
            <button className="header__btn">Procurar por endereço</button>
          </Link>
        </nav>
      </section>
    </header>
  )
}

export default Header;
