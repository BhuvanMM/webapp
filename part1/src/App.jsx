import { useState, useEffect } from 'react'
import axios from 'axios'

const App = (props)=>{
  const[notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('')
  const [showAll,setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/api/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')


  function addNote(event){
    event.preventDefault();
      const obj1 ={
        content:newNote,
        id:String(notes.length+1),
        important:Math.random() < 0.5
      }
      axios
    .post('http://localhost:3001/api/notes', obj1)
    .then(response => {
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
  }
  function handleInput(event){
    setNewNote(event.target.value);
  }
  const notesContent = showAll ? notes : notes.filter((note)=>note.important)
  return(
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll ? 'important':'all'}</button>
      </div>
      <ul>
        {notesContent.map((note)=>
        <li key={note.id}>{note.content}</li>)}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleInput}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App;