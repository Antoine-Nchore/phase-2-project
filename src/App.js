import Button from 'react-bootstrap/Button';
import React, {useEffect, useState} from 'react';
import ProductInputForm from './Components/ProductInputForm';


const baseURL = "http://localhost:8001/products";

function App() {
  const [products, setProducts] = useState([])
  useEffect(()=> {
    fetch(baseURL)
    .then((res)=> res.json())
    .then((data)=> setProducts(data))

  },[]);

  return (
    <>
    <h1>Hello World</h1>
    <Button variant="warning">Warning</Button>
    <ProductInputForm />
    </>
  );
}

export default App;
