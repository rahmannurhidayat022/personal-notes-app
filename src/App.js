import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getInitialData from './utils/initialData';

const NotesPage = lazy(() => import('./pages/Notes'));
const ArchivePage = lazy(() => import('./pages/Archive'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

export default function App() {
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

  const changeStatusArchive = (id) => {
    const filtered = notes.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          archived: !item.archived,
        }
      }

      return item;
    });
    setNotes(filtered);
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<NotesPage
            notes={notes}
            saveNote={saveNote}
            deleteNote={deleteNote}
            changeStatusArchive={changeStatusArchive}
          />}/>
          <Route path="/archives" element={<ArchivePage notes={notes} />}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}
