import React from 'react';
import CardComponent from '../card/card'; // Import the Card component
import malawahImage from './images/malawah.jpeg'; // Import the image for breakfast
import bananaImage from './images/banana somali.avif'; // Import the image for lunch
import backgroundImage from '../../assets/BACKGROUND.jpeg'; // Import the background image

import './home.css'

function Home() {
  return (
    <div className="home-container">
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
        <h1 className='mainH1'>Bringing Somalia’s Flavours to Your Doorstep</h1>
        <div className="card-container" style={{ marginBottom: '50px' }}>
          <CardComponent title="Breakfast" imageSrc={malawahImage} />
          <CardComponent title="Lunch" imageSrc={bananaImage} />
        </div>
      </div>
    </div>
  );
}

export default Home;
