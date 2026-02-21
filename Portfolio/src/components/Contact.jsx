import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const Contact = () => {
  const cardHover = {
    whileHover: { y: -10, scale: 1.05, boxShadow: "0 20px 40px rgba(124,124,255,0.35)", transition: { duration: 0.3 } },
  };

  const iconHover = {
    whileHover: { scale: 1.2, color: "#7c7cff", transition: { duration: 0.3 } },
  };

  const socialLinks = [
    { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/tarun-prajapat-468298253/" },
    { icon: <Twitter size={22} />, link: "https://x.com/Tarunprajapat32" },
    { icon: <Instagram size={22} />, link: "https://www.instagram.com/tarun_p0332/?hl=en" },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "120px 20px",
        background: "linear-gradient(180deg, #0f0f1a 0%, #0b0b12 100%)",
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
            background: "linear-gradient(90deg,#7c7cff,#ff7ca3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let’s <span style={{ color: "#ff7ca3" }}>Connect</span>
        </h2>

        <p style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 80px", color: "#b0b0c0", fontSize: "16px", lineHeight: "1.7" }}>
          I’m always open for meaningful conversations, collaborations, and opportunities in web development.
        </p>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
          {/* Left Card */}
          <motion.div
            {...cardHover}
            style={{
              background: "linear-gradient(180deg, rgba(124,124,255,0.2), rgba(255,124,195,0.08))",
              borderRadius: "20px",
              padding: "36px",
              backdropFilter: "blur(16px)",
              boxShadow: "0 25px 50px rgba(0,0,0,0.45)",
            }}
          >
            <h3 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "22px" }}>Contact Information</h3>

            {/* Email */}
            <div style={{ display: "flex", gap: "14px", marginBottom: "18px", alignItems: "center" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(124,124,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7c7cff" }}>
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: "14px", color: "#b0b0c0" }}>Email</div>
                <div style={{ fontSize: "15px" }}>prajapattarun7568@gmail.com</div>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", gap: "14px", marginBottom: "18px", alignItems: "center" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(124,124,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7c7cff" }}>
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: "14px", color: "#b0b0c0" }}>Phone</div>
                <div style={{ fontSize: "15px" }}>+91 75684 47701</div>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "rgba(124,124,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7c7cff" }}>
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: "14px", color: "#b0b0c0" }}>Location</div>
                <div style={{ fontSize: "15px" }}>Jaipur, Rajasthan, India</div>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            {...cardHover}
            style={{
              background: "linear-gradient(135deg, rgba(124,124,255,0.15), rgba(255,124,195,0.1))",
              borderRadius: "20px",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
            }}
          >
            <div>
              <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "16px" }}>Open for Opportunities</h3>
              <p style={{ fontSize: "16px", color: "#e0e0e0", lineHeight: "1.7" }}>
                Whether you’re looking to build something impactful, need a developer for your team, or just want to connect — I’m always open to meaningful discussions.
              </p>
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "16px", marginTop: "30px" }}>
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  {...iconHover}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
