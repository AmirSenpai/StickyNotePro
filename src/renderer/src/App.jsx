import { useState, useEffect } from 'react'
import StickyNote from './components/StickyNote'
import Versions from './components/Versions'

const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('stickyNotes')) || []
    setNotes(savedNotes)
  }, [])

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('stickyNotes', JSON.stringify(notes))
    }
  }, [notes])

  const addNote = () => {
    const newNote = { id: Date.now(), content: '' }
    setNotes((prev) => [...prev, newNote])
  }

  const updateNote = (id, content) => {
    setNotes((prev) => prev.map((note) => (note.id === id ? { ...note, content } : note)))
  }

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <button onClick={addNote} className="btn btn-primary mb-4">
          Add Note
        </button>
        <div className="flex flex-wrap gap-4">
          {notes.map((note) => (
            <StickyNote
            key={note.id}
            id={note.id}
            content={note.content}
            onContentChange={updateNote}
            onDelete={deleteNote}
            />
          ))}
        </div>
          <Versions />
      </div>
    </div>
  )
}

export default App
