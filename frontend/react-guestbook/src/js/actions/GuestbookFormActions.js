import axios from 'axios';

const HOST = process.env.HOST || "http://localhost:8080";
export function addEntry(name, entry, callback) {
    
    let data = {
        "text": entry,
        "guest": name
    }
    axios.post(`${HOST}/api/guestbook`, data).then((response) => {
        callback(null, response);
    }).catch((error) => {
        callback(error, "");
    });
}