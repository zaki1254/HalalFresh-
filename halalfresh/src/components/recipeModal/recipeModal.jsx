import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../pages/menu.css'; // Import the CSS file for styling

function RecipeModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Recipe Steps</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add recipe steps here */}
        <p>Step 1: Lorem ipsum dolor sit amet.</p>
        <p>Step 2: Consectetur adipiscing elit.</p>
        {/* Add more steps as needed */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RecipeModal;
