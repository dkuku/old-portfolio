import React, { Component } from 'react'

export default class Techlist extends Component {
  render () {
    const technology = this.props.technology.map((tech, index) => (
      <li key={index} >{tech}</li>
    ))
    return (
      <div>
        <ul>
          {technology}
        </ul>
      </div>
    )
  }
}
