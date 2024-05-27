// ItemDetail.js
import React from 'react';
import { useCart } from "../../context/CartContext.jsx"; // Asegúrate de que la ruta sea correcta

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="container mt-4">
      <div className="card">
        <img src={product.Image} className="card-img-top img_detail" alt={product.Title} />
        <div className="card-body">
          <h5 className="card-title">{product.Title}</h5>
          <h3 className="card-price">${product.precio}</h3>
          <p className="card-text"><small className="text-muted">Categoría: {product.Category}</small></p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
