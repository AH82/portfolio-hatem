import React from 'react';
import ProjectsListItem from './ProjectsListItem';

export default function ProjectsList(props) {
  console.log(`Component ProjectsList props =>`)
  console.log(props)

  return (
    <>
      <br/>
      Projects List
      <div className='projects-list'>
        {
          props.projectsData.map( project => (
            <ProjectsListItem projectData={project}/>

          ))
        }
      </div>
    </>
  )
}
