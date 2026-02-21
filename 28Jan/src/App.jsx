import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Api from "./components/Api";
import Child from "./components/Child";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import ApiProduct from "./components/ApiProduct";
import { Suspense } from "react";
import UseEffectEvent from "./components/UseEffectEvent";
import Header from "./components/Header";
import Fake from "./components/fake";
import Dummy from "./components/dummy";
import { Counter } from "./features/Counter";

function App() {
  const isLogin = localStorage.getItem("isLogin") === "true";

  return (
    <BrowserRouter>
    <Header/>
    <Suspense fallback={<p>Loading products...</p>}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/login"
          element={isLogin ? <Navigate to="/product" replace /> : <Login />}
        />

        <Route path="/api" element={<Api />} />
        <Route path="/child" element={<Child />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/product"
          element={isLogin ? <Product /> : <Navigate to="/login" replace />}
        />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={isLogin? <Cart/> : <Navigate to="/login" replace/>}/>

        <Route path="/apiproduct" element={<ApiProduct/>}/>
        <Route path="/useeffect" element={<UseEffectEvent/>}/>
        <Route path="/" element={<Fake/>}/>
        <Route path="/dummy" element={<Dummy/>}/>
        <Route path="/counter" element={<Counter/>}/>
      </Routes>
       </Suspense>
    </BrowserRouter>
  );
}

export default App;
