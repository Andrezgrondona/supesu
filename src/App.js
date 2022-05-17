/* -------------------------- Routing y Navegacion -------------------------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Cart from "./views/Cart/Cart";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
 /* -------------------------- Routing y Navegacion -------------------------- */

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemCount from "./components/ItemCount/ItemCount";
import NavbarBoostrap from "./components/NavbarBoostrap/NavbarBoostrap";
import Item from "./components/Item/Item";
import ItemList from "./components/ItemList/ItemList"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";





import React, {useState} from "react";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact  path="/" element={<Home/>}/>
          <Route exact  path="/products" element={<ItemListContainer/>}/>
          <Route exact  path="/product/:productId" element={<ItemDetailContainer/>}/>
          <Route exact  path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route exact  path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>


     /*  <div className="App">
        <NavbarBoostrap />
        <ItemListContainer/>
        <ItemDetailContainer/>
        <ItemDetail/>
    </div> */
    
  );
}

export default App;




