var express = require('express')
var router = express.Router()
const controller = require('../controller/main')

/* GET home page. */
router.get('/', controller.index)

module.exports = router
