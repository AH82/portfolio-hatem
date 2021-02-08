import React from 'react';

export default function About(props) {
  const { about, lang } = props;
  return (
    <div className='main-page'>
    <h1>About</h1>
    <section>
      {about[lang].map( (elem, index) => <p key={index}>{elem}</p> ) }
    </section>
    </div>
  )
}
