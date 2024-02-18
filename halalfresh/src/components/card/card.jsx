import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';

function CardComponent({ title, imageSrc }) {
  return (
    <Card style={{ width: '18rem', justifyContent: 'center', alignItems: 'center' }}>
      <Card.Img variant="top" src={imageSrc} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
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
  );
}

export default CardComponent;
