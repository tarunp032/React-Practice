import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ThreeDots } from "react-loader-spinner";
import useTheme from "./hooks/useTheme";
import useViewMode from "./hooks/useViewMode";

const Product = ({ user, cart, setCart, wishList, setWishList }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");
  const [loading, setLoading] = useState(true);

  const { darkMode, toggleTheme } = useTheme();
  const { view, toggleView } = useViewMode();
  const navigate = useNavigate();

  // ---------------- FETCH PRODUCTS ----------------
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // ---------------- MODAL ----------------
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // ---------------- CART ----------------
  const updateCart = (item, type) => {
    if (!user) {
      alert("Please Signup First");
      navigate("/signup");
      return;
    }

    const exist = cart.find((c) => c.id === item.id);

    if (type === "add") {
      exist
        ? setCart(
            cart.map((c) =>
              c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c,
            ),
          )
        : setCart([...cart, { ...item, quantity: 1 }]);
    }

    if (type === "inc") {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c,
        ),
      );
    }

    if (type === "dec") {
      setCart(
        cart
          .map((c) =>
            c.id === item.id ? { ...c, quantity: c.quantity - 1 } : c,
          )
          .filter((c) => c.quantity > 0),
      );
    }
  };

  // ---------------- WISHLIST ----------------
  const toggleWishList = (item) => {
    if (!user) {
      alert("Please Signup First");
      navigate("/signup");
      return;
    }

    const exist = wishList.find((w) => w.id === item.id);

    exist
      ? setWishList(wishList.filter((w) => w.id !== item.id))
      : setWishList([...wishList, item]);
  };

  // ---------------- SEARCH ----------------
  const filteredData = products.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()),
  );

  // ---------------- SORT ----------------
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortType === "PRICE_LOW_HIGH") return a.price - b.price;
    if (sortType === "PRICE_HIGH_LOW") return b.price - a.price;
    return 0;
  });

  const totalItems = cart.reduce((t, i) => t + i.quantity, 0);

  return (
    <div className={`product-page ${darkMode ? "dark" : ""}`}>
      {/* HEADER */}
      <div className="product-header">
        <h1>Our Products</h1>

        <div className="header-actions">
          <button onClick={toggleTheme} className="theme-btn">
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          <button onClick={() => navigate("/cart")} className="cart-btn">
            🛒 Cart <span className="badge">{totalItems}</span>
          </button>

          <button onClick={() => navigate("/wishlist")} className="wish-btn">
            ❤️ Wishlist ({wishList.length})
          </button>

          <button onClick={toggleView} className="view-btn">
            {view === "table" ? "Card View" : "Table View"}
          </button>
        </div>
      </div>

      {/* SEARCH + SORT */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search by title or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <div className="sort-buttons">
          <button onClick={() => setSortType("PRICE_LOW_HIGH")}>Price ↑</button>
          <button onClick={() => setSortType("PRICE_HIGH_LOW")}>Price ↓</button>
        </div>
      </div>

      {/* PRODUCTS */}
      {loading ? (
        <div className="loader">
          <ThreeDots height="80" width="80" color="#2563eb" />
        </div>
      ) : (
        <div className={view === "card" ? "product-grid" : "product-table"}>
          {sortedData.map((item) => {
            const cartItem = cart.find((c) => c.id === item.id);
            const wishItem = wishList.find((w) => w.id === item.id);

            return (
              <div
                key={item.id}
                className={view === "card" ? "product-card" : "table-row"}
              >
                <LazyLoadImage
                  src={item.thumbnail}
                  alt={item.title}
                  effect="blur"
                  className="product-img"
                  onClick={() => openModal(item)}
                />

                <div className="product-info">
                  <h3>{item.title}</h3>
                  <p className="desc">{item.description.substring(0, 80)}...</p>
                  <p className="price">$ {item.price}</p>
                  <p className="rating">⭐ {item.rating}</p>
                </div>

                <div className="product-actions">
                  {!cartItem ? (
                    <button
                      onClick={() => updateCart(item, "add")}
                      className="add-btn"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="quantity-box">
                      <button onClick={() => updateCart(item, "dec")}>-</button>
                      <span>{cartItem.quantity}</span>
                      <button onClick={() => updateCart(item, "inc")}>+</button>
                    </div>
                  )}

                  <button
                    onClick={() => toggleWishList(item)}
                    className={wishItem ? "wish-active" : "wish-btn2"}
                  >
                    {wishItem ? "♥ Added" : "♡ Wishlist"}
                  </button>

                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="details-btn"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProduct.title}</h3>

            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />

            <p>
              <b>Price:</b> ${selectedProduct.price}
            </p>
            <p>{selectedProduct.description}</p>

            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
