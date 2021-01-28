/* 
  This component layer exists for probable future implementation of adding or changing item's views.
*/

import React from 'react';


import ProjectTitle from "./ProjectTitle";
import StackList from './StackList'


export default function ProjectsListItem(props) {
  const { 
    title, subTitle, stack, website_url, img_url, repo_url, description 
  } = props.projectData;
  const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Project_%282019%E2%80%93present%29.svg";
  
  let cardView = true;

  return (
    <div className={ cardView ? 'card' : null } >
      <ProjectTitle title={title} subTitle={subTitle} />
      <img 
        src={img_url? img_url : defaultImg} 
        alt="Project_Screenshot"
      />
      <hr/>
      stack
      <StackList stack={stack}/>
      <p>{description}</p>
      <footer>
        <a href={repo_url} target='_blank'>
          code
        </a>
        <a href={website_url} target='_blank'>
          site
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