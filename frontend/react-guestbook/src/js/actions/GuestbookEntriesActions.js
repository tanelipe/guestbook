import axios from 'axios';

const HOST = process.env.HOST || "http://localhost:8080";
export function fetchEntries(callback) {
    axios.get(`${HOST}/api/guestbook`).then((response) => {
        callback(null, response);
    }).catch((error) => {
        callback(error, "");
    });
}