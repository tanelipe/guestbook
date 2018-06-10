const GuestbookEntry = require("../models/GuestbookEntry")


module.exports = {
    addEntry: (request, response, next) => {
        let { text, guest } = request.body
        let createdAt = new Date()
        new GuestbookEntry({text, guest, createdAt}).save((error, entry) => {
            if(error) {
                response.send(error);
            } else if(!entry) {
                response.send(400);
            } else {
                return response.send(entry);
            }
            next();
        });
    },
    getEntries: (request, response, next) => {
        GuestbookEntry.find(request.params.id)
        .exec((error, entry) => {
            if(error) {
                response.send(error)
            }
            else if(!entry) {
                response.send(404);
            } else {
                response.send(entry);
            }
            next();
        })
    },
    getEntry: (request, response, next) => {
        GuestbookEntry.findById(request.params.id)
        .exec((error, entry) => {
            if(error) {
                response.send(error);
            } else if(!entry) {
                response.send(404);
            } else {
                response.send(entry);
            }
            next();
        })
    }
}