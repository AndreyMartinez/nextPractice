import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from './Navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  console.log(router)
  const validateClassSelected = (nav) => (router.asPath === nav ? styles.selected : '')

  return (
    <nav>
      <Link href="/" className={`${styles.generic} ${validateClassSelected('/')}`}>Home</Link>
      <Link href="/login/auth" className={`${styles.generic} ${validateClassSelected('/login/auth')}`}>Login</Link>
      <Link href="/login/register" className={`${styles.generic} ${validateClassSelected('/login/register')}`}>Register</Link>
    </nav>
  )
}

export default Navbar;
