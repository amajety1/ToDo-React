import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleDeleteClick(){
    // Call the onDelete function with the ID as an argument
    props.delete(props.id);
  };

  return (
    <div className='note'>
      <p class='note-title'>{props.title}</p>
      <p class='note-content'>{props.content}</p>
     
      <button className="delete-icon" onClick={handleDeleteClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
