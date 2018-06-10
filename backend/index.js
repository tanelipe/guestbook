var express = require("express")
var http = require("http")
var app = express()
var server = http.createServer(app)

app.get("/", (request, response) => {
    response.send("Hello World");
})

app.use("/api/guestbook", require("./api/guestbook.js"))

server.listen(8080);