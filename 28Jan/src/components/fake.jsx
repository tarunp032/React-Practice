import React, { useEffect, useState } from "react";
import axios from "axios";
import useTable from "../hooks/useTable";
import { Counter } from "../features/Counter";

const Fake = () => {
  const [products, setProducts] = useState([]);
  const { view, toggleView } = useTable();

  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <Counter/>
    <div style={{ padding: "20px" }}>
      <button onClick={toggleView}>
        Switch to {view === "card" ? "Table" : "Card"}
      </button>

      {view === "card" ? (
        <div style={styles.container}>
          {products.map((p) => (
            <div key={p.id} style={styles.card}>
              <img src={p.image} style={styles.image} />
              <h4>{p.title}</h4>
              <p>₹{p.price}</p>
              <p>{p.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <table border="1" cellPadding="8" style={{ marginTop: "15px" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>₹{p.price}</td>
                <td>{p.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "15px",
    marginTop: "15px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "14px",
  },
  image: {
    width: "100%",
    height: "120px",
    objectFit: "contain",
  },
};

export default Fake;
