import React from "react";
import { ShoppingCart, Users, MessageSquare, UtensilsCrossed } from "lucide-react";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About MarketHub</h1>
        <p>
          MarketHub is a modern React-based product management platform that
          integrates multiple APIs to manage products, customers, reviews,
          and recipes — all in one seamless experience.
        </p>
      </section>

      {/* MISSION SECTION */}
      <section className="about-mission">
        <div className="mission-text">
          <h2>Our Vision</h2>
          <p>
            We aim to simplify digital commerce management by combining
            multiple data sources into a unified and beautiful dashboard.
            MarketHub is built to demonstrate real-world API integration,
            authentication flow, routing, and state management using React.
          </p>
        </div>

        <div className="mission-cards">
          <div className="mission-card">
            <ShoppingCart size={30} />
            <h4>Products API</h4>
            <p>Dynamic product fetching and management.</p>
          </div>

          <div className="mission-card">
            <Users size={30} />
            <h4>Users as Customers</h4>
            <p>Customer data handling via external APIs.</p>
          </div>

          <div className="mission-card">
            <MessageSquare size={30} />
            <h4>Reviews System</h4>
            <p>Comments converted into product reviews.</p>
          </div>

          <div className="mission-card">
            <UtensilsCrossed size={30} />
            <h4>Recipes Module</h4>
            <p>Food items integration from recipe APIs.</p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="about-stats">
        <div className="stat">
          <h2>4+</h2>
          <p>API Integrations</p>
        </div>

        <div className="stat">
          <h2>100%</h2>
          <p>Responsive Design</p>
        </div>

        <div className="stat">
          <h2>Modern</h2>
          <p>React Architecture</p>
        </div>

        <div className="stat">
          <h2>Secure</h2>
          <p>Auth Based Routing</p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta">
        <h2>Ready to Explore MarketHub?</h2>
        <p>Experience modern product management powered by APIs.</p>
        <button className="btn primary">Get Started</button>
      </section>

    </div>
  );
};

export default About;
