import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './App.css'
import Signup from "./components/Signup";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Wishlist from "./components/WishList";

function App() {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Product />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Protected Cart */}
        <Route
          path="/cart"
          element={
            currentUser ? (
              <Cart />
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />

        {/* Protected Wishlist */}
        <Route
          path="/wishlist"
          element={
            currentUser ? (
              <Wishlist />
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;