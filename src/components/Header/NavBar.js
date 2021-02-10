import React from "react";

import NavBarItem from './NavBarItem';
import './NavBar.css';


export default function NavBar (props) {
  
  return (
    <nav className='navbar'>
      <NavBarItem {...props} tabKey={'home'} route='/'/>
      <NavBarItem {...props} tabKey={'about'} route='/about'/>
      <NavBarItem {...props} tabKey={'skills'} route='/skills'/>
      <NavBarItem {...props} tabKey={'work'} route='/portfolio'/>
      <NavBarItem {...props} tabKey={'contact'} route='/contacts'/>
    </nav>
  )
}