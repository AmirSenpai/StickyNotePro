import PropTypes from "prop-types";
import Draggable from "react-draggable";
import "/src/assets/StickyNote.css";

const StickyNote = ({ id, content, onContentChange, onDelete }) => {
  return (
    <Draggable>
      <div className="sticky-note">
        <textarea
          value={content}
          onChange={(e) => onContentChange(id, e.target.value)}
          placeholder="Write something..."
        />
        <button onClick={() => onDelete(id)} className="delete-btn">
          ×
        </button>
      </div>
    </Draggable>
  );
};

StickyNote.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  content: PropTypes.string,
  onContentChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default StickyNote;
