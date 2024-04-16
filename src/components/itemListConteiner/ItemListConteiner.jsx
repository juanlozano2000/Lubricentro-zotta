import React, { useEffect, useState } from 'react';
import data from "../../bbdd/zotta.json";

const ItemListConteiner = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className=''>
      <h1>Lista de Productos</h1>
      <div className="container-fluid row">
        {products.map((product) => (
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src={product.Image} className="card-img-top" alt={product.Title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{product.Title}</h5>
                <button className="btn btn-primary">Añadir al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListConteiner;


