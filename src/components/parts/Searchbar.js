import React from 'react';
import styles from './Searchbar.module.css'

export default function Searchbar({ setQuery }) {
  return (
    <div className={styles.search__bar__container}>
      <input
      onChange={(e) => setQuery(e.target.value)} 
      className={styles.search__bar}
      type="text"
      placeholder='Search Notes by Title'
    />
      <img className={styles.search__bar__icon} src="/icons/ice_cream.png" alt="search bar icon" />
    </div>
  )
}
