import React, { Component } from 'react'
import { Header, Grid, Segment, Container } from 'semantic-ui-react'

export default class Footer extends Component {
  render () {
    return (
      <div id='footer'>
        <Segment inverted vertical style={{ height: '100%' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Created by:</Header>
                  <p>Daniel Kukula<br />
                  All Rights Reserved</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
