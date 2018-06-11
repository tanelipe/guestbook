import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';

class GuestbookForm extends Component {
    render() {
        return (
            <div className="GuestbookForm">
                <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Name" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalText">
                        <Col componentClass={ControlLabel} sm={2}>
                            Entry
                        </Col>
                        <Col sm={10}>  
                            <FormControl componentClass="textarea" placeholder="Entry" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">SUBMIT</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default GuestbookForm;