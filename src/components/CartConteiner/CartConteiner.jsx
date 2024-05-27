// CartContainer.jsx
import React from 'react';
import { useCart } from '../../context/CartContext.jsx';

const CartContainer = () => {
    const { cartItems } = useCart();

    return (
        <div className="container mt-4">
            <h2>Mi Carrito</h2>
            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div key={index}>
                        <p>{item.Title} - ${item.precio}</p>
                    </div>
                ))
            ) : (
                <p>Tu carrito está vacío</p>
            )}
        </div>
    );
};

export default CartContainer;
