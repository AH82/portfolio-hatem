import React from 'react';

const title = [
  `Bonjour, Hi!,`,
  `I am Hatem,`,
  `A Full-Stack Web-Developer.`
]
const subTitle = `
Junior, Fresh, Entry-Level.
`;

export default function Home(props) {
  return (

    <div className='main-page home' >
      <h1>
    {title.map(sentence => <>{sentence} <br/></>)}
    </h1>
    <p>{subTitle}</p>
    </div>
  )
}
