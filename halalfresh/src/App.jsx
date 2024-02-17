import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './components/home/Home'
import Navigation  from './components/navigation/navigation';
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
            <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} />
              <Route path="/foodbanks" element={<FoodBanks />} />
              <Route path="/ourMenu" element={<Partners />} />
              <Route path="/FAQs" element={<FAQs />} />
              <Route path="/donate" element={<Donate />} /> */}
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
