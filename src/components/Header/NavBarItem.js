import React, { useState } from 'react'
import { iconSelector } from '../../helpers/iconSelector'
import { NavLink } from "react-router-dom";


export default function NavBarItem (props) {
  const { tabKey, localeNavBtns, lang, route } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <NavLink to={route} exact 
    className='nav-btn' 
    activeClassName='nav-btn-current'
    onMouseEnter={()=> setIsHovering(true)}
    onMouseLeave={()=> setIsHovering(false)}
    onClick={ () => setTimeout(() => {
      setIsHovering(false)
    }, 2000) }
    >
    {!isHovering && iconSelector(tabKey)}
    {isHovering && localeNavBtns[lang][tabKey]}
    </NavLink>
  )
};