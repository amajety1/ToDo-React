import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleDeleteClick(){
    // Call the onDelete function with the ID as an argument
    props.deleted(props.id);
  };

  return (
    <div className='note'>
      <p>{props.title}</p>
      <p>{props.content}</p>
      <button className="delete-icon" onClick={handleDeleteClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
