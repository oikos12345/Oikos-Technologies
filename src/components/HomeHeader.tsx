// src/components/HomeHeader.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'; // You can create and move styles here if needed

const HomeHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div
        id="hamburger"
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/about">ABOUT US</Link>
        <Link to="/services">OUR SERVICES</Link>
        <Link to="/careers">CAREERS</Link>
        <Link to="/contact">CONTACTS</Link>
      </div>
    </header>
  );
};

export default HomeHeader;
