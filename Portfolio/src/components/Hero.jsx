import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const sectionStyle = {
    minHeight: "100vh",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "#ffffff",
    background: "linear-gradient(180deg, #0f0f1a 0%, #0b0b12 100%)",
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "clamp(36px, 6vw, 64px)",
    fontWeight: "700",
    marginBottom: "24px",
    lineHeight: "1.2",
    background: "linear-gradient(90deg, #7c7cff, #ff7ca3)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#b0b0c0",
    marginBottom: "36px",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "14px 32px",
    background: "linear-gradient(135deg, #7c7cff, #ff7ca3)",
    color: "#ffffff",
    borderRadius: "30px",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "600",
    boxShadow: "0 10px 25px rgba(124,124,255,0.3)",
  };

  const scrollStyle = {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "13px",
    color: "#b0b0c0",
    gap: "6px",
  };

  const arrowAnimation = {
    animate: { y: [0, 8, 0] },
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section id="hero" style={sectionStyle}>
      <div style={containerStyle}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={headingStyle}
        >
          Hi, I&apos;m <span>Tarun Prajapat</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={paragraphStyle}
        >
          I’m a MERN Stack Developer building modern, scalable, and reliable
          web applications with clean frontend and robust backend architecture.
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(124,124,255,0.4)" }}
          style={buttonStyle}
        >
          View My Work
        </motion.a>
      </div>

      <motion.div {...arrowAnimation} style={scrollStyle}>
        <span>Scroll</span>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};
