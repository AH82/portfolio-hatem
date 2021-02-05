import React, { useState } from 'react'
import { iconSelector } from '../../helpers/iconSelector'
import { NavLink } from "react-router-dom";

import './NavBarItem.css';


export default function NavBarItem (props) {
  const { tabTitle, route } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <NavLink to={route} exact 
    className='nav-btn' 
    activeClassName='nav-btn-current'
    onMouseEnter={()=> setIsHovering(true)}
    onMouseLeave={()=> setIsHovering(false)}
    >
    {!isHovering && iconSelector(tabTitle)}
    {isHovering && tabTitle}
    </NavLink>
  )
};