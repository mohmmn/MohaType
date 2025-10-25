import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onSettingsClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">MohaType</a>
        </div>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">Accueil</a>
          </li>
          <li className="navbar-item">
            <a href="/leaderboard" className="navbar-link">Classement</a>
          </li>
          <li className="navbar-item">
            <button className="settings-icon-btn" onClick={onSettingsClick} aria-label="Paramètres">
              ⚙️
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;