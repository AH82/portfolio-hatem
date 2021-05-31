import React from 'react';
import HatemDeuxAllFace from '../HatemDeuxAllFace_svg.js'



export default function Home(props) {
  const {    
    changeLanguage, 
    lang 
  } = props;

  const title = {
    en: [
      `Bonjour / Hi ! .. I am`,
      // `I am `,
      `Hatem`,
      `A Full-Stack Web-Developer.`
    ],
    fr: [
      `Bonjour/Hi!,`,
      `Je m'appelle `,
      `Hatem`,
      `Un développeur Web Full-Stack.`
    ]
  }
  const subTitle = {
    en: `
    Junior, Fresh, Entry-Level.
    `,
    fr:`
    Junior, Frais, Débutant.
    `
  }
  // Junior
  // Frais
  // premier échelon, débutants
  

  return (

    <div key={'home-'+lang} className='main-page home col-2' >
      <div>
        <h1 key={'home-title-'+lang}>
          {title[lang].map(sentence => 
          sentence === 'Hatem' ? <span className='hatem'>{sentence}</span> :<><br/>{sentence}</>)}
        </h1>
        <p key={'subtitle-'+lang} className='subtitle' >{subTitle[lang]}</p>
      </div>
        <HatemDeuxAllFace/>
    </div>
  )
}
