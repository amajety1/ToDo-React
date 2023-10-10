
import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Note from './Note'

function Header() {

  var [noteText, setNoteText] = useState({title:'', content:''});
  var [notes, setNotes] = useState([])

  function onDelete(idToRemove){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== idToRemove;
      });
    });
  }

  function submitted(event){
      event.preventDefault(); // Prevent form submission and page refresh

      
      setNotes(prevNotes=>{
          return([...prevNotes, noteText ])
      })
      setNoteText({title:'', content:''})
  }

  function changeDetected(event){
      const {name, value} = event.target;

      setNoteText(prevNote=>{
          if(name==='title'){
              return({title:value,content:prevNote.content})
          }else{
              return({title:prevNote.title,content:value})
          }
      })


  }
  return (
   <div>
   <div className="container">
    <header>
        <div class='text-container'>
            <h1>To-Do Tracker with React Magic</h1>
            <p>Let these meticulously designed note layouts be the vessel for the treasures hidden within your soul.</p>
        </div>
        
   
      <form onSubmit={submitted}>
     
        <input onChange={changeDetected} name="title" placeholder="Title" value={noteText.title} />
        <textarea onChange={changeDetected} name="content" placeholder="Take a note..." value={noteText.content}  />
        <button><AddCircleIcon/></button>
     </form>
   
    
    
    </header>
    <div class='notes'>
    {notes.map((note, index) => {
  return (
    <Note
      key={index} // You should use a unique key for each Note component
      title={note.title}
      id={index} // Assuming that 'index' can be used as the ID
      content={note.content}
      deleted={onDelete}
    />
  );
})}
   </div>
   </div>
   </div>
  );
}

export default Header;