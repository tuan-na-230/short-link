require("./connect-mongodb")
const express = require('express')
const bodyParser = require("body-parser")
const session = require('express-session');
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session);

const cors = require("./cors.js")
const routes = require('./routes');

const PORT = 3000
const app = express()

app.use(bodyParser.json())
app.use(cors)
app.use(express.static('../fontEnd/dist'))

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "secret",
    cookie: {
        maxAge: 60000,
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}))

app.use(routes)

app.use((err, req, res, next) => {
    res.status(500)
        .json({
            message: err.message,
            stack: err.stack
        })
})

app.listen(PORT, (err) => {
    err
        ? console.error(err.message)
        : console.log(`Server listening on port ${PORT}`)
})