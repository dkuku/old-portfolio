import React, { Component } from 'react'
import MyHeading from './MyHeading'
import { Segment, Image, Header, Container } from 'semantic-ui-react'

export default class About extends Component {
  render () {
    return (
      <div>
        <MyHeading />
        <Segment style={{ border: 'none' }}>
          <Container text >
            <Header as='h2'>Education</Header>
            <ul>
              <li>
                  Bachelors Degree in <a href='https://openclassrooms.com/en/paths/104-full-stack-developer' target='blank'>Full Stack Development</a>
              </li>
              <li>
                Masters Degree in Production Engineering and Management.
              </li>
              <li>
                Electro-Mechanical Engineer of Industrial Equipment.
              </li>
            </ul>
            <Header as='h2'>Experience</Header>
            <p>
               I have 10+ years of experience working as a Multi Skilled Maintenance Engineer.
              I really like to solve problems, find bugs and improvements.
              The problem is that I don't feel that I'm learning new things anymore.
              That's why I decided to change my career path to something different.
              Something where I have some small experience but there's still a lot to learn.
              On this website, you can find some of the projects that I've done when learning development.
              Also on my <a href='https://github.com/dkuku/' target='blank'>github</a>
              page you can check some smaller projects done durning different online courses.
              I'm mainly focused on react, I think it's a really good library and my studies were focused on React and Ruby on Rails.
              On the backend I've done some projects using node with express and meteor.

            </p>
            <p>
              <Image src='https://www.linuxcounter.net/cert/282399.png' floated='left' />
               Beside these projects, I've also a lot of experience with the Linux operating system.
               I'm using Linux for the last 15 years or more.
               I have lots of experience with Debian/Ubuntu based distros, Gentoo Linux, openWRT/LEDE and lately with Arch Linux.
              Another of my hobbies is electronics and simple programmes for embedded systems like Arduinos and similar boards.
            </p>
          </Container>
        </Segment>
      </div>
    )
  }
}
