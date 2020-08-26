import React from 'react';
import './App.css';
import {NavBar} from './components/navBar';
import Router_Dr_Nicolas from './routes/Dr_Nicolas_Zwillinger/Router_Dr_Nicolas';
import Router_Footer from './routes/Footer/Router_Footer';
import Router_Equipe from './routes/Equipe/Router_Equipe';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/footer'

function App() {
  return (
    <Router>
    <div className="page-container">
      <div className="content-wrap">   
      <header>
      <NavBar></NavBar>
       <Router_Dr_Nicolas></Router_Dr_Nicolas>
       <Router_Footer></Router_Footer>
       <Router_Equipe></Router_Equipe>
      </header>
      </div>
    </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
