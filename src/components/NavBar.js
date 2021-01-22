import NavBarItem from './NavBarItem';
import './NavBar.css';


export default function NavBar () {
  return (
    <nav className='navbar'>
      nav
      <NavBarItem name='home'/>
      <NavBarItem name='about'/>
      <NavBarItem name='skills'/>
      <NavBarItem name='my work'/>
      <NavBarItem name='contact'/>
    </nav>
  )
}