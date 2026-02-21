import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FoodItem = () => {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();

  const fetchFood = async () => {
    const res = await axios.get("https://dummyjson.com/recipes");
    setFood(res.data.recipes);
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const handleViewDetails = (item) => {
    navigate("/food-detail", {
      state: { recipe: item },
    });
  };

  return (
    <div className="food-page">
      <h1 className="food-title">Our Recipes</h1>

      <div className="food-container">
        {food.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="food-content">
              <h3>{item.name}</h3>

              <p className="food-cuisine">
                {item.cuisine} • {item.difficulty}
              </p>

              <div className="food-meta">
                <span>⭐ {item.rating}</span>
                <span>
                  {item.prepTimeMinutes + item.cookTimeMinutes} mins
                </span>
              </div>

              <p className="food-calories">
                {item.caloriesPerServing} kcal / serving
              </p>

              <button
                className="btn primary small"
                onClick={() => handleViewDetails(item)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItem;
