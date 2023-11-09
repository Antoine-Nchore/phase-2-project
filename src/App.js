import React, { useEffect, useState } from "react";
i; // mport AddProduct from "./Components/AddProduct";
import ProductInputForm from "./Components/ProductInputForm";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const baseURL = "http://localhost:8001/products";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return <ProductInputForm />;
}

export default App;
