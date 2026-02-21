import React, { useEffect, useState } from "react";
import "./App.css";

const Product = ({ data }) => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    rating: "",
    description: "",
    category: "",
  });

  // API data set
  useEffect(() => {
    setProducts(data);
  }, [data]);

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // add product
  const handleSubmit = (e) => {
    e.preventDefault();

    setProducts([
      ...products,
      {
        title: formData.title,
        price: formData.price,
        image: formData.image,
        category: formData.category,
        description: formData.description,
        rating: { rate: formData.rating },
      },
    ]);

    setShowForm(false);
  };

  return (
    <div className="container">
      <div className="top-bar">
        <h2>Total Products: {products.length}</h2>
        <button className="add-btn" onClick={() => setShowForm(true)}>
          Add Product
        </button>
      </div>

      {showForm && (
        <form className="product-form" onSubmit={handleSubmit}>
          <input name="title" placeholder="Title" onChange={handleChange} />
          <input name="price" placeholder="Price" onChange={handleChange} />
          <input name="image" placeholder="Image URL" onChange={handleChange} />
          <input name="rating" placeholder="Rating" onChange={handleChange} />
          <input name="category" placeholder="Category" onChange={handleChange} />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.category} />
            <h4>{item.title}</h4>
            <p className="price">₹ {item.price}</p>
            <p>⭐ {item.rating?.rate}</p>
            <p className="desc">{item.description}</p>
            <span className="category">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
