/**
 * "react-responsive" is/was installed 
 * to use ("useMediaQuery") hook 
 * but eventually wasn't needed
 * albeit might be needed for future implementation.

 * Code kept for potential use in the future 
 ** code pieces : 
      import { useMediaQuery } from 'react-responsive'
      const isPortrait = useMediaQuery({ orientation: 'portrait' })
 */


import './Header.css';

import Logo from './Logo';
import LanguageSelector from './LanguageSelector'
import NavBar from './NavBar';
import SocialMediaList from './SocialMediaList';
import LogoMsg from './LogoMsg';

export default function Header (props) {

  let displayHeaderLogoMessage = true;
  
  const { 
    localeNavBtns, 
    socialMedia, 
    changeLanguage, 
    lang 
  } = props;

  return (
    <header className='folio-header'>
      <div>
        <Logo/>
        {displayHeaderLogoMessage && <LogoMsg 
          // message1='New!'
          message1={
            lang === 'fr' 
            ? 'Nouveau! v2.0.0' 
            : 'New! v2.0.0'
            }
            message2={
              lang === 'fr' 
              ? '# Disponible' 
              : '# Open to Work'
              }
/*             message3={
              lang === 'fr' 
              ? 'v2.0.0' 
              : 'v2.0.0'
              } */
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