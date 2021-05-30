import React from 'react';

export default function Contacts(props) {

  const { localePageHeadings, lang } = props;

  let message = "";
  switch(lang) {
    case "fr": message = `Pour le moment, vous pouvez me contacter sur mon compte de LinkedIn.`
    break;
    // case "en": message = `For the time being, you can contact me on my LinkedIn account.`
    // break;
    default: message = `For the time being, you can contact me on my LinkedIn account.`
  };
  
  return (
    <div className='main-page'>
      <h1>
        {localePageHeadings[lang].contact}
      </h1>
      <p>{message}</p>
    </div>
  )
}
