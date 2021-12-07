import React from 'react'
import efrete from '../assets/efrete.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <section className="section-links">
        <Link className="link" to="/">
          <img className="img-logo" src={ efrete } alt="e-frete logo" />
        </Link>
        <nav className="nav-links">
        <button className="link-btn">
            <Link className="link" to="/">Página inicial</Link>
          </button>
          <button className="link-btn">
            <Link className="link" to="/findByZip">Procurar por CEP</Link>
          </button>
          <button className="link-btn">
            <Link className="link" to="/findByAddress">Procurar por endereço</Link>
          </button>
        </nav>
      </section>
    </header>
  )
}

export default Header;
