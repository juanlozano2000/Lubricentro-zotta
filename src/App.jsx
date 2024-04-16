import React from 'react';
import Navbar from "./components/navbar/navbar.jsx";
import ItemListConteiner from "./components/itemListConteiner/ItemListConteiner.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> 
        
        <ItemListConteiner />


        <Routes>
          

        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
