// import logo from './logo.svg';
/* css */
import './App.css';

/* libraries */
import { BrowserRouter, Route, Switch } from "react-router-dom";
/* components */
import Header from './components/Header/index';
import Home   from './components/Home/index';
import About  from './components/About/index';
import Skills from "./components/Skills/index";
import Contacts from "./components/Contacts/index";
import Portfolio from "./components/Portfolio/index";
/* hooks */
import useAppData from './hooks/useAppData'


export default function App() {
  
  const { dataState, currentLanguage, changeLanguage } = useAppData();
  console.log(dataState)

  const   {
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
  } = dataState;

  return (
    <div className="App">

      <BrowserRouter>

        <Header locale={locale} socialMedia={socialMedia} changeLanguage={changeLanguage} lang={currentLanguage}/>

        <Switch>
          <Route exact path={`/about`} 
            render={(props) => <About {...props} lang={currentLanguage} about={about} education={education} employment={employment}/>} />
          <Route exact path='/Skills' 
            render={(props) => <Skills {...props} lang={currentLanguage} skills={skills} skillSet={skillSet}  />} />
          <Route exact path='/Portfolio' 
            render={(props) => <Portfolio {...props} lang={currentLanguage} projectsData={projectsData}/>} />
          <Route exact path='/Contacts' 
            render={(props) => <Contacts {...props} lang={currentLanguage} contacts={contacts} /> } />
          <Route exact path='/' 
            render={(props) => <Home {...props} lang={currentLanguage} home={home} />} />
        </Switch>

      </BrowserRouter>


    </div>
  );
}

// export default App;
