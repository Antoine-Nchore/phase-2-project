import React, { useEffect, useState } from "react";
import ProductInputForm from "./Components/ProductInputForm";
// import AddProduct from "./Components/AddProduct";

const baseURL = "http://localhost:8001/products";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ProductInputForm />
    </>
  );
}

export default App;
