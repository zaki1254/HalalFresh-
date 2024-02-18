import React, {useState} from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import './card.css'

function CardComponent({ title, imageSrc }) {
  return (
    <Card className='main_container' style={{ width: '18rem', justifyContent: 'center', alignItems: 'center' }}>
      <Card.Img variant="top" src={imageSrc} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <div className="MainButton">
          <NavLink to="/menu" activeClassName="active"> {/* Assuming Start Order page has its own route */}
          <button className='MainButton'>
          Select Option
        </button>
          </NavLink>
          </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
