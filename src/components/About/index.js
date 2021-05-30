import React from 'react';

export default function About(props) {
  const { localePageHeadings, about, lang } = props;
  
  return (
    <div key={'about-'+lang} className='main-page'>
    <h1 key={'about-heading-'+lang} >{localePageHeadings[lang].about}</h1>

    <section>
      {about[lang].map( (elem, index) => <p key={lang+index}>{elem}</p> ) }
    </section>
    </div>
  )
}
