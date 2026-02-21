import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML / CSS", level: 0.95, category: "frontend" },
  { name: "JavaScript", level: 0.9, category: "frontend" },
  { name: "React", level: 0.9, category: "frontend" },
  { name: "Tailwind CSS", level: 0.85, category: "frontend" },
  { name: "Node.js", level: 0.8, category: "backend" },
  { name: "Express", level: 0.75, category: "backend" },
  { name: "MongoDB", level: 0.7, category: "backend" },
  { name: "Git / GitHub", level: 0.9, category: "tools" },
  { name: "VS Code", level: 0.95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      style={{
        padding: "120px 20px",
        background:
          "radial-gradient(circle at 30% 20%, rgba(124,124,255,0.05), transparent 40%)," +
          "radial-gradient(circle at 70% 80%, rgba(181,140,255,0.04), transparent 50%)," +
          "linear-gradient(180deg, #0f0f0f 0%, #0b0b12 100%)",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1150px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "44px",
            fontWeight: "700",
            marginBottom: "60px",
            background: "linear-gradient(90deg,#7c7cff,#b58cff,#ff9eff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Skills
        </h2>

        {/* Filter Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "70px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 25px rgba(124,124,255,0.4)" }}
              style={{
                padding: "10px 26px",
                borderRadius: "24px",
                border: "1px solid rgba(124,124,255,0.3)",
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg,#7c7cff,#b58cff,#ff9eff)"
                    : "rgba(124,124,255,0.05)",
                color: activeCategory === cat ? "#fff" : "#bdbdbd",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow:
                  "0 25px 55px rgba(124,124,255,0.5), 0 0 20px rgba(124,124,255,0.3) inset",
              }}
              style={{
                padding: "28px",
                borderRadius: "20px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                border: "1px solid rgba(124,124,255,0.25)",
                backdropFilter: "blur(18px)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {/* Skill Name */}
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  marginBottom: "18px",
                  color: "#ffffff",
                  textShadow:
                    "0 0 6px rgba(124,124,255,0.7), 0 0 12px rgba(181,140,255,0.4)",
                }}
              >
                {skill.name}
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  height: "12px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "inset 0 1px 3px rgba(255,255,255,0.2)",
                }}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: skill.level }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  style={{
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #7c7cff, #b58cff, #ff9eff)",
                    borderRadius: "12px",
                    boxShadow:
                      "0 0 15px rgba(124,124,255,0.7), 0 0 30px rgba(181,140,255,0.5) inset",
                    transformOrigin: "left",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glows */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle,#7c7cff55,#0000)",
          top: "-80px",
          left: "-60px",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 140, ease: "linear" }}
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle,#b58cff33,#0000)",
          bottom: "-60px",
          right: "-50px",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />
    </section>
  );
};
