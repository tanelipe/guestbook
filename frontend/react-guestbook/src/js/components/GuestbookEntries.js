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