const mongoose = require("mongoose")

let GuestbookEntrySchema = new mongoose.Schema({
    text: String,
    guest: String
});

module.exports = mongoose.model("GuestbookEntry", GuestbookEntrySchema)