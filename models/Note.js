const mongoose = require('mongoose')
mongoose.Promise = global.Promise

console.log('IN the NOtes')

const noteSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  sms: {
    type: String,
    trime: true
  },
  note: {
    type: String,
    trim: true
  },
  MessageSid: {
    type: String
  }
})

module.exports = mongoose.model('Note', noteSchema)