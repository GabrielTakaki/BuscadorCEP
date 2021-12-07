import React from 'react';
import '../styles/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <h3 className="main__title">Seja bem-vindo ao BuscadorCEP!</h3>
        <p className="main__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui ipsam, tempora animi voluptatum molestiae eum et nemo ad voluptas officiis. Sequi, perspiciatis? Ratione quibusdam similique nemo id voluptas incidunt labore. Aut eveniet veniam dicta natus obcaecati iusto excepturi quam est nihil, nesciunt officiis repellat beatae dolores facere doloremque animi!</p>
      </main>
      <Footer />
    </>
  );
}

export default Home;
