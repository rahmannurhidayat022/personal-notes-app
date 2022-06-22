import React from 'react';
import Container from './parts/Container';
import styles from './ListItem.module.css';
import Items from './parts/Items';
import PropTypes from 'prop-types';

function ListItem({ notes, deleteNote }) {
  return (
    <Container>
      <div className={styles.list__item}>
        <h2 className={styles.h2}>Active Notes</h2>
        <div className={styles.box}>
          {notes.map((note) => {
            return <Items deleteNote={deleteNote} key={note.id} note={note} />
          })}
        </div>
      </div>
    </Container>
  )
}

ListItem.propTypes = {
  notes: PropTypes.array,
  deleteNote: PropTypes.func,
}

export default ListItem;