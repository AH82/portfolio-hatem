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
  const { about } = dataState;
  console.log(dataState)

  return (
    <div className="App">

      <BrowserRouter>

        <Header/>

        <Switch>
          <Route exact path='/about' 
          render={(props) => <About {...props} about={about}/>} />
          <Route exact path='/Skills' 
          render={(props) => <Skills {...props}/>} />
          <Route exact path='/Portfolio' 
          render={(props) => <Portfolio {...props}/>} />
          <Route exact path='/Contacts' 
          render={(props) => <Contacts {...props}/>} />
          <Route exact path='/' 
          render={(props) => <Home {...props}/>} />
        </Switch>

      </BrowserRouter>


    </div>
  );
}

// export default App;
