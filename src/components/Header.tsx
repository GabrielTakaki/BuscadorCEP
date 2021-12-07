import React from 'react'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <section className="section-links">
        <h4 className="title">
          <Link className="link" to="/">BuscadorCEP</Link>
        </h4>
        <nav className="nav-links">
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
