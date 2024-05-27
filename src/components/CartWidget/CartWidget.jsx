// CartWidget.js
import React from 'react';
import { useCart } from "../../context/CartContext.jsx";

const CartWidget = () => {
  const { cartItems, isCartVisible, toggleCartVisibility } = useCart();

  if (!isCartVisible) return null;

  return (
    <div>
      <button onClick={toggleCartVisibility}>Cerrar Carrito</button>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.Title} - ${item.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default CartWidget;
