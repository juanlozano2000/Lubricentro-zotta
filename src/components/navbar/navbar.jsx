import React, { useEffect, useRef } from 'react';
import {Link, BrowserRouter } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {



  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-white-50" href="#">Lubricentro Zotta 
          <img src="src\img\herramienta-de-reparacion.png" alt="icon_title" className='ms-2'/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon icon-burger text-white-50"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav w-100`}>
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/Category/Lubricantes" className="nav-link">Lubricantes</Link>
            <Link to="/Category/Filtros" className="nav-link">Filtros</Link>
            <Link to="/Category/Refrigeracion" className="nav-link">Refrigeración</Link>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
