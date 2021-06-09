import React from "react";

import NavBarItem from './NavBarItem';
import './NavBar.css';


export default function NavBar (props) {
  const { lang } = props;
  // if (!lang) { lang = 'en'}
  
  return (
    <nav className='navbar'>
      <NavBarItem {...props} tabKey={'home'} route={`/${lang}/home`}/>
      <NavBarItem {...props} tabKey={'about'} route={`/${lang}/about`} />
      <NavBarItem {...props} tabKey={'skills'} route={`/${lang}/skills`} />
      <NavBarItem {...props} tabKey={'work'} route={`/${lang}/portfolio`} />
      <NavBarItem {...props} tabKey={'contact'} route={`/${lang}/contacts`} />
    </nav>
  )
}