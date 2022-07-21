import React from "react";
import { Helmet } from 'react-helmet'

// import {Switch, Route, Link} from "react-router-dom";
import Hero from './components/header';
import Skills from './components/skills'
import Education from './components/education'
import Expierence from  './components/expierence'
import Contact from './components/contact'
import "./css/style.css"
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8"/>
        <title>Anthony Box's Portfolio </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="/css/style.css"/>
      </Helmet>
      <Hero/>
      <Skills/>
      <Expierence />
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
