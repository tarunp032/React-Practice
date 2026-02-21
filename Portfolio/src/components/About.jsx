import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const sectionStyle = {
    padding: "120px 20px",
    background: "#0f0f1a",
    color: "#ffffff",
  };

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "80px",
    background: "linear-gradient(90deg, #7c7cff, #ff7ca3)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "start",
  };

  const textBlockStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  };

  const subHeadingStyle = {
    fontSize: "26px",
    fontWeight: "600",
    color: "#ffffff",
  };

  const paragraphStyle = {
    color: "#b0b0c0",
    lineHeight: "1.8",
    fontSize: "16px",
  };

  const primaryBtnStyle = {
    marginTop: "20px",
    width: "fit-content",
    padding: "12px 28px",
    background: "linear-gradient(135deg, #7c7cff, #ff7ca3)",
    color: "#ffffff",
    borderRadius: "30px",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "600",
    boxShadow: "0 8px 20px rgba(124,124,255,0.3)",
    transition: "all 0.3s ease",
  };

  const cardsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  };

  const cardStyle = {
    padding: "25px",
    borderRadius: "16px",
    background: "#1a1a2e",
    display: "flex",
    gap: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
    cursor: "pointer",
  };

  const iconBoxStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(124,124,255,0.2), rgba(255,124,163,0.2))",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7c7cff",
    flexShrink: 0,
    fontWeight: "bold",
  };

  const cardTitleStyle = {
    fontSize: "17px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#ffffff",
  };

  const cardTextStyle = {
    fontSize: "15px",
    color: "#b0b0c0",
    lineHeight: "1.6",
  };

  const cardHover = {
    whileHover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(124,124,255,0.4)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          About <span style={{ color: "#ff7ca3" }}>Me</span>
        </h2>

        <div style={gridStyle}>
          {/* Left Content */}
          <div style={textBlockStyle}>
            <h3 style={subHeadingStyle}>
              Full Stack Developer & Tech Explorer
            </h3>

            <p style={paragraphStyle}>
              I build full-stack web applications using the MERN stack, focusing
              on clean code, performance, and scalable architecture.
            </p>

            <p style={paragraphStyle}>
              I enjoy solving real-world problems with technology and constantly
              learning modern tools and best practices in web development.
            </p>

            <a href="#contact" style={primaryBtnStyle}>
              Get In Touch
            </a>
          </div>

          {/* Right Cards */}
          <div style={cardsStyle}>
            <motion.div {...cardHover} style={cardStyle}>
              <div style={iconBoxStyle}>
                <Code size={22} />
              </div>
              <div>
                <h4 style={cardTitleStyle}>Web Development</h4>
                <p style={cardTextStyle}>
                  Building full-stack web apps using React, Node.js, Express, and
                  MongoDB.
                </p>
              </div>
            </motion.div>

            <motion.div {...cardHover} style={cardStyle}>
              <div style={iconBoxStyle}>
                <User size={22} />
              </div>
              <div>
                <h4 style={cardTitleStyle}>UI / UX Development</h4>
                <p style={cardTextStyle}>
                  Creating clean, responsive, and user-friendly interfaces with
                  React.
                </p>
              </div>
            </motion.div>

            <motion.div {...cardHover} style={cardStyle}>
              <div style={iconBoxStyle}>
                <Briefcase size={22} />
              </div>
              <div>
                <h4 style={cardTitleStyle}>Backend & APIs</h4>
                <p style={cardTextStyle}>
                  Designing REST APIs, database integration, and backend logic.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
