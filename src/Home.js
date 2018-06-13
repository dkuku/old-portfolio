import React, { Component } from 'react';
import MyHeading from './MyHeading';

export default class Home extends Component {
    render() {
        return (
                <div>
                <MyHeading frontPage={true} />
                </div>
               )
    }
}
