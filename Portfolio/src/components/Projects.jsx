import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "React Quiz App",
    description:
      "A dynamic quiz application built with React featuring real-time scoring and a responsive UI.",
    tags: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/tarunp032/React_Quiz_App",
  },
  {
    id: 2,
    title: "Role-Based MERN Access App",
    description:
      "Secure MERN application with role-based authentication and controlled access for users and admins.",
    tags: ["React", "Node", "Express", "MongoDB"],
    githubUrl: "https://github.com/tarunp032/Role-Based-Access-MERN-App",
  },
  {
    id: 3,
    title: "MindMeld AI Chat App",
    description:
      "A minimal AI-powered chat application focused on simplicity and clean user interaction.",
    tags: ["JavaScript", "HTML", "CSS", "OpenAI"],
    githubUrl: "https://github.com/tarunp032/MindMeld-AI",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 20px",
        background: "linear-gradient(180deg, #0f0f1a, #0b0b12)",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "16px",
            background: "linear-gradient(90deg,#7c7cff,#b58cff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Featured Projects
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#bdbdbd",
            maxWidth: "620px",
            margin: "0 auto 80px",
            fontSize: "15px",
            lineHeight: "1.7",
          }}
        >
          Selected projects demonstrating clean code practices, scalable
          architecture, and problem-solving skills.
        </p>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 25px 55px rgba(124,124,255,0.45)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "28px",
                backdropFilter: "blur(14px)",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "12px",
                      padding: "4px 12px",
                      borderRadius: "14px",
                      background: "rgba(124,124,255,0.15)",
                      color: "#d6d6ff",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "14px", color: "#bdbdbd", lineHeight: "1.6", flexGrow: 1 }}>
                {project.description}
              </p>

              {/* GitHub */}
              <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  style={{
                    color: "#bdbdbd",
                    transition: "color 0.3s",
                  }}
                >
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <div style={{ textAlign: "center", marginTop: "70px" }}>
          <motion.a
            href="https://github.com/tarunp032"
            target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(124,124,255,0.4)" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              borderRadius: "30px",
              background: "linear-gradient(135deg,#7c7cff,#b58cff)",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "500",
              textDecoration: "none",
              boxShadow: "0 12px 30px rgba(124,124,255,0.35)",
            }}
          >
            View GitHub <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
