import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button, Card, Dropdown } from 'react-bootstrap'; // Import Button, Card, and Dropdown from react-bootstrap

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
              bulk of the card's content. Nice!
            </Card.Text>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Select Option
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>

        {/* Lunch Card */}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={reactLogo} />
          <Card.Body>
            <Card.Title>Lunch</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Select Option
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>

        {/* Dinner Card */}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={reactLogo} />
          <Card.Body>
            <Card.Title>Dinner</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Select Option
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
