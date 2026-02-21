import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parent from "./Parent";
import Product from "./Product";
import axios from "axios";
const App = () => {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setProducts(result.data);
  }

  useEffect (() => {
    fetchData();
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/parent" element={<Parent data ={products} />} />
        <Route path="/product" element={<Product data={products}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
