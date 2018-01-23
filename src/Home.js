import React, { Component } from 'react';
import MyHeading from './MyHeading';
import Audio from './Audio';

export default class Home extends Component {
  render() {
    return (
      <div>
       <Audio/>
       <MyHeading frontPage={true} /> 
      </div>
    )
  }
}
