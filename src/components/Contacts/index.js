import React from 'react';

export default function Contacts(props) {

  const { localePageHeadings, lang } = props;

  return (
    <div className='main-page'>
      <h1>
        {localePageHeadings[lang].contact}
      </h1>
    </div>
  )
}
