import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const CreateNote = ({ addNotes, editableNote, updateNote, arrayItem}) => {
  const [show, setShow] = useState(false)
  
  const [note, setNote] = useState({
    title: "",
    description: "",
    id: ""
  })
  // console.log("from create bote",editableNote)
  // console.log(note)
  // console.log("current mode ois",currentMode)

  // Taking input values
  const handleOnChange = (e) =>{
    const { name, value } =  e.target;
    setNote((prevData)=>{
      return {
        ...prevData,
        [name]: value,
        id: arrayItem.length + 1 
      }
    })
  }

  const updatedNote ={
    title: note.title,
    description: note.description,
    // id: editableNote.id
  }

  // Function to add notes
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(editableNote){
      updateNote(updatedNote)
      // updateNote(note)
    }
    else{
      addNotes(note)
      // console.log(note)
    }

    setNote({
      title: "",
      description: ""
    })
    setShow(false)
  }

  useEffect(()=>{
    if(editableNote){
      setNote({
        title: editableNote.title,
        description: editableNote.description
      })
    }
  },[editableNote])

  // Closehandle
  const HandleClose = (e)=>{
    e.preventDefault();
    setShow(false)
  }

  const theme = useContext(ThemeContext)

  return (
    <div>
      <form className={`flex flex-col max-w-[600px] shadow-lg border px-2 py-3 m-auto rounded-md mt-10 relative ${theme === "darkMode"? "bg-[#202124] border-gray-500":"bg-white"}`}>
          <input name='title' value={note.title} onChange={handleOnChange} className={`rounded-sm p-2 outline-0 mb-4 ${show? '': 'hidden'}  ${theme === "darkMode"? "bg-[#202124] placeholder:text-white text-white":"bg-white text-black placeholder:text-black"}`} type="text" placeholder='Title'/>
          <textarea name='description' value={note.description} onChange={handleOnChange} onClick={()=>{setShow(true)}}  className={`rounded-sm outline-0 p-2 ${theme === "darkMode"? "bg-[#202124] placeholder:text-white text-white":"bg-white text-black placeholder:text-black"}`} placeholder='Take a note...' rows={show? 5: 0}></textarea>
          
          <div className='flex flex-row-reverse md:flex-row justify-between'>
            <button onClick={handleSubmit} className={`rounded-sm w-fit px-3 py-2 mt-4 text-sm ${show? '': 'hidden'} font-medium hover:bg-gray-200 hover:shadow-md ${theme === "darkMode"? "bg-[#202124] text-gray-300 hover:bg-white hover:bg-opacity-10":"bg-white"}`}>{editableNote? "Edit Note": "Add Note"}</button>

            <button onClick={HandleClose} className={`rounded-sm w-fit px-3 py-2 mt-4 text-sm ${show? '': 'hidden'} font-medium hover:bg-gray-200 hover:shadow-md ${theme === "darkMode"? "bg-[#202124] text-gray-300 hover:bg-white hover:bg-opacity-10":"bg-white"}`}>Close</button>
          </div>
      </form>
    </div>
  )
}

export default CreateNote
