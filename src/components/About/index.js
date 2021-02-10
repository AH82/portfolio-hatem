import React from 'react';

export default function About(props) {
  const { localePageHeadings, about, lang } = props;
  
  return (
    <div className='main-page'>
    <h1>{localePageHeadings[lang].about}</h1>

    <section>
      {about[lang].map( (elem, index) => <p key={index}>{elem}</p> ) }
    </section>
    </div>
  )
}
