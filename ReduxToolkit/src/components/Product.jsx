import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../slice/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const { items, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "failed") {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Product List</h2>

      {items.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <img src={product.thumbnail} alt={product.title} width="150" />
          <p>
            <strong>Category:</strong>
            {product.category}
          </p>
          <p>
            <strong>Rating:</strong>
            {product.rating}
          </p>
          <p>
            <strong>Stock:</strong>
            {product.stock}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Product;
