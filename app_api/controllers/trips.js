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

// POST /trips - Creates new trip
const tripsAddTrip = async (req, res) => {
  model.create(
    {
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description,
    },
    (err, trip) => {
      if (err) {
        return res
          .status(400) // bad request, invalid content
          .json(err)
      } else {
        return res
          .status(201) // created
          .json(trip)
      }
    }
  )
}

// PUT /trips - Updates a trip
const tripsUpdateTrip = async (req, res) => {
  console.log(req.body)
  model
    .findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      { new: true }
    )
    .then((trip) => {
      if (!trip) {
        return res
          .status(404)
          .send({ message: 'Trip not found with code ' + req.params.tripCode })
      }
      res.send(trip)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res
          .status(404)
          .send({ message: 'Trip not found with code ' + req.params.tripCode })
      }
      return res
        .status(500) // Server error
        .json(err)
    })
}

module.exports = { tripsList, tripsFindCode, tripsAddTrip, tripsUpdateTrip }
