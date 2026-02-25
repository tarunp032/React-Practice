import { NavLink, useNavigate } from "react-router-dom";

function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");

    setUser(null);

    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="logo">
          ShopEase
        </NavLink>
      </div>

      <div className="nav-right">
        {!user ? (
          <NavLink to="/signup" className="nav-btn">
            Signup
          </NavLink>
        ) : (
          <>
            <span className="user-name">👤 {user?.name}</span>

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
