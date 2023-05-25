import React from 'react';
import { Link } from 'react-router-dom';
import './components.css'; // Assuming you have a CSS file for header styling

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/videos" className="nav-link">Videos</Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/terminal" className="nav-link">Terminal</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
