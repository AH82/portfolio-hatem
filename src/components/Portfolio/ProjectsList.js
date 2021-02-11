import React from 'react';
import ProjectsListItem from './ProjectsListItem';

export default function ProjectsList(props) {

  const { projectsData, lang } = props;

  return (
    <>
      <br/>
      Projects List
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
