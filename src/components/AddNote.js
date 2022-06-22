import React, { useState } from 'react';
import { generateId } from '../utils/helper';
import styles from './AddNote.module.css';
import Button from './parts/Button';
import PropTypes from 'prop-types';

function AddNote({ saveNote }) {
  const CHAR_LIMIT = 50;
  const [title, setTitle] = useState(''); 
  const [desc, setDesc] = useState('');

  const clearingForm = () => {
    setTitle('');
    setDesc('');
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const id = generateId();
    const createdAt = new Date().toISOString();

    const data = {
      id,
      title,
      body: desc,
      createdAt,
      archived: false,
    }
    
    saveNote(data);
    clearingForm();
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.card__title}>Add Note</h1>
      <div className={styles.card__content}>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.form__control}>
            <label className={styles.form__label} htmlFor="title">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)}
             className={styles.form__input_text} maxLength={50} type="text" />
            <div className={styles.form__info}>Characters limit: {CHAR_LIMIT - title.length}</div>
          </div>
          <div className={styles.form__control}>
            <label className={styles.form__label} htmlFor="desc">Description</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} 
              className={styles.form__input_textarea} name="desc" id="desc" cols="30" rows="10"/>
          </div>
          <div className={styles.form__action}>
            <Button onClick={clearingForm} type='reset' variant='secondary' >Reset</Button>
            <Button type='submit' variant='primary'>Save</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

AddNote.propTypes = {
  saveNote: PropTypes.func,
}

export default AddNote;