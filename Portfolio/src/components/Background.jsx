import { motion } from "framer-motion";

export const Background = () => {
  const backgroundStyle = {
    position: "fixed",
    inset: 0,
    zIndex: -1,
    background: `
      radial-gradient(circle at 25% 25%, rgba(124,124,255,0.25), transparent 35%),
      radial-gradient(circle at 75% 75%, rgba(255,124,195,0.15), transparent 40%),
      linear-gradient(180deg, #0f0f1a, #0b0b12)
    `,
    backgroundSize: "200% 200%", 
    filter: "blur(60px)",
  };

  return (
    <motion.div
      style={backgroundStyle}
      animate={{
        backgroundPositionX: ["0%", "100%", "0%"], 
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};
