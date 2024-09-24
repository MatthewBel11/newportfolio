// Pages/NotFoundPage/NotFoundPage.js
import React from 'react';
import styles from './NotFoundPage.module.css'; // Optional: For styling

function NotFoundPage() {
  return (
    <div className={styles.NotFoundContainer}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFoundPage;
