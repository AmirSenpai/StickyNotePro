import { useState, useEffect } from "react";
import StickyNote from "./components/StickyNote";

const App = () => {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on initial render
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("stickyNotes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage when they change
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("stickyNotes", JSON.stringify(notes));
    }
  }, [notes]);

  const addNote = () => {
    const newNote = { id: Date.now(), content: "" };
    setNotes((prev) => [...prev, newNote]);
  };

  const updateNote = (id, content) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, content } : note))
    );
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div>
      <button onClick={addNote}>Add Note</button>
      <div>
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
    </div>
  );
};

export default App;
