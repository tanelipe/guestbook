import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import GuestbookForm from "./GuestbookForm"
import GuestbookEntries from "./GuestbookEntries"


import { fetchEntries } from '../actions/GuestbookEntriesActions'

import "../../App.css"


class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            'entries': []
        }
        this.entrySubmitted = this.entrySubmitted.bind(this);
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

    entrySubmitted(data) {
        let entries = this.state.entries;
        entries.unshift(data.data);
        this.setState({ entries })
    }

    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Guestbook</h1>
                </header>
                <Row>
                    { /* For some reason the mdOffset={4} doesn't work --> can't center */}
                    <Col md={4}></Col>
                    <Col md={4}>
                        <GuestbookForm entrySubmitted={this.entrySubmitted} />
                    </Col>
                </Row>
                <Row>
                    { /* For some reason the mdOffset={4} doesn't work --> can't center */}
                    <Col md={4}></Col>
                    <Col md={4}>
                        <GuestbookEntries entries={this.state.entries} />
                    </Col>
                </Row>

            </div>
        );
    };
}
export default Main;