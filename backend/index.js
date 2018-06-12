const express = require("express")
const bodyParser = require("body-parser")
const helmet = require("helmet")
const http = require("http")
const mongoose = require("mongoose")
const cors = require("cors")

const routes = require("./routes/")

const mongodb_url = process.env.MONGODB_URI || "mongodb://localhost:27017/guestbook"

const app = express()
const router = express.Router()
const server = http.createServer(app)


try {
    mongoose.connect(mongodb_url, {

    });
} catch(error) {
    console.log(`${error}`)
}
// Setup the routes
routes(router)

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use("/api", router)


server.listen(8080);