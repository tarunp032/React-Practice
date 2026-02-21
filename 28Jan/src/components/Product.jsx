import React, { useState, useEffect } from "react";
import Child from "./Child";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  // ---------------- LOAD CART FROM LOCALSTORAGE ----------------
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart && Array.isArray(savedCart)) {
      setCart(savedCart);
    }
  }, []);

  const receviedData = (apiData) => {
    setData(apiData);
  };

  // ---------------- CART FUNCTIONS ----------------

  const addToCart = (product) => {
    let copyCart = [...cart];
    let index = copyCart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      copyCart.push({ ...product, quantity: 1 });
    } else {
      copyCart[index].quantity++;
    }

    setCart(copyCart);
    localStorage.setItem("cart", JSON.stringify(copyCart));
  };

  const increaseQty = (id) => {
    let copyCart = [...cart];
    copyCart.forEach((item) => {
      if (item.id === id) item.quantity++;
    });

    setCart(copyCart);
    localStorage.setItem("cart", JSON.stringify(copyCart));
  };

  const decreaseQty = (id) => {
    let copyCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0);

    setCart(copyCart);
    localStorage.setItem("cart", JSON.stringify(copyCart));
  };

  // ---------------- TOTAL CART COUNT ----------------
  let totalItems = 0;
  cart.forEach((item) => {
    totalItems += item.quantity;
  });

  // ---------------- LOGOUT ----------------
  const handleLogout = () => {
    localStorage.setItem("isLogin");
    const result = localStorage.getItem("isLogin")
    console.log(`>>>>result`, result);
    
    navigate("/login", { replace: true });
  };
  // useEffect(() => {
  //   result();
  // },[])

  // ---------------- SEARCH ----------------
  const filteredData = data.filter(
    (item) =>
      item?.title?.toLowerCase().includes(search.toLowerCase()) ||
      item?.category?.toLowerCase().includes(search.toLowerCase()),
  );

  // ---------------- SORT ----------------
  const getSortedData = () => {
    let arr = [...filteredData];

    if (sortType === "PRICE_LOW_HIGH") arr.sort((a, b) => a.price - b.price);
    if (sortType === "PRICE_HIGH_LOW") arr.sort((a, b) => b.price - a.price);

    return arr;
  };

  const sortedData = getSortedData();

  return (
    <div className="app-bg">
      {/* TOP BAR */}
      <div className="top-bar-header">
        <h2>Products</h2>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

        {/* CART ICON */}
        <div className="cart-icon" onClick={() => navigate("/cart")}>
          🛒 {totalItems}
        </div>
      </div>

      <Child sendData={receviedData} />

      {/* SEARCH + SORT */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="sort-buttons">
          <button onClick={() => setSortType("PRICE_LOW_HIGH")}>Price ↑</button>
          <button onClick={() => setSortType("PRICE_HIGH_LOW")}>Price ↓</button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="product-container">
        {sortedData.map((item) => {
          const cartItem = cart.find((c) => c.id === item.id);

          return (
            <div className="product-card" key={item.id}>
              <LazyLoadImage
                src={item.thumbnail}
                alt={item.title}
                effect="blur"
                className="product-img"
              />

              <h2>{item.title}</h2>
              <p className="brand">{item.brand}</p>

              <p className="price">
                ₹{item.price}
                <span> ({item.discountPercentage}% OFF)</span>
              </p>

              <p className="rating">⭐ {item.rating}</p>
              <p className="desc">{item.description}</p>

              <button onClick={() => navigate(`/product/${item.id}`)}>
                View Details
              </button>

              {/* ADD TO CART / + - */}
              {!cartItem ? (
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              ) : (
                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              )}
            </div>
          );
        })}

        {sortedData.length === 0 && (
          <h2 className="no-result">No products found</h2>
        )}
      </div>
    </div>
  );
};

export default Product;
