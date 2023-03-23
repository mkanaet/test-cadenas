import HomePage, { loader as dataLoader } from './components/HomePage';
import ProductListPage from './components/ProductListPage';
import SingleProductPage, { loader as detailsLoader } from './components/SingleProductPage';
import { useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import RootLayout from './components/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: dataLoader },
      { path: "products", element: <ProductListPage /> },
      { path: ":productId", element: <SingleProductPage />, loader: detailsLoader },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
