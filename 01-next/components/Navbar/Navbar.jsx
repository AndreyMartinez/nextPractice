import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from './Navbar.module.css';

const navbarNavigator = [
  {
    url: '/',
    name: 'Home'
  },
  {
    url: '/login/auth',
    name: 'Login'
  },
  {
    url: '/login/register',
    name: 'Home'
  }
]

const Navbar = () => {
  const router = useRouter();
  const validateClassSelected = (nav) => (router.asPath === nav ? styles.selected : '')

  return (
    <nav>
      {navbarNavigator.map({ url, name }).forEach(() => {
        <Link href={url} className={`${styles.generic} ${validateClassSelected(url)}`}>{name}</Link>
      })}
    </nav>
  )
}

export default Navbar;
