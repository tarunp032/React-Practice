import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact MarketHub</h1>
        <p>
          Have a question, feedback, or idea?  
          Reach out and let’s build something amazing together.
        </p>
      </section>

      {/* CONTENT */}
      <section className="contact-content">
        {/* LEFT INFO */}
        <div className="contact-info">
          <div className="info-card">
            <Mail />
            <h4>Email</h4>
            <p>support@markethub.com</p>
          </div>

          <div className="info-card">
            <Phone />
            <h4>Phone</h4>
            <p>+91 9XXXXXXXXX</p>
          </div>

          <div className="info-card">
            <MapPin />
            <h4>Location</h4>
            <p>India • Remote Friendly</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form">
          <h2>Send us a message</h2>

          <div className="form-group">
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="form-group">
            <textarea rows="5" placeholder="Your Message"></textarea>
          </div>

          <button className="btn primary">
            Send Message <Send size={16} />
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
