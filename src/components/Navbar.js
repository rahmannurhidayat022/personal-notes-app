import React, { Component } from 'react';
import styles from './Navbar.module.css';
import Brand from './parts/Brand';
import Searchbar from './parts/Searchbar';

export default class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <Brand/>
        <Searchbar/>
      </div>
    )
  }
}
