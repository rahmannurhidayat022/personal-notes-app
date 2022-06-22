import React from 'react';
import Container from './parts/Container';
import styles from './ListItem.module.css';
import Items from './parts/Items';
import PropTypes from 'prop-types';

function ListItem({ notes, deleteNote, changeStatusArchive, query }) {
  const queryNotes = notes.filter((item) => {
    if (query === '') return item;
    if (item.title.toLowerCase().includes(query.toLowerCase())) {
      return item;
    }
  })

  console.log(queryNotes)
  
  const activeNotes = queryNotes.filter(item => item.archived === false);
  const archiveNotes = queryNotes.filter(item => item.archived === true);

  return (
    <Container>
      <div className={styles.list__item}>
        <h2 className={styles.h2}>Active Notes</h2>
        <div className={styles.box}>
          {activeNotes.length > 0 ? activeNotes
          .map((note) => {
            return <Items changeStatusArchive={changeStatusArchive} deleteNote={deleteNote} key={note.id} note={note} />
          }) : 'Empty'}
        </div>
      </div>
      <div className={styles.list__item}>
        <h2 className={styles.h2}>Archive Notes</h2>
        <div className={styles.box}>
          {archiveNotes.length > 0 ? archiveNotes.map((note) => {
            return <Items changeStatusArchive={changeStatusArchive} deleteNote={deleteNote} key={note.id} note={note} />
          }) : 'Empty'}
        </div>
      </div>
    </Container>
  )
}

ListItem.propTypes = {
  notes: PropTypes.array,
  deleteNote: PropTypes.func,
  changeStatusArchive: PropTypes.func,
  query: PropTypes.string,
}

export default ListItem;