import React, { Component } from 'react'
import { Card, Container } from 'semantic-ui-react'
import Project from './Project';

export default class Projects extends Component {
    static defaultProps = {
        projects:[{
            title:"Programming games solutions",
            img: "checkio.png",
            desc: "Checkio is the game for coders",
            description: "My solutions for programming excercises on py.checkio.com",
            technology: ["python 3"],
            link: "https://py.checkio.org/user/dkuku/solutions/share/567ae072ff5162edf7de698d55a163d3/"
            },{
            title:"Chalets and Caviar",
            img: "Chalets.jpg",
            desc: "Website for Real Estate Agency",
            description: "Project for OpenClassrooms Full-stack Developer Path. Website made using wordpress and some additional plugins",
            technology: ["wordpress"],
            link: "http://dev-daniel-project2.pantheonsite.io/"
            },{
            title: "Brooklyn Outdoor Film Festival",
            img: 'Festival.jpg',
            desc: 'Website prototype for Film Festival',
            description: 'Project for OpenClassrooms Full-stack Developer Path. Frontend made using bootstrap and svg for diagonal sections',
            technology: ['bootstrap', "html", "js", 'svg'],
            link: 'projects/prototype/index.html'
            },{
            title: 'Chat app',
            img: 'chat.png',
            desc: 'Chat app written in node.js' ,
            description: "Project for Andrew Mead's Complete node.js Developer Course. Application uses node.js express and socket.io. A couple of users can login to the same room and chat.",
            technology: ["node.js", "socket.io", 'express'],
            link: 'https://chat-node-by-kuku.herokuapp.com/'
            },{
            title: 'Todo App',
            img: 'todo.png',
            desc: 'Simple todo app',
            description: "Project for Colt Steel's The Web Developer Bootcamp extended by me",
            technology: ['jQuery', 'html', 'css', 'js'],
            link: 'https://github.com/dkuku/todo-list-jQuery'
            },{
            title: 'Rice Rocks',
            img: 'Asteroids.jpg',
            desc: 'Asteroids Clone' ,
            description: 'Game made using python and codeskulptor for Interactive Python course on Coursera',
            technology: ["object oriented python", "codeskulptor", 'simple gui'],
            link: 'http://www.codeskulptor.org/#user16_T5YN7P0gBI_6.py'
            },{
            title: 'RGB Game',
            img: 'rgb-game.png',
            desc: 'Color guessing game',
            description: "Project for Colt Steel's The Web Developer Bootcamp. Game made using html, css and javascript",
            technology: ['js', 'html', 'css'],
            link: 'projects/rgb-color-game.html'
            }, {
            title: 'Portfolio',
            img: 'portfolio.jpg',
            desc: 'Portfolio site',
            description: 'Project for OpenClassrooms Full-stack Developer Path. Made using react, react-router and semantic-ui',
            technology: ['react', 'react-router', 'semantic-ui'],
            link: 'https://github.com/dkuku/portfolio-website'
            }
        ]}
    render() {
        return (
            <Container style={{ marginBottom: '1em' }}>
            <Card.Group>
                {this.props.projects.map((r, index) => {
                    return (
                        <Project key={index} num={index} {...r} />
                    )
                })}
            </Card.Group>
            </Container>
        )
    }
}
