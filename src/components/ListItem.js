import React from 'react';
import Container from './parts/Container';
import styles from './ListItem.module.css';
import Items from './parts/Items';

export default function ListItem({ notes }) {
  return (
    <Container>
      <div className={styles.list__item}>
        <h2 className={styles.h2}>Active Notes</h2>
        <div className={styles.box}>
          {notes.map((note) => {
            return <Items key={note.id} note={note} />
          })}
        </div>
      </div>
    </Container>
  )
}
