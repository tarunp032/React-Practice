import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Header from "./components/Header";

const PrivateRoute = ({ childern }) => {
  const isLoggedIn = localStorage.getItem("user");
  return isLoggedIn ? childern : <Navigate to="/login" />;
};
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/products"
          element={
            
              <Product />
           
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
