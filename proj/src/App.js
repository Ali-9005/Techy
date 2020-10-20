import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//pages

import Error from './pages/Error';
import Home from './pages/Home';
import Quizes from './pages/Quizes';
import Login from './pages/Login';

//Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default function App() {
  
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quizes" exact component={Quizes} />
          <Route path="/login" exact component={Login} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}
