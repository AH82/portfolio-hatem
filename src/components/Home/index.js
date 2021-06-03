import React, {useState, useEffect } from 'react';
import HatemDeuxAllFace from '../HatemDeuxAllFace_svg.js'


export default function Home(props) {
  const { changeLanguage, lang } = props;
  // const [ hatem, setHatem ] = useState("");

  // Data
  const homeMessage = {
    en: {
      greeting: `Bonjour / Hi !`,
      intro: `I am`,
      name: `Hatem`,
      jobTitle: `A Full-Stack Web-Developer.`,
      tagline: `Junior, Fresh, Entry-Level.`
    },
    fr: {
      greeting: `Bonjour / Hi !`,
      intro: `Je m'appelle`,
      name: `Hatem`,
      jobTitle: `Un développeur Web Full-Stack`,
      tagline: `Junior, Frais, Débutant.` // Débutant or Premier Échelon
    },
    // ww = world wide // just as a template
    ww: {
      greeting: ``,
      intro: ``,
      name: ``,
      jobTitle: ``,
      tagline: ``
    }
  };
 
/*  
  // NO LONGER USEFUL, KEPT FOR REFERENCE ONLY
  useEffect(() => {
    setHatem("");
    [...'Hatem'].map( (char, index) => 
     setTimeout(() => {
       setHatem ((prev)=> prev+char )
      }, 1000 + ( index*100))
    )
    
    return () => {
    <span>{hatem}</span>
    }
  }, [lang])

 */
  return (

    <div  className='main-page home col-2' >
      <div key={'home-'+lang}>

        <h1 
          key={'home-greeting-'+lang}
          >
          <div>{homeMessage[lang].greeting + " .. "}</div>
          <div>{homeMessage[lang].intro} <span className='hatem'>{homeMessage[lang].name}</span></div>
          
          <div>{homeMessage[lang].jobTitle}</div>
        </h1>

        <p 
          key={'tagline-'+lang} 
          className='tagline' 
          >
          {homeMessage[lang].tagline}
        </p>

      </div>
      <HatemDeuxAllFace/>
    </div>
  )
}
