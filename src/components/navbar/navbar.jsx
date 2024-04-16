import React from 'react';
import {Link, BrowserRouter } from 'react-router-dom'

const Navbar = () => {

  return (
    <><nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Lubricentro Zotta</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
          <ul class="navbar-nav d-flex justify-content-between" style={{ width: '50%' }}>
            <Link to="/" class="nav-Link">Inicio</Link>
            <Link to="/Category/Lubricantes" class="nav-Linknk">Lubricantes</Link>
            <Link to="/Category/Filtros" class="nav-Linknk">Filtros</Link>
            <Link to="/Category/Refrigeracion" class="nav-Linknk">Refrigeracion</Link>
          </ul>
        </div>
      </div>
    </nav></>
  );
};

export default Navbar;
