const model = require('./model')
const { json } = require('body-parser')

const handlers = {
    async findMany(req, res, next) {
        let count = await model.countDocuments()
        res.json(count)
    }
}

module.exports = handlers