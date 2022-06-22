import React from 'react';
import styles from './Navbar.module.css';
import Brand from './parts/Brand';
import Searchbar from './parts/Searchbar';

export default function Navbar({ setQuery }) {
  return (
    <div className={styles.navbar}>
      <Brand/>
      <Searchbar setQuery={setQuery} />
    </div>
  )
}
