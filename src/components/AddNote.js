import React, { Component } from 'react';
import styles from './AddNote.module.css';

export default class AddNote extends Component {
  render() {
    return (
      <div className={styles.card}>
        <h1 className={styles.card__title}>Add Note</h1>
        <div className={styles.card__content}>
          <form>
            <div className={styles.form__control}>
              <label className={styles.form__label} htmlFor="title">Title</label>
              <input className={styles.form__input_text} type="text" />
            </div>
            <div className={styles.form__control}>
              <label className={styles.form__label} htmlFor="desc">Description</label>
              <textarea className={styles.form__input_textarea} name="desc" id="desc" cols="30" rows="10"/>
            </div>
            <div className={styles.form__action}>
              <button>Save</button>
              <button>Reset</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
