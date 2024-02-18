import React from 'react';
import CardComponent from '../card/card'; // Import the Card component
import malawahImage from './images/malawah.jpeg'; // Import the image for breakfast
import bananaImage from './images/banana somali.avif'; // Import the image for lunch
import backgroundImage from '../../assets/BACKGROUND.jpeg'; // Import the background image

import './home.css'

function Home() {
  return (
    <div className='back_style' style={{
      
    }}>
      <h1 className='mainH1'>Bringing Somalia’s Flavours to Your Doorstep</h1>
      <div className="card-container" style={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-between' }}>
      <CardComponent title="Breakfast" imageSrc={malawahImage} />
      <CardComponent title="Lunch" imageSrc={bananaImage} />
    </div>

    </div>
  );
}

export default Home;
