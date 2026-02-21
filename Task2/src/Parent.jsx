import React, { useState } from "react";
import Child from "./Child";
import "./App.css";

const Parent = ({ data }) => {
  const [products, setProducts] = useState([]);

  const getDataFromChild = (dataFromChild) => {
    setProducts(dataFromChild);
  };

  return (
    <div className="container">
      <h2 className="page-title">Products</h2>

      <Child sendData={getDataFromChild} />

      <div className="product-grid">
        {data.map((item, index) => (
          <div className="product-card" key={item.id}>
            {/* FakeStore API */}
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p className="price">₹ {item.price}</p>

            {/* DummyJSON API (from Child) */}
            <p className="desc">
              {products[index]?.description}
            </p>
            <p>⭐ {products[index]?.rating}</p>
            <p className="stock">
              Stock: {products[index]?.stock}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parent;
