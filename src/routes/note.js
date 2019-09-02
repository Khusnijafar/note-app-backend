var express = require('express')
var router = express.Router()
var noteController = require('../controllers/note')



router
    .get('/', noteController.getNote)
    .post('/', noteController.addNote)

module.exports = router