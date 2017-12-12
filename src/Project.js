import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Item, Button } from 'semantic-ui-react';
import Techlist from './Techlist';

export default class Project extends Component {
    static PropTypes = {
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        details: PropTypes.arrayOf(PropTypes.string).isRequired,
        link: PropTypes.string}
    render() {
        const {title, img, desc, description, technology, link, key} = this.props;

        return (
            <Item>
              {(this.props.num % 2 === 0) ? <Item.Image as='a' href={link} size='medium' alt={title} src={"images/".concat(img)} /> : null} 
                <Item.Content>
                    <Item.Header as='a' href={link}>{title}</Item.Header>
                    <Item.Meta>{desc}</Item.Meta>
                    <Item.Description>
                    {description}
                    </Item.Description>
                    <Item.Extra>Technology used: 
                    <Techlist technology={technology} />
                    </Item.Extra>
                    <Button 
                        as='a'
                        size='medium'
                        href={link}
                        target='_blank'
                    >
                        {title}     
                    </Button>
                </Item.Content>
              {this.props.num % 2 === 1 ? <Item.Image as='a' href={link} size='medium' alt={title} src={"images/".concat(img)} /> : null } 
            </Item>
    )};
};