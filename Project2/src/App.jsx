import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Product from "./Product";
import Cart from "./Cart";
import WishList from "./WishList";
import Signup from "./Signup";
import Header from "./Header";
import ProductDetails from "./ProductDetails";

const App = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishList")) || [],
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [cart, wishList]);

  useEffect(() => {
    if (!user) {
      setCart([]);
      setWishList([]);
      localStorage.removeItem("cart");
      localStorage.removeItem("wishList");
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />

      <Routes>
        <Route
          path="/"
          element={
            <Product
              user={user}
              cart={cart}
              setCart={setCart}
              wishList={wishList}
              setWishList={setWishList}
            />
          }
        />

        <Route
          path="/cart"
          element={
            user ? (
              <Cart cart={cart} setCart={setCart} />
            ) : (
              <Navigate to="/signup" />
            )
          }
        />

        <Route
          path="/wishlist"
          element={
            user ? (
              <WishList wishList={wishList} setWishList={setWishList} />
            ) : (
              <Navigate to="/signup" />
            )
          }
        />

        <Route path="/signup" element={<Signup setUser={setUser} />} />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              user={user}
              cart={cart}
              setCart={setCart}
              wishList={wishList}
              setWishList={setWishList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
