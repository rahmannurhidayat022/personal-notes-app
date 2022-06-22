import React from 'react';
import AddNote from '../components/AddNote'
import ListItem from '../components/ListItem'
import Navbar from '../components/Navbar'
import PropTypes from 'prop-types';

function Notes({ notes, deleteNote, saveNote, changeStatusArchive, setQuery, query }) {
  return (
    <>
      <Navbar setQuery={setQuery} />
      <AddNote saveNote={saveNote} />
      <ListItem query={query} notes={notes} deleteNote={deleteNote} changeStatusArchive={changeStatusArchive} />
    </>
  )
}

Notes.propTypes = {
  notes: PropTypes.array,
  deleteNote: PropTypes.func,
  saveNote: PropTypes.func,
  changeStatusArchive: PropTypes.func,
  setQuery: PropTypes.func,
  query: PropTypes.string,
}

export default Notes;