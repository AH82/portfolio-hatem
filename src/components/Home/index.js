import React from 'react';

const title = [
  `Bonjour/Hi,`,
  `I'm Hatem,`,
  `full stack web developer.`
]
const subTitle = `
junior, fresh, entry-level.
`;

export default function Home() {
  return (

    <div >
      <h1>
    {title.map(sentence => <>{sentence} <br/></>)}
    </h1>
    <p>{subTitle}</p>
    </div>
  )
}
