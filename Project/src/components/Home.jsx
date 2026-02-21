import React from "react";
import {
  ShoppingCart,
  Users,
  MessageSquare,
  UtensilsCrossed,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <h1>
          Smart Product <br /> Management Platform
        </h1>

        <p>
          MarketHub is a modern React-based platform that fetches and manages
          products, customers, reviews, and recipes using real APIs — all in one
          clean and premium dashboard.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">
            Explore <ArrowRight size={18} />
          </button>
          <button className="btn outline" onClick={() => navigate("/about")}>
            Learn More
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <div className="feature-card" onClick={() => navigate("/product")}>
          <ShoppingCart />
          <h4>Products</h4>
          <p>Fetch and manage products via APIs</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/food")}>
          <UtensilsCrossed />
          <h4>Recipes</h4>
          <p>Food items fetched from recipe APIs</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/customer")}>
          <Users />
          <h4>Customers</h4>
          <p>User data treated as customers</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/reviews")}>
          <MessageSquare />
          <h4>Reviews</h4>
          <p>Comments displayed as reviews</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
