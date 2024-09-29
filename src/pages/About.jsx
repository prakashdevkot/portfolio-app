// src/pages/About.jsx
import React from 'react';
import profilePicture from '../assets/profile-picture.jpg';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <h2>About Me</h2>
        <div className={styles.profileSection}>
          <img src={profilePicture} alt="Your Name" className={styles.profilePicture} />
          <div className={styles.profileInfo}>
            <p>Hi, I'm Prakash Devkota. I'm a software engineer with a passion for creating mobile and web applications. I can work as software developer,
                business analyst, software analyst, and database administrator.  </p>
                <a href="/my_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
  View My Resume
</a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;