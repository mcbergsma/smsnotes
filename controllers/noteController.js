const mongoose = require('mongoose')
const Note = mongoose.model('Note')
var twilio = require('twilio');

exports.showNotes = async(req, res) => {
  const notes = await Note.find({
    sms: {
      $eq: req.params.sms
    }
  })
  // res.json(notes)
  res.render('notes', {
    notes,
    smsnumber: req.params.sms
  })
}

exports.addNote = async(req, res) => {
  const note = await new Note({
    sms: req.body.From,
    note: req.body.Body
  }).save()
  // twiml = new twilio.MessagingResponse()
  const blankResponse = '<Response></Response>'
  res.writeHead(200, {
    'Content-Type': 'text/xml'
  });
  console.log('twiml:', blankResponse.toString())
  res.end(blankResponse.toString());
}

exports.deleteNote = async(req, res) => {
  const note = await Note.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      console.log('Error Removing!', err)
      return
    } else {
      res.json(result)
    }
  })
}