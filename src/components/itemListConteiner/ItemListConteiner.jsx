import React, { useEffect, useState } from 'react';
import data from "../../bbdd/zotta.json";
import {useParams} from "react-router-dom";

const ItemListConteiner = ({saludo}) => {
  const [products, setProducts] = useState([]);

  
  const {idCategory} = useParams()
  
  console.log(idCategory);
  
  useEffect(() => {

    if (idCategory) {
      //Filtrar los productos
      const newProducts = data.filter((producto) => producto.Category === idCategory)
      setProducts(newProducts);
    } else {
      setProducts(data);
    }
  }, [idCategory]);

  return (
    <div className=''>
      <h1>{saludo}</h1>
      <div className="container-fluid row">
        {products.map((product) => (

          <div key={product.id_product} className="col-md-4 mb-4">
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


