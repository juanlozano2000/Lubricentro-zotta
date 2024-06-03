// CartContainer.jsx
import React from 'react';
import { useCart } from '../../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import "./cartContainer.css";

const CartContainer = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();  // Utiliza useNavigate para la redirección

    const handleButtonClick = () => {
        if (cartItems.length > 0) {
            // Procesa la compra
            navigate('/checkout');
        } else {
            navigate('/');  // Redirige a la página de inicio
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    };

    return (
        <div className="container mt-5">
            <h2 className='p-4'>Mi Carrito</h2>
            <div className="items-container ">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index} className=' border d-flex align-items-center'>
                            <img src={item.Image} className="img_detail" alt={item.Title} />
                            <p className=''>{item.quantity} {item.Title} - ${item.precio}</p>
                        </div>
                    ))
                ) : (
                    <p>Tu carrito está vacío</p>
                )}
            </div>
            <p className='text-center mt-4 fs-3'>Total: ${calculateTotal().toFixed(2)}</p>
            <div className="d-flex justify-content-center p-5">
                <button type="button" className="btn btn-primary btn-lg" onClick={handleButtonClick}>
                    {cartItems.length > 0 ? 'Comprar' : 'Ver productos'}
                </button>
            </div>
        </div>
    );
};

export default CartContainer;
