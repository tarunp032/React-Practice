import React, { useState } from "react";
import useTheme from "./hooks/useTheme";
import useViewMode from "./hooks/useViewMode";

function WishList({ wishList, setWishList }) {
  const { darkMode } = useTheme();
  const { view, toggleView } = useViewMode();
  const [search, setSearch] = useState("");

  const removeFromWishList = (id) => {
    setWishList(wishList.filter((item) => item.id !== id));
  };

  const filtered = wishList.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPrice = filtered.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className={`${darkMode ? "dark-container" : "light-container"} wishlist-page`}>
      <h2>My Wishlist</h2>

      <div className="wishlist-controls">
        <input
          placeholder="Search wishlist..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <button className="view-toggle-btn" onClick={toggleView}>
          Switch to {view === "table" ? "Card" : "Table"}
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="no-items">No items found</p>
      ) : view === "table" ? (
        <table className="table-view">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="table-row">
                <td className="image-cell">
                  <img src={item.thumbnail} width="60" alt={item.title} />
                </td>
                <td className="title-cell">{item.title}</td>
                <td className="price-cell">${item.price}</td>
                <td className="action-cell">
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromWishList(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="card-container">
          {filtered.map((item) => (
            <div key={item.id} className="card-item wishlist-card">
              <img src={item.thumbnail} width="100" alt={item.title} />
              <h4 className="card-title">{item.title}</h4>
              <p className="card-price">Price: ₹{item.price}</p>
              <button 
                className="remove-btn card-remove-btn"
                onClick={() => removeFromWishList(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {filtered.length > 0 && (
        <div className="grand-total">
          <h3>Total Value: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default WishList;
