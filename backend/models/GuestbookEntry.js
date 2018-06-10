const mongoose = require("mongoose")

let GuestbookEntrySchema = new mongoose.Schema({
    text: String,
    guest: String,
    createdAt: Date
});

module.exports = mongoose.model("GuestbookEntry", GuestbookEntrySchema)