import React, { useState } from 'react';
import './menu.css'; // Import the CSS file for styling
import MenuCard from '../pages/menuCard'; // Import the MenuCard component

// Import images from the assets folder
import breakfast1 from '../../assets/breakfast1.png';
import breakfast2 from '../../assets/breakfast2.png';
import breakfast3 from '../../assets/breakfast3.png';
import lunch1 from '../../assets/lunch1.png';
import lunch2 from '../../assets/lunch2.png';
import lunch3 from '../../assets/lunch3.png';
import lunch4 from '../../assets/lunch4.png';
import lunch5 from '../../assets/lunch5.png';
import dessert1 from '../../assets/dessert1.png';
import dessert2 from '../../assets/dessert2.png';
import dessert3 from '../../assets/dessert3.png';

function Menu() {
  // State to track whether recipe modal is open for each card
  const [showRecipeModal, setShowRecipeModal] = useState(false);

  // Function to toggle the recipe modal
  const toggleRecipeModal = () => {
    setShowRecipeModal(!showRecipeModal);
  };

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <div className="menu-section">
        <h2>Breakfast</h2>
        <div className="card-container">
          {/* Render card components for breakfast items */}
          <MenuCard title="Malawax" image={breakfast1} onClick={toggleRecipeModal} />
          <MenuCard title="Canjero" image={breakfast2} onClick={toggleRecipeModal} />
          <MenuCard title="Muufo" image={breakfast3} onClick={toggleRecipeModal} />
        </div>
      </div>
      <div className="menu-section">
        <h2>Lunch</h2>
        <div className="card-container">
          {/* Render card components for lunch items */}
          <MenuCard title="Bariis" image={lunch1} onClick={toggleRecipeModal} />
          <MenuCard title="Baasto" image={lunch2} onClick={toggleRecipeModal} />
          <MenuCard title="Hilib Ari" image={lunch3} onClick={toggleRecipeModal} />
          <MenuCard title="Chicken Suqaar" image={lunch4} onClick={toggleRecipeModal} />
          <MenuCard title="Hilib Geel" image={lunch5} onClick={toggleRecipeModal} />
        </div>
      </div>
      <div className="menu-section">
        <h2>Dessert</h2>
        <div className="card-container">
          {/* Render card components for dessert items */}
          <MenuCard title="Buur" image={dessert1} onClick={toggleRecipeModal} />
          <MenuCard title="Sambuus" image={dessert2} onClick={toggleRecipeModal} />
          <MenuCard title="Kackac" image={dessert3} onClick={toggleRecipeModal} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
