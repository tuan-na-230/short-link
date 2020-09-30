const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  fullLink: {
    type: String,
    required: [true, `Yêu cầu 'fullLink'!`]
  },
  qrCodeURL: {
      type: String,
      required: [true,  `Yêu cầu 'qrCodeURL'`],
  },
  count: {
      type: Number,
      required: true,
      default: 0
  }
})

module.exports = schema
