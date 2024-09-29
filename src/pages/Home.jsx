import React from 'react';
import styles from './Home.module.css';
import profilePicture from '../assets/profile-picture.jpg'; // Your profile picture

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.heroContent}>
        <h1>Welcome to My Personal Portfolio</h1>
        
        <div className={styles.profileSection}>
          {/* Profile Picture */}
          <img src={profilePicture} alt="Prakash Devkota" className={styles.profilePicture} />
          
          {/* Text Content */}
          <div className={styles.textContent}>
            <p>
              I'm Prakash Devkota, a dedicated software engineer passionate about creating innovative web and mobile applications. 
            </p>

            {/* Additional Section - Skills or Services */}
            <div className={styles.skillsSection}>
              <h2>My Skills</h2>
              <p>Here are some of the technologies and tools I work with:</p>
              <ul>
                <li>React & Node.js</li>
                <li>C# & Python</li>
                <li>MongDB & MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
