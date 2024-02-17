import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button, Card } from 'react-bootstrap'; // Import Button and Card from react-bootstrap

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card-container">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={reactLogo} />
          <Card.Body>
            <Card.Title>Breakfast</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={reactLogo} />
          <Card.Body>
            <Card.Title>Lunch</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={reactLogo} />
          <Card.Body>
            <Card.Title>Dinner</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
