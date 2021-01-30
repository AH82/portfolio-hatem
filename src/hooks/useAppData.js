import { useState } from 'react';
import home from '../db/home.json'
import about from '../db/about.json'
import education from '../db//education.json'
import employment from '../db/employment.json'
import skills from '../db/skills.json'
import skillSet from '../db/skillSet.json'
import projectsData from "../db/projectsData.json";
import locale from '../db/locale.json'



export default function useAppData(initial) {

const [ dataState, setDataState ] = useState(
  {
    locale,
    home,
    about,
    education,
    employment,
    skills,
    skillSet,
    projectsData
  }
) 




  return (
    {
      dataState
    }
  )
}
