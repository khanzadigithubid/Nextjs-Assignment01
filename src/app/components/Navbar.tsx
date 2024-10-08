"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">CAR SHOWROOM</Link>
      </div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        {/* icon for mobile */}
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <ul className={`${styles.navLinks} ${isOpen ? styles.navActive : ''}`}>
        <li>
          <Link href="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link href="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link href="/showroom" onClick={closeMenu}>Showroom</Link>
        </li>
        <li>
          <Link href="/services" onClick={closeMenu}>Services</Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
