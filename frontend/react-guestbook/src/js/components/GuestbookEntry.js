import React, { Component } from 'react';

import { Row, Col} from 'react-bootstrap'

import "../../css/default.css"
class GuestbookEntry extends Component {
   
    render() {
        return (
            <div className="entry">
                <Row className="entry-info-row">
                    <Col md={4}>
                        <p>{this.props.guest}</p>
                    </Col>
                    <Col md={8}>
                        <p>
                            {new Intl.DateTimeFormat('fi-FI', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric', 
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit'
                            }).format(Date.parse(this.props.created))}
                        </p>
                    </Col>
                </Row>
                <Row className="entry-text-row">
                    <Col md={12}>
                        <p>—<em> "{this.props.text}"</em></p>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default GuestbookEntry;
