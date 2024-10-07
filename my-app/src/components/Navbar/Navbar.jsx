import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className={styles.Navholder}>
      <Link
        to="/"
        className={`${styles.LinkElement} ${activeLink === '/' ? styles.Active : ''}`}
        onClick={() => handleLinkClick('/')}
      >
        Home
      </Link>
      <Link
        to="/projects"
        className={`${styles.LinkElement} ${activeLink === '/projects' ? styles.Active : ''}`}
        onClick={() => handleLinkClick('/projects')}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className={`${styles.LinkElement} ${activeLink === '/contact' ? styles.Active : ''}`}
        onClick={() => handleLinkClick('/contact')}
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
