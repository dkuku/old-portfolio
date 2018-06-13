import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import Project from './Project';
import { projects } from './constants'

export default class Projects extends Component {
    render() {
        return (
            <Container style={{ marginBottom: '1em' }}>
            <Card.Group>
                {projects.map((r, index) => {
                    return (
                        <Project key={index} num={index} {...r} />
                    )
                })}
            </Card.Group>
            </Container>
        )
    }
}
