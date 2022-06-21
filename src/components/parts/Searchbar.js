import React, { Component } from 'react';
import styles from './Searchbar.module.css'

export default class Searchbar extends Component {
  render() {
    return (
      <div className={styles.search__bar__container}>
        <input className={styles.search__bar} type="text" placeholder='Search Notes by Title'/>
        <img className={styles.search__bar__icon} src="/icons/ice_cream.png" alt="search bar icon" />
      </div>
    )
  }
}
