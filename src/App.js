import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getInitialData from './utils/initialData';

const NotesPage = lazy(() => import('./pages/Notes'));
const ArchivePage = lazy(() => import('./pages/Archive'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

export default function App() {
  const [notes, setNotes] = useState([]);
  const [archives, setArchives] = useState([]);

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
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<NotesPage notes={notes} saveNote={saveNote} deleteNote={deleteNote} />}/>
          <Route path="/archives" element={<ArchivePage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}
