import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from './Navbar.module.css';

const navbarNavigator: Array<{ url: string, name: string }> = [
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
    name: 'Register'
  }
]

const Navbar = () => {
  const router = useRouter();
  const validateClassSelected = (nav:string) => (router.asPath === nav ? styles.selected : '')
  return (
    <nav>
      {
      navbarNavigator.map(({ url, name }) => (
        <Link key={url} href={url} className={`${styles.generic} ${validateClassSelected(url)}`}>{name}</Link>
      ))
      }
    </nav>
  )
}

export default Navbar;
