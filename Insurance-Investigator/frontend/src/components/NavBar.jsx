import React, { useState } from 'react'
import LogoImage from '../assets/Logo-img.png'
import LogoName from '../assets/Logo-Name.png'
import { useNavigate } from 'react-router-dom';

const NavBar = ({searchTerm, setSearchTerm }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "black");

    const handleToggle = () => {
    const newTheme = theme === "acid" ? "black" : "acid";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    };

    const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 py-5 shadow-[1px_1px_10px_rgba(0,0,0,0.2)] dark:shadow-slate-400">
        <div className="flex-1 ">
            <a className="btn btn-ghost flex items-center gap-x-0 ">
                <img src={LogoImage} className="h-12 w-12" alt="LogoImage in navbar" />
                <img src={LogoName} className="h-12 w-45" alt="LogoName in navbar" />
            </a>
        </div>
        <div className="flex-none">
            <div className="flex items-center gap-4">
                <button onClick={()=> navigate('/investigations')} className="btn btn-outline btn-hover-fill before:bg-orange-600 hover:text-white">
                  <span>Create a New Case</span>
                </button>                
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input border-yellow-600 focus:border-gray-500 focus:outline-none focus:border-2 w-full max-w-xs" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
                </div>
                
                <label className="swap swap-rotate mx-2">
                    <input type="checkbox" onChange={handleToggle} checked={theme === "acid"}  />
                    <svg
                        className="swap-on h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    <svg
                        className="swap-off h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </div>
        </div>

    </div>
  )
}

export default NavBar
