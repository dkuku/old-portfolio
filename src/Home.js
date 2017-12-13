import React, { Component } from 'react';
import {Menu, Container, Icon} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import MyHeading from './MyHeading';
import Audio from './Audio';

export default class Home extends Component {
  render() {
    const FixedMenu = () => (
        <Menu style={{ margin: 0, borderRadius: 0 }} inverted size='large'>
            <Container>
            <Menu.Menu position='right'>
                  <Menu.Item as={NavLink} to='/projects'><Icon name='code'/>Projects</Menu.Item>
                  <Menu.Item as={NavLink} to='/about'><Icon name='user'/>About Me</Menu.Item>
                  <Menu.Item as={NavLink} to='/contact'><Icon name='mail'/>Contact</Menu.Item>
                </Menu.Menu>
            </Container>
      </Menu>
    )
    return (
      <div>
         {/* <Audio/>  */}
       <FixedMenu/>
       <MyHeading frontPage={true} /> 
      </div>
    )
  }
}
