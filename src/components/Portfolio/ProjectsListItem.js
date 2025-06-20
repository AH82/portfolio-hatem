/* 
  This component layer exists for probable future implementation of adding or changing item's views.
*/

import React from 'react';
import { IconContext } from "react-icons";
import { DiCode } from "react-icons/di";
import { FaRegFileCode } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { HiExternalLink } from "react-icons/hi";



import ProjectTitle from "./ProjectTitle";
import StackList from './StackList'
import './Portfolio.css';


export default function ProjectsListItem(props) {
  const { index } = props;

  const { 
    img_url, title, subTitle, 
    stack, website_url, repo_url, 
    description, role
  } = props.projectData;
  
  
  
  const stepJump = 500;
  const delayFn = function (step) {
    const delay = {
      animationDelay: step+(150*(index+1)) + 'ms'
    }
    return delay
  }
  
  let cardView = true;

  return (

    <div 
      className={ `${cardView ? 'card' : null} fade-in` } 
      key={`${title}-project-div-${index}`} 
      style={{...delayFn(stepJump)}}
    >
      
      <img 
        src={
          img_url[0] 
          ? img_url[0] 
          : "images/project-screenshots/no-image-available-icon.png"
        } 
        alt="Project_Screenshot"
      />

      {/* <ProjectTitle title={title} subTitle={subTitle} /> */}
      <h1 
        key={`${title}-project-heading`} 
        style={{...delayFn(stepJump*2)}}

      >
        {title}
      </h1>

      <hr/>

      <p 
        key={`${title}-project-description`}
        className='description'
        style={{...delayFn(stepJump*3)}}

      >
        {description["en"]}
        <br/>
        {role["en"] && `Role: ${role["en"]}`}
      </p>
      {/* {role["en"] && <p className='description'>{role["en"]}</p>} */}


      <footer>

        <a href={repo_url} target='_blank' rel='noreferrer' className={!repo_url && 'hide'}>
          <IconContext.Provider 
            value={{ 
              style:{height: '75%',  paddingTop: '25%'},
              className: "global-class-name" }}>

            <FaRegFileCode/>
          </IconContext.Provider>
        </a>
        
        <StackList stack={stack}/>
        
        <a href={website_url} target='_blank' rel='noreferrer' className={!website_url && 'hide'} >
          <HiExternalLink/>
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