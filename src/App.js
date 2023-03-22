import ProductListPage from './components/ProductListPage';
import HomePage from './components/HomePage';
import { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SingleProductPage from './components/SingleProductPage';


const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:products", element: <ProductListPage /> },
  { path: "/:products/:productId", element: <SingleProductPage /> }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
