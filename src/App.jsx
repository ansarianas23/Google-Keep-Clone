import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import CreateNote from './components/CreateNote'
import ThemeContext from './context/ThemeContext'

function App() {

  const [arrayItem, setArrayItem] = useState([])  // main array that is being rendered on notes
  const [editableNote, setEditableNote] = useState(null) // it hold the value of object on which edit is clicked
  const [currentMode, setCurrentMode] = useState('lightMode') // it holds dark mode state

  // Function for dark mode
  const toggleDarkMode=()=>{
    if(currentMode === 'lightMode'){
      setCurrentMode('darkMode')
      document.body.style.backgroundColor = '#202124'
    }
    else if(currentMode === 'darkMode'){
      setCurrentMode('lightMode')
      document.body.style.backgroundColor = 'white'
    }
  }
  console.log({currentMode})
  
  // Function to add notes
  const addNotes = (note) =>{
    setArrayItem((prevData)=>{
      return [...prevData, note]
    })
  }
  
  // Function to delete notes
  const deleteNotes =(id) =>{
    let filtereddata = arrayItem.filter((item)=>{
      return item.id !== id;
    })
    setArrayItem(filtereddata)
  }

  // Function to edit notes
  const editNotes =(newObj) =>{
    setEditableNote(arrayItem.find(note=>note.id == newObj.id))
  }

  // Function to update edited notes
  const updateNote = (updatedNote) =>{
    const index = arrayItem.findIndex(itm=>itm.id === updatedNote.id)
    const newNote = [...arrayItem]
    newNote.splice(index, 1 , updatedNote)
    setArrayItem(newNote)
    console.log("this is editable notes",updatedNote)
    console.log(index)
    // console.log("This is updated newNote array" ,newNote)
    // console.log("This is updated newNote array" ,arrayItem)
  }

  // use the context
  const theme = useContext(ThemeContext)
  
  return (
   <>
   <ThemeContext.Provider value={currentMode}>
    <Navbar toggleDarkMode={toggleDarkMode}/>
    <div className='mx-3'>
      <CreateNote updateNote={updateNote} editableNote={editableNote} addNotes={addNotes} arrayItem={arrayItem}/>
    </div>
    <Notes editNotes={editNotes} deleteNotes={deleteNotes} arrayItem={arrayItem}/>
   </ThemeContext.Provider>
   </>
  )
}

export default App
