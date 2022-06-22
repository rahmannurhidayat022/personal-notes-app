import React from 'react';
import styles from './Items.module.css';
import Button from './Button';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils/helper';

function Items({ note, deleteNote }) {
  return (
    <div className={styles.item}>
      <h3 className={styles.item__title}>{note.title}</h3>
      <div className={styles.item__date}>{showFormattedDate(note.createdAt)}</div>
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