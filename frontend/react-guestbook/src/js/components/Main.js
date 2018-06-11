import React from 'react';

import { Row, Col } from 'react-bootstrap'


import GuestbookForm from "./GuestbookForm"
import GuestbookEntries from "./GuestbookEntries"


import "../../App.css"

const Main = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Guestbook</h1>
        </header>
        <Row>
            { /* For some reason the mdOffset={4} doesn't work --> can't center */ }
            <Col md={4}></Col>
            <Col md={4}>
                <GuestbookForm />
            </Col>
        </Row>
        <Row>
            { /* For some reason the mdOffset={4} doesn't work --> can't center */ }
            <Col md={4}></Col>
            <Col md={4}>
                <GuestbookEntries />
            </Col>
        </Row>

    </div>    
);
export default Main;