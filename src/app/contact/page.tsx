import React from 'react';
import styles from '../styles/Contact.module.css'; 

const Contact = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Contact Us</h2>
      
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input type="text" id="name" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input type="email" id="email" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea id="message" className={styles.textarea} required></textarea>
        </div>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
      
    </section>
  );
};

export default Contact;
