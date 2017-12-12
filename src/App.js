import React, { Component } from 'react';
import {
  Switch, Route, withRouter
} from 'react-router-dom';
import TopMenu from './TopMenu';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Page404 from './Page404';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <Switch>
          <Route exact component={About} path="/About" />
          <Route exact component={Contact} path="/Contact" />
          <Route exact component={Projects} path="/Projects" /> 
          <Route exact component={Home} path="/" /> 
          <Route component={Page404} />
        </Switch>
      </div>
    );
  };
};

export default App;

