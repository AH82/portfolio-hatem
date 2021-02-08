import React, { useState } from 'react';
import './LanguageSelector.css';
import { iconSelector } from '../../helpers/iconSelector'

export default function LanguageSelector(props) {

  const { changeLanguage } = props;
  
  // const langs = ["en", "fr", "es", "de"]; //temp hardcode
  // const currentLanguage = "en"
  // let langMenuToggle = true
  const [langToggle, setLangToggle] = useState(false);
  const [ languageDisplay, setLanguageDisplay ] = useState("fr");

  const handleClick = function () {
    console.log('clicked on:', languageDisplay)
    changeLanguage(languageDisplay);
    console.log('clicked on:', languageDisplay)
    languageDisplay === 'fr' &&  setLanguageDisplay("en")
    languageDisplay === 'en' &&  setLanguageDisplay("fr")
    // setLangToggle(!langToggle);
    // setLanguageDisplay(langToggle ? "en" : "fr");
  }

  return (
    // <div onClick={ () => changeLanguage(!lang)}>
    <div onClick={handleClick}>
      {iconSelector(languageDisplay)} {languageDisplay.toUpperCase() }
    </div>
  )

/*   return (
    <div className='lang-box'>
      <MapleLeaf_svg/>
      {!langMenuToggle && <div className='lang-btn'><a>{currentLanguage}</a></div>}
      {!langMenuToggle && <div className='lang-btn-wrapper'>
        {langs.map((lang,index) => 
        <div className='lang-btn'>{iconSelector(lang)}<a>{lang.toUpperCase()}</a></div>)}
        </div> }
    </div>
  )

  return (
    <div>
      <select name='langs' id='langs'>
        { 
        langs.map( (lang, index) => (<option value={lang.toLowerCase()}>{lang.toUpperCase()}</option>)
        )
        }
      </select>
    </div>
  ) */


}
