import React from 'react';
import AddNote from '../components/AddNote'
import ListItem from '../components/ListItem'
import Navbar from '../components/Navbar'
import PropTypes from 'prop-types';

function Notes({ notes, deleteNote, saveNote }) {
  return (
    <>
      <Navbar />
      <AddNote saveNote={saveNote} />
      <ListItem notes={notes} deleteNote={deleteNote} />
    </>
  )
}

Notes.propTypes = {
  notes: PropTypes.array,
  deleteNote: PropTypes.func,
  saveNote: PropTypes.func,
}

export default Notes;