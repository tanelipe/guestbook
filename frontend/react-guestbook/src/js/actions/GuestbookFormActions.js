import axios from 'axios';

const HOST = process.env.HOST || "http://localhost:8080";
export function addEntry(name, entry) {
    
    let data = {
        "text": entry,
        "guest": name
    }
    axios.post(`${HOST}/api/guestbook`, data).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}