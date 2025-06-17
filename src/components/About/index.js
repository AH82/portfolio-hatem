import React from 'react';

import './About.css';

/**
 * Page Component rendering about me "this developer" & About this portfolio.
 * this Component page is static as of 2025-06.
 * 
 * @component 
 * @param {Object} props 
 * @param {string} props.localePageHeadings - This page heading. 
    - via {@link //src/hooks/useAppData.js} via {@link //src/locale/localePageHeadings.json}
 * @param {string} props.lang - Language displayed in "en" or "fr".
 * @param 
 * Note: This component is intentionally hardcoded as the effort beyond that is found to be an overkill.
 */
export default function About(props) {
  const { localePageHeadings, /* about ,*/ lang } = props;
  
  return (
    <div key={'about-'+lang} className='main-page about'>
    <h1 key={'about-heading-'+lang} >{localePageHeadings[lang].about}</h1>

    {/* <section>
      {about[lang].map( (elem, index) => <p key={lang+index}>{elem}</p> ) }
    </section> */}

    {/* 2025/04/09 : changed content, [temporarely?] abandoned the original datastructure  */}
    
    {lang === 'en' && (
      <section>
        <article>
        <h2> About <code>.this</code> Developer </h2>
        <p>
          Resilient Problem-solver and detail-oriented Full Stack Web Developer skilled in both front-end and back-end development.<br/>
          Keen on writing clean, clear, modular, scalable, annotated, well-structured & well-documented code, for easy collaboration & maintenance.<br/>
          Engaged in continuous learning and growth, & a soft spot for Databases..<br/>
          Known for perseverance in troubleshooting, issue resolution, and refining solutions
        </p>
        <h4>Education</h4>
        <p>
          Hand-on mentored and trained by <a target="_blank" rel="noreferrer"  href='https://www.lighthouselabs.ca' >Lighthouse Labs</a> in Full-Stack Web-Development (<a target="_blank" rel="noreferrer" href='https://www.lighthouselabs.ca/en/web-development'>curriculum</a>).<br/>
          Holder of a <a target='_blank' rel='noreferrer' href='https://aast.edu/en/colleges/coe/heliopolis/dept/contenttemp.php?page_id=34900001'>

          Bachelor Degree in Computer Engineering
          </a> from <a target="_blank" rel="noreferrer" href='https://aast.edu'>AASTMT</a>.
        </p>

        <h4>The Story Behind the Name "Hatem"</h4>
        <p>
        While not my formal name, "Hatem" is what most people know me by. It was also my late father's name—himself named after a proverbial symbol of generosity and chivalry. The “Deux” suffix (French for “two” or “the second”) simply reflects that I’m next in line. It’s pronounced a bit like the word “hat” followed by the letter “M”—“Hat-em.”
        </p>
        </article>

        <hr/>

        <article>
          <h2> About <code>.this</code> Portfolio website </h2>
            <h4> Build</h4>
          <p>
            This bilingual portfolio is designed as an SPA app, built with React, React Router, Semantic HTML/JSX and custom vanilla CSS, using JSON files as a lightweight front-end database. 
          </p>
            
            <h4>Design</h4>
          <p>
            The design takes inspiration from the Ubuntu OS and from Jacek Jeznach’s 2021 portfolio ( <a target="_blank" rel="noreferrer"  href='https://www.websurl.com/website/552/jj-web-developer-portfolio'> article on it </a> | <a target="_blank" rel="noreferrer"  href='https://github.com/jeznacki'>his GitHub</a> ) — a sleek and memorable interface that, unfortunately, appears to have been taken offline or compromised as of 2025. <br/>
            — My version is simplified with my own touch, and features a sidebar navigation with my logo, external links, and with icon-based buttons leading to the <a href='/#/'>Home</a>
            , <a href='/#/about'>About</a>
            , <a href='/#/skills'>Skills & Experience</a>
            , <a href='/#/portfolio'> My Work (projects)</a>
            , and <a href='/#/contacts'>Contacts</a> sections.
          </p>
            
          <h4> Logo </h4>
          <p>
            The logo is a personal creation: a stylized emblem that nods to my identity. It combines a hat-shaped “M” for my name (Hat+em), eyeglasses (since I wear them), a nose made from Roman numeral II (Deux), and a barcode representing my name, which doubles as a subtle mustache or obscured mouth. It’s a humble but meaningful attempt to brand my work with personality and intent. — The logo is in SVG format and lives in my code as a React component.
          </p>
        </article>
      </section>
      
    )}

    {lang === 'fr' && (
      <section>
        <article>
          <h2>À propos du <code>.this</code> développeur </h2>
          <p>
            Développeur Web Full Stack résilient et soucieux du détail, spécialisé en développement front-end et back-end.<br />
            Attaché à l’écriture d’un code clair, modulable, évolutif, bien structuré et bien documenté, facilitant la collaboration et la maintenance.<br />
            Toujours engagé dans l’apprentissage continu et avec un intérêt particulier pour les bases de données.<br />
            Reconnu pour sa persévérance dans le dépannage, la résolution de problèmes et l’optimisation des solutions.
          </p>
          
          <h4>Formation {/* Éducation */}</h4>
          <p>
            Formé et encadré par <a target="_blank" rel="noreferrer" href='https://www.lighthouselabs.ca/fr'>Lighthouse Labs</a> en développement Web Full Stack (<a target="_blank" rel="noreferrer" href='https://www.lighthouselabs.ca/fr/web-development'>curriculum</a>).<br />
            Titulaire d’un <a target='_blank' rel='noreferrer' href='https://aast.edu/en/colleges/coe/heliopolis/dept/contenttemp.php?page_id=34900001'>Baccalauréat en Génie Informatique</a> obtenu auprès de <a target="_blank" rel="noreferrer" href='https://aast.edu'>AASTMT</a>.
          </p>

          <h4>L’histoire qui se cache derrière le nom "Hatem"</h4>
          <p>
            Bien que ce ne soit pas mon nom officiel, la plupart des gens me connaissent sous le nom de "Hatem". C’était aussi le nom de mon père décédé, lui-même nommé d’après un symbole proverbial de générosité et de chevalerie. 
            Le suffixe “Deux” (français pour “deux” ou “le deuxième”) reflète simplement que je suis le suivant dans la lignée. 
            La prononciation ressemble au mot Anglais “hat” suivi de la lettre “M” — “Hat-em.”
          </p>
        </article>

        <hr />

        <article>
          <h2>À propos du <code>.this</code> site portfolio </h2>
          
          <h4>Conception</h4>
          <p>
            Ce portfolio bilingue est conçu comme une application SPA, développée avec React, React Router, HTML sémantique/JSX et du CSS personnalisé, en utilisant des fichiers JSON comme base de données légère côté front-end.
          </p>
          
          <h4>Design</h4>
          <p>
            L’interface s’inspire du système Ubuntu et du portfolio 2021 de Jacek Jeznach (<a target="_blank" rel="noreferrer" href='https://www.websurl.com/website/552/jj-web-developer-portfolio'>article à ce sujet</a> | <a target="_blank" rel="noreferrer" href='https://github.com/jeznacki'>son GitHub</a>) — une interface élégante et marquante qui, malheureusement, semble avoir été mise hors ligne ou compromise en 2025.<br />
            Ma version est simplifiée avec ma propre touche, et présente une barre latérale de navigation avec mon logo, des liens externes et des icônes menant aux sections suivantes : 
            <a href='/#/'>Accueil</a>, <a href='/#/about'>À propos</a>, <a href='/#/skills'>Compétences et expérience</a>, <a href='/#/portfolio'>Mon travail (projets)</a> et <a href='/#/contacts'>Contact</a>.
          </p>

          <h4>Logo</h4>
          <p>
            Le logo est une création personnelle : un emblème stylisé qui reflète mon identité. 
            Il combine un “M” en forme de chapeau pour mon prénom (Hat+em), des lunettes (car j’en porte), un nez formé par le chiffre romain II (Deux) et un code-barres représentant mon nom, qui sert aussi de moustache subtile ou de bouche camouflée. 
            C’est une tentative modeste mais significative de donner une identité visuelle à mon travail. 
            — Le logo est en format SVG et est intégré dans mon code sous forme de composant React.
          </p>
        </article>
      </section>
    )}

    </div>
  )
}
