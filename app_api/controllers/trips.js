const mongoose = require('mongoose')
const tripsSchema = require('../models/travlr')

const model = mongoose.model('trips', tripsSchema.tripSchema)

// GET /trips - Lists all trips
const tripsList = async (req, res) => {
  model.find({}).exec((err, trips) => {
    if (!trips) {
      return res.status(404).json({ message: 'Trip not found' })
    } else if (err) {
      return res.status(404).json(err)
    } else {
      return res.status(200).json(trips)
    }
  })
}

// GET /trips/:tripCode - Returns a single trip
const tripsFindCode = async (req, res) => {
  model.find({ code: req.params.tripCode }).exec((err, trip) => {
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' })
    } else if (err) {
      return res.status(404).json(err)
    } else {
      return res.status(200).json(trip)
    }
  })
}

module.exports = { tripsList, tripsFindCode }
