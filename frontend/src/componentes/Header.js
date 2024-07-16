

import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header className="header-nav-container">
            <img id="imgHeader" alt="logoGrinsa" src="./imagenes/grinsa.jpg" />
            <nav className='navbar'>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/calidad">Calidad</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}
