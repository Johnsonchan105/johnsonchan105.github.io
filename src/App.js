import React from 'react';
import Intro from './components/Intro.js'
import About from './components/About.js'
import Experience from './components/Experience.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import SideBarNav from './components/SideBarNav.js';
import './App.css';
import "./styles/Global.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-XBL34ZF8NM");

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className='App'>
      <div id='content'>
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Footer></Footer>
      </div>
      <SideBarNav/>
    </div>
  );
}

export default App;
