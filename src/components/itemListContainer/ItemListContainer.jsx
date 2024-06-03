import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from "../../db/db.js";
import { useParams, Link } from "react-router-dom";
import "./intemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productsZotta"));
    const productsList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setProducts(productsList);
  };

  useEffect(() => {
    getProducts();
  }, [idCategory]);

  return (
    <div className='d-flex justify-content-center'>
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

export default ItemListContainer;