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
      greetPhrase: `Bonjour–Hi !`,
      welcome: `Welcome to my Portfolio App!`,
      nameIntro: `It's`,
      name: `Hatem`,
      jobRolePhrase: `Your Full-Stack \nWeb-Developer.`,
      tagline: `Detail-Oriented, Resilient Problem-Solver, Critical Analytical Thinker.`
      // tagline: `Junior, Fresh, Entry-Level.` /* previously */ 
    },
    fr: {
      greetPhrase: `Bonjour–Hi !`,
      welcome: `Bienvenue à mon App Portfolio`,
      nameIntro: `C'est`,
      name: `Hatem`,
      jobRolePhrase: `Votre développeur Web Full-Stack`,
      tagline: `Pensée Critique et Analytique, Résolveur de Problèmes Persévérant, Souci du Détail.` 
      // tagline: `Junior, Frais, Débutant.` // Débutant or Premier Échelon /* previously */ 


    },
    // ww = world wide // just as a template
    ww: {
      greetPhrase: ``,
      welcome: ``,
      nameIntro: ``,
      name: ``,
      jobRolePhrase: ``,
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
      <section key={'home-'+lang} className='greet-card-container'>

        <article className='greeting-card-logo logo-bg'>           
          {/* Logo or Photo side */}
          <HatemDeuxAllFace/> {/* Logo */}
        </article>
        <hr/>
        <article className='greeting-card-text '>           
          {/* Text or message side */}
        <h1 className="greet-phrase">
        <Typewriter
            onInit={ (Typewriter)=> {
              Typewriter
              .pauseFor(1000)
              .start()
              .changeDelay(50)
              .typeString( 'Bonjour !')
              .deleteAll(50)
              .typeString( 'Hi!')
              .deleteAll(50)
              .typeString( homeMessage[lang].greetPhrase)
            }}
            options={{
              // strings: [ 'Bonjour !', 'Hi!','Boujour Hi !'],
              cursor: "",
              delay: 25,
              deleteSpeed: 200,
              autoStart: true,
              loop: false,
            }}
          />
        </h1>

        <h1 key={'home-greeting-'+lang} >
          {/* <div className='greet-phrase'>{homeMessage[lang].greetPhrase + "‥"}</div> */}
          <div className='name-intro'>{homeMessage[lang].nameIntro} </div>
          <div className='name'>{homeMessage[lang].name} </div>
          <div className='job-role-phrase' >{homeMessage[lang].jobRolePhrase}</div>
        </h1>
        <h2 className='tagline' key={'tagline-'+lang}> — {homeMessage[lang].tagline}</h2>
        </article>        
      


      </section>
    </div>
  )
}
