import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const fetchapi = async () => {
    const result = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(result.data);
  };

  useEffect(() => {
    fetchapi();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
  <div className="product-details-container">
    <div className="product-card">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="product-content">
        <div className="product-image">
          <img src={product.thumbnail} alt={product.category} />
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          <div className="product-meta">
            <span><b>Brand:</b> {product.brand}</span>
            <span><b>Category:</b> {product.category}</span>
            <span><b>Rating:</b> ⭐ {product.rating}</span>
          </div>

          <div className="product-price">
            ${product.price}
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default ProductDetails;
