import React, { useEffect, useState } from "react";
import Results from "./Components/Results";
import SearchBar from "./Components/SearchBar"
import { text } from "express";




const baseURL = "http://localhost:8001/products";


function App() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {setProducts(data);
      
      });
  }, []);

  const handleSearch = (text)=>{
    setSearchText(text);

  }

  return (
    <>
        <SearchBar  onSearch={handleSearch} products={products}/>
        <Results searchText={searchText} products={products} key={products.id} />
      
    </>
  );
}


export default App;



