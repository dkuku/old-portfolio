import React, { Component } from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

const FixedMenu = () => (
    <Menu size='large'>
        <Container>
            <Menu.Item as={NavLink} to="/">Home</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item as={NavLink} to="/projects">Projects</Menu.Item>
              <Menu.Item as={NavLink} to='/about'>About Me</Menu.Item>
              <Menu.Item as={NavLink} to='/contact'>Contact</Menu.Item>
            </Menu.Menu>
        </Container>
  </Menu>
)

export class TopMenu extends Component {
  render() {

    return (
      <div>
        <FixedMenu />
      </div>
    )
  }
};

export default TopMenu
