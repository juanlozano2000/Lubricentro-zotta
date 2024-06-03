import React from 'react';
import Navbar from "./components/navbar/navbar.jsx";
import ItemListContainer from "./components/itemListConteiner/ItemListConteiner.jsx";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from './context/CartContext.jsx';
import CartWidget from './components/CartWidget/CartWidget.jsx';
import CartContainer from "./components/CartConteiner/CartConteiner.jsx";
import { Checkout } from './components/Checkout/Checkout.jsx';
import PurchaseSummary from './components/PurchaseSummary/PurchaseSummary.jsx';
import CartContainer from "./components/CartConteiner/CartConteiner.jsx"; // Asegúrate de que el path está bien importado
import { Checkout } from './components/Checkout/Checkout.jsx';
import PurchaseSummary from './components/PurchaseSummary/PurchaseSummary.jsx';


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
      <BrowserRouter>
        <CartProvider>
          <Navbar /> 
          <CartWidget />
          <Routes>
            <Route path='/' element={<ItemListConteiner saludo="Nuestros productos" />} />
            <Route path='/Category/:idCategory' element={<ItemListConteiner saludo="Nuestros productos" />}/>
            <Route path="/" element={<ItemListConteiner />} />
            <Route path="/ItemDetailContainer/:id_product" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/purchase-summary" element={<PurchaseSummary />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
