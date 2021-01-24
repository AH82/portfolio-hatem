// import logo from './logo.svg';

/* libraries */
import { BrowserRouter, Route, Switch } from "react-router-dom";
/* components */
import Header from './components/Header/index';
import Home   from './components/Home';
import About  from './components/About';
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
/* css */
import './App.css';



export default function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header/>

        <Switch>
          <Route path='/about'      exact component={About} />
          <Route path='/Skills'     exact component={Skills} />
          <Route path='/Contact'    exact component={Contact} />
          <Route path='/Portfolio'  exact component={Portfolio} />
          <Route path='/'           exact component={Home} />
        </Switch>

      </BrowserRouter>


    </div>
  );
}

// export default App;
