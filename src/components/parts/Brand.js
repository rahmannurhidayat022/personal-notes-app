import React from 'react'
import styles from './Brand.module.css';

export default function Brand() {
  return (
    <div className={styles.brand}>
      N
      <img width={'50px'} src="/icons/brand.png" alt="brand logo" />
      TES
    </div>
  )
}
