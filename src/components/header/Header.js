import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { FaCartPlus } from "react-icons/fa6"
import { FaBars } from 'react-icons/fa'; // FontAwesome Bars icon



const Header = () => {
  const [ShowMenu,setShowMenu] = useState(true)
  const toggleMenu =() =>{
    setShowMenu((ShowMenu) =>!ShowMenu)
  }
  return (
<div className='container'> 
    <div className='logo'>
      <img src={logo} alt=''/>
      <span> amazon</span>
    </div>

    <div className='right'>
      <div className='bars' onClick={toggleMenu}>
        <FaBars />

      </div>
        
          <ul className='menu' style={{display:ShowMenu? 'inherit':'none'}}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        <input type='text' className='search' placeholder='search'/>
        <FaCartPlus className='cart'/>
    </div>
</div>
  )
}

export default Header
