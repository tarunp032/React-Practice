import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);

  const fetchApi1 = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProduct1(res.data.products);
  };

  const fetchApi2 = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProduct2(res.data);
  };

  useEffect(() => {
    fetchApi1();
    fetchApi2();
  }, []);

  return (
    <div className="product-page">
      <h1 className="product-title">Our Products</h1>

      <div className="product-container">

        {/* ===== API 1 : DummyJSON ===== */}
        {product1.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />

            <div className="product-content">
              <span className="category">{item.category}</span>
              <h3>{item.title}</h3>
              <p className="description">
                {item.description.substring(0, 100)}...
              </p>

              <div className="product-meta">
                <span className="price">₹ {item.price}</span>
                <span className="rating">⭐ {item.rating}</span>
              </div>
            </div>
          </div>
        ))}

        {/* ===== API 2 : FakeStore ===== */}
        {product2.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="product-content">
              <span className="category">{item.category}</span>
              <h3>{item.title}</h3>
              <p className="description">
                {item.description.substring(0, 100)}...
              </p>

              <div className="product-meta">
                <span className="price">₹ {item.price}</span>
                <span className="rating">⭐ {item.rating.rate}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Product;
