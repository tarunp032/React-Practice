import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../slice/authSlice";
import useTheme from "../hooks/useTheme";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { darkMode, toggleTheme } = useTheme();

  const currentUser = useSelector((state) => state.auth.currentUser);

  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const wishListItems = useSelector(
    (state) => state.wishlist?.wishListItems || [],
  );

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalWishListItems = wishListItems.length;

  const handleLogout = () => {
    dispatch(logoutUser()); // ✅ Redux clear
    navigate("/");
  };

  const handleProtectedNavigation = (path) => {
    if (!currentUser) {
      alert("Please signup first!");
      navigate("/signup");
      return;
    }
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="logo">
          ShopEase
        </NavLink>

        <span
          className="nav-link"
          style={{ cursor: "pointer" }}
          onClick={() => handleProtectedNavigation("/cart")}
        >
          🛒 Cart {totalCartItems > 0 && `(${totalCartItems})`}
        </span>

        <span
          className="nav-link"
          style={{ cursor: "pointer" }}
          onClick={() => handleProtectedNavigation("/wishlist")}
        >
          ❤️ Wishlist {totalWishListItems > 0 && `(${totalWishListItems})`}
        </span>
      </div>

      <div className="nav-right">
        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>

        {!currentUser ? (
          <NavLink to="/signup" className="nav-btn">
            Signup
          </NavLink>
        ) : (
          <>
            <span className="user-name">👤 {currentUser.name}</span>

            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
