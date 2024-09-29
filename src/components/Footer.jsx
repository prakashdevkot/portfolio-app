// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Prakash Devkota. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/prakashdevkot" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/prakash-devkota-256093284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.youtube.com/channel/UCS0xySPkIlZ1KCwuYic6O8Q" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;