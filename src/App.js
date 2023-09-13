import React from 'react';
import Intro from './components/Intro.js'
import About from './components/About.js'
import Experience from './components/Experience.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import './App.css';
import "./styles/Global.css";

function App() {
  return (
    <div className='App'>
      <div id='content'>
        <Intro></Intro>
        <About></About>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
