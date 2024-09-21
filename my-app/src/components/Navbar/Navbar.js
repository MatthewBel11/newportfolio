import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.Navholder}>
      <Link to="/" className={styles.LinkElement}> Home </Link>
      <Link to="/projects" className={styles.LinkElement}> Projects </Link>
      <Link to="/contact" className={styles.LinkElement}> Contact </Link>
    </div>
  );
}

export default Navbar;
