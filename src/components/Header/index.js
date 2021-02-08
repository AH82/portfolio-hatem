import './Header.css';

import Logo from './Logo';
import LanguageSelector from './LanguageSelector'
import NavBar from './NavBar';
import SocialMediaList from './SocialMediaList';

export default function Header (props) {
  
  const { locale, socialMedia, changeLanguage, lang } = props;

  return (
    <header className='folio-header'>
      <Logo/>
      <LanguageSelector changeLanguage={changeLanguage}/>
      <NavBar locale={locale} lang={lang}/>
      <SocialMediaList socialMedia={socialMedia} />
    </header>
  )
};