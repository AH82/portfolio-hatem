import { useState } from 'react';

/* data (.gitignored) */
// Headers
import locale from '../db/locale.json';
import socialMedia from '../db/socialMedia.json'
// pages
import home from '../db/home.json';
import about from '../db/about.json';
import education from '../db//education.json';
import employment from '../db/employment.json';
import skills from '../db/skills.json';
import skillSet from '../db/skillSet.json';
import projectsData from "../db/projectsData.json";
import contacts from '../db/contacts.json'



export default function useAppData(initial) {

const [ dataState, setDataState ] = useState(
  {
    locale,
    socialMedia,
    home,
    about,
    education,
    employment,
    skills,
    skillSet,
    projectsData,
    contacts
  }
) 




  return (
    {
      dataState
    }
  )
}
