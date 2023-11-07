import Button from 'react-bootstrap/Button';
import React, {useEffect, useState} from 'react';


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
    </>
  );
}

export default App;
