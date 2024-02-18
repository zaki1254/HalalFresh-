import React from 'react';
import CardComponent from '../card/card'; // Import the Card component
import backgroundImage from '../../assets/BACKGROUND.jpeg'; // Import the background image
import "./style.css"; // Import the styles

function Home() {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`, // Using the imported background image
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column', // Center items vertically and horizontally
      color: 'blue', // Text color
      textAlign: 'center', // Center text
      padding: '20px' // Add padding for better readability
    }}>
      <h1>Bringing Somalia’s Flavours to Your Doorstep</h1>
      {/* Your existing card component */}
      <div className="card-container" style={{ marginBottom: '50px' }}>
        <CardComponent title="Breakfast" imageSrc={malawahImage} />
        <CardComponent title="Lunch" imageSrc={bananaImage} />
      </div>

      {/* Content from the provided code */}
      <div className="index">
        <div className="div">
          <div className="overlap">
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://cdn.animaapp.com/projects/65d23cb4838fbe8f35a0ad31/releases/65d2428526732d7bb5b9da42/img/rectangle-8.png"
            />
            <div className="group">
              <div className="div-wrapper">
                <div className="text-wrapper">Order Now!</div>
              </div>
            </div>
            <p className="bringing-somalia-s">
              Bringing Somalia’s Flavours
              <br />
              to Your Doorstep
            </p>
          </div>
          <p className="p">Elevate Your Cooking with Somali Spices and Soul</p>
          <div className="text-wrapper-2">Why Halal Fresh?</div>
          <div className="text-wrapper-3">Satisfaction Guarantee</div>
          <p className="text-wrapper-4">
            Users can enjoy peace of mind knowing that the website provides a satisfaction guarantee, ensuring that they
            are happy with their culinary experience or offering a refund or replacement.
          </p>
          <img
            className="checked"
            alt="Checked"
            src="https://cdn.animaapp.com/projects/65d23cb4838fbe8f35a0ad31/releases/65d23d098d67bc924f7ed0d7/img/checked-1.png"
          />
          <div className="text-wrapper-5">Customization</div>
          <p className="users-can">
            {" "}
            Users can personalize their meal preferences and dietary requirements, ensuring that they receive meals
            tailored to their tastes and needs.
          </p>
          <img
            className="creativity"
            alt="Creativity"
            src="https://cdn.animaapp.com/projects/65d23cb4838fbe8f35a0ad31/releases/65d23d098d67bc924f7ed0d7/img/creativity-1.png"
          />
          <img
            className="food"
            alt="Food"
            src="https://cdn.animaapp.com/projects/65d23cb4838fbe8f35a0ad31/releases/65d23d098d67bc924f7ed0d7/img/food-1.png"
          />
          <div className="text-wrapper-6">Convenience</div>
          <p className="text-wrapper-7">
            We offer the convenience of having fresh Somali ingredients and recipes delivered right to their doorstep,
            saving time and effort in meal planning and grocery shopping.
          </p>
          <img
            className="insurance"
            alt="Insurance"
            src="https://cdn.animaapp.com/projects/65d23cb4838fbe8f35a0ad31/releases/65d23d098d67bc924f7ed0d7/img/insurance-1.png"
          />
          <div className="text-wrapper-8">Authenticity</div>
          <p className="text-wrapper-9">
            We provides access to authentic Somali ingredients and recipes, allowing users to experience the true flavours
            and culinary traditions of Somalia.
          </p>
          <div className="text-wrapper-10">Choose A Meal Box</div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-11">Weekly Meal Plans</div>
              <img
                className="img"
                alt="Rectangle"
                src="https://cdn.animaapp.com/projects/65d23cb4838fbe8f35a0ad31/releases/65d2428526732d7bb5b9da42/img/rectangle-28@2x.png"
              />
              <p className="text-wrapper-12">Craft your own box the way you like it</p> {/* This line was incomplete */}
              <div className="group-wrapper">
                <div className="group-2">
                  <div className="text-wrapper-13">Start An Order</div>
                </div>
              </div>
            </div>
          </div>
          {/* The remaining content from the provided code should be properly formatted */}
        </div>
      </div>
    </div>
  );
}

export default Home;
