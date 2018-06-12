import React, { Component } from 'react';
import GuestbookEntry from './GuestbookEntry'


class GuestbookEntries extends Component {
    render() {
        let result = this.props.entries.map((entry, index) => {
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