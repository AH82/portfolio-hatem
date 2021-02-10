import './Header.css';

import Logo from './Logo';
import LanguageSelector from './LanguageSelector'
import NavBar from './NavBar';
import SocialMediaList from './SocialMediaList';

export default function Header (props) {
  
  const { 
    localeNavBtns, 
    socialMedia, 
    changeLanguage, 
    lang 
  } = props;

  return (
    <header className='folio-header'>
      <Logo/>
      <LanguageSelector changeLanguage={changeLanguage}/>
      <NavBar         
        localeNavBtns={localeNavBtns}
        lang={lang}
      />
      <SocialMediaList socialMedia={socialMedia} />
    </header>
  )
};