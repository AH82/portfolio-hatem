import './Header.css';

import Logo from './Logo';
import NavBar from './NavBar';
import SocialMediaList from './SocialMediaList';

export default function Header () {
  return (
    <header className='folio-header'>
      <Logo/>
      <NavBar/>
      <SocialMediaList/>
    </header>
  )
};