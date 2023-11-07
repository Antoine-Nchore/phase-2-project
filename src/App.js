
import React, {useEffect, useState} from 'react';
import Results from './Components/Results';


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
    <Results products={products}/>
    </>
  );
}

export default App;