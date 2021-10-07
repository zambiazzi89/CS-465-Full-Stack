const express = require('express')
const tripsController = require('../controllers/trips')

const router = express.Router()

router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip)

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindCode)
  .put(tripsController.tripsUpdateTrip)

module.exports = router
