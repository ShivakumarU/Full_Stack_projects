import React from 'react'
import logo from '../assets/Logo.jpg'
import logoName from '../assets/logo-name.jpg'
import '../styles/HomePage.css'
import { IoSearchOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";



const HomePage = () => {
  const text = "Investigations . . .";
  const CreateNewClaim = () => {

  }
  return (
    <div>
      <div className="header-component">
        <div className='logo-container'>
          <img src={logo} alt="logo" width={'50px'} height={'50px'}/>
          <img src={logoName} alt="logo-name" width={'140px'} height={'50px'}/>
        </div>
        <div className='search-container'>
          <IoSearchOutline size={23}/>
          <input type="search" placeholder=' search for claims . . . .'/>
        </div>
        <div className='buttons-container'>
          <button className='rotating-shadow' onClick={CreateNewClaim}>Create New</button>
          <button><FaUserAlt /> Login</button>
        </div>
      </div>
      <div className="body-component1">
        <div className='logo-name-image'>
          <img src={logoName} alt="LogoName on HomePage" />
        </div>
        <div className="text-container">
          <h3 className="static-text">Vehicle Insurance</h3>
          <h3 className="typing-text">Investigations.!</h3>
        </div>
      </div>
      <div className="body-component2">
        <h2>Investigation records ⬇</h2>
        <div>
          <p> claim no: XXXXXXX     policy no:   XXXXXXX        case number:  XXXXXXXX          vehicle type: XXXXXX</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage