var express = require('express')
var router = express.Router()
const controller = require('../controller/travel')

/* GET travel page. */
router.get('/', controller.travel)

module.exports = router
