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
        color: PropTypes.string,
        link: PropTypes.string}
    render() {
        const {title, img, desc, color, description, technology, link} = this.props;

        return (
            <Card
            centered
            raised
            href={link}
            target='_blank'
            >
                <Image src={"images/".concat(img)} />
                <Card.Content>
                    <Label style={{marginBottom: '0.5em'}} color={color} ribbon>{technology[0]}</Label>
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
