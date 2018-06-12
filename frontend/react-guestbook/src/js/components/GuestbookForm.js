import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';

import { addEntry } from '../actions/GuestbookFormActions'


class GuestbookForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: "",
            entry: ""
        }

        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChanged(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        addEntry.call(this, this.state.name, this.state.entry);
    }

    render() {
        return (
            <div className="GuestbookForm">
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Name" name="name" onChange={this.handleInputChanged}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalText">
                        <Col componentClass={ControlLabel} sm={2}>
                            Entry
                        </Col>
                        <Col sm={10}>  
                            <FormControl componentClass="textarea" placeholder="Entry" name="entry" onChange={this.handleInputChanged} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button className="btn btn-primary" type="submit">SUBMIT</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default GuestbookForm;