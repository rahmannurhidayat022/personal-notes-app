import React from 'react';
import styles from './Items.module.css';
import Button from './Button';
import PropTypes from 'prop-types';

function Items({ note, deleteNote }) {
  return (
    <div className={styles.item}>
      <h3 className={styles.item__title}>{note.title}</h3>
      <div className={styles.item__date}>{note.createdAt}</div>
      <div className={styles.item__body}>{note.body}</div>
      <div className={styles.item__action}>
        <Button onClick={() => deleteNote(note.id)} type="button" variant='danger'>Delete</Button>
        <Button type="button" variant='secondary'>Archive</Button>
      </div>
    </div>
  )
}

Items.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func,
}

export default Items;