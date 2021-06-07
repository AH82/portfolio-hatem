import React, {useState, useEffect } from 'react';
import HatemDeuxAllFace from '../HatemDeuxAllFace_svg.js';
import Typewriter from 'typewriter-effect';
import './Home.css';


export default function Home(props) {
  const { changeLanguage, lang } = props;
  // const [ hatem, setHatem ] = useState("");

  // Data
  const homeMessage = {
    en: {
      greeting: `Bonjour–Hi !`,
      welcome: `Welcome to my Portfolio App!`,
      intro: `I am`,
      name: `Hatem`,
      jobTitle: `A Full-Stack \nWeb-Developer.`,
      tagline: `Junior, Fresh, Entry-Level.`
    },
    fr: {
      greeting: `Bonjour–Hi !`,
      welcome: `Bienvenue à mon App Portfolio`,
      intro: `Je m'appelle`,
      name: `Hatem`,
      jobTitle: `Un développeur Web Full-Stack`,
      tagline: `Junior, Frais, Débutant.` // Débutant or Premier Échelon
    },
    // ww = world wide // just as a template
    ww: {
      greeting: ``,
      welcome: ``,
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

    <div  className='main-page home' >
      <div key={'home-'+lang} className='greet-card'>
        <h1 className="greeting">
        <Typewriter
            onInit={ (Typewriter)=> {
              Typewriter
              .pauseFor(1000)
              .start()
              .changeDelay(50)
              .typeString( 'Bonjour !')
              .deleteAll(150)
              .typeString( 'Hi!')
              .deleteAll(150)
              .typeString( homeMessage[lang].greeting )
            }}
            options={{
              // strings: [ 'Bonjour !', 'Hi!','Boujour Hi !'],
              cursor: "",
              delay: 50,
              deleteSpeed: 200,
              autoStart: true,
              loop: false,
            }}
          />
        </h1>

        <h1 
          key={'home-greeting-'+lang}
          >
          {/* <div className='greeting'>{homeMessage[lang].greeting + "‥"}</div> */}
          <div className='intro'>{homeMessage[lang].intro} </div>

          <div className='name hatem'>
          
          {homeMessage[lang].name}
              <HatemDeuxAllFace/>
            
          </div>


          <div className='jobTitle' >{homeMessage[lang].jobTitle}</div>

        </h1>

        <p 
          key={'tagline-'+lang} 
          className='tagline' 
          >
          {homeMessage[lang].tagline}
        </p>

      </div>
      {/* <div style={{height: '25vw'}}> <HatemDeuxAllFace/> </div> */}
    </div>
  )
}
