import { useState } from 'react'
import Draggable from 'react-draggable'
import PropTypes from 'prop-types'
import '/src/assets/StickyNote.css'

const StickyNote = ({ id, content, onContentChange, onDelete }) => {
  const [noteContent, setNoteContent] = useState(content || '')

  const handleContentChange = (e) => {
    setNoteContent(e.target.value)
    onContentChange(id, e.target.value)
  }

  return (
    <Draggable>
      <div className="sticky-note card w-64 bg-yellow-200 shadow-lg p-4">
        <textarea
          value={noteContent}
          onChange={handleContentChange}
          placeholder="Write something..."
          className="textarea textarea-bordered w-full h-32"
        />
        <button onClick={() => onDelete(id)} className="btn btn-error btn-sm text-lg">
          ×
        </button>
      </div>
    </Draggable>
  )
}

StickyNote.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  content: PropTypes.string,
  onContentChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default StickyNote
