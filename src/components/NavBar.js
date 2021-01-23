import React from "react";

import NavBarItem from './NavBarItem';
import './NavBar.css';


export default function NavBar () {
  return (
    <nav className='navbar'>
      <NavBarItem tabTitle='home' route='/'/>
      <NavBarItem tabTitle='about' route='/about'/>
      <NavBarItem tabTitle='skills' route='/skills'/>
      <NavBarItem tabTitle='my work' route='/portfolio'/>
      <NavBarItem tabTitle='contact' route='/contact'/>
    </nav>
  )
}