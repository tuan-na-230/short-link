const model = require('./model')
const shortid = require('shortid')
const utils = require('../../utils')
const { json } = require('body-parser')
const { resolveContent } = require('nodemailer/lib/shared')
const session = require('express-session')
const { Store, MemoryStore } = require('express-session')
const { memoryStorage } = require('multer')
const { MongoStore } = require('connect-mongo')

const handlers = {
    async findMany(req, res, next) {
        console.log(req.query)
        let { count } = req.query
        if (count) {
            try {
                let count = await model.countDocuments()
                console.log(count)
                return res.status(200).json(count)
            } catch (err) {
                next(err)
            }
        }
        if (!count) {
            try {
                let link = await model.find({})
                return res.status(200).json(link)
            } catch (err) {
                next(err)
            }
        }
    },
    async findOne(req, res, next) {
        try {
            let shortLink = 'http://localhost:3000/' + req.params.shortLink
            let item = await model.find({ shortLink: shortLink })
            if (!item[0]) {
                return res.sendStatus(404)
            }
            if (item) {
                return res.redirect(item[0].fullLink)
            }
        } catch (err) {
            next(err)
        }
    },
    async create(req, res, next) {
        try {
            let fullLink = req.body.fullLink
            shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@&');
            let shortLink = 'http://localhost:3000/' + shortid.generate()
            let data = {
                fullLink: fullLink,
                shortLink: shortLink
            }
            let item = await model.create(data)
            if(!req.session.recentLinks) {
                req.session.recentLinks = {
                    "link1": null,
                    "link2": null,
                    "link3": null,
                }
            }
            utils.PushRecentLink(req, item)
            return res.status(200).json(item)
        } catch (err) {
            next(err)
        }
    },
    async findByID(req, res, next) {
        try {
            let id = req.params.id
            let item = await model.findById(id)
            return res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async GetRecentLinks(req, res, next) {
        console.log(req.session.recentLinks)
        try {
            if(req.session.recentLinks) {
                let { link1, link2, link3} = req.session.recentLinks
                let list = [link1, link2, link3]
                return res.send(list)
            }
            else {
                return res.send([])
            }
        } catch (err) {
            next(err)
        }
    },
    async test(req, res, next) {
        let count = session.Store.length

        console.log(session.Store.length)

        return res.json(count)  
    }
}

module.exports = handlers