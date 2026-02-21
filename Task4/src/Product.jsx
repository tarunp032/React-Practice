import React, { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openModal = (product) => {
    setSelectProduct(product);
  };

  const closeModal = () => {
    setSelectProduct(null);
  };

  let cards = [];

  for (let i = 0; i < products.length; i++) {
    cards.push(
      <div key={products[i].id} style={cardStyle}>
        <LazyLoadImage
          src={products[i].image}
          effect="blur"
          alt={products[i].category}
          height="100"
        />
        <h4>{products[i].title}</h4>
        <p>₹ {products[i].price}</p>

        <button onClick={() => openModal(products[i])}>View Details</button>
      </div>,
    );
  }
  return (
    <>
      <div style={containerStyle}>{cards}</div>
      {selectedProduct && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h3>{selectedProduct.title}</h3>
            <img src={selectedProduct.image} alt="" height="150" />
            <p>
              <b>Price: ₹</b> {selectedProduct.price}
            </p>
            <p>
              <b>Description: </b>
              {selectedProduct.description}
            </p>
            <p>
              <b>Category: </b>
              {selectedProduct.category}
            </p>

            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  flexWarp: "wrap",
  gap: "20px",
  padding: "20px",
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  borderRadius: "8px",
  textAlign: "center",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0,0,0,0,5)",
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "350px",
};

export default Product;
