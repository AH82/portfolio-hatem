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
        {true && <LogoMsg 
          message1='beta' 
          message2={
            lang === 'fr' 
            ? 'Travail en cours' 
            : 'Work in progress'
            }
          />}
      </div>
      <LanguageSelector changeLanguage={changeLanguage}/>
      <NavBar         
        localeNavBtns={localeNavBtns}
        lang={lang}
      />
      <SocialMediaList socialMedia={socialMedia} />
    </header>
  )
};