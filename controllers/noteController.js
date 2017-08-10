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
    note: req.body.Body,
    MessageSid: req.body.MessageSid
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
  const note = await Note.findOneAndRemove({
    '_id': req.params.id,
    'MessageSid': req.params.msid
  }, (err, result) => {
    if (err) {
      console.log('Error Removing!', err)
      return
    } else {
      res.json(result)
    }
  })
}

exports.updatemsid = async(req, res) => {
  console.log('In the update function')
  const updateAll = await Note.update({
    'MessageSid': { $exists: false }
  }, {
    'MessageSid': `strstr${Math.random()}`
  }, {
    'multi': true,
    'upsert': true,
  }, (err, result) => {
    if(err) {
      console.log('Error:', err)
    } else {
      console.log('Result:', result)
    }
  })
  res.json(updateAll)
}
// exports.deleteNote = async(req, res) => {
//   const note = await Note.findByIdAndRemove(req.params.id, (err, result) => {
//     if (err) {
//       console.log('Error Removing!', err)
//       return
//     } else {
//       res.json(result)
//     }
//   })
// }