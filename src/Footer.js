import React, { Component } from 'react';
import {Icon, Header, Button, Grid, List, Segment, Container} from 'semantic-ui-react';

export default class Footer extends Component {
  render() {
    return (
      <div>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Contact' />
                  <Button.Group vertical >
                    <Button color="google plus" as='a' href='mailto:daniel.kuku@gmail.com'>
                        <Icon name="mail" /> Gmail
                    </Button>
                    <Button color='linkedin' as='a' href='https://www.linkedin.com/in/daniel-kukula-55057a57/'>
                        <Icon name='linkedin' /> LinkedIn
                    </Button>
                    <Button color='black' as='a' href='https://github.com/dkuku'>
                        <Icon name='github' /> Github
                    </Button>
                   </Button.Group>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Created by:</Header>
                  <p>Daniel Kukula<br/>
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
