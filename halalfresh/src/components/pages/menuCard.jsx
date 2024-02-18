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
        <button onClick={decrementQuantity} className='minus_button'>-</button>
        <span>{quantity}</span>
        <button onClick={incrementQuantity} className='plus_button'>+</button>
      </div>
      <button onClick={toggleRecipeModal} className="recipe-button">
        {showRecipeModal ? 'Hide Recipe' : 'View Recipe'}
      </button>
      {showRecipeModal && (
        <div className="recipe-container">
          {/* Render recipe content here */}
          <p>Ingredients
            <br></br>
            <ul>
                <li>
                1 cup white corn flour
                </li>
                <li>
                ½ cup sorghum flour
                </li>
                <li>
                1 Tbsp Instant dry yeast
                </li>
                <li>
                4 cups self-raising flour
                </li>
                <li>
                ¼ cup sugar
                </li>
                <li>
                1 tsp salt
                </li>
                <li>
                    4 cups lukewarm water
                </li>
            </ul>

{title}.</p>
        </div>
      )}
    </div>
  );
}

export default MenuCard;
