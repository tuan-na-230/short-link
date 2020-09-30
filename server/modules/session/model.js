const mongoose = require('mongoose')

const schema = require('./schema')
const MODEL_NAME = 'session'
const COLLECTION_NAME = 'session'

const model = mongoose.model(
  MODEL_NAME,
  schema,
  COLLECTION_NAME
)

module.exports = model