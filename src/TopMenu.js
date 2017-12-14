import React, { Component } from 'react';
import {Menu, Container, Icon} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

const FixedMenu = () => (
    <Menu size='large' inverted style={{borderRadius: 0}}>
        <Container>
            <Menu.Item as={NavLink} to="/"><Icon name='home'/> Home</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item as={NavLink} to='/projects'><Icon name='code'/>Projects</Menu.Item>
              <Menu.Item as={NavLink} to='/about'><Icon name='user'/>About Me</Menu.Item>
              <Menu.Item as={NavLink} to='/contact'><Icon name='mail'/>Contact</Menu.Item>
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
