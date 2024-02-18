import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Home from './components/home/Home'; // Import the Home component
import FAQs from './components/pages/faq'; // Import the FAQs component
import Contact from './components/pages/contact';
import Register from './components/pages/register';
import StartOrder from './components/pages/startOrder';
import Footer from './components/footer/footer';
import Menu from './components/pages/menu'; // Import the Menu component

function App() {
  return (
    <div> {/* Wrapping content in a div */}
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set Home as the landing page */}
          <Route path="/menu" element={<Menu />} /> {/* Add a route for the Menu page */}
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/startOrder" element={<StartOrder />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
