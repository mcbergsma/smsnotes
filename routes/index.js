var express = require('express');
var router = express.Router();

const noteController = require('../controllers/noteController')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/sms/:sms', noteController.showNotes)

router.post('/api/addnote', noteController.addNote)
module.exports = router;