import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import { useParams, Link, Navigate } from "react-router-dom";
import "./itemListContainer.css";

const ItemListImgContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const { idCategory } = useParams();

  const getProducts = async () => {
    setLoading(true);
    const productsRef = collection(db, "productsZotta");
    const q = idCategory ? query(productsRef, where("Category", "==", idCategory)) : productsRef;
    const querySnapshot = await getDocs(q);
    const productsList = querySnapshot.docs.map(doc => ({
      id_product: doc.id,
      ...doc.data()
    }));
    setProducts(productsList);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [idCategory]);

  useEffect(() => {
    if (!loading && idCategory && products.length === 0) {
      setRedirect(true); // No products found for this category
    }
  }, [loading, idCategory, products]);

  if (redirect) {
    return <Navigate to="/404" />;
  }

  if (loading) {
    return <div className='loader'>Cargando...</div>;
  }

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

export default ItemListImgContainer;
