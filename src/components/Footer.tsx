import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className="icons-section">
        <a href="https://github.com/GabrielTakaki" rel="noreferrer" target="_blank">
          <AiOutlineGithub size={ 25 } />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-takaki-junkes-ab5591205/" rel="noreferrer" target="_blank">
          <AiOutlineLinkedin size={ 25 } />
        </a>
      </section>
      <p className="copyright">Developed by Gabriel Takaki © { new Date().getFullYear() }</p>
    </footer>
  );
}

export default Footer;
