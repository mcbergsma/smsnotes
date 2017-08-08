const mongoose = require('mongoose')
const Note = mongoose.model('Note')
var twilio = require('twilio');

exports.showNotes = async(req, res) => {
  console.log('Params', req.params)
  const notes = await Note.find({
    sms: {
      $eq: req.params.sms
    }
  })
  console.log('Notes', notes)
  // res.json(notes)
  res.render('notes', {
    notes,
    smsnumber: req.params.sms
  })
}

exports.addNote = async(req, res) => {
  console.log(req.body)
  const note = await new Note({
    sms: req.body.From,
    note: req.body.Body
  }).save()
  twiml = new twilio.TwimlResponse()
  res.writeHead(200, {
    'Content-Type': 'text/xml'
  });
  res.end(twiml.toString());
}

exports.deleteNote = async(req, res) => {
  const note = await Note.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      console.log('Error Removing!', err)
      return
    } else {
      console.log('Removing:', result)
      res.json(result)
    }
  })
}