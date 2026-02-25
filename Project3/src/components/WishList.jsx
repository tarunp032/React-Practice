import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishList } from "../slice/wishListSlice";
import { useNavigate } from "react-router-dom";
import useViewMode from "../hooks/useViewMode";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { view, toggleView } = useViewMode();

  const wishListItems = useSelector(
    (state) => state.wishlist?.wishListItems || [],
  );

  const totalPrice = wishListItems.reduce(
    (total, item) => total + item.price,
    0,
  );

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">My Wishlist ❤️</h2>

      <button className="wishlist-toggle-btn" onClick={toggleView}>
        Switch to {view === "card" ? "Table" : "Card"} View
      </button>

      {wishListItems.length === 0 ? (
        <p className="wishlist-empty">No items in wishlist</p>
      ) : view === "card" ? (
        <>
          <div className="wishlist-card-grid">
            {wishListItems.map((item) => (
              <div key={item.id} className="wishlist-card">
                <h3 className="wishlist-card-title">{item.title}</h3>

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="wishlist-card-img"
                />

                <p className="wishlist-card-price">
                  <b>Price:</b> ${item.price}
                </p>

                <div className="wishlist-card-buttons">
                  <button
                    className="wishlist-remove-btn"
                    onClick={() => dispatch(removeFromWishList(item.id))}
                  >
                    Remove
                  </button>

                  <button
                    className="wishlist-view-btn"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="wishlist-total">
            Total Wishlist Value: ${totalPrice}
          </h3>
        </>
      ) : (
        <>
          <table className="wishlist-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishListItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="wishlist-table-img"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="wishlist-remove-btn"
                      onClick={() => dispatch(removeFromWishList(item.id))}
                    >
                      Remove
                    </button>

                    <button
                      className="wishlist-view-btn"
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="wishlist-total">
            Total Wishlist Value: ${totalPrice}
          </h3>
        </>
      )}
    </div>
  );
};

export default Wishlist;
