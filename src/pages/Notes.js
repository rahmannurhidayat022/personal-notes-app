import React, { useEffect, useState } from 'react';
import AddNote from '../components/AddNote'
import ListItem from '../components/ListItem'
import Navbar from '../components/Navbar'
import getInitialData from '../utils/initialData';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const data = getInitialData();
    setNotes(data);
  }, []);

  const saveNote = (newData) => {
    setNotes((prev) => {
      return [
        ...prev,
        newData,
      ];
    })
  }

  const deleteNote = (id) => {
    const filtered = notes.filter(item => item.id !== id);
    setNotes(filtered)
  }

  return (
    <>
      <Navbar />
      <AddNote saveNote={saveNote} />
      <ListItem notes={notes} deleteNote={deleteNote} />
    </>
  )
}
