import React, { useState } from 'react';
import { iconSelector } from '../../helpers/iconSelector'

import './LanguageSelector.css';


export default function LanguageSelector(props) {

  const { changeLanguage } = props;
  
  const [ languageDisplay, setLanguageDisplay ] = useState("fr");

  const handleClick = function () {
    changeLanguage(languageDisplay);
    languageDisplay === 'fr' &&  setLanguageDisplay("en")
    languageDisplay === 'en' &&  setLanguageDisplay("fr")
  }

  return (
    <button className={'lang-box ' + languageDisplay}  onClick={handleClick}>
      {iconSelector(languageDisplay)} {languageDisplay.toUpperCase() }
    </button>
  )
}
