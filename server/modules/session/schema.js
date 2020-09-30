const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, `Yêu cầu 'fullLink'!`]
  },
  shortLink: {
      type: String,
      required: [true,  `Yêu cầu 'shortLink'`],
  },
  QR: {
    type: String,
    default: null
  },
  count: {
      type: Number,
      required: true,
      default: 0
  }
})

module.exports = schema
