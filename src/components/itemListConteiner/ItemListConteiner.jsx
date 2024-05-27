import React, { useEffect, useState } from 'react';
import data from "../../bbdd/zotta.json";
import { useParams, Link } from "react-router-dom";
import "./intemListContainer.css";

const ItemListConteiner = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const newProducts = idCategory
      ? data.filter((producto) => producto.Category === idCategory)
      : data;
    setProducts(newProducts);
  }, [idCategory]);

  return (
    <div className='border border-danger d-flex justify-content-center'>
      <div className="container-fluid row products_container">
        {products.map((product) => (
          <div key={product.id_product} className="col-md-4 mb-4 card_father">
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.Image} className="card-img-top" alt={product.Title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{product.Title}</h5>
                <Link to={`/ItemDetailContainer/${product.id_product}`} className="btn btn_addToCart">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListConteiner;
