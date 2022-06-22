import React from 'react';
import styles from './Navbar.module.css';
import Brand from './parts/Brand';
import Searchbar from './parts/Searchbar';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Brand/>
      <Searchbar/>
    </div>
  )
}
