import React, { Component, Fragment } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Header, Divider } from 'semantic-ui-react'

import TopMenu from './TopMenu'
import Footer from './Footer'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Page404 from './Page404'

import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      style: {
        background: '#1c1d1e'
      }
    }
  }
  render () {
    const { style } = this.state
    const page = this.props.location.pathname.split('/')[1].toUpperCase()
    return (
      <Fragment>
        <div id='body' style={!page ? style : null}>
          <TopMenu />
          {/* Dont show header on main page */}
          {page.length > 0 &&
          <Divider horizontal>
            <Header as='h1' textAlign='center'>{page}</Header>
          </Divider>
          }
          <Switch>
            <Route exact component={About} path='/About' />
            <Route exact component={Contact} path='/Contact' />
            <Route exact component={Projects} path='/Projects' />
            <Route exact component={Home} path='/' />
            <Route component={Page404} />
          </Switch>
        </div>
        <Footer />
      </Fragment>
    )
  };
};

export default withRouter(App)
