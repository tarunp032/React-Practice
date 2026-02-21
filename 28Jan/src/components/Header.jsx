import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const isLogin = localStorage.getItem("isLogin") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "15px", background: "#f0dcdc" }}>
      <NavLink to="/">Home</NavLink>{" | "}
      <NavLink to="/about">About</NavLink>{" | "}
      <NavLink to="/api">API</NavLink>{" | "}
      <NavLink to="/child">Child</NavLink>{" | "}
      <NavLink to="/apiproduct">ApiProduct</NavLink>{" | "}
      <NavLink to="/useeffect">UseEffect</NavLink>{" | "}
      {/* <NavLink to="/">FakeStore</NavLink>{" | "} */}
      <NavLink to="/dummy">DummyStore</NavLink>{" | "}
      <NavLink to="/counter">ReduxCounter</NavLink>{" | "}

      {isLogin && (
        <>
          <NavLink to="/product">Product</NavLink>{" | "}
          <NavLink to="/cart">Cart</NavLink>{" | "}
        </>
      )}

      {!isLogin ? (
        <>
          <NavLink to="/login">Login</NavLink>{" | "}
          <NavLink to="/signup">Signup</NavLink>
        </>
      ) : (
        <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Header;
