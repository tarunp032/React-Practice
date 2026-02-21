import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FoodDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.recipe) {
    return <h2>No Recipe Found</h2>;
  }

  const {
    name,
    image,
    cuisine,
    difficulty,
    rating,
    reviewCount,
    ingredients,
    instructions,
    prepTimeMinutes,
    cookTimeMinutes,
    caloriesPerServing,
    tags,
    mealType,
  } = state.recipe;

  return (
    <div className="food-detail-page">
      <button className="btn outline" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="food-detail-card">
        <img src={image} alt={name} />

        <div className="food-detail-content">
          <h1>{name}</h1>

          <p className="detail-meta">
            {cuisine} • {difficulty} • ⭐ {rating} ({reviewCount} reviews)
          </p>

          <p className="detail-time">
            Prep: {prepTimeMinutes} mins | Cook: {cookTimeMinutes} mins
          </p>

          <p className="detail-calories">
            {caloriesPerServing} kcal per serving
          </p>

          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <h3>Instructions</h3>
          <ol>
            {instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          <p className="detail-extra">
            <strong>Meal Type:</strong> {mealType.join(", ")}
          </p>

          <p className="detail-extra">
            <strong>Tags:</strong> {tags.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
