import React from 'react'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <section>
        <nav>
          <h4>BuscadorCEP</h4>
          <Link to="/findByZip">Procurar por CEP</Link>
          <Link to="/findByAddress">Procurar por endereço</Link>
        </nav>
      </section>
    </header>
  )
}

export default Header;
