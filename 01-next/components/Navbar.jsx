import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = ({actualPage}) => {

  const validateClassSelected = (nav) => (actualPage === nav ? styles.selected : '')

  return (
    <nav>
      <Link href="/" className={`${styles.generic} ${validateClassSelected('home')}`}>Home</Link>
      <Link href="/login" className={`${styles.generic} ${validateClassSelected('login')}`}>Login</Link>
    </nav>
  )
}

export default Navbar;
