import React from 'react';

import GuestbookForm from "./GuestbookForm"
import GuestbookEntries from "./GuestbookEntries"

import "../../App.css"

const Main = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Guestbook</h1>
        </header>
        <GuestbookForm />
        <GuestbookEntries />
    </div>    
);
export default Main;