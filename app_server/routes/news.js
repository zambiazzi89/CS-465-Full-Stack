var express = require('express')
var router = express.Router()
const controller = require('../controller/news')

/* GET news page. */
router.get('/', controller.news)

module.exports = router
