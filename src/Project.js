import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card ,Label, Image } from 'semantic-ui-react';
import Techlist from './Techlist';

export default class Project extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        desc: PropTypes.string,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        technology: PropTypes.arrayOf(PropTypes.string).isRequired,
        link: PropTypes.string}
    render() {
        const {title, img, desc, description, technology, link} = this.props;

        return (
            <Card 
            centered
            raised
            href={link}
            >
                <Image src={"images/".concat(img)} />
                <Card.Content>
                    <Label style={{marginBottom: '0.5em'}} as='a' color='teal' ribbon>{technology[0]}</Label>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{desc}</Card.Meta>
                    <Card.Description>{description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <Techlist technology={technology}/>
                </Card.Content>
            </Card>

   )};
};