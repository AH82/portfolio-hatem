import React, { useEffect, useState } from 'react';
import ProjectsListItem from './ProjectsListItem';

export default function ProjectsList(props) {

  const { projectsData, lang } = props;
  // const [ projects, setProjects ] = useState(null); // to use with useEffect

  const langCheck = lang => {
    if (lang !== 'en') {
      if (lang === 'fr') {return '* Page seulement en Anglais' }
      return ('Page available only in English')
    }
  };

  /**
   * FOR REFERENCE: 
      * USING useEffect TO DISPLAY ITEMS 1-by-1,
   * REPLACED BY: 
      * just sending down array-index to items' component 
      * and using it to step-increase inlijne-style of animationDelay.
   */ /* 
    useEffect( () => {
      {
        projectsData.map( (project, index) => (
          setTimeout(() => {
            setProjects ( (prev) => (
              <>
              {prev}
              <ProjectsListItem key={project.title} lang={lang} projectData={project}/>
              </>
            )

            )
          }, (index+1)*750)
        ))
      }
    }, [])
  */
  return (
    <>
      { lang !== 'en' && (<p>{langCheck(lang)}</p>)  }
      { lang === 'en' && (<p><br/></p>)  }
      <div className='projects-list'>
        {
          projectsData.map( (project, index) => (
            <ProjectsListItem 
              key={index} 
              lang={lang} 
              projectData={project} 
              index={index}
              />
          ))
        }
        {/* {projects} */}
      </div>
    </>
  )
}
