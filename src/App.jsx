import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar.jsx';
import HomeView from './routes/HomeView'
import ItemDetailView from './routes/ItemDetailView'
import CartView from './routes/CartView'
import { CartProvider } from './context/CartContext';
import './App.css';


function App() {
  
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<HomeView />} />
            <Route exact path='/category/:categoryId' element={<HomeView />} />
            <Route exact path='/product/:productId' element={<ItemDetailView />} />
            <Route exact path='/cart' element={<CartView />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
