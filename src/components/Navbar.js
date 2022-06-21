import React, { Component } from 'react';
import styles from './Navbar.module.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles.brand}>
          N
          <img width={'50px'} src="/icons/brand.png" alt="brand logo" />
          TES
        </div>
        <input className={styles.search__bar} type="text" placeholder='Search Notes by Title'/>
      </div>
    )
  }
}
