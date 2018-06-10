const GuestbookEntryController = require("../controllers/GuestbookEntry.ctrl")

module.exports = (router) => {
    /*
        Get all of the entries in the guestbook
    */
    router
        .route("/guestbook")
        .get(GuestbookEntryController.getEntries)
    
    /* 
        Add a new entry to the guestbook
    */
    router
        .route("/guestbook")
        .post(GuestbookEntryController.addEntry)
    
    /*
        Get a specific entry from the guestbook based on the id
    */
    router
        .route("/guestbook/:id")
        .get(GuestbookEntryController.getEntry)
}