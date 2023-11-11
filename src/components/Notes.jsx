import React,{ useContext } from 'react'
import Note from './Note'
import { MdLightbulbOutline } from 'react-icons/md';
import ThemeContext from '../context/ThemeContext';

const Notes = ({ arrayItem, deleteNotes, editNotes }) => {
  const theme = useContext(ThemeContext)

  return (
    <div className='noteContainer w-[90vw] flex justify-center m-auto gap-3 flex-wrap mt-10'>
      {arrayItem.map((item, index)=>{
        return <Note
        key={index}
        id={item.id}
        title={item.title}
        description={item.description}
        deleteNotes={deleteNotes}
        editNotes={editNotes}
        arrayItem={arrayItem}
        />
      })}

      <div className={`${arrayItem.length == 0? "": "hidden"} flex flex-col items-center space-y-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10`}>
        {/* <img className='w-16' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNOSAyMWMwIC41NS40NSAxIDEgMWg0Yy41NSAwIDEtLjQ1IDEtMXYtMUg5djF6bTMtMTlDOC4xNCAyIDUgNS4xNCA1IDljMCAyLjM4IDEuMTkgNC40NyAzIDUuNzRWMTdjMCAuNTUuNDUgMSAxIDFoNmMuNTUgMCAxLS40NSAxLTF2LTIuMjZjMS44MS0xLjI3IDMtMy4zNiAzLTUuNzQgMC0zLjg2LTMuMTQtNy03LTd6bTIuODUgMTEuMWwtLjg1LjZWMTZoLTR2LTIuM2wtLjg1LS42QTQuOTk3IDQuOTk3IDAgMCAxIDcgOWMwLTIuNzYgMi4yNC01IDUtNXM1IDIuMjQgNSA1YzAgMS42My0uOCAzLjE2LTIuMTUgNC4xeiIvPgo8L3N2Zz4K" alt="" /> */}
        <span className={`text-7xl md:text-9xl ${theme === "darkMode"? "text-[#363739]":"text-gray-200"}`}><MdLightbulbOutline/></span>
        <span className={`text-xl md:text-2xl text-center ${theme === "darkMode"? "text-[#9aa0a6]":"text-gray-500"}`}>Note you add appear here</span>
        
      </div>
    </div>
  )
}

export default Notes

