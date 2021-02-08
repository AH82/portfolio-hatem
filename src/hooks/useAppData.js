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
  const defaultLanguage = "en";
  const [ currentLanguage, setCurrentLanguage ] = useState("en");
  


  const [ dataState, setDataState ] = useState(
    {
      locale,
      socialMedia,
      home,
      about,
      // about: about[currentLanguage],
      education,
      employment,
      skills,
      // skills: skills[currentLanguage],
      skillSet,
      projectsData,
      contacts
    }
  );

  function changeLanguage(lang) {
    console.log("requested language: ", lang);

    setCurrentLanguage(lang.toLowerCase());
    console.log("Current language is: ", currentLanguage);
    // setDataState(
    //   (prev) => ({
    //     ...prev, 
    //     // about: about[currentLanguage],
    //     skills: skills[currentLanguage]
    //   })
    //   )
    };
    console.log("Current language is: ", currentLanguage);
    
/*     // verfies data in selected language, else defaults to English.
    const verifyLocale = function (langsContainer, lang) {
      // if empty array
      if (Array.isArray(langsContainer[lang]) && !langsContainer[lang].length) {
        return "en";
      } else {
        // if empty string
        return langsContainer[lang] ? lang : "en";
      }
    }; */





  return (
    {
      dataState,
      currentLanguage,
      changeLanguage
    }
  )
}
