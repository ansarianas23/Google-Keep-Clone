import React, { useContext, useState } from 'react'
import keeplogo from '../assets/keeplogo.png'
import ThemeContext from '../context/ThemeContext'



const Navbar = ({ toggleDarkMode, serachItem}) => {

    const [hideinput, setHideInput] = useState(false)

    const handleClick = ()=>{
        toggleDarkMode()
    }

    const theme = useContext(ThemeContext)

  return (
    <div>
        <header>
            <nav className={`w-full h-16 flex items-center px-4 shadow-md ${theme === "darkMode"? "bg-['#202124']":"bg-white"}`}>
                <div className="left flex items-center">
                    <div className={`bars hover:bg-gray-200 cursor-pointer rounded-full px-4 py-3 text-xl ${theme === "darkMode"? "text-white":"text-black"}`}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className='logo flex items-center space-x-2 cursor-pointer'>
                        <img className='w-10 h-auto' src={keeplogo} alt="main-logo" />
                        <span className={`text-2xl ${theme === "darkMode"? "text-white":"text-gray-900"}`}>Keep</span>
                    </div>
                </div>

                <div className="middle relative h-fit -mx-40 md:-ml-0 md:left-[4%]">
                    <input className={`${hideinput? "": "hidden"} md:block rounded-md pl-14 pr-5 py-3 outline-0 focus:shadow-md max-w-[55vw] w-[75vw] md:w-[40vw] ${theme === "darkMode"? "bg-[#525355] text-white focus:bg-white focus:text-black placeholder:text-white focus:placeholder:text-black":"bg-gray-100 focus:bg-white text-black"}`} type="text" placeholder='Search' />
                    <span className={`hidden md:block absolute md:left-2 top-[50%] -translate-y-[50%] hover:bg-gray-200 px-3 py-2 rounded-full cursor-pointer ${theme === "darkMode"? "text-gray-400 hover:bg-black hover:bg-opacity-10":"text-gray-500"}`}>
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </span>
                </div>

                <div className="right absolute right-4 flex items-center">
                    <span onClick={()=>{hideinput? setHideInput(false): setHideInput(true)}} className={`md:hidden text-base cursor-pointer bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full mr-3`}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    
                    <div className='toggleBtns mr-4'>
                        <span onClick={handleClick} className={`text-xl cursor-pointer bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full`}>
                            <i className={`fa-regular fa-${theme==="darkMode"? "sun": "moon"}`}></i>
                        </span>
                    </div>

                    <span className='rounded-full bg-gray-200 px-2 py-1 cursor-pointer'>
                        <i className="fa-regular fa-user"></i>
                    </span>
                </div>

            </nav>
        </header>
    </div>
  )
}

export default Navbar
