// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();  // Hook para la navegación programática

  const goToCart = () => {
    navigate('/cart');  // Navegar a la página del carrito
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand text-white-50" to="/">
            Lubricentro Zotta
            <span className="material-symbols-outlined">build_circle</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="material-symbols-outlined">menu_open</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav w-100`}>
              <Link to="/" className="nav-link">Inicio</Link>
              <Link to="/Category/Lubricantes" className="nav-link">Lubricantes</Link>
              <Link to="/Category/Filtros" className="nav-link">Filtros</Link>
              <Link to="/Category/Refrigeracion" className="nav-link">Refrigeración</Link>
            </ul>
          </div>
          <i className="bi bi-cart-check-fill" onClick={goToCart} style={{ cursor: 'pointer' }}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
