/* 
  This component layer exists for probable future implementation of adding or changing item's views.
*/

import React from 'react';
import { DiCode } from "react-icons/di";
import { GoLinkExternal } from "react-icons/go";


import ProjectTitle from "./ProjectTitle";
import StackList from './StackList'


export default function ProjectsListItem(props) {
  const { 
    title, subTitle, stack, website_url, img_url, repo_url, description 
  } = props.projectData;
  
  let cardView = true;


  return (
    <div className={ cardView ? 'card' : null } >
      
      <img 
        src={img_url[0] ? img_url[0] : "images/project-screenshots/no-image-available-icon.png"} 
        alt="Project_Screenshot"
      />

      {/* <ProjectTitle title={title} subTitle={subTitle} /> */}
      <h1>{title}</h1>
      <hr/>

      <p className='description'>{description}</p>



      <footer>
        <a href={repo_url} target='_blank' rel='noreferrer'>
          <DiCode/>
        </a>
        
        <StackList stack={stack}/>
        
        <a href={website_url} target='_blank' rel='noreferrer'>
          <GoLinkExternal/>
        </a>
      </footer>
    </div>
  )
}

// import CardMainView from './CardMainView';

// export default function ProjectsListItem(props) {
//   console.log(`Component ProjectsListItem props =>`)
//   console.log(props)
//   return (
//     <div>
//       <CardMainView projectData={{...props.projectData}}/>
//     </div>
//   )
// }