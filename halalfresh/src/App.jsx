import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import FAQs from './components/pages/faq'; // Import the FAQs component
import Menu from './components/pages/menu'; // Assuming you have other pages
import Contact from './components/pages/contact';
import Register from './components/pages/register';
import StartOrder from './components/pages/startOrder';
import Footer from './components/footer/footer';

      const App = () => {
  return (
    <div className="App">
      <Router>
      <Navigation />
      <Routes>
        <Route path="/ourMenu" element={<Menu />} />
        <Route path="/FAQs" element={<FAQs />} /> {/* Add route for FAQs page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/startOrder" element={<StartOrder />} />
        {/* Add routes for other pages */}
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
};

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
};

export default App;
