import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="main-nav">
        <Link to="/" className="nav-logo-text">
            <h4>Bootcamp DevSuperior</h4>
        </Link> 
    </nav>
)

export default Navbar;