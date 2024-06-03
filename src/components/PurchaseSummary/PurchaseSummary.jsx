import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory

const PurchaseSummary = () => {
  const location = useLocation();
  const { userData, cartItems, total } = location.state; // Recupera los datos del estado de la navegación
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');  // Redirige a la página de inicio
  };

  return (
    <div className="container mt-5">
      <h2>Resumen de Compra</h2>
      <h3>Datos del Usuario:</h3>
      <p>Email: {userData.email}</p>
      <p>Dirección: {userData.address}</p>
      <p>Localidad: {userData.city}</p>
      <p>CP: {userData.zip}</p>

      <h3>Ítems Comprados:</h3>
      {cartItems.map((item, index) => (
        <div key={index} className="d-flex justify-content-between border-bottom mb-2">
          <span>{item.quantity}x {item.Title}</span>
          <span>${item.precio}</span>
        </div>
      ))}

      <h4 className="text-end">Total: ${total.toFixed(2)}</h4>
      <button type="button" className="btn btn-primary btn-lg" onClick={handleButtonClick}>Volver al inicio</button>
    </div>
  );
};

export default PurchaseSummary;
