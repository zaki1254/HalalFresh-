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
import { Button, Card, Dropdown } from 'react-bootstrap'; // Import Button, Card, and Dropdown from react-bootstrap

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
    </>
  );
};


export default App;
