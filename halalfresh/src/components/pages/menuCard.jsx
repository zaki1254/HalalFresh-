import React, { useState } from 'react';
import './menuCard.css';

function MenuCard({ title, image }) {
  // State to track the quantity for each card
  const [quantity, setQuantity] = useState(0);

  // Function to increment the quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrement the quantity
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
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
      <div className="quantity-container">
        <button className="quantity-button" onClick={decrementQuantity}>-</button>
        <span className="quantity-number">{quantity}</span>
        <button className="quantity-button" onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={toggleRecipeModal} className="recipe-button">
        {showRecipeModal ? 'Hide Recipe' : 'View Recipe'}
      </button>
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
