import React from 'react';
import ProjectsListItem from './ProjectsListItem';

export default function ProjectsList(props) {

  const { projectsData, lang } = props;

  const langCheck = lang => {
    if (lang !== 'en') {
      if (lang === 'fr') {return '* Page seulement en Anglais' }
      return ('Page available only in English')
    }
  };
  console.log ('langCheck = ' + langCheck(lang))
  return (
    <>
      { lang !== 'en' && (<p>{langCheck(lang)}</p>)  }
      { lang === 'en' && (<p><br/></p>)  }
      <div className='projects-list'>
        {
          projectsData.map( project => (
            <ProjectsListItem lang={lang} projectData={project}/>
          ))
        }
      </div>
    </>
  )
}
