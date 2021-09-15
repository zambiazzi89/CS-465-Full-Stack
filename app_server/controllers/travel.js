const fs = require('fs')
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'))

const travel = (req, res) => {
  res.render('travel', { trips })
}

module.exports = {
  travel,
}
