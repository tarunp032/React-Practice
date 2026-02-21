import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    padding: "16px 0",
    backdropFilter: "blur(14px)",
    background: isScrolled
      ? "rgba(15,15,15,0.85)"
      : "rgba(15,15,15,0.5)",
    borderBottom: "1px solid rgba(124,124,255,0.15)",
    transition: "all 0.3s ease",
  };

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#7c7cff",
    textDecoration: "none",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "28px",
  };

  const mobileMenuStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh", 
  background: "rgba(15,15,15,0.95)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "32px",
  opacity: isMenuOpen ? 1 : 0,
  pointerEvents: isMenuOpen ? "auto" : "none",
  transition: "opacity 0.3s ease",
};


  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <a href="#hero" style={logoStyle}>
          Tarun Portfolio
        </a>

        {/* Desktop */}
        <div style={navLinksStyle} className="desktop-nav">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.1, color: "#b58cff" }}
              style={{
                color: "#cccccc",
                textDecoration: "none",
                fontSize: "15px",
                transition: "color 0.2s",
              }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, scale: isMenuOpen ? 1 : 0.95 }}
        style={mobileMenuStyle}
      >
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            whileHover={{ scale: 1.1, color: "#7c7cff" }}
            style={{
              color: "#ffffff",
              fontSize: "22px",
              textDecoration: "none",
            }}
          >
            {item.name}
          </motion.a>
        ))}
      </motion.div>
    </nav>
  );
};
