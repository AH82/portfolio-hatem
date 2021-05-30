import React from 'react';
import ProjectsList from './ProjectsList';

import './Portfolio.css';


export default function Portfolio(props) {

  const { projectsData, localePageHeadings, lang } = props;

  return (
    <section key={'portfolio'} className='main-page portfolio' >
      <h1 key={'portfolio-'+lang}>
        {localePageHeadings[lang].projects} / {localePageHeadings[lang].work} 
      </h1>
      <ProjectsList lang={lang} projectsData={projectsData} />
    </section>
  )
}
