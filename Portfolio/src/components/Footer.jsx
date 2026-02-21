import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const arrowHover = {
    whileHover: { y: -3, scale: 1.1, boxShadow: "0 14px 36px rgba(124,124,255,0.45)" },
    whileTap: { scale: 0.95 },
  };

  return (
    <footer
      style={{
        padding: "48px 20px",
        background: "linear-gradient(180deg, #0b0b12 0%, #0f1020 40%, #0b0b12 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "#b0b0c0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(124,124,255,0.6), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <p style={{ fontSize: "13.5px", letterSpacing: "0.4px", opacity: 0.85 }}>
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "#ffffff", fontWeight: "500" }}>tarunp032.co</span> · All rights reserved
        </p>

        {/* Center */}
        <p style={{ fontSize: "13.5px", textAlign: "center", opacity: 0.8 }}>
          Crafted with <span style={{ color: "#ff6b6b" }}>❤</span> using{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#7c7cff,#ff7ca3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "500",
            }}
          >
            React & CSS
          </span>
        </p>

        {/* Right - Scroll to Top */}
        <motion.a
          href="#hero"
          {...arrowHover}
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, rgba(124,124,255,0.25), rgba(255,124,195,0.25))",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 24px rgba(124,124,255,0.25)",
            color: "#ffffff",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <ArrowUp size={20} />
        </motion.a>
      </div>
    </footer>
  );
};
