import React, { useState } from 'react'
import css from "./Header.module.css"
import logo from '../../assets/logo.png'
import { FaCartPlus } from "react-icons/fa6"
import { FaBars } from 'react-icons/fa'; // FontAwesome Bars icon



const Header = () => {
  const [ShowMenu,setShowMenu] = useState(true)
  const toggleMenu =() =>{
    setShowMenu((ShowMenu) =>!ShowMenu)
  }
  return (
<div className={css.container}> 
    <div className={css.logo}>
      <img src={logo} alt=''/>
      <span> amazon</span>
    </div>

    <div className={css.right}>
      <div className={css.bars} onClick={toggleMenu}>
        <FaBars />

      </div>
        
          <ul className={css.menu} style={{display:ShowMenu? 'inherit':'none'}}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        <input type='text' className={css.search} placeholder='search'/>
        <FaCartPlus className={css.cart}/>
    </div>
</div>
  )
}

export default Header
