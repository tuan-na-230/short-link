const express = require("express")
const router = new express.Router()
const path = require('path')

const linkHandlers = require("./modules/link")
const sessionHandlers = require("./modules/session")

router.get("/test", linkHandlers.test)

router.get('/statistical', linkHandlers.findMany)

router.get("/recentLinks", linkHandlers.GetRecentLinks)

router.get('/links/:id', linkHandlers.findByID)

router.get("/", (res, req) => {
    res.send(index.html)
})

router.get("/:shortLink", linkHandlers.findOne)

router.post('/', linkHandlers.create)

module.exports = router