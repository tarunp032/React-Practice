import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Product from "./Product";
import Signup from "./Signup";
import ClipLoader from "react-spinners/ClipLoader";
import ProductDetails from "./ProductDetails";

const App = () => {
  const isSignup = localStorage.getItem("isSignup") === "true";
  const [appProducts, setAppProducts] = useState([]);
    const [loading, setLoading] = useState(true);

  const fetchFromApp = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setAppProducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchFromApp();
  }, []);

   if (loading) {
    return (
      <div className="loader-wrapper">
        <ClipLoader size={40} color="#6366f1" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/product"
          element={
            isSignup ? (
              <Product appData={appProducts} />
            ) : (
              <Navigate to="/signup" replace = "true" />
            )
          }
        />
        <Route
          path="/signup"
          element={isSignup ? <Navigate to="/product" replace /> : <Signup />}
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
