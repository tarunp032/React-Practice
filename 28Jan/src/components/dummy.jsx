import React, { useEffect, useState } from "react";
import axios from "axios";
import useTable from "../hooks/useTable";

const Dummy = () => {
  const [products, setProducts] = useState([]);
  const { view, toggleView } = useTable();

  const fetchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {/* 🔁 TOGGLE BUTTON */}
      <div style={{ padding: "20px" }}>
        <button onClick={toggleView}>
          Switch to {view === "card" ? "Table" : "Card"}
        </button>
      </div>

      {/* ================= CARD VIEW ================= */}
      {view === "card" && (
        <div style={styles.container}>
          {products.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.thumbnail} alt={item.title} style={styles.image} />

              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.category}>{item.category}</p>

              <p>
                <b>Price:</b> ₹{item.price}
              </p>
              <p>
                <b>Discount:</b> {item.discountPercentage}%
              </p>
              <p>
                <b>Rating:</b> {item.rating} ⭐
              </p>

              <p>
                <b>Stock:</b> {item.stock}
              </p>
              <p>
                <b>Status:</b> {item.availabilityStatus}
              </p>

              <p>
                <b>Brand:</b> {item.brand}
              </p>

              <p style={styles.desc}>{item.description}</p>

              <div style={styles.tags}>
                {item.tags.map((tag, index) => (
                  <span key={index} style={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={styles.reviewBox}>
                <b>Reviews:</b>
                {item.reviews.slice(0, 2).map((rev, i) => (
                  <p key={i} style={styles.review}>
                    ⭐ {rev.rating} - {rev.comment}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= TABLE VIEW ================= */}
      {view === "table" && (
        <div style={{ padding: "20px" }}>
          <table border="1" cellPadding="8" width="100%">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Rating</th>
                <th>Stock</th>
                <th>Brand</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>₹{item.price}</td>
                  <td>{item.discountPercentage}%</td>
                  <td>{item.rating} ⭐</td>
                  <td>{item.stock}</td>
                  <td>{item.brand}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "18px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "12px",
    fontSize: "14px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  title: {
    fontSize: "16px",
    margin: "5px 0",
  },
  category: {
    fontSize: "13px",
    color: "gray",
  },
  desc: {
    fontSize: "13px",
    marginTop: "6px",
  },
  tags: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap",
    marginTop: "6px",
  },
  tag: {
    background: "#eee",
    padding: "3px 6px",
    borderRadius: "5px",
    fontSize: "12px",
  },
  reviewBox: {
    marginTop: "8px",
    fontSize: "13px",
  },
  review: {
    margin: "3px 0",
  },
};

export default Dummy;
