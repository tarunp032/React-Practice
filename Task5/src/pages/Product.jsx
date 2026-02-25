import React, { useState } from "react";
import { useSelector } from "react-redux";
import useTheme from "../hooks/useTheme";
import useViewMode from "../hooks/useViewMode";

const Product = () => {
  const products = useSelector((state) => state.products.items);
  const [search, setSearch] = useState("");

  const {darkMode, toggleTheme} = useTheme();
  const {view, toggleView} = useViewMode();

  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  return ( 
  <div>
    <h2>Products</h2>
    <button onClick={toggleTheme}>
    {darkMode ? "Light Mode" : "Dark Mode"}
    </button>

    <button onClick={toggleView}>
      {view === "table" ? "Card View" : "Table View"}
    </button>

    <br/> <br/>

    <input
      type="text"
      placeholder="Serach Product"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <br/> <br/>

    {view === "table" ? (
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => {
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          })}
        </tbody>
      </table>
    ) : (
      <div style={{display: "flex", flexWrap:"wrap"}}>
        {filtered.map((item) => {
          <div
          key={item.id}
          style={{
            border:"1px solid gray",
            padding: "10px",
            margin:"10px",
            width: "200px"
          }}
          >
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>
          <p>{item.category}</p>
          </div>
        })}
      </div>
    )}

  </div>
  )
};

export default Product;
