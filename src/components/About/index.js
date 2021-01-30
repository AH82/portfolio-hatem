import React from 'react';

export default function About(props) {
  const { about } = props;
  return (
    <section style={{color: 'white'}}>
      {about.map( (elem) => <p>{elem}</p> ) }
    </section>
  )
}
