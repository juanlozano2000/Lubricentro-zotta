import React from 'react';
import Navbar from "./components/navbar/navbar.jsx";
import ItemListConteiner from "./components/itemListConteiner/ItemListConteiner.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> 
        
        <Routes>
          <Route path='/' element={<ItemListConteiner saludo="Nuestros productos" />} />
          <Route path='/Category/:idCategory' element={<ItemListConteiner saludo="Nuestros productos" />}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;

