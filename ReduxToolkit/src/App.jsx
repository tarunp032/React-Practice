import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Counter } from "./components/Counter";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Product from "./components/Product";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Counter/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/product" element={<Product/>}/>
    </Routes> 
    </BrowserRouter>
  );
};

export default App;
