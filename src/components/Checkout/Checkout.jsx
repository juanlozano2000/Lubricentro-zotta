import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';  // Verifica que esta importación sea correcta
import { collection, addDoc } from "firebase/firestore";
import db from "../../db/db.js";  // Verifica que esta importación sea correcta
import "./checkout.css";

export const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    address: "",
    city: "",
    zip: ""
  });

  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const calculateTotal = () => cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  const handleChangeInput = (event) => {
    setDataForm({...dataForm, [event.target.name]: event.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      user: {...dataForm},
      products: cartItems,  // Esto debe ser un array, no un objeto
      total: calculateTotal()
    };

    try {
      const orderRef = collection(db, "orders");
      const response = await addDoc(orderRef, order);
      console.log("Order ID:", response.id);  // Log the order ID
      uploadOrder();
      /* clearCart(); */
      navigate('/purchase-summary', { state: { userData: dataForm, cartItems, total: calculateTotal()} });  // Ensure data is passed if needed
    } catch (error) {
      console.error("Error uploading order:", error);
    }
  };

  const uploadOrder = async (order) => {
    const orderRef = collection(db, "orders");
    const response = await addDoc(orderRef, order);
    console.log(response.id); // Correctamente cambiado a console.log
    return response.id;  // Retorna el ID de la orden para otros usos
  };

  return (
    <div>
      <div>Checkout</div>
      <div className=' d-flex justify-content-center'>
        <form className="form-container row g-3 border" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" name="email" className="form-control" id="inputEmail4" value={dataForm.email} onChange={handleChangeInput}/>
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">Dirección</label>
            <input type="text"  name="address" className="form-control" id="inputAddress" value={dataForm.address} onChange={handleChangeInput}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">Localidad</label>
            <input type="text"  name="city" className="form-control" id="inputCity" value={dataForm.city} onChange={handleChangeInput} />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">CP</label>
            <input type="text" name="zip" className="form-control" id="inputZip" value={dataForm.zip} onChange={handleChangeInput}/>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Estoy de acuerdo con los términos y condiciones
              </label>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center p-5">
            <button type="submit" className="btn btn-primary">Comprar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
