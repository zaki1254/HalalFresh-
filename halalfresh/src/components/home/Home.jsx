import CardComponent from '../card/card'; // Import the Card component
import malawahImage from './images/malawah.jpeg'; // Import the image for breakfast
import bananaImage from './images/banana somali.avif'; // Import the image for lunch
import suqaarImage from './images/suqaar.webp'; // Import the image for dinner
import '../../App.css';

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', minHeight: '100vh' }}>
      <div className="card-container" style={{ marginBottom: '50px' }}>
        <CardComponent title="Breakfast" imageSrc={malawahImage} />
        <CardComponent title="Lunch" imageSrc={bananaImage} />
        <CardComponent title="Dinner" imageSrc={suqaarImage} />
      </div>
    </div>
  );
}

export default Home;
