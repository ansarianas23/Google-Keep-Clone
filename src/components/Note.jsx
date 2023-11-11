import React, { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const Note = ({ title, description, id, deleteNotes, editNotes }) => {
  const [showDelete, setShowDelete] = useState(false)

  const handleDelete = () =>{
    deleteNotes(id)
    // console.log(id)
  }

  const newObj = {
    title: title,
    description: description,
    id: id
  }

  const handleEdit = () =>{
    editNotes(newObj)
    // console.log(newObj)
    // console.log(id)
  }

  const theme = useContext(ThemeContext)



  return (
    <div onMouseOver={()=>{setShowDelete(true)}} onMouseLeave={()=>{setShowDelete(false)}} className={`noteBody border w-64 h-fit p-4 rounded-md hover:shadow-lg transition ease-in-out cursor-default relative overflow-hidden ${theme === "darkMode"? "bg-[#202124] text-white border-gray-500":"bg-white text-black"}`}>
      <h3 className='mb-1 font-medium text-lg mt-3'>{title}</h3>
      <p className=''>{description}</p>

      <div className='button absolute top-2 right-2'>
        <span onClick={handleEdit} className={`cursor-pointer hover:bg-gray-100 hover:text-black hover:shadow-md px-2 py-1 rounded-full ${showDelete? "" : 'lg:hidden'}`}>
          <i className="fa-solid fa-pencil"></i>
        </span>

        <span onClick={handleDelete} className={`cursor-pointer hover:bg-gray-100 hover:text-black hover:shadow-md px-2 py-1 rounded-full ${showDelete? "" : 'lg:hidden'}`}>
          <i className="fa-regular fa-trash-can"></i>
        </span>
      </div>

      
    </div>
  )
}

export default Note

