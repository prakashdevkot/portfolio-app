// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.navLogo}>
          <img src={logo} alt="Logo" width="50" height="50" />
        </Link>
        <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <Link to="/" className={styles.navItem}>Home</Link>
          <Link to="/about" className={styles.navItem}>About</Link>
          <Link to="/projects" className={styles.navItem}>Projects</Link>
          <Link to="/services" className={styles.navItem}>Services</Link>
          <Link to="/contact" className={styles.navItem}>Contact</Link>
        </div>
        <div className={styles.navToggle} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;