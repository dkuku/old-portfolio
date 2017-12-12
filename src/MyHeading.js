import React, { Component } from 'react';
import {Segment, Image, Header, Container} from 'semantic-ui-react';

export default class MyHeading extends Component {
  render() {
    const front = this.props.frontPage;
    return (
      <div>
        <Segment
          inverted = {front}
          textAlign='center'
          style={{ minHeight: 400, padding: '1em 0em' }}
          vertical
        >
          <Image 
            src='images/daniel-sq.jpg' 
            size={front ? 'large' : 'small'} 
            circular 
            centered/>  
          <Header
            as='h1'
            content='Daniel Kukula'
            inverted = {front}
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
          />
          <Header
            as='h2'
            content='Junior Full Stack Developer'
            inverted = {front}
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
        </Segment>
      </div>
    )
  }
}
