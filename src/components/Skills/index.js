import React from 'react';

export default function Skills(props) {
  
  const { skills, localePageHeadings, lang } = props;
  // const lang = "en"; // hardcoded for now, should come from props later.

  // verfies data in selected language, else defaults to English.
  const verifyLocale = function (langsContainer, lang) {
    // if empty array
    if (Array.isArray(langsContainer[lang]) && !langsContainer[lang].length) {
      return "en";
    } else {
      // if empty string
      return langsContainer[lang] ? lang : "en";
    }
  };

  const locale = verifyLocale(skills, lang)
  
  return (
    <div className='main-page'>
      <h1>
        {localePageHeadings[lang].skills}
      </h1>
      {
        skills[locale].map( (elem, index) => (
          <p key={index} >{elem}</p>
        ))
      }
    </div>
  )
}
