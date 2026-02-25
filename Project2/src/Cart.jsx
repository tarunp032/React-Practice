import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTheme from "./hooks/useTheme";
import useViewMode from "./hooks/useViewMode";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const { view, toggleView } = useViewMode();

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  const updateQuantity = (id, type) => {
    if (type === "inc") {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }

    if (type === "dec") {
      setCart(
        cart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0)
      );
    }
  };

  const filtered = cart.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  let sortedFiltered = [...filtered];
  if (sortType === "PRICE_LOW_HIGH")
    sortedFiltered.sort((a, b) => a.price - b.price);
  if (sortType === "PRICE_HIGH_LOW")
    sortedFiltered.sort((a, b) => b.price - a.price);

  const totalPrice = sortedFiltered.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={`${darkMode ? "dark-container" : "light-container"} cart-page`}>
      <h2>My Cart</h2>

      <div className="cart-controls">
        <input
          placeholder="Search in cart..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <div className="action-buttons">
          <button 
            className="sort-btn" 
            onClick={() => setSortType("PRICE_LOW_HIGH")}
          >
            Price ↑
          </button>
          <button 
            className="sort-btn"
            onClick={() => setSortType("PRICE_HIGH_LOW")}
          >
            Price ↓
          </button>
          <button className="view-toggle-btn" onClick={toggleView}>
            Switch to {view === "table" ? "Card" : "Table"}
          </button>
        </div>
      </div>

      {sortedFiltered.length === 0 ? (
        <p className="no-items">No items found</p>
      ) : view === "table" ? (
        <table className="table-view">
          <tbody>
            {sortedFiltered.map((item) => (
              <tr key={item.id} className="table-row">
                <td className="image-cell">
                  <img src={item.thumbnail} width="60" alt={item.title} />
                </td>
                <td className="title-cell">{item.title}</td>
                <td className="price-cell">₹{item.price}</td>
                <td className="qty-cell">
                  <button 
                    className="qty-btn dec-btn"
                    onClick={() => updateQuantity(item.id, "dec")}
                  >
                    -
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button 
                    className="qty-btn inc-btn"
                    onClick={() => updateQuantity(item.id, "inc")}
                  >
                    +
                  </button>
                </td>
                <td className="total-cell">₹{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="card-container">
          {sortedFiltered.map((item) => (
            <div key={item.id} className="card-item">
              <img src={item.thumbnail} width="100" alt={item.title} />
              <h4 className="card-title">{item.title}</h4>
              <p className="card-price">Price: ${item.price}</p>
              <div className="qty-controls">
                <button 
                  className="qty-btn dec-btn"
                  onClick={() => updateQuantity(item.id, "dec")}
                >
                  -
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button 
                  className="qty-btn inc-btn"
                  onClick={() => updateQuantity(item.id, "inc")}
                >
                  +
                </button>
              </div>
              <p className="card-total">Total: ₹{item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      )}

      {sortedFiltered.length > 0 && (
        <div className="grand-total">
          <h3>Grand Total: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
