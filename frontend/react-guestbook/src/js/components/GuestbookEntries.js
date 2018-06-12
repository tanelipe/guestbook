import React, { Component } from 'react';
import GuestbookEntry from './GuestbookEntry'

import { fetchEntries } from '../actions/GuestbookEntriesActions'

class GuestbookEntries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'entries': []
        }
        this.fetchGuestbookEntries = this.fetchGuestbookEntries.bind(this);
    }

    fetchGuestbookEntries() {
        fetchEntries.call(this, (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
            const entries = data.data;
            this.setState({ entries })
        });        
    }

    componentWillMount() {
        this.fetchGuestbookEntries();
    }
    
    render() {

        let result = this.state.entries.map((entry, index) => {
            return (
                <GuestbookEntry key={index} text={entry.text}
                    guest={entry.guest}
                    created={entry.createdAt} />      
            );
        });
        return (
            <div className="entries">
                {result}
            </div>
        );
    }
}
export default GuestbookEntries;

/*
import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';

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
        const target = event.target;
        addEntry.call(this, this.state.name, this.state.entry, (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
            // Clear the form fields
            target.reset();
        });
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
*/