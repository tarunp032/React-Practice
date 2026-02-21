import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const fetchapi = async () => {
    const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(result.data);
  };

  useEffect(() => {
    fetchapi();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div>
        <div>
          <img src={product.image} width="100" alt={product.category} />

          <div>
            <h2>{product.title}</h2>

            <p>{product.description}</p>

            <div>
              <p>
                <b>Category:</b> {product.category}
              </p>
            </div>

            <div>₹{product.price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
