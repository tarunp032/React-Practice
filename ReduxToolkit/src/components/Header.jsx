import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav
      style={{
        padding: "15px",
        background: "linear-gradient(135deg, #819ed3, #787682)",
      }}
    >
      <NavLink to="/"><b>Counter</b></NavLink>
      {" | "}
      <NavLink to="/product"><b>Product</b></NavLink>
      {" | "}
      <NavLink to="/signup"><b>Singup</b></NavLink>
      {" | "}
      <NavLink to="/login"><b>Login</b></NavLink>
      {" | "}
    </nav>
  );
}

export default Header;
