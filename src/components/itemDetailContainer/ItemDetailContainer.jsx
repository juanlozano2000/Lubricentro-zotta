import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../../bbdd/zotta.json";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id_product } = useParams();

  console.log("ID del producto:", id_product); // Verificar el ID del producto obtenido de la URL

  useEffect(() => {
    console.log("Datos cargados:", data); // Verificar los datos cargados
    const foundProduct = data.find(p => p.id_product.toString() === id_product);
    console.log("Producto encontrado:", foundProduct); // Verificar si se encontró algún producto
    setProduct(foundProduct);
  }, [id_product]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <ItemDetail product={product} />  // Pasar `product` como prop a `ItemDetail`
  );
}

export default ItemDetailContainer;
