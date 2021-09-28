const express = require('express')
const tripsController = require('../controllers/trips')

const router = express.Router()

router.route('/trips').get(tripsController.tripsList)
router.route('/trips/:tripCode').get(tripsController.tripsFindCode)

module.exports = router
