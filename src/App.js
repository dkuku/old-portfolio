import React, { Component } from 'react';
import {  Switch, Route, withRouter } from 'react-router-dom';
import {Header, Divider} from 'semantic-ui-react';

import TopMenu from './TopMenu';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Page404 from './Page404';

import './App.css';


class App extends Component {

  render() {
    const page = this.props.location.pathname.split('/')[1].toUpperCase();
    return (
        <div>
          <TopMenu />
          <Divider horizontal>
          <Header as='h1' textAlign='center'>{page}</Header>
          </Divider>
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

export default withRouter( App );

