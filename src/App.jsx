import React from 'react';
import Navbar from "./components/navbar/navbar.jsx";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from './context/CartContext.jsx';
import CartWidget from './components/CartWidget/CartWidget.jsx';
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import { Checkout } from './components/Checkout/Checkout.jsx';
import PurchaseSummary from './components/PurchaseSummary/PurchaseSummary.jsx';
import NotFoundPage from './components/404/NotFoundPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar /> 
      <CartWidget />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo="Nuestros productos" />} />
        <Route path='/Category/:idCategory' element={<ItemListContainer saludo="Nuestros productos" />}/>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/ItemDetailContainer/:id_product" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/purchase-summary" element={<PurchaseSummary />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
