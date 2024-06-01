// ItemDetail.js
import React, { useState } from 'react';
import { useCart } from "../../context/CartContext.jsx";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);  // Estado inicial para la cantidad

  const handleAddToCart = () => {
    addToCart({...product, quantity});  // Añade el producto y la cantidad al carrito
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <img src={product.Image} className="card-img-top img_detail" alt={product.Title} />
        <div className="card-body">
          <h5 className="card-title">{product.Title}</h5>
          <h3 className="card-price">${product.precio}</h3>
          <p className="card-text"><small className="text-muted">Categoría: {product.Category}</small></p>
          <select className="form-select quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="Otro">Otro</option>
          </select>
          <button className="btn btn-primary" onClick={handleAddToCart}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
