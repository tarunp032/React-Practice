import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../slice/productSlice";
import { addToCart, incrementQty, decrementQty } from "../slice/cartSlice";
import { addToWishList, removeFromWishList } from "../slice/wishListSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import useViewMode from "../hooks/useViewMode";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { view, toggleView } = useViewMode();

  const currentUser = useSelector((state) => state.auth.currentUser);

  const { items = [], status, error } = useSelector((state) => state.data);

  const cartItems = useSelector((state) => state.cart.cartItems || []);

  const wishListItems = useSelector(
    (state) => state.wishlist?.wishListItems || [],
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [dispatch, status]);

  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "failed") return <h2>Error: {error}</h2>;

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Search
  const filteredData = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()),
  );

  // Sort
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortType === "PRICE_LOW_HIGH") return a.price - b.price;
    if (sortType === "PRICE_HIGH_LOW") return b.price - a.price;
    return 0;
  });

  return (
    <div className="product-page">
      <h2 className="product-title">Product List</h2>

      {/* Controls */}
      <div className="product-controls">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <button
          className="control-btn"
          onClick={() => setSortType("PRICE_LOW_HIGH")}
        >
          Price ↑
        </button>

        <button
          className="control-btn"
          onClick={() => setSortType("PRICE_HIGH_LOW")}
        >
          Price ↓
        </button>

        <button className="control-btn view-btn" onClick={toggleView}>
          Switch to {view === "card" ? "Table" : "Card"} View
        </button>
      </div>

      {/* Products Grid */}
      <div className={view === "card" ? "products-grid" : "products-table"}>
        {sortedData.map((product) => {
          const cartItem = cartItems.find((c) => c.id === product.id);
          const wishItem = wishListItems.find((w) => w.id === product.id);

          return (
            <div
              key={product.id}
              className={view === "card" ? "product-card" : "product-row"}
            >
              <h3>{product.title}</h3>

              <LazyLoadImage
                src={product.thumbnail}
                alt={product.title}
                effect="blur"
                className="product-img"
                onClick={() => setSelectedProduct(product)}
              />

              <p className="product-desc">{product.description}</p>

              <p className="product-price">
                <b>Price:</b> ${product.price}
              </p>

              {/* CART */}
              {!cartItem ? (
                <button
                  className="primary-btn"
                  onClick={() => {
                    if (!currentUser) {
                      alert("Please signup first!");
                      navigate("/signup");
                      return;
                    }
                    dispatch(addToCart(product));
                  }}
                >
                  Add to Cart 🛒
                </button>
              ) : (
                <div className="qty-box">
                  <button onClick={() => dispatch(decrementQty(product.id))}>
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => dispatch(incrementQty(product.id))}>
                    +
                  </button>
                </div>
              )}

              {/* WISHLIST */}
              {!wishItem ? (
                <button
                  className="wishlist-btn"
                  onClick={() => {
                    if (!currentUser) {
                      alert("Please signup first!");
                      navigate("/signup");
                      return;
                    }
                    dispatch(addToWishList(product));
                  }}
                >
                  ❤️ Wishlist
                </button>
              ) : (
                <button
                  className="wishlist-remove-btn"
                  onClick={() => dispatch(removeFromWishList(product.id))}
                >
                  Remove ❤️
                </button>
              )}

              <button
                className="details-btn"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProduct.title}</h3>
            <img src={selectedProduct.thumbnail} alt="" />
            <p>${selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
