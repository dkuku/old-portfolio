import React, { Component } from 'react';
import {
  Switch, Route, withRouter
} from 'react-router-dom';
import Projects from './Projects';

const Contact = () => (<div>Contact</div>);
const About = () => (<div>ABOUT</div>);

const Body = ({history}) => (
  <div>
  <Switch>
    <Route path="/About" component={About}/>
    <Route path="/Projects" component={Projects}/>
    <Route path="/Contact" component={Contact}/>
    <Route path="/" component={Projects}/>
  </Switch>
  </div>
);
export default withRouter(Body);