import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQty, decrementQty } from "../slice/cartSlice";
import useViewMode from "../hooks/useViewMode";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems || []);

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");
  const { view, toggleView } = useViewMode();

  // Filter
  const filtered = cart.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  // Sort
  let sortedFiltered = [...filtered];
  if (sortType === "PRICE_LOW_HIGH")
    sortedFiltered.sort((a, b) => a.price - b.price);

  if (sortType === "PRICE_HIGH_LOW")
    sortedFiltered.sort((a, b) => b.price - a.price);

  // Total
  const totalPrice = sortedFiltered.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-page">
      <h2 className="cart-title">My Cart</h2>

      {/* Controls */}
      <div className="cart-controls">
        <button className="cart-toggle-btn" onClick={toggleView}>
          Switch to {view === "card" ? "Table" : "Card"} View
        </button>

        <input
          className="cart-search"
          placeholder="Search in cart..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="cart-sort-btn"
          onClick={() => setSortType("PRICE_LOW_HIGH")}
        >
          Price ↑
        </button>

        <button
          className="cart-sort-btn"
          onClick={() => setSortType("PRICE_HIGH_LOW")}
        >
          Price ↓
        </button>
      </div>

      {sortedFiltered.length === 0 ? (
        <p className="cart-empty">No items found</p>
      ) : view === "card" ? (
        <div className="cart-grid">
          {sortedFiltered.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.thumbnail} alt={item.title} className="cart-img" />

              <h4>{item.title}</h4>
              <p className="cart-price">₹{item.price}</p>

              <div className="cart-qty">
                <button onClick={() => dispatch(decrementQty(item.id))}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => dispatch(incrementQty(item.id))}>
                  +
                </button>
              </div>

              <p className="cart-item-total">
                Total: ₹{item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="cart-table-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {sortedFiltered.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="cart-table-img"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>₹{item.price}</td>
                  <td className="cart-table-qty">
                    <button onClick={() => dispatch(decrementQty(item.id))}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementQty(item.id))}>
                      +
                    </button>
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {sortedFiltered.length > 0 && (
        <h3 className="cart-grand-total">Grand Total: ₹{totalPrice}</h3>
      )}
    </div>
  );
}

export default Cart;
