import React from 'react';
import ProjectsList from './ProjectsList'

import './Portfolio.css';

import projectsData from '../../db/projectsData.json'


export default function Portfolio() {
  console.log(`portfolio component : projectsData`)
  console.log(projectsData)
  return (
    <section className='portfolio' >
      portfolio / my work
      <ProjectsList projectsData={projectsData} />

    </section>
  )
}
