import React, { useState, useEffect } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Note from './Note'
import axios from "axios";

const urlRoot = "https://api-for-react-list-project.onrender.com"



function Header() {

  var [noteText, setNoteText] = useState({title:'', content:'', id:''});
  var [notes, setNotes] = useState([])
  var [text, setText] = useState([])
  var [log, setLog] = useState('')
  var [isExpanded, setExpanded] = useState(false)
  
  function expand(){
    setExpanded(true);
  }

  useEffect(() => {
    try {
      console.log('hi')
    } catch (error) {
      setLog(error.message)
    }
    
    axios
       .get(`${urlRoot}/notes`)
       .then((response) => {
          let sentList = response.data
          setText(sentList);
          setNotes(sentList);
       })
       .catch((err) => {
          console.log(err);
          setLog(err.message);
       });
 }, []);

    

  function onDelete(idToRemove){

    axios
    .post(`${urlRoot}/deleteNote`, {
      idToRemove:idToRemove
    })
    .then((response) => {
      setNotes(response.data);
      setNoteText({title:'', content:'', id:''})
    });

    // setNotes(prevNotes => {
    //   return prevNotes.filter((noteItem, index) => {
    //     return index !== idToRemove;
    //   });
    // });
  }

  function createPost(event) {
    event.preventDefault(); // Prevent form submission and page refresh
    axios
      .post(`${urlRoot}/newNote`, {
        title: noteText.title,
        content: noteText.content,
        id: ''
      })
      .then((response) => {
        setNotes(response.data);
        setNoteText({title:'', content:'', id:''})
      });

    //   setNotes(prevNotes=>{
    //     return([...prevNotes, noteText ])
    // })
    // setNoteText({title:'', content:'', id:''})
  }


  function changeDetected(event){
      const {name, value} = event.target;

      setNoteText(prevNote=>{
          if(name==='title'){
              return({title:value,content:prevNote.content, id:prevNote.id})
          }else{
              return({title:prevNote.title,content:value,id:prevNote.id})
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
        
   
      <form onSubmit={createPost}>

        {isExpanded&&( <input onChange={changeDetected} name="title" placeholder="Title" value={noteText.title} />)}
       
        <textarea onClick={expand} onChange={changeDetected} name="content" placeholder="Take a note..." value={noteText.content} rows={isExpanded ? 3 : 0}  />
        <button><AddCircleIcon/></button>
     </form>
   
    
    
    </header>
    <div class='notes'>
    {notes.map((note, index) => {
  return (
    <Note
      key={index} // You should use a unique key for each Note component
      title={note.title}
      id={note.id} // Assuming that 'index' can be used as the ID
      content={note.content}
      delete={onDelete}
      
    />
  );
})}
   </div>
   </div>
   </div>
  );
}

export default Header;