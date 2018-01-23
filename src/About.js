import React, { Component } from 'react';
import MyHeading from './MyHeading';
import {Segment, Image, Header, Container} from 'semantic-ui-react';

export default class About extends Component {
  render() {
    return (
      <div>
        <MyHeading/>
        <Segment>
          <Container text>
            <Header as='h2'>Education</Header>
            <ul>
              <li>
                Currently a student on OpenClassrooms Bachelors Degree path: Full-Stack Developer.
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
              I have 10+ years of experience working as Multi Skilled Maintenance Engineer. 
              I really like to solve problems, find bugs and improvements.
              The problem is that I don't feel that I'm learning new things anymore at my work. 
              That's why I decided to change my career path to something different. 
              Something where I have some knowledge but there's still a lot to learn.
              On this website, you can find some of my projects that I've done when learning web development.
             </p>
             <p>
                <Image src='https://www.linuxcounter.net/cert/282399.png' floated='left'/>
               Beside these projects, I've also a lot of experience with the Linux operating system. 
               I'm using Linux for the last 15 years. 
               I have lots of experience with Debian/Ubuntu based distros, Gentoo Linux, openWRT/LEDE and lately with Arch Linux.
               You can find my <a href="https://forums.gentoo.org/search.php?search_id=1727657344&start=0">posts</a> on gentoo forums 
             </p>
             <p>
              Another one of my hobbies is electronics and simple programming for embedded systems like Arduinos and similar boards. 
              I achieved a <a href="https://s3.amazonaws.com/verify.edx.org/downloads/d325f21b9e7845ceac6ba1f1a61395f1/Certificate.pdf">certificate</a> for UTAustinX
              6.02x, Embedded Systems.

             </p>
          </Container>
        </Segment>
      </div>
    )
  }
}
