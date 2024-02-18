import React, { useState } from 'react';
import './menuCard.css';

function MenuCard({ title, image }) {
  // State to track the quantity for each card
  const [quantity, setQuantity] = useState(0);

  // Function to increment the quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // State to track whether recipe modal is open for each card
  const [showRecipeModal, setShowRecipeModal] = useState(false);

  // Function to toggle the recipe modal
  const toggleRecipeModal = () => {
    setShowRecipeModal(!showRecipeModal);
  };

  return (
    <div className="menu-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="button-container">
        <button onClick={incrementQuantity}>+1</button>
        <span>{quantity}</span>
        <button onClick={toggleRecipeModal} className="recipe-button">
          {showRecipeModal ? 'Hide Recipe' : 'View Recipe'}
        </button>
      </div>
      {showRecipeModal && (
        <div className="recipe-container">
          {/* Render recipe content here */}
          <p>This is the recipe for {title}.</p>
        </div>
      )}
    </div>
  );
}

export default MenuCard;
