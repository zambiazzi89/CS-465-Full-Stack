var express = require('express')
var router = express.Router()
const controller = require('../controller/contact')

/* GET contact page. */
router.get('/', controller.contact)

module.exports = router
