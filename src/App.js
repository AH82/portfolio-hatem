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
  
  const { dataState } = useAppData();
  console.log(dataState)

  const   {
    locale,
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

        <Header locale={locale}/>

        <Switch>
          <Route exact path='/about' 
          render={(props) => <About {...props} about={about} education={education} employment={employment}/>} />
          <Route exact path='/Skills' 
          render={(props) => <Skills {...props} skills={skills} skillSet={skillSet}  />} />
          <Route exact path='/Portfolio' 
          render={(props) => <Portfolio {...props} projectsData={projectsData}/>} />
          <Route exact path='/Contacts' 
          render={(props) => <Contacts {...props} contacts={contacts} /> } />
          <Route exact path='/' 
          render={(props) => <Home {...props} home={home} />} />
        </Switch>

      </BrowserRouter>


    </div>
  );
}

// export default App;
