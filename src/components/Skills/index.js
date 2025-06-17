import React from 'react';
import './Skills.css';

/**
 * @typedef {Object.<string string[]>} Skills 
  * A map where 
    * **the key is a language code** (like "en", "fr") and
    * the value is an Array of strings, each representing a Paragraph.
    * @see //src/db/skills.json via @see //src/hooks/useAppData.js
  * This object contains the introductory paragraphs for developer skills section per language.
  * @todo move to @see //src/hooks/useAppData.js
 */

/**
 * @typedef {Object.<string string[]>} SkillSet
 * @prop {string[]} languages - list of Coding Languages
 * @prop {string[]} frameworks - list of Coding frameworks
 * @prop {string[]} libraries - list of libraries
 * @prop {string[]} testFrameworks - list of Test Framworks 
 * @prop {string[]} databases - list of databases
 * @prop {string[]} tools - list of tools e.g. git, VS Code, WSL
 * @prop {string[]} spokenLanguages - list of natural spoken languages, e.g. English
 * @prop {string[]} unclassified - list of things that does not belong to the above props
 * @see //src/db/skillSet.json via @see //src/hooks/useAppData.js
 * 
 * @todo move to @see //src/hooks/useAppData.js
 * @todo will be deprecated or replaced in the future.
 * 
 * Now temporarely replaced by in-component data @see {@link skillSetDataByCategory}
 *  
 */

/**
 * @component  Page-component Responsible to display my skills. 
    * @param {Object} props - 
    * @param {string} props.localePageHeadings - This page heading.  @see //src/locale/localePageHeadings.json
    * @param {string} props.lang - Language displayed in "en" or "fr".
    * @param {Skills} props.skills - An object containing a description of skills.{@link Skills}
    * @param {SkillSet} props.skillSet - {@link SkillSet}
    * @returns - 
 */
export default function Skills(props) {
  
  const { skills,/*  skillSet, */ localePageHeadings, lang } = props;

  // verfies data in selected language, else defaults to English.
  const verifyLocale = function (langsContainer, lang) {
    // if empty array
    if (Array.isArray(langsContainer[lang]) && !langsContainer[lang].length) {
      return "en";
    } else {
      // if empty string
      return langsContainer[lang] ? lang : "en";
    }
  };

  const locale = verifyLocale(skills, lang)

  /**
   * an Array of objects representing list of skills under categories, all bilingual,
   * English is obligatory, 
      other languages are optional. 
        if they do not exist, code will fall back on English.

   * Each array element is formated as follows :
    ```
     "category": { en: "English Heading", fr: "French Heading" },
      "list": {
        en: [
          [ Skill group ],
          [ Skill group ]
        ],
        fr: [
          [ Skill group ],
          [ Skill group ]
        ]
      },
    ```
   * 
   * @typedef {Object[]} skillSetDataByCategory 
   * @prop {Object<string, string} category - with [key] = "en" or "fr" 
   * @prop {Object<string, string[[]]} list - with [key] = "en" or "fr"
   * 
   */
  /**
   *  @type {skillSetDataByCategory} 
   */
  const skillSetDataByCategory = [
    {
      "category": { en: "Client-Side (Front-End) ", fr: "Côté-Client"},
      "list": { 
        en: [
        ["JavaScript (ES6+)", "React.js", "jQuery", "APIs", "HTML5", "CSS3 (Sass, Bootstrap, Responsive Design, Flexbox, Grid, BEM, OOCSS)",  "SPA/MPA"],
        ["UI/UX Wireframing"]
      ]}
    },
    
    {
      "category": { en: "Server-Side (Back-End)", fr: "Côté-Serveur" },
      "list": {
        en: [
        ["Node.js", "Express.js", "RESTful APIs", "Ruby/Rails", "Python"/*/Django*/, "Bash (basics+)"]
      ]}
    },
    
    {
      "category": { en: "Databases", fr: "Bases de Données" },
      "list": {
        en: [
        ["ERD", "SQL", "PostgreSQL", 
          // "MySQL", "SQLite"
        ]//,
        // ["NoSQL: MongoDB"]
      ]}
    },
    
    {
      "category": { en: "Version Control & Deployment", fr: "Contrôle de Version et Déploiement" },
      "list": {
        en: [
        ["Git", "GitHub", "CI/CD Basics", "Deployment (basics)"]
        /* -(Railway.app, Netlify, Vercel, Heroku, or AWS basics */
      ]}
    },
    
    {
      "category": { en: "Testing & Documentation", fr: "Test et Documentation" },
      "list": {
        en: [
        ["JSDoc", "Markdown", "Notion"],
        ["Mocha/Chai", "Jest"]
      ]}
    },
    
    {
      "category": { en: "Dev. Tools & Envs", fr: "Environnements et Outils de Développement" },
      "list": {
        en: [
        // ["VS Code", "Jira", "Trello", "Figma", "Postman", "Notion"],
        ["VS Code", "Notion"],
        ["Windows", "Linux (Ubuntu)", "MacOS (+/-)", "WSL", "Terminal"]
      ]}
    },
    
    {
      "category": { en: "Concepts & Paradigms", fr: "Concepts et Paradigmes" },
      "list": {
        en: [
        ["FP", "OOP", "Recursion", "Closures", "TDD", "BDD", "Data Structures", "Algorithms"]
      ]}
    },
    
    {
      "category": { en: "Other Technologies", fr: "Autres Technologies" },
      "list": {
        en: [
        // ["Firebase", "Docker (basics)", "Webpack", "Nginx"]
        ["Webpack"]
      ]}
    },
    
    /* {
      "category": { en: "Other ", fr: "Autres" },
      "list": {
        en: [
        []
      ]}
    },
     */
    {
      "category": { en: "Soft-Skills", fr: "Compétences Comportementales" },
      /* also "Savoir-être Professionnel n. m. ; Compétences Générales n. f. pl.*/
      "list": {
        en: [
          [ "Critical Thinking", 
            "Problem-Solving", 
            "Adaptability & Resilience", 
            "Emotional Intelligence (EQ)", 
            "Strong interpersonal skills" , 
            "Collaboration & Teamwork"]
        ],
        fr: [
          [ "Esprit Critique", 
            "Résolveur de Problèmes", 
            "Adaptabilité & Résilience", 
            "Intelligence Émotionnelle (EQ)", 
            "Entregent" , 
            "Travail Collaboratif / d'Équipe"]
      ]}
    },
    
    {
      "category": { en: "", fr: "" },
      "list": {
        en: [
        []
      ]}
    }
    
  ]

  return (    
    <div className='main-page skills-page'>
      <h1 key={'skills-'+lang}>
        {localePageHeadings[lang].skills}
      </h1>
      <div className='skills-page-body'>

        <section className='skills-intro'>
        {/* Paragraphs Summary or descriptions  */}
        {
          skills[locale].map( (elem, index) => (
            <p key={lang+index} >{elem}</p>
          ))
        }
        </section>


        <section className='skill-set-subpage'>
          { lang === 'en' && (<h2>🛠️ Skill Set </h2>)}
          { lang === 'fr' && (<h2>🛠️ Répertoire de Compétences </h2>)}
          <section className='skill-set-subpage-body'>

            {skillSetDataByCategory.map(
              (categoryElement) => (
                <article className='skill-set__subset-group'>
                  <h4> { 
                  categoryElement.category[lang] || /*!*/ categoryElement.category["en"] 
                  /* ! => "||" = fail safe: falls back to English if other language does not exist. */ 
                  } </h4>
                  <ul className='display-bricks'>
                  {
                    categoryElement.list[`${categoryElement.list[lang]? lang : "en"}`].map(
                      subList => subList.map( subListItem => (
                         <li className='outline'> {subListItem} </li>
                        ))
                  )
                }
                  </ul>
                </article>
              )
            )} 

          </section>
        </section>
      
  
        </div>
    </div>

    
  )
}
