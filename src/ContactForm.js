import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class ContactForm extends Component {
    state = {subject: '', message: ''};

    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    
    generateLink = (subject, message) => {
    return "mailto:daniel.kuku@gmail.com?subject=" + subject + "&body=" + message
    }

    handleSubmit = () => {
    const { subject, message } = this.state
    this.action = window.open(this.generateLink(subject, message));
    }
    
      render() {
        const { subject, message } = this.state;
    
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input label='Subject' placeholder='Subject' name='subject' value={subject} onChange={this.handleChange} />
                <Form.TextArea label='Message' placeholder='Drop me an email ...' name='message' value={message} onChange={this.handleChange} />
                <Form.Button content='Submit'/>
            </Form>
        )
    }
}

