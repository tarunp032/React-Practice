import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Product from "./Product";
import axios from "axios";
import Signup from "./Signup";
import Login from "./Login";

const App = () => {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    setData(result.data.products);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // console.log(`>>>>>data`, data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<Product data={data} />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
