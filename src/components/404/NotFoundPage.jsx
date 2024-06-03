// components/NotFoundPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe en nuestra aplicación.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFoundPage;
