import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import {Route, Switch } from 'react-router-dom'
import Hero from './components/main/hero/Hero';
import About from './components/main/about/About';
import Certification from './components/main/certification/Certification';
import Projects from './components/main/projects/Projects';
import Skills from './components/main/skills/Skills';
import Photowall from './components/main/photo wall/Photowall';
import Connect from './components/main/connect/Connect';
import Iconbar from './components/iconbar/Iconbar';
import Error from './components/error/Error';

function App() {
  return (
    <div className="App">
      <div className="parent">
        <div className="div2">
          <Sidebar/>
        </div>
        <div className="mob-bar">
          <Iconbar/>
        </div>
        <div className="div1">
          <div className="topbar">
            <Topbar/>
          </div>
        </div>
        <div className="div3">
            <Switch>
              <Route path="/" component={Hero} exact/>
              <Route path="/About" component={About} />
              <Route path="/Certification" component={Certification} />
              <Route path="/Projects" component={Projects} />
              <Route path="/Skills" component={Skills} />
              <Route path="/Photowall" component={Photowall} />
              <Route path="/Connect" component={Connect} />
              <Route path="*"><Error/></Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
