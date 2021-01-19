import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <h2 className="text-title">
            Desafio do Capítulo 3, <br /> 
            Bootcamp DevSuperior
        </h2>
        <p className="text-subtitle">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <p/>
            Favor observar as instruções passadas no capítulo sobre a elaboração <br />
            deste projeto. <p/>
            Este design foi adaptado a partir de Ant Design System for Figma, de <br />
            Mateusz Wierzbicki:&nbsp; 
            <a className="email-subtitle" href="mailto:antforfigma@gmail.com">
                antforfigma@gmail.com
            </a>
        </p>
        <Link to="/search" className="text-link">
            <Button text="Começar" />
        </Link>
    </div>
);

export default Home;