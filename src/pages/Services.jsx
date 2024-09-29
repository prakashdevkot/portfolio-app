// src/pages/Services.jsx
import React from 'react';
import styles from './Services.module.css';

function Services() {
  const services = [
    { name: 'Web Development', icon: '🌐' },
    { name: 'Mobile App Development', icon: '📱' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Database Management', icon: '🗄️' },
  ];

  return (
    <div className={styles.services}>
      <h2>My Services</h2>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <span className={styles.serviceIcon}>{service.icon}</span>
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;